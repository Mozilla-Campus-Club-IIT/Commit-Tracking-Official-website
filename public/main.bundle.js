webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fuild\">\n    <app-nav></app-nav>\n\n    <app-home-page></app-home-page>\n\n    <br>\n    <br>\n\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topthree_topthree_component__ = __webpack_require__("../../../../../src/app/topthree/topthree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__topthree_topthree_component__["a" /* TopthreeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__server_service__["a" /* ServerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n    left: 0;\n    bottom: 0;\n    padding-top: 20px;\n    padding-bottom: 20px;\n   margin: auto;\n    background-color: rgb(26, 26, 26);\n    color: white;\n    text-align: center;\n\n}\n\n.largeSocialIcons{\n    font-size: 22px;\n    margin-left:15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"largeSocialIcons\">\n            <i class=\"fab fa-facebook\"></i>\n            <i class=\"fab fa-github\"></i>\n            <i class=\"fab fa-linkedin\"></i>\n            <i class=\"fab fa-instagram\"></i>        \n    </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerImage{\n    width: 96%;\n    text-align: center;\n}\n.headerRow{\n    background-color: black;\n    padding: 70px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row headerRow\">\n  <div class=\"col-md-12\">\n    <img  class=\"headerImage\" src=\"./assets/img/headerImage.png\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-topthree></app-topthree>\n<app-leaderboard></app-leaderboard>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/leaderboard/leaderboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainHeading{\n    padding-top: 50px;\n    padding-bottom: 50px;\n    text-align: center;\n    font-weight: 300;\n}\n\n.leaderBoardRowHeader{\n    background-color: rgb(39, 39, 39);\n    color: white;\n    padding: 17px 10px 10px 10px;\n    margin: 5px;\n\n    /* styling the font */\n    text-align: center;\n    font-size: 1.2em;\n    font-weight: 500; \n\n}\n.leaderBoardRow{\n    background-color: #f9f9f9;\n    color: #000;\n    padding: 10px;\n    margin: 5px; \n    \n    /* styling the font */\n    text-align: center;\n    font-size: 1.5em;\n    font-weight: 300; \n}\n\n.leaderBoardCol{\n     \n}\n\n.fullBorder{\n    border: 2px solid white;\n}\n\n.imgProfilePic{\n    border-radius: 100%;\n    border: none;\n    background-color:transparent;\n    width: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h1 class=\"mainHeading\"> \n        Leaderboard\n        </h1>\n    </div>\n</div>\n\n <!-- ==========  The leaderboard header  ==========  -->\n<div class=\"container\">\n    <div class=\"row leaderBoardRowHeader\">\n        <div class=\"col-xs-1\">\n            <div class=\"leaderBoardCol\">\n                <p> # </p>\n            </div>      \n        </div>\n        <div class=\"col-xs-4\">\n            <div class=\"leaderBoardCol\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n                Username\n            </div>      \n        </div>\n        <div class=\"col-xs-3\">\n            <div class=\"leaderBoardCol\">\n                <p> # Number of Commits </p>\n            </div>      \n        </div>\n        <div class=\"col-xs-4\">\n            <div class=\"leaderBoardCol\">\n                <i class=\"fab fa-github\"></i>\n                Profile\n            </div>      \n        </div>\n    </div>    \n</div>\n\n<!-- Looping through the contributors in the leaderboard using ngFor -->\n<div *ngFor=\"let contributor of contributors; let i = index\">\n    <!-- ==========  The leaderboard Single entry  ==========  -->\n    <div class=\"container\">\n        <div class=\"row leaderBoardRow\">\n            <div class=\"col-xs-1\">\n                <div class=\"leaderBoardCol\">\n                    <p> {{i+1}} </p>\n                </div>      \n            </div>\n            <div class=\"col-xs-4\">\n                    <div class=\"leaderBoardCol\">\n                        <p>{{contributor.username}}</p>\n                    </div>      \n            </div>\n            <div class=\"col-xs-3\">\n                <div class=\"leaderBoardCol\">\n                    <p> {{contributor.numberOfCommits}} </p>\n                </div>      \n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"leaderBoardCol\">\n                    <img class=\"imgProfilePic\" src=\"{{contributor.profilePicUrl}}\" alt=\"ProfilePic\" >\n                    <a href=\"https://github.com/{{contributor.username}}\">View profile</a>\n                </div>      \n            </div>\n        </div>    \n    </div>    \n</div>\n \n\n \n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardComponent = (function () {
    function LeaderboardComponent(serverService) {
        this.serverService = serverService;
        //the name of the github organization and repo is diffined here
        this.ORGANIZATION_NAME = "Mozilla-Campus-Club-IIT";
        this.REPO_NAME = "Hello-World-Collection";
        //this instance variable stores the array of persons/contributors
        this.contributors = [];
    }
    LeaderboardComponent.prototype.getTheFullLeaderboard = function (organizationName, repoName) {
        var _this = this;
        //creating repo data JSON object to pass to the post request
        var repoData = {
            "organizationName": organizationName,
            "repoName": repoName
        };
        this.serverService.getLeaderBoard(repoData).subscribe(function (data) {
            _this.contributors = data.leaderboard.allContributors;
            console.log(_this.contributors);
            //setting leader board is available to the status (true) 
        }, function (error) { return console.log(error); });
    };
    LeaderboardComponent.prototype.ngOnInit = function () {
        this.getTheFullLeaderboard(this.ORGANIZATION_NAME, this.REPO_NAME);
    };
    return LeaderboardComponent;
}());
LeaderboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-leaderboard',
        template: __webpack_require__("../../../../../src/app/leaderboard/leaderboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/leaderboard/leaderboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], LeaderboardComponent);

var _a;
//# sourceMappingURL=leaderboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-custom {\n    background-color:#161616;\n    color:#ffffff;\n    border-radius:0;\n}\n\n.navbar-custom .navbar-nav{\n\n}\n.navbar-custom .navbar-nav > li > a {\n    color:#fff;\n   \n}\n\n.navbar-custom .navbar-nav > .active > a {\n    color: #ffffff;\n    background-color:transparent;\n}\n\n.navbar-custom .navbar-nav > li > a:hover,\n.navbar-custom .navbar-nav > li > a:focus,\n.navbar-custom .navbar-nav > .active > a:hover,\n.navbar-custom .navbar-nav > .active > a:focus,\n.navbar-custom .navbar-nav > .open >a {\n    text-decoration: none;\n    background-color: #5e5e5e;\n}\n\n.navbar-custom .navbar-brand {\n    color:#eeeeee;\n\n}\n.navbar-custom .navbar-toggle {\n    background-color:#eeeeee;\n}\n.navbar-custom .icon-bar {\n    background-color:#5e5e5e;\n}\n\n.navLogoHeading{\n   font: outline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-custom \">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand navLogoHeading\" href=\"#\"><b>MCCIIT</b></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Leaderboard</a></li>\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Contact Us</a></li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //this packge is for handling observables
var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    //this method will get the full leaderboard from a call to the node backend
    ServerService.prototype.getLeaderBoard = function (repoData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/leaderboard", repoData, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/topthree/topthree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainHeading{\n    padding-top: 50px;\n    padding-bottom: 20px;\n    text-align: center;\n    font-weight: 300;\n}\n.repoHeading{\n    text-align: center;\n    font-weight: 300;\n    padding-bottom: 30px;\n}\n\n.winnerContainer{\n    text-align: center;\n    background-color: #f9f9f9;\n    padding: 20px;\n    margin: 10px;\n    margin-bottom:30px; \n    \n}\n.imgPosition{\n    border: none;\n    background-color:transparent;\n    width: 30%;\n    margin-top:-50px;\n    margin-bottom: 30px; \n}\n\n.imgProfilePic{\n    border-radius: 0%;\n    border: none;\n    background-color:transparent;\n    width: 50%;\n}\n\nh3{\n    color: rgb(71, 71, 71);\n    font-weight: 400;\n}\n.winnerName{\n    font-size: 30px;\n    font-weight: 700;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topthree/topthree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n  \n      <h1 class=\"mainHeading\"> \n        Top 3 Contributors\n      </h1>\n      <h3 class=\"repoHeading\"  *ngIf=\"isAvailable\"> <b>Organization : </b > {{leaderboardObject.leaderboard.organizationName}}</h3>\n      <h3 class=\"repoHeading\"  *ngIf=\"isAvailable\"> <b>Repo : </b > {{leaderboardObject.leaderboard.repoName}}</h3>\n    </div>\n  </div>\n  <div class=\"container\" *ngIf=\"isAvailable\">\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"winnerContainer\">\n              <img class=\"imgPosition\" src=\"./assets/img/firstPlace.png\" >\n              <br>\n\n              <img class=\"imgProfilePic\" src=\"{{leaderboardObject.leaderboard.topThree[0].profilePicUrl}}\" alt=\"ProfilePic\" >\n              <h3 class=\"winnerName\">{{leaderboardObject.leaderboard.topThree[0].username}}</h3>\n              <hr>\n              <h3>{{leaderboardObject.leaderboard.topThree[0].numberOfCommits}} Commits</h3>\n              <hr>\n              <a href=\"https://github.com/{{leaderboardObject.leaderboard.topThree[0].username}}\">View profile</a>\n              \n            </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"winnerContainer\">\n                <img class=\"imgPosition\" src=\"./assets/img/secondPlace.png\">\n                <br>\n                <img class=\"imgProfilePic\" src=\"{{leaderboardObject.leaderboard.topThree[1].profilePicUrl}}\" alt=\"ProfilePic\" >\n                <h3 class=\"winnerName\">{{leaderboardObject.leaderboard.topThree[1].username}}</h3>\n                <hr>\n                <h3>{{leaderboardObject.leaderboard.topThree[1].numberOfCommits}} Commits</h3>\n                <hr>\n                <a href=\"https://github.com/{{leaderboardObject.leaderboard.topThree[1].username}}\">View profile</a>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"winnerContainer\">\n                    <img class=\"imgPosition\" src=\"./assets/img/thirdPlace.png\">\n                    <br>\n                    <img class=\"imgProfilePic\" src=\"{{leaderboardObject.leaderboard.topThree[2].profilePicUrl}}\" alt=\"ProfilePic\" >\n                    <h3 class=\"winnerName\">{{leaderboardObject.leaderboard.topThree[2].username}}</h3>\n                    <hr>\n                    <h3>{{leaderboardObject.leaderboard.topThree[2].numberOfCommits}} Commits</h3>\n                    <hr>\n                    <a href=\"https://github.com/{{leaderboardObject.leaderboard.topThree[2].username}}\">View profile</a>\n                </div>\n            </div>   \n        </div>\n  </div>\n  \n  \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/topthree/topthree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopthreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopthreeComponent = (function () {
    //this is the constructor of the TopthreeComponent class
    function TopthreeComponent(serverService) {
        this.serverService = serverService;
        //the name of the github organization and repo is diffined here
        this.ORGANIZATION_NAME = "Mozilla-Campus-Club-IIT";
        this.REPO_NAME = "Hello-World-Collection";
        //to check if the leaderboardObject is loaded or not
        this.isAvailable = false;
    }
    //===========================  HANDLING REQUESTS ======================================
    TopthreeComponent.prototype.getTheFullLeaderboard = function (organizationName, repoName) {
        var _this = this;
        //creating repo data JSON object to pass to the post request
        var repoData = {
            "organizationName": organizationName,
            "repoName": repoName
        };
        this.serverService.getLeaderBoard(repoData).subscribe(function (data) {
            _this.leaderboardObject = data;
            console.log(data.message);
            //setting leader board is available to the status (true) 
            _this.isAvailable = true;
        }, function (error) { return console.log(error); });
    };
    //This method will set the values to the top three contributors JSON object data to data recived from get request
    TopthreeComponent.prototype.updateUiForTopThree = function (data) {
    };
    //=======================================================================================
    TopthreeComponent.prototype.ngOnInit = function () {
        //getting the leaderboard object
        this.getTheFullLeaderboard(this.ORGANIZATION_NAME, this.REPO_NAME);
    };
    return TopthreeComponent;
}());
TopthreeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-topthree',
        template: __webpack_require__("../../../../../src/app/topthree/topthree.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topthree/topthree.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object])
], TopthreeComponent);

var _a;
//# sourceMappingURL=topthree.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map