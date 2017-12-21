;(function($) {
	"use strict";

	function romanize(num) {
	    if (!+num)
	        return "";
	    var digits = String(+num).split(""),
	        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
	               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
	               "","I","II","III","IV","V","VI","VII","VIII","IX"],
	        roman = "",
	        i = 3;
	    while (i--)
	        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	    return Array(+digits.join("") + 1).join("M") + roman;
	}

	// Construct scroll-friendly nav sidebar for entries. Should be idempotent so it
	// can be called again to reconstruct on window resize
	var OWIDScrollNav = function() {
		var $page = $("article.page"),
			$sidebar = $(".entry-sidebar");

		if (!$page.length || !$sidebar.length || $(".no-sidebar").length) return;

		// Don't make sidebar unless there are enough headings
		if ($page.find('h2').length < 2) return;

		// Cleanup any existing stuff
		$sidebar.find("nav").empty();
		$sidebar.attr('style', '');
		$(window).off('scroll.toc');

		// HACK (Mispy): These have weird placeholder text in them that interferes.
		$(".deep-link").html("");

		// For CSS
		$page.parent().addClass('page-with-sidebar');

		// Keep track of sections so we can find the closest one
		var headings = [];

		// Start putting together ToC html
		$sidebar.find("nav").append("<h3>Contents</h3>");
		var $ol = $("<ol></ol>").appendTo($sidebar.find("nav"));		

		var openHeadingIndex = 0, openSubheadingIndex = 0, headingText = "";
		$page.find("h2, h3").each(function(i) {
			var $heading = $(this);
			
			// Don't bother with the footnotes header if there are no footnotes
			if ($heading.is("#footnotes") && !$("ol.side-matter-list").is(":visible"))
				return;

			if (!$heading.is("#footnotes")) {
				// Inject numbering into the text as well
				if ($heading.is('h2')) {
					openHeadingIndex += 1;
					openSubheadingIndex = 0;
				} else if ($heading.is('h3')) {
					openSubheadingIndex += 1;
				}

				// Idempotently add number to heading
				var origHtml = $heading.attr('data-text');
				if (!origHtml) {
					origHtml = $heading.html();
					$heading.attr('data-text', origHtml);
				}

				// Some fiddly stuff to remove deep link 
				var $headingMod = $("<div/>").append(origHtml)
				var $deepLink = $headingMod.find('.deep-link')
				var deepLinkHtml = $("<div/>").append($deepLink).html()
				headingText = $headingMod.html()

				if (openHeadingIndex > 0) {
					if ($heading.is('h2')) {
						headingText = romanize(openHeadingIndex) + '. ' + headingText;
					} else {
						headingText = romanize(openHeadingIndex) + '.' + openSubheadingIndex + ' ' + headingText;
					}					
				}

				$heading.html(deepLinkHtml + headingText)
			} else {
				headingText = $heading.html()
			}

			var $li = $('<li><a href="#' + $heading.attr("id") + '">' + headingText.trim() + '</a></li>').appendTo($ol);

			if ($heading.is('h2')) {
				$li.addClass('section');
			} else {
				$li.addClass('subsection');
			}

			headings.push($(this));
		});

		var currentHeadingIndex = null;
		var onScroll = function() {
			var scrollTop = $(document).scrollTop(),
				scrollBottom = scrollTop + $(window).height(),
				mainOffset = $("main").offset(),
				navOffset = $sidebar.offset(),
				navHeight = $sidebar.height(),
				footerOffset = $("footer.site-footer").offset(),
				isFixed = $sidebar.css('position') == 'fixed',
				defaultTop = 10;

			// Fix the TOC once we scroll past the header
			if (scrollTop > mainOffset.top && !isFixed) {		
				$sidebar.css({
					position: 'fixed',
					top: defaultTop + 'px',
					left: navOffset.left,
					width: $sidebar.outerWidth() + 'px'
				});			
			} else if (scrollTop < mainOffset.top && isFixed) {
				$sidebar.attr('style', '');
			}

			// Figure out where in the document we are
			var lastHeadingIndex = null;
			headings.forEach(function($heading, i) {
				// HACK (Mispy): The +5 is so being right on top of the heading after you
				// click a link in the TOC still counts as being under it
				if ($heading.offset().top <= scrollTop+5)
					lastHeadingIndex = i;
			});

			if (lastHeadingIndex != currentHeadingIndex) {
				$sidebar.find("li.active").removeClass("active");
				currentHeadingIndex = lastHeadingIndex;
				if (currentHeadingIndex !== null)
					$sidebar.find("li").eq(currentHeadingIndex).addClass("active");
			}

			// Ensure TOC doesn't overlap the footer
			var currentTop = parseFloat($sidebar.css('top')),
				currentTopAdjustment = currentTop - defaultTop, 
				footerMargin = 80,
				unadjustedOverlapHeight = (navOffset.top - currentTopAdjustment + navHeight) - (footerOffset.top - footerMargin);

			if (unadjustedOverlapHeight > 0) {
				$sidebar.css({
					top: (defaultTop - unadjustedOverlapHeight) + 'px'
				});
			} else {
				$sidebar.css({
					top: defaultTop + 'px'
				});
			}		
		};

		if ($sidebar.css("float") != "none") {
			onScroll();
			$(window).on('scroll.toc', onScroll);
		}
	};

	var EntriesHeaderMenu = function() {
		var canHoverMenu = false;

		// Desktop menu
		function showDefaultState() {	
			$("#topics-dropdown").hide();
			$("#entries-nav").hide();

			if ($("header.site-header .mobile:visible").length)
				return;

			$("#category-nav li.category").removeClass("active").removeClass("selected");

			// If we're already on a page, show it in the nav
			$("#category-nav ul.entries a").each(function() {
				var $entry = $(this);
				if ($("h1.entry-title").text() == $entry.text()) {
					var $ul = $entry.closest("ul.entries");
					$("#entries-nav").html($ul[0].outerHTML);
					$("#entries-nav").show();

					$("#entries-nav li").each(function() {
						if ($("h1.entry-title").text() == $(this).text())
							$(this).addClass("active");
					});
					$entry.closest(".category").addClass("active");
				}
			});
		}

		var firstTime = true;
		function onCategoryActivate(ev) {
			var $category = $(ev.target).closest("li.category");
			if (firstTime) {
				$("#entries-nav").css({
					'position': 'absolute',
					'padding-bottom': '10px',
					'border-bottom': '4px solid #FF4012'
				});
				$(".site-main").css("margin-top", parseInt($(".site-main").css("margin-top")) + $("#entries-nav").height() + "px"); 							
				firstTime = false;
			}
			$("#entries-nav").html($category.find("ul.entries")[0].outerHTML);
			$("#entries-nav").show();
			$("#category-nav li.category").removeClass("active").removeClass("selected");
			$category.addClass("selected");

			$("body").on('mousemove.entries', function(ev) {
				if (!$(ev.target).closest("header.site-header").length) {
					$("body").off('mousemove.entries');
					showDefaultState();
				}
			});			
		}

		// Mobile menu
		$("#owid-topbar li.nav-button a").on("click", function(ev) {
			ev.preventDefault();
			var toExpand = $(ev.target).attr("data-expand");
			$(toExpand).toggle();
			$(toExpand).find('input').focus();

			if (toExpand == "#search-dropdown") {
				$("#topics-dropdown").hide();
			} else {
				$("#search-dropdown").hide();		
			}
		});


		function onResize() {
			// MISPY: Currently hover menu is disabled because it is too easy to cross over
			// the categories when trying to get to the subcategories with the mouse
			canHoverMenu = $("#category-nav").height() < 50;

			$("#category-nav li.category > a").off('mouseover');
			$("#category-nav li.category > a").off('click');

			//if (canHoverMenu)
			//	$("#category-nav li.category > a").on('mouseover', onCategoryActivate);
			//else
				$("#category-nav li.category > a").on('click', onCategoryActivate);

			$("#topics-dropdown .category > a").off('click');
			$("#topics-dropdown .category > a").on('click', function(ev) {
				$(ev.target).closest('.category').toggleClass('active');
			});

			showDefaultState();
		}

		// HACK (Mispy): Stop mobile-desktop transition from being weird.
		// Also make sure it's a real resize event, as mobile Chrome seems
		// to fire them on scroll as well.
		var origWidth = $(window).width();
		$(window).on("resize", function() {
			var width = $(window).width();
			if (origWidth != width) {
				onResize();
				origWidth = width;
			}
		});

		onResize();
	};


	EntriesHeaderMenu();
	OWIDScrollNav();

	$(window).on('resize.toc', OWIDScrollNav);

	//remove hashtags from menu
	var $menuItems = $( ".scroll-nav" ).find( ".scroll-nav__item a, .scroll-nav__sub-item a" );
	$.each( $menuItems, function( i, v ) {
		var $a = $( this ),
			text = $a.text();
		text = text.replace( "#", "" );
		$a.text( text );
	} );

	window.openFancyBox = function( url ) {
		$.fancybox.show( url );
	};

	$(".starred").attr("title", "Starred pages are our best and most complete entries.");

	// Don't let user enter empty search query
	$(".search-form").on("submit", function(evt) {
	    if ($(evt.target).find("input[type=search]").val() === '')
	        evt.preventDefault();
	});

	// Resize iframes to match their content as needed
	// Only works for our own embeds due to cross-domain restrictions
	var resizeIframes = function() {		
		$("iframe").each(function() {
			try {
				var chartView = $(this).get(0).contentWindow.$("#chart-view").get(0);
				var scrollHeight = chartView.scrollHeight;
				var currentHeight = chartView.clientHeight;

				if (scrollHeight != currentHeight) {
					$(this).css("height", parseInt($(this).css("height")) + (scrollHeight - currentHeight) + "px");
				}				
			} catch (err) {
			}
		});
	};

	$(".citation-note").on('click', function() {
		$(".citation-guideline").toggle();
	});

	$(window).on("resize", resizeIframes);
	window.onmessage = function(msg) { 
		resizeIframes();
	};

	$("a.side-matter-ref sup").removeAttr("title");

	$("a.side-matter-ref sup").tooltip({
		html: true,
		delay: { show: 100, hide: 500 },
		placement: 'auto right',
		trigger: 'manual',
		title: function() {
			var selector = $(this).closest('a.side-matter-ref').attr('href');
			return $(selector).find('.side-matter-text').html();
		}
	});

	$("a.side-matter-ref sup").on("mouseover", function() {
		var $sup = $(this);
		$sup.tooltip('show');

		$("body").on("mouseover.tooltip", function(evt) {
			if (!$(evt.target).closest(".tooltip").length && !$(evt.target).closest(".side-matter-ref").length) {
				$sup.tooltip('hide');
				$('body').off('mouseover.tooltip');
			}
		});
	});

    /*var beforePrint = function() {
    	$("iframe").each(function() {
    		var $iframe = $(this),
    			src = $iframe.attr('src') || $iframe.attr('data-src'),
    			imgUrl = src.replace(/$|(?=\?)/, '.png');

    		if (src.indexOf('grapher') != -1) {
	    		$iframe.addClass('no-print');
	    		$iframe.after("<img class='aligncenter size-large print-only' style='padding: 5px;' src='" + imgUrl + "'>");    			
    		}
    	});

    	$("img").each(function() {
    		var src = $(this).attr('data-src');
    		if (src && src != $(this).attr('src'))
    			$(this).attr('src', src);
    	});
    };    

    beforePrint();*/
})(jQuery);