"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var timeago = require('timeago.js')();
var GrapherBuildStatus = /** @class */ (function (_super) {
    __extends(GrapherBuildStatus, _super);
    function GrapherBuildStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrapherBuildStatus.prototype.updateStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, json_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        this.request = this.context.admin.rawRequest("/api/buildStatus.json", {}, "GET");
                        return [4 /*yield*/, this.request];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json_1 = _a.sent();
                        mobx_1.runInAction(function () { return _this.buildStatus = json_1; });
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        this.buildStatus = undefined;
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.request = undefined;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GrapherBuildStatus.prototype.componentDidMount = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (!_this.request)
                _this.updateStatus();
        }, 10000);
        this.updateStatus();
    };
    GrapherBuildStatus.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    GrapherBuildStatus.prototype.render = function () {
        var buildStatus = this.buildStatus;
        if (!buildStatus)
            return null;
        return React.createElement("a", { className: "nav-link", href: buildStatus.admin_url + "/deploys/" + buildStatus.id, target: "_blank" },
            buildStatus.state === "ready" && React.createElement("span", null,
                "Last static build: ",
                timeago.format(buildStatus.published_at)),
            (buildStatus.state === "building" || buildStatus.state === "processing") && React.createElement("span", null,
                "Static build started ",
                timeago.format(buildStatus.created_at),
                "..."),
            (buildStatus.state === "failed" || buildStatus.state === "retrying" || buildStatus.state === "error") && React.createElement("span", null,
                "Build error: ",
                timeago.format(buildStatus.updated_at)));
    };
    __decorate([
        mobx_1.observable
    ], GrapherBuildStatus.prototype, "buildStatus", void 0);
    GrapherBuildStatus = __decorate([
        mobx_react_1.observer
    ], GrapherBuildStatus);
    return GrapherBuildStatus;
}(React.Component));
exports.default = GrapherBuildStatus;
//# sourceMappingURL=GrapherBuildStatus.js.map