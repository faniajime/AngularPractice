"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Error404Component = void 0;
var core_1 = require("@angular/core");
var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        core_1.Component({
            template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
            styles: ["\n    .errorMessage { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }"]
        })
    ], Error404Component);
    return Error404Component;
}());
exports.Error404Component = Error404Component;
