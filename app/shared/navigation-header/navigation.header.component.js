"use strict";
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationHeaderComponent = void 0;
/*
  This file defines a navigation header for a task pane page. It is based on
  the navigation sample, created by the Modern Assistance Experience Developer
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/
var core_1 = require("@angular/core");
var NavigationHeaderComponent = /** @class */ (function () {
    function NavigationHeaderComponent() {
    }
    NavigationHeaderComponent = __decorate([
        (0, core_1.Component)({
            selector: 'sc-navigation-header',
            templateUrl: 'app/shared/navigation-header/navigation.header.component.html',
            styleUrls: ['app/shared/navigation-header/navigation.header.component.css'],
        })
    ], NavigationHeaderComponent);
    return NavigationHeaderComponent;
}());
exports.NavigationHeaderComponent = NavigationHeaderComponent;
//# sourceMappingURL=navigation.header.component.js.map