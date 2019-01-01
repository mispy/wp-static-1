��\<?php exit; ?>a:1:{s:7:"content";O:8:"stdClass":23:{s:2:"ID";s:5:"12301";s:11:"post_author";s:2:"17";s:9:"post_date";s:19:"2017-11-22 09:50:03";s:13:"post_date_gmt";s:19:"2017-11-22 09:50:03";s:12:"post_content";s:18149:"<div class="blog-info">Our World in Data presents the empirical evidence on global development in entries dedicated to specific topics.
This blog post draws on data and research discussed in our entry on <a href="https://ourworldindata.org/energy-production-and-changing-energy-sources/">Energy Production &amp; Changing Energy Sources</a>.</div>
Discussions about energy and electricity can be confusing. Often, the root of this confusion lies in the choice of units and scale. Firstly, units are often quoted inconsistently: we switch between watt-hours, kilograms of oil equivalent, joules, and even more confusingly, units of power. Secondly, we begin quoting big numbers in the order of millions and billions without a sense of scale: is the unit equivalent to one, ten, or one hundred coal-fired power stations? Thirdly, we lose perspective on the equivalence between electrical energy production and consumption: how many people could a wind or solar farm provide for?

To make our full data entry on <a href="https://ourworldindata.org/energy-production-and-changing-energy-sources/">Energy Production &amp; Changing Energy Sources</a> as useful and clear as possible, we have standardized all of our energy data into a single energy unit: the watt-hour (Wh). The only variation on the watt-hour which we have used is in scaling large numbers into kilowatt, megawatt or gigawatt-hours (which are one thousand, million, and billion watt-hours, respectively). The base unit of the watt-hour, however, remains consistent. This should help to reduce confusion for the first of the three reasons described above.

To address the latter two challenges we have produced the chart shown below, which aims to provide a sense of scale for both electricity production and consumption [<strong>clicking on this chart offers a pop-out version, for which some finer aspects can be more easily read</strong>]. It is comprised of two scales: electricity production and electricity consumption. On the left-hand side we have a chart which extends from zero up to 100,000 MWh. The individual arrows represent the daily electrical outputs of different plant types; as we see, there is a large range of outputs depending on the size and conditions of the specific facility. The average daily output of specific power plants (some of which you may recognize) are shown and labelled as individual stars.

The labeled horizontal lines on these charts aim to give a sense of perspective on electricity consumption levels across the world. For example, in the chart below a very large hydro or nuclear plant could produce enough electricity to meet the demands of 100 million people in Ghana; a large hydro, nuclear, or coal plant could provide for 10 million average global citizens, and average-sized plant would meet demands of ten million in Brazil.

The left-hand chart is dominated by hydropower, nuclear, coal and geothermal production. The output of onshore and offshore wind, and solar photovoltaic (PV) farms currently lie below 10,000 MWh per day, which you see at the bottom of the left-hand chart. The right-hand chart provides a magnification of the bottom section of this chart, extending only from zero to 10,000 MWh. Just as in the left-hand chart, the range of daily electricity outputs from wind and solar PV farms are shown by the arrows, with specific farms represented by stars. Again, we have provided a sense of perspective on how this relates to electricity consumption needs across a range of countries using the labeled horizontal lines.

The data used in these charts are not perfect; we have attempted to provide a global-level overview of a range of electrical energy production sources and average levels of consumption across countries. These figures are based on a number of assumptions and calculations which are explained in detail below. Despite these limitations, we hope these charts are of value in providing an overall sense of scale for both production and consumption.

<a href="https://ourworldindata.org/wp-content/uploads/2017/11/Energy-Units-01.png"><img class="aligncenter size-full wp-image-15070" src="https://ourworldindata.org/wp-content/uploads/2017/11/Energy-Units-01.png" alt="" width="12976" height="9676" /></a>
<h2>Data sources for electrical energy production and consumption chart</h2>
Explanation of the assumptions and calculations involved in the derivation of the figures used in the charts above are detailed below.
<h3>Electrical energy production</h3>
Figures on the daily output from different electricity sources have been derived in one of two ways:
<ul>
 	<li>Where specific reported details on the annual energy output of a plant or facility have been published, we have converted this to a daily average output in watt-hours or megawatt-hours.</li>
 	<li>Where specific details on electrical output are not available, we have calculated this based on a plant's maximum power rating and the average capacity factor for a plant of its type, based on capacity factor data published by the US Energy Information Administration (EIA)[ref]U.S. Energy Information Administration. Electric Power Annual 2009 (Updated in 2011). Available <a href="https://www.eia.gov/electricity/annual/archive/03482009.pdf" target="_blank" rel="noopener">online</a>.[/ref] (described below).</li>
</ul>
The output of electric power facilities are often described in terms of their maximum capacity; this is a metric of power (not energy), measured in watts (W). There are two conversions we need to make to this metric to derive the average electrical energy daily output. First, we have to convert power into energy. Energy is a measure of power output over time (energy = power x time). So to calculate energy output in watt-hours we have to multiply our power rating by the number of hours our plant is running. For example, if we have a 1000MW plant, its maximum energy output in a day would be 24,000MWh (1000MW x 24 hours).

However, this assumes that a plant runs continuously at maximum output, which most (if not all) don't. The second correction we have to make is to multiply this output by its capacity factor. The capacity factor is defined as the actual electrical energy output as a percentage or ratio of the maximum possible output over a given time period. For example, if our plant only operates at 80% (through a combination of shut-down episodes and periods of operating below maximum capacity), our daily energy production would only be 19,200MWh per day (24,000MWh x 80%).

<strong>How much electricity does a hydropower plant produce in a day?</strong>

Hydropower production is unique from the perspective that it covers the largest range of electrical energy outputs; ranging from the largest production facilities in the world, down to so-called "<a href="https://energypedia.info/wiki/Pico_Hydro_Power" target="_blank" rel="noopener">pico hydro</a>" schemes—simple water turbines which are often installed for a single household or cluster of households. xThese typically have a power rating of less than 5kW, producing less than one MWh per day (only about <a href="https://www.renewablesfirst.co.uk/hydropower/hydropower-learning-centre/how-much-energy-could-i-generate-from-a-hydro-turbine/" target="_blank" rel="noopener">22 MWh per year</a>).

A collection of the world's largest hydro stations can be found <a href="https://en.wikipedia.org/wiki/List_of_largest_hydroelectric_power_stations" target="_blank" rel="noopener">here</a>. Brazil's Itaipu Dam, and China's Three Gorges Dam—the two largest electricity producers in the world—are key outliers with regards to output, producing almost double that of the third largest hydro facility. These two sites are represented as stars, with Itaipu Dam producing a daily average of 282,000 MWh (103 TWh per year/365 days), and the Three Gorges Dam produced an average of 270,000 MWh per day in 2014 (98.8 TWh/365). The other single hydro site shown in this chart is the USA's Hoover Dam, which produced a daily average of 11,000 MWh in 2014 (4 TWh/365).[ref]United States Bureau of Reclamation (USBR). Hoover Dam - Frequently asked questions. Available <a href="https://www.usbr.gov/lc/hooverdam/faqs/powerfaq.html" target="_blank" rel="noopener">online</a>.[/ref]

Aside from the hydro outliers of the Itaipu and Three Gorges Dam, the cluster of the largest hydropower facilities achieve an annual output between 50-55 TWh. As a daily average (although seasonal variability will inevitably influence daily outputs throughout the year), large hydropower facilities produce approximately 150,000 MWh per day.

<strong>How much electricity does a nuclear plant produce in a day?</strong>

Output from nuclear power stations is typically more stable over time than output from hydropower or other renewable resources because they are less influenced by seasonal or environmental variations. To estimate the range of typical daily outputs from nuclear stations, we have utilized the reported maximum capacity of specific stations listed <a href="https://en.wikipedia.org/wiki/List_of_nuclear_power_stations" target="_blank" rel="noopener">here</a> with the average capacity factor of nuclear power, which is approximately 90%.[ref]U.S. Energy Information Administration. Electric Power Annual 2009 (Updated in 2011). Available <a href="https://www.eia.gov/electricity/annual/archive/03482009.pdf" target="_blank" rel="noopener">online</a>.[/ref]

For example, the world's largest operating nuclear station is Canada's Bruce station, with a maximum capacity of 6,384 MW. The estimated average daily output is therefore calculated as 6,384 MW x 90% x 24 hours, which gives us approximately 138,000 MWh per day. The average daily output of the other nuclear stations highlighted here have been calculated using exactly the same methodology.

Small nuclear stations have a maximum capacity of around 400 MW, but can be as small as 200-250 MW. Reactors at India's Kaiga Atomic Power Station, for example, have a maximum capacity of 220 MW. As a result, the Kaiga Atomic facility produces on average 6100 MWh per day.

<strong>How much electricity does a coal plant produce in a day?</strong>

Like nuclear, our estimates of daily electrical output from coal-fired power stations have been calculated based on reported maximum capacity figures, found <a href="https://en.wikipedia.org/wiki/List_of_coal_power_stations" target="_blank" rel="noopener">here</a>, and an average capacity factor of 64%.[ref]U.S. Energy Information Administration. Electric Power Annual 2009 (Updated in 2011). Available <a href="https://www.eia.gov/electricity/annual/archive/03482009.pdf" target="_blank" rel="noopener">online</a>.[/ref] The largest operating coal plant in the world is the Tiachung Power Plant in Taiwan; with a maximum capacity of 5500 MW, average daily output would be approximately 85,000 MWh (5,500MW * 64% * 24 hours).

Like nuclear production, small coal-fired plants can have a maximum capacity as low as hundreds of MW. The Kahone Thermal Power Station in Senegal, for example, has a capacity of only 102 MW. If we assume an average capacity factor of around 64%, daily output for coal can be as low as 1600 MWh per day.

<strong>How much electricity does a geothermal plant produce in a day?</strong>

The capacity and production of geothermal energy tends to be lower than that of hydro, nuclear and coal-powered stations. The largest geothermal producer in the world is The Geysers site in the USA; with a capacity of 1,517 MW and reported capacity factor of 63%, we calculate estimated daily output to be approximately 23,000 MWh.[ref]Ronald DiPippo (2008). <i>Geothermal Power Plants: Principles, Applications, Case Studies and Environmental Impact</i>. Elsevier Science &amp; Technology. Available <a href="https://books.google.com/books?id=YsSN8gdqKWEC">online</a>.[/ref]

However, if we look at the <a href="https://en.wikipedia.org/wiki/List_of_geothermal_power_stations" target="_blank" rel="noopener">range of geothermal plants</a> across the world, The Geysers site is a large outlier in terms of potential output. The second largest geothermal plant has roughly half the installed capacity as The Geysers. If we take its installed capacity of 820 MW and assume Bloomberg New Energy Finance's global average capacity factor for geothermal of 73%, we approximate a typical large geothermal plant to produce roughly 14,000-15,000 MWh per day. Like hydropower, geothermal sites can also exist at a very small-scale; Italy's San Martino geothermal site has a capacity of only 40 MW; if we assume an average capacity factor of 73% for geothermal, average daily output would be around 700 MWh.

<strong>How much electricity does an onshore wind farm produce in a day?</strong>

Whilst the majority of onshore wind farms produce less than 10,000 MWh per day on average, the Gansu Wind Farm in China is a notable outlier. With an <a href="https://en.wikipedia.org/wiki/Gansu_Wind_Farm" target="_blank" rel="noopener">installed capacity</a> of 7,965 MW and average capacity factor of 12.4% for wind power in the Gansu region, we estimate daily output to be around 24,000 MWh.[ref]The case of wind production in the Gansu region is interesting. Although the capacity factor of renewables tend to be lower than fossil fuel and nuclear sources, 12.4% is particularly low for wind energy. The US IEA quote a range of capacity factors from 20-40%. Also notable is that wind generation in this region is highly underutilized. In 2016, 43% of wind capacity in the Gansu region was wasted.<em> Chinese National Energy Board. 2016 Wind Power Grid Operation. Available <a href="http://www.nea.gov.cn/2017-01/26/c_136014615.htm">online</a>.</em>[/ref]

The <a href="https://en.wikipedia.org/wiki/List_of_onshore_wind_farms" target="_blank" rel="noopener">next largest</a> wind farms are significantly smaller than Gansu Wind Farm—Muppandal Wind Farm in India and Alta Wind Energy Centre in the USA have a maximum capacity of 1500 MW and 1320 MW, respectively. With a capacity <a href="https://en.wikipedia.org/wiki/Alta_Wind_Energy_Center" target="_blank" rel="noopener">factor of 30%</a> versus the average factor in India of 15%, the Alta Wind Energy Centre produces an average of 7,342 MWh per day versus 5,400 MWh at Muppandal.[ref]Due to poor availability of local capacity factors for wind generation, we have had to assume the factor at Muppandal is similar to the Indian average of 15%. Power System Operation Corporation. SRLDC System Operation Report, March 2015. Available <a href="http://www.srldc.org/var/ftp/reports/monthlyrep/2014-15/Mar-month.pdf" target="_blank" rel="noopener">online</a>.[/ref]

Wind farms can be very small in size and capacity, down to the range of tens of megawatts. With a maximum capacity of only 11 MW, for example, Utgrunden Wind Farm in Sweden is likely to produce on average around 80 MWh per day.

<strong>How much electricity does an offshore wind farm produce in a day?</strong>

Although offshore wind farms can often achieve a higher capacity factor than onshore equivalents, their total installed capacity is yet to reach the scale of the largest onshore farms. The largest offshore wind farm to date is the UK's London Array. With a capacity of 630 MW and <a href="https://en.wikipedia.org/wiki/London_Array#cite_note-2" target="_blank" rel="noopener">capacity factor in 2015</a> of 45.3%, average daily output approximates to 6,800 MWh.

Similarly to onshore wind, offshore wind farms can be small in size—some below 10 MW of installed capacity. Mt Stuart Wind Farm in New Zealand, for example, produces a daily average of only 70 MWh.

<strong>How much electricity does a solar photovoltaic (PV) farm produce in a day?</strong>

As discussed by David MacKay in his book "Sustainable Energy - without the hot air" (<a href="http://www.withouthotair.com/Contents.html" target="_blank" rel="noopener">free here</a>), the electrical energy production per unit area of solar paneling is almost directly proportional to the amount of sunlight that falls upon it.[ref]David JC MacKay. Sustainable Energy - without the hot air". Available free <a href="http://www.withouthotair.com/Contents.html">online</a>.[/ref] As a result, optimal locations for solar energy, especially at low latitudes can achieve an energy output 2-3 times higher than at very high latitudes. However, as this <a href="https://en.wikipedia.org/wiki/List_of_photovoltaic_power_stations" target="_blank" rel="noopener">list of the largest solar PV farms</a> shows, solar can deliver a reasonable output across most countries, regardless of latitude.

The largest solar PV farm to date is China's Tengger Desert Solar Park, with an installed capacity of 1,500 MW. If we assume a capacity factor of 20% (which is high for solar, but not unreasonable), daily output would be approximately 7,200 MWh. California's Topaz Solar Farm has an installed capacity about one-third of China's Tengger, but with a high capacity factor of 24.4% achieves an average daily output of 3,466 MWh.

Like onshore and offshore wind, solar PV farms can be as small as tens of megawatt hours per day. Iran's largest PV park, Jarqavieh has only 10 MW capacity, and produces an average of 48 MWh (assuming a 20% capacity factor) daily.
<h3>Electricity consumption</h3>
The figures on electricity consumption (represented as horizontal lines on the chart above) are based on figures presented in our below chart on per capita electricity. We have used World Bank estimates of annual per capita electrical power consumption in 2014, by first calculating <em>daily</em> per capita use (by dividing annual figures by 365), and using multipliers of 10 million; one million; and 100,000 to calculate the total daily electricity consumption of a given number of citizens across a range of countries.

<iframe style="width: 100%; height: 600px; border: 0px none;" src="https://ourworldindata.org/grapher/per-capita-electricity-consumption" width="300" height="150"></iframe>";s:10:"post_title";s:75:"A sense of units and scale for electrical energy production and consumption";s:12:"post_excerpt";s:0:"";s:11:"post_status";s:7:"publish";s:14:"comment_status";s:6:"closed";s:11:"ping_status";s:6:"closed";s:13:"post_password";s:0:"";s:9:"post_name";s:64:"a-sense-of-units-and-scale-for-energy-production-and-consumption";s:7:"to_ping";s:0:"";s:6:"pinged";s:0:"";s:13:"post_modified";s:19:"2018-03-13 07:55:19";s:17:"post_modified_gmt";s:19:"2018-03-13 07:55:19";s:21:"post_content_filtered";s:0:"";s:11:"post_parent";s:1:"0";s:4:"guid";s:35:"https://ourworldindata.org/?p=12301";s:10:"menu_order";s:1:"0";s:9:"post_type";s:4:"post";s:14:"post_mime_type";s:0:"";s:13:"comment_count";s:1:"0";}}