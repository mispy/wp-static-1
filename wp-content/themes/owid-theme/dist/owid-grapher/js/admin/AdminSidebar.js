"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = require("./Link");
var React = require("react");
function AdminSidebar() {
    return React.createElement("aside", { className: "AdminSidebar" },
        React.createElement("ul", { className: "sidebar-menu" },
            React.createElement("li", { className: "header" }, "CHARTS"),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: "/" },
                    React.createElement("i", { className: "fa fa-bar-chart" }),
                    " Charts")),
            React.createElement("li", { className: "header" }, "IMPORT"),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/import" },
                    React.createElement("i", { className: "fa fa-upload" }),
                    " Import new data")),
            React.createElement("li", { className: "header" }, "DATA MANAGEMENT"),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/datasets" },
                    React.createElement("i", { className: "fa fa-table" }),
                    " Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/datasets_treeview" },
                    React.createElement("i", { className: "fa fa-list-ul" }),
                    " Datasets by categories")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/wdidatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WDI Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/unwppdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " UN WPP Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/qogdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " QOG Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/faodatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " FAOSTAT Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/clioinfradatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " Clio-Infra Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/edstatsdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " EdStats Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/genderstatsdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " Gender Stats Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/hnpstatsdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB HNP Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/findexdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB FINDEX Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/bbscdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB BBSC Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/povstatsdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB POVSTATS Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/climatechdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB Climate Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/hnpqstatsdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB HNPQ Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/se4alldatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB SE4ALL Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/wb/aspiredatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " WB ASPIRE Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/gbdcausedatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " GBD Cause Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/gbdriskdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " GBD Risk Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/ilostatdatasets" },
                    React.createElement("i", { className: "fa fa-database" }),
                    " ILOSTAT Datasets")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/standardize" },
                    React.createElement("i", { className: "fa fa-flag" }),
                    " Country name tool")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/datasets/history/all" },
                    React.createElement("i", { className: "fa fa-history" }),
                    " Version history")),
            React.createElement("li", { className: "header" }, "SETTINGS"),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/users/" },
                    React.createElement("i", { className: "fa fa-users" }),
                    " Users")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { native: true, to: "/categories/" },
                    React.createElement("i", { className: "fa fa-folder" }),
                    " Categories"))));
}
exports.default = AdminSidebar;
//# sourceMappingURL=AdminSidebar.js.map