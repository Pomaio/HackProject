(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel/carousel.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel/carousel.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel\" #carousel>\r\n  <a class=\"carousel-item\" href=\"#one!\"><img src=\"https://lorempixel.com/250/250/nature/1\"/></a>\r\n  <a class=\"carousel-item\" href=\"#two!\"><img src=\"https://lorempixel.com/250/250/nature/2\"/></a>\r\n  <a class=\"carousel-item\" href=\"#three!\"><img src=\"https://lorempixel.com/250/250/nature/3\"/></a>\r\n  <a class=\"carousel-item\" href=\"#four!\"><img src=\"https://lorempixel.com/250/250/nature/4\"/></a>\r\n  <a class=\"carousel-item\" href=\"#five!\"><img src=\"https://lorempixel.com/250/250/nature/5\"/></a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n  <div class=\"app__container footer__container\">\r\n      <ul class=\"menu\">\r\n        <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-youtube-play\"></i></a></li>\r\n      </ul>\r\n    <div class=\"footer__copyright ta-center\">\r\n      &copy; Frumentum Imperio | Hack.Moscow 2019\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\r\n  <div class=\"app__container\">\r\n    <nav class=\"nav flex-aijc\">\r\n      <div [routerLink]=\"['/landing']\" class=\"nav__item nav__logo unselectable disable-selection-btn\"></div>\r\n\r\n      <div\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        [routerLink]=\"['/profile']\"\r\n        routerLinkActive=\"link-holder__active\"\r\n      >\r\n        Профиль\r\n      </div>\r\n      <div\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        [routerLink]=\"['/people']\"\r\n        routerLinkActive=\"link-holder__active\"\r\n      >\r\n        Участники\r\n      </div>\r\n      <div\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        [routerLink]=\"['/map']\"\r\n        routerLinkActive=\"link-holder__active\"\r\n      >\r\n        Карта\r\n      </div>\r\n      <div\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        [routerLink]=\"['/rate']\"\r\n        routerLinkActive=\"link-holder__active\"\r\n      >\r\n        Рейтинг\r\n      </div>\r\n      <div\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        [routerLink]=\"['/tasks']\"\r\n        routerLinkActive=\"link-holder__active\"\r\n      >\r\n        Задачи\r\n      </div>\r\n\r\n      <span class=\"spacer\"></span>\r\n      <!-- <button\r\n        class=\"link-holder  button nav__button\"\r\n        *ngIf=\"authService.currentUser$ | async; else login\"\r\n        mat-button\r\n      > -->\r\n      <div\r\n        *ngIf=\"authService.currentUser$ | async; else login\"\r\n        class=\"link-holder unselectable disable-selection-btn\"\r\n        (click)=\"onLogout()\"\r\n      >\r\n        <div class=\"login-btn__icon\"></div>\r\n        <div class=\"login-btn__text\">Выход</div>\r\n      </div>\r\n      <!-- </button> -->\r\n      <!-- <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item routerLink=\"/balance\">Личный кабинет</button>\r\n        <button mat-menu-item routerLink=\"/investment\">Мои задачи</button>\r\n        <button mat-menu-item (click)=\"onLogout()\">Выход</button>\r\n      </mat-menu> -->\r\n      <ng-template #login>\r\n        <div class=\"link-holder unselectable disable-selection-btn\" [routerLink]=\"['/login']\">\r\n          <div class=\"login-btn__icon\"></div>\r\n          <div class=\"login-btn__text\">Войти</div>\r\n        </div>\r\n      </ng-template>\r\n    </nav>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-content\">\r\n\r\n    <h1 class=\"header\">Future of Education</h1>\r\n    <p class=\"info\">Добро пожаловать в наше веб-приложение для изучения науки!</p>\r\n\r\n    <p class=\"home-text\">Если ты у нас впервые, то тебе стоит пройти вступительный тест и оценить свой уровень знаний.\r\n    </p>\r\n    <p class=\"home-text\">После прохождения теста ты получишь персональные рекомендации по выбору направления обучения.\r\n    </p>\r\n    <p class=\"home-text\">Скорее жми на кнопку ниже, чтобы начать!</p>\r\n\r\n    <div class=\"button-wrapper flex-container\">\r\n        <button class=\"button home_button\">Начать тест!</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app__container flex-aijc\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <strong>Обычный пользователь</strong> - U: user P: user<br />\r\n        <strong>Администратор</strong> - U: admin P: admin\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n  </mat-card>\r\n  <mat-card class=\"login\">\r\n    <mat-card-header>\r\n      <mat-card-title class=\"ta-center\">\r\n        Добро пожаловать в программу!<br />\r\n        Пожалуйста, авторизуйтесь:\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <form class=\"login__form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Имя пользователя</mat-label>\r\n          <input\r\n            matInput\r\n            type=\"text\"\r\n            formControlName=\"username\"\r\n            class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"submitted && f.username.errors\"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Пароль</mat-label>\r\n          <input\r\n            matInput\r\n            type=\"password\"\r\n            formControlName=\"password\"\r\n            class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n          />\r\n          <mat-error\r\n            *ngIf=\"submitted && f.password.errors\"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <button\r\n          mat-raised-button\r\n          color=\"primary\"\r\n          [disabled]=\"loading\"\r\n          class=\"login__button--accept\"\r\n        >\r\n          <mat-icon *ngIf=\"loading\">\r\n            <mat-spinner diameter=\"20\"></mat-spinner>\r\n          </mat-icon>\r\n          Login\r\n        </button>\r\n        <mat-error *ngIf=\"error\" class=\"login__error\">\r\n          {{ error }}\r\n        </mat-error>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/landing/landing.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/landing/landing.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page__container\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-landing></app-landing>\r\n<div class=\"container\">\r\n  <app-map-skills [nodes]=\"nodes\" [links]=\"links\"></app-map-skills>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-routing/page-routing.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-routing/page-routing.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page__container\">\r\n  <div class=\"cont\">\r\n    <app-main-header></app-main-header>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/landing/landing.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/landing/landing.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page__container\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-landing></app-landing>\r\n<div class=\"container\">\r\n  <app-people-skills [nodes]=\"nodes\" [links]=\"links\"></app-people-skills>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile\">\r\n    <div class=\"section section_about-you\">\r\n        <div class=\"about-you section-title\">О Вас</div>\r\n\r\n        <div class=\"flex-container person-card\">\r\n            <div class=\"img-wrapper\" style=\"background-image: url(../../assets/img/musk.jpg);\"></div>\r\n\r\n\r\n            <div class=\"choosen_achivement\">\r\n                <i class=\"achievement-icon material-icons\">how_to_reg</i>\r\n            </div>\r\n\r\n            <div class=\"flex-container user-information\">\r\n                <div class=\"user-name\">\r\n                    <span class=\"first-name\">Илон</span>\r\n                    <span class=\"last-name\">Маск</span>\r\n                </div>\r\n\r\n                <div class=\"flex-container rate\">\r\n                    <span class=\"rate-title\">Рейтинг: </span>\r\n                    <span class=\"rate-value\">\r\n                        <i class=\"rate-star material-icons\">star</i>\r\n                        <i class=\"rate-star material-icons\">star</i>\r\n                        <i class=\"rate-star material-icons\">star</i>\r\n                        <i class=\"rate-star material-icons\">star</i>\r\n                        <i class=\"rate-star material-icons\">star</i>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"main-info flex-container\">\r\n            <div class=\"main-info_item\"><span class=\"achievements-count\">#</span> Достижений</div>\r\n            <div class=\"main-info_item\"><span class=\"skills-count\">#</span> Навыков</div>\r\n            <div class=\"main-info_item\"><span class=\"best-field\">Химия</span> – <span class=\"field-percentage\">%</span>\r\n                освоено</div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"section section_achievements\">\r\n        <div class=\"achievements section-title\">Достижения</div>\r\n        <div class=\"grid-container achievements-content\">\r\n            <div class=\"achievement\">\r\n                <i class=\"achievement-icon material-icons\">done</i>\r\n                <div class=\"achievement-name\">Первые шаги</div>\r\n                <div class=\"achievement-description\">Пройти базовый урок в любом из направлений</div>\r\n            </div>\r\n            <div class=\"achievement\">\r\n                <i class=\"achievement-icon material-icons\">menu_book</i>\r\n                <div class=\"achievement-name\">Жажда знаний</div>\r\n                <div class=\"achievement-description\">Суммарно потратить на обучение не менее 100 часов</div>\r\n            </div>\r\n            <div class=\"achievement\">\r\n                <i class=\"achievement-icon material-icons\">replay</i>\r\n                <div class=\"achievement-name\">Повторение – мать учения</div>\r\n                <div class=\"achievement-description\">Повторно пройти один из уроков</div>\r\n            </div>\r\n            <div class=\"achievement\">\r\n                <i class=\"achievement-icon material-icons\">query_builder</i>\r\n                <div class=\"achievement-name\">Марафонец</div>\r\n                <div class=\"achievement-description\">Непрерывно учиться не менее 10 часов подряд</div>\r\n            </div>\r\n        </div>\r\n        <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <div>Все ваши достижения</div>\r\n            </mat-expansion-panel-header>\r\n\r\n            <div class=\"mat-expansion-content\">\r\n                <div class=\"grid-container achievements-content\">\r\n                    <div class=\"achievement\">\r\n                        <i class=\"achievement-icon material-icons\">done</i>\r\n                        <div class=\"achievement-name\">Первые шаги</div>\r\n                        <div class=\"achievement-description\">Пройти базовый урок в любом из направлений</div>\r\n                    </div>\r\n                    <div class=\"achievement\">\r\n                        <i class=\"achievement-icon material-icons\">menu_book</i>\r\n                        <div class=\"achievement-name\">Жажда знаний</div>\r\n                        <div class=\"achievement-description\">Суммарно потратить на обучение не менее 100 часов</div>\r\n                    </div>\r\n                    <div class=\"achievement\">\r\n                        <i class=\"achievement-icon material-icons\">replay</i>\r\n                        <div class=\"achievement-name\">Повторение – мать учения</div>\r\n                        <div class=\"achievement-description\">Повторно пройти один из уроков</div>\r\n                    </div>\r\n                    <div class=\"achievement\">\r\n                        <i class=\"achievement-icon material-icons\">query_builder</i>\r\n                        <div class=\"achievement-name\">Марафонец</div>\r\n                        <div class=\"achievement-description\">Непрерывно учиться не менее 10 часов подряд</div>\r\n                    </div>\r\n                    <div class=\"achievement\">\r\n                        <i class=\"achievement-icon material-icons\">how_to_reg</i>\r\n                        <div class=\"achievement-name\">Подкованный</div>\r\n                        <div class=\"achievement-description\">При прохождении\r\n                            вступительного теста ответить правильно на все вопросы</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n    </div>\r\n    <div class=\"section section-skills\">\r\n        <div class=\"skills section-title\">Приобретенные навыки</div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"picked\">\r\n  <mat-button-toggle-group name=\"fontStyle\" value=\"students\"  #group=\"matButtonToggleGroup\"\r\n                           appearance=\"legacy\" aria-label=\"Font Style\" (valueChange)=\"changeData(group.value)\">\r\n    <mat-button-toggle value=\"students\">Ученики</mat-button-toggle>\r\n    <mat-button-toggle value=\"mentors\">Преподаватели</mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n</div>\r\n<div class=\"mat-elevation-z8\">\r\n<table mat-table [dataSource]=\"dataSource\"  class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <ng-container matColumnDef=\"position\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}}\r\n      <div class=\"paited-star\">{{getStar(element.position)}} </div></td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"region\">\r\n    <th mat-header-cell *matHeaderCellDef> Region </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.region}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"score\">\r\n    <th mat-header-cell *matHeaderCellDef> Score </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-paginator [pageSize]=\"10\"\r\n               [length]=\"length\"\r\n               (page)=\"pageEvent($event)\"\r\n               ></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-skills\">\r\n  <div class=\"skills section-title\">Химия</div>\r\n  <mat-progress-bar mode=\"determinate\" value=\"30\"></mat-progress-bar>\r\n  <mat-expansion-panel *ngFor=\"let topic of topics1\">\r\n    <mat-expansion-panel-header>\r\n      {{topic.title}}\r\n    </mat-expansion-panel-header>\r\n\r\n    <p class=\"mat-expansion-panel-content\">{{topic.description}}</p>\r\n\r\n  </mat-expansion-panel>\r\n</div>\r\n<div class=\"section section-skills\">\r\n  <div class=\"skills section-title\">Физика</div>\r\n  <mat-progress-bar mode=\"determinate\" value=\"50\"></mat-progress-bar>\r\n  <mat-expansion-panel *ngFor=\"let topic of topics2\">\r\n    <mat-expansion-panel-header>\r\n      {{topic.title}}\r\n    </mat-expansion-panel-header>\r\n\r\n    <p class=\"mat-expansion-panel-content\">{{topic.description}}</p>\r\n\r\n  </mat-expansion-panel>\r\n</div>\r\n<div class=\"section section-skills\">\r\n  <div class=\"skills section-title\">Математика</div>\r\n  <mat-progress-bar mode=\"determinate\" value=\"70\"></mat-progress-bar>\r\n  <mat-expansion-panel *ngFor=\"let topic of topics3\">\r\n    <mat-expansion-panel-header>\r\n      {{topic.title}}\r\n    </mat-expansion-panel-header>\r\n\r\n    <p class=\"mat-expansion-panel-content\">{{topic.description}}</p>\r\n\r\n  </mat-expansion-panel>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"test-name\">{{ testData.name }}</div>\r\n\r\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-horizontal-stepper formGroupName=\"hobbies\" [linear]=\"isLinear\" #stepper>\r\n    <mat-step *ngFor=\"let hobby of testData.excersices\">\r\n      <ng-template matStepLabel>{{ hobby.title }}</ng-template>\r\n      <div class=\"example-h2\">{{ hobby.question }}</div>\r\n\r\n      <mat-radio-group [formControlName]=\"hobby.title\" required>\r\n        <div *ngFor=\"let checkpoint of hobby.answers\">\r\n          <div style=\"height: 20px\"></div>\r\n          <mat-radio-button class=\"example-margin\" [value]=\"checkpoint\">{{ checkpoint }}</mat-radio-button>\r\n        </div>\r\n      </mat-radio-group>\r\n      <!-- <div class=\"action-button\">\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div> -->\r\n    </mat-step>\r\n\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      Отправить на проверку?\r\n      <div class=\"action-button\">\r\n        <button mat-button [disabled]=\"!contactForm.valid\" color=\"primary\" type=\"submit\">Отправить</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_data/People_links.ts":
/*!***************************************!*\
  !*** ./src/app/_data/People_links.ts ***!
  \***************************************/
/*! exports provided: linksP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linksP", function() { return linksP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const linksP = [
    {
        source: 'Вова',
        target: 'Егор'
    },
    {
        source: 'Вова',
        target: 'Гриша'
    },
    {
        source: 'Вова',
        target: 'Сеня'
    },
    {
        source: 'Гриша',
        target: 'Егор'
    },
    {
        source: 'Гриша',
        target: 'Женя'
    },
    {
        source: 'Женя',
        target: 'Сеня'
    },
    {
        source: 'Вова',
        target: 'Егор'
    },
    {
        source: 'Вова',
        target: 'Егор'
    },
];


/***/ }),

/***/ "./src/app/_data/challenge.ts":
/*!************************************!*\
  !*** ./src/app/_data/challenge.ts ***!
  \************************************/
/*! exports provided: FAKE_CHALLENGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAKE_CHALLENGES", function() { return FAKE_CHALLENGES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const FAKE_CHALLENGES = [
    {
        id: 1,
        name: 'Алгебра: Тест 1',
        desc: 'Тренирвка сложения дробей',
        excersices: [
            {
                title: `Математика`,
                question: 'Вы любите математику?',
                answers: ['Да', 'Нет'],
                rightAnswer: 'Да'
            },
            {
                title: `Физика`,
                question: 'Вы любите физику?',
                answers: ['Да', 'Нет'],
                rightAnswer: 'Да'
            },
            {
                title: `Литература`,
                question: 'Вы любите литературу?',
                answers: ['Да', 'Нет'],
                rightAnswer: 'Да'
            }
        ],
        solved: false
    },
    {
        id: 2,
        name: '2-3 классы. Задачи на движение',
        desc: '',
        solved: false,
        excersices: [
            {
                title: 'Задание 1 из 10',
                question: 'Велосипедист проехал 36 км за 3 часа. С какой скоростью ехал велосипедист?',
                answers: ['12 км/мин', '12 м/мин', '12 км/ч', '12 км'],
                rightAnswer: '12 км/ч'
            },
            {
                title: 'Задание 2 из 10',
                question: 'Автомобиль едет со скоростью 50 км/ч. Какое расстояние автомобиль проедет за 6 часов?',
                answers: ['300 км/ч', '300  м/мин ', '300  км', '300  м'],
                rightAnswer: '300  км'
            },
            {
                title: 'Задание 3 из 10',
                question: 'Поезд едет со скоростью 70 км/ч. За какое время он проедет 280 км?',
                answers: ['За 4 мин', 'За 4 м/мин ', 'За 4 км/ч', 'За 4 ч'],
                rightAnswer: 'За 4 ч'
            },
            {
                title: 'Задание 4 из 10',
                question: 'Велосипедист проехал 40 км за 4 часа. С какой скоростью ехал велосипедист? Найди верное решение.',
                answers: ['4 ч ⋅ 40 км', '40 км – 4 ч', '40 км + 4 ч', '40 км : 4 ч'],
                rightAnswer: '40 км : 4 ч'
            },
            {
                title: 'Задание 5 из 10',
                question: 'Автомобиль едет со скоростью 80 км/ч. Какое расстояние автомобиль проедет за 5 часов? Найди верное решение.',
                answers: ['80 км/ч + 5 ч', '80 км/ч : 5 ч', '80 км/ч ⋅ 5 ч'],
                rightAnswer: '80 км/ч ⋅ 5 ч'
            },
            {
                title: 'Задание 6 из 10',
                question: 'Поезд едет со скоростью 60 км/ч. За какое время он проедет 300 км? Найди верное решение.',
                answers: ['300 км ⋅ 60 км/ч', '300 км – 60 км/ч', '300 км + 60 км/ч', '300 км : 60 км/ч'],
                rightAnswer: '300 км : 60 км/ч'
            },
            {
                title: 'Задание 7 из 10',
                question: 'Велосипедист проехал 45 км за 3 часа. С какой скоростью ехал велосипедист? Найди верное решение.',
                answers: [
                    '45 км : 3 ч= 15 (км)',
                    '45 км : 3 ч = 15 (км/ч)',
                    '45 км : 3 ч = 15 (км/мин)',
                    '45 км – 3 ч = 42 (км/ч)'
                ],
                rightAnswer: '45 км : 3 ч = 15 (км/ч)'
            },
            {
                title: 'Задание 8 из 10',
                question: 'Автомобиль едет со скоростью 60 км/ч. Какое расстояние автомобиль проедет за 4 часа? Найди верное решение.',
                answers: ['60 км/ч + 4 ч = 64 (км)', '60  км/ч ⋅ 4 ч = 240 (км)', '60  км/ч ⋅ 4 ч = 240 (км/ч)'],
                rightAnswer: '60  км/ч ⋅ 4 ч = 240 (км)'
            },
            {
                title: 'Задание 9 из 10',
                question: 'Поезд едет со скоростью 70 км/ч. За какое время он проедет 280 км? Найди верное решение.',
                answers: [
                    '280 км - 70 км/ч = 210 (ч)',
                    '280 км : 70 км/ч = 4 (км/ч)',
                    '280 км : 70 км/ч = 4 (ч)',
                    '280 км : 70 км/ч = 4 (мин)'
                ],
                rightAnswer: '280 км : 70 км/ч = 4 (ч)'
            },
            {
                title: 'Задание 10 из 10',
                question: 'Выбери задачу на встречное движение.\
          1. Из Красноярска в разные стороны выехали 2 автобуса. Скорость первого автобуса 60 км/ч, скорость второго – 80 км/ч. На каком расстоянии друг от друга будут автобусы через 3 часа?\
          2. Расстояние между Абаканом и Красноярском 420 км. Из Абакана в Красноярск выехал автобус со скоростью 70 км/ч. С такой же скоростью из Красноярска в Абакан выехал другой автобус. Через какое время они встретятся?\
          3. Из Красноярска в Абакан выехали два автобуса. Один ехал со скоростью 70 км/ч, а другой – 60 км/ч. На сколько часов быстрее доедет первый автобус, чем второй, если расстояние между городами примерно 420 км?\
          4. От Абакана до Красноярска примерно 420 км. За какое время это расстояние проедет автомобиль, если будет двигаться со скоростью 70 км/ч?',
                answers: ['4', '1', '3', '2'],
                rightAnswer: '1'
            }
        ]
    },
    {
        id: 3,
        name: '3-4 классы. Задачи на устный чет',
        desc: '',
        solved: false,
        excersices: [
            {
                title: 'Задание 1 из 4',
                question: '1 + 1 = ?',
                answers: ['2', '3', '4', '5'],
                rightAnswer: '2'
            },
            {
                title: 'Задание 2 из 4',
                question: '8 - 8 = ?',
                answers: ['0', '1', '2', '3'],
                rightAnswer: '0'
            },
            {
                title: 'Задание 3 из 4',
                question: '1 * 0 = ?',
                answers: ['0', '1', '2', '3'],
                rightAnswer: '0'
            },
            {
                title: 'Задание 4 из 4',
                question: '1 * 1 = ?',
                answers: ['0', '1', '2', '3'],
                rightAnswer: '1'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/_data/map.ts":
/*!******************************!*\
  !*** ./src/app/_data/map.ts ***!
  \******************************/
/*! exports provided: MAP_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_DEFAULT", function() { return MAP_DEFAULT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _map_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_links */ "./src/app/_data/map_links.ts");


const font = 20;
const max = { r: 250, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg', challengeId: 1 };
const medium = { r: 175, fontSize: font, iamgeUrl: 'assets/planets/mercury.svg', challengeId: 1 };
const min = { r: 125, fontSize: font, iamgeUrl: 'assets/planets/jupitier.svg', challengeId: 1 };
const MAP_DEFAULT = {
    nodes: [
        {
            name: 'Старт',
            result: null,
            r: 175,
            fontSize: 20,
            iamgeUrl: 'assets/planets/jupitier.svg',
            challengeId: 1
        },
        Object.assign({ name: 'Математика' }, max, { challengeId: 2 }),
        Object.assign({ name: 'Математика 1' }, min, { challengeId: 3 }),
        Object.assign({ name: 'Математика 2' }, min),
        Object.assign({ name: 'Математика 3' }, min),
        Object.assign({ name: 'Математика 4' }, min),
        Object.assign({ name: 'Математика 5' }, min),
        Object.assign({ name: 'Основы Математики' }, medium),
        Object.assign({ name: 'Алгебра 1' }, min),
        Object.assign({ name: 'Алгебра 2' }, min),
        Object.assign({ name: 'Алгебра 3' }, min),
        Object.assign({ name: 'Алгебра 4' }, min),
        Object.assign({ name: 'Алгебра 5' }, min),
        Object.assign({ name: 'Основы Алгебры' }, medium),
        Object.assign({ name: 'Геометрия 1' }, min),
        Object.assign({ name: 'Геометрия 2' }, min),
        Object.assign({ name: 'Геометрия 3' }, min),
        Object.assign({ name: 'Геометрия 4' }, min),
        Object.assign({ name: 'Геометрия 5' }, min),
        Object.assign({ name: 'Основы Геометрии' }, medium),
        Object.assign({ name: 'Физика' }, max),
        Object.assign({ name: 'Физика 1' }, min),
        Object.assign({ name: 'Физика 2' }, min),
        Object.assign({ name: 'Физика 3' }, min),
        Object.assign({ name: 'Физика 4' }, min),
        Object.assign({ name: 'Физика 5' }, min),
        Object.assign({ name: 'Основы Физики' }, medium),
        Object.assign({ name: 'Динамика 1' }, min),
        Object.assign({ name: 'Динамика 2' }, min),
        Object.assign({ name: 'Динамика 3' }, min),
        Object.assign({ name: 'Динамика 4' }, min),
        Object.assign({ name: 'Динамика 5' }, min),
        Object.assign({ name: 'Основы Динамики' }, medium),
        Object.assign({ name: 'Термодинамика 1' }, min),
        Object.assign({ name: 'Термодинамика 2' }, min),
        Object.assign({ name: 'Термодинамика 3' }, min),
        Object.assign({ name: 'Термодинамика 4' }, min),
        Object.assign({ name: 'Термодинамика 5' }, min),
        Object.assign({ name: 'Основы Термодинамики' }, medium),
        Object.assign({ name: 'Электромагнитизм 1' }, min),
        Object.assign({ name: 'Электромагнитизм 2' }, min),
        Object.assign({ name: 'Электромагнитизм 3' }, min),
        Object.assign({ name: 'Электромагнитизм 4' }, min),
        Object.assign({ name: 'Электромагнитизм 5' }, min),
        Object.assign({ name: 'Основы Электромагнитизма' }, medium),
        Object.assign({ name: 'Оптика 1' }, min),
        Object.assign({ name: 'Оптика 2' }, min),
        Object.assign({ name: 'Оптика 3' }, min),
        Object.assign({ name: 'Оптика 4' }, min),
        Object.assign({ name: 'Оптика 5' }, min),
        Object.assign({ name: 'Основы Оптики' }, medium),
        Object.assign({ name: 'Химия' }, max),
        Object.assign({ name: 'Химия 1' }, min),
        Object.assign({ name: 'Химия 2' }, min),
        Object.assign({ name: 'Химия 3' }, min),
        Object.assign({ name: 'Химия 4' }, min),
        Object.assign({ name: 'Химия 5' }, min),
        Object.assign({ name: 'Основы Химии' }, medium),
        Object.assign({ name: 'Ядерная Физика' }, medium),
        Object.assign({ name: 'Информатика' }, max),
        Object.assign({ name: 'Информатика 1' }, min),
        Object.assign({ name: 'Информатика 2' }, min),
        Object.assign({ name: 'Информатика 3' }, min),
        Object.assign({ name: 'Информатика 4' }, min),
        Object.assign({ name: 'Информатика 5' }, min),
        Object.assign({ name: 'Основы Информатики' }, medium),
        Object.assign({ name: 'Устройства 1' }, min),
        Object.assign({ name: 'Устройства 2' }, min),
        Object.assign({ name: 'Устройства 3' }, min),
        Object.assign({ name: 'Основы Устройств' }, medium),
        Object.assign({ name: 'Физические Установки' }, medium),
        Object.assign({ name: 'Физические Установки 1' }, min),
        Object.assign({ name: 'Физические Установки 2' }, min),
        Object.assign({ name: 'Физические Установки 3' }, min),
        Object.assign({ name: 'Алгоритмы 1' }, min),
        Object.assign({ name: 'Алгоритмы 2' }, min),
        Object.assign({ name: 'Алгоритмы 3' }, min),
        Object.assign({ name: 'Основы Алгоритмов' }, medium),
        Object.assign({ name: 'Матанализ 1' }, min),
        Object.assign({ name: 'Матанализ 2' }, min),
        Object.assign({ name: 'Матанализ 3' }, min),
        Object.assign({ name: 'Основы Матанализа' }, medium),
        Object.assign({ name: 'Неорганическая химия 1' }, min),
        Object.assign({ name: 'Неорганическая химия 2' }, min),
        Object.assign({ name: 'Неорганическая химия 3' }, min),
        Object.assign({ name: 'Неорганическая химия 4' }, min),
        Object.assign({ name: 'Неорганическая химия 5' }, min),
        Object.assign({ name: 'Секреты неорганической химии' }, medium),
        Object.assign({ name: 'Органическая химия 1' }, min),
        Object.assign({ name: 'Органическая химия 2' }, min),
        Object.assign({ name: 'Органическая химия 3' }, min),
        Object.assign({ name: 'Органическая химия 4' }, min),
        Object.assign({ name: 'Органическая химия 5' }, min),
        Object.assign({ name: 'Секреты органической химии' }, medium),
    ],
    links: _map_links__WEBPACK_IMPORTED_MODULE_1__["links"]
};


/***/ }),

/***/ "./src/app/_data/map_links.ts":
/*!************************************!*\
  !*** ./src/app/_data/map_links.ts ***!
  \************************************/
/*! exports provided: links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const links = [
    {
        source: 'Математика',
        target: 'Математика 1'
    },
    {
        source: 'Математика 1',
        target: 'Математика 2'
    },
    {
        source: 'Математика 2',
        target: 'Математика 3'
    },
    {
        source: 'Математика 3',
        target: 'Математика 4'
    },
    {
        source: 'Математика 4',
        target: 'Математика 5'
    },
    {
        source: 'Математика 5',
        target: 'Основы Математики'
    },
    {
        source: 'Основы Математики',
        target: 'Алгебра 1'
    },
    {
        source: 'Алгебра 1',
        target: 'Алгебра 2'
    },
    {
        source: 'Алгебра 2',
        target: 'Алгебра 3'
    },
    {
        source: 'Алгебра 3',
        target: 'Алгебра 4'
    },
    {
        source: 'Алгебра 4',
        target: 'Алгебра 5'
    },
    {
        source: 'Алгебра 5',
        target: 'Основы Алгебры'
    },
    {
        source: 'Основы Математики',
        target: 'Геометрия 1'
    },
    {
        source: 'Геометрия 1',
        target: 'Геометрия 2'
    },
    {
        source: 'Геометрия 2',
        target: 'Геометрия 3'
    },
    {
        source: 'Геометрия 3',
        target: 'Геометрия 4'
    },
    {
        source: 'Геометрия 4',
        target: 'Геометрия 5'
    },
    {
        source: 'Геометрия 5',
        target: 'Основы Геометрии'
    },
    {
        source: 'Физика',
        target: 'Физика 1'
    },
    {
        source: 'Физика 1',
        target: 'Физика 2'
    },
    {
        source: 'Физика 2',
        target: 'Физика 3'
    },
    {
        source: 'Физика 3',
        target: 'Физика 4'
    },
    {
        source: 'Физика 4',
        target: 'Физика 5'
    },
    {
        source: 'Физика 5',
        target: 'Основы Физики'
    },
    {
        source: 'Основы Физики',
        target: 'Динамика 1'
    },
    {
        source: 'Основы Физики',
        target: 'Основы Алгебры'
    },
    {
        source: 'Основы Физики',
        target: 'Основы Геометрии'
    },
    {
        source: 'Динамика 1',
        target: 'Динамика 2'
    },
    {
        source: 'Динамика 2',
        target: 'Динамика 3'
    },
    {
        source: 'Динамика 3',
        target: 'Динамика 4'
    },
    {
        source: 'Динамика 4',
        target: 'Динамика 5'
    },
    {
        source: 'Динамика 5',
        target: 'Основы Динамики'
    },
    {
        source: 'Основы Динамики',
        target: 'Термодинамика 1'
    },
    {
        source: 'Термодинамика 1',
        target: 'Термодинамика 2'
    },
    {
        source: 'Термодинамика 2',
        target: 'Термодинамика 3'
    },
    {
        source: 'Термодинамика 3',
        target: 'Термодинамика 4'
    },
    {
        source: 'Термодинамика 4',
        target: 'Термодинамика 5'
    },
    {
        source: 'Термодинамика 5',
        target: 'Основы Термодинамики'
    },
    {
        source: 'Основы Динамики',
        target: 'Электромагнитизм 1'
    },
    {
        source: 'Электромагнитизм 1',
        target: 'Электромагнитизм 2'
    },
    {
        source: 'Электромагнитизм 2',
        target: 'Электромагнитизм 3'
    },
    {
        source: 'Электромагнитизм 3',
        target: 'Электромагнитизм 4'
    },
    {
        source: 'Электромагнитизм 4',
        target: 'Электромагнитизм 5'
    },
    {
        source: 'Электромагнитизм 5',
        target: 'Основы Электромагнитизма'
    },
    {
        source: 'Основы Динамики',
        target: 'Оптика 1'
    },
    {
        source: 'Оптика 1',
        target: 'Оптика 2'
    },
    {
        source: 'Оптика 2',
        target: 'Оптика 3'
    },
    {
        source: 'Оптика 3',
        target: 'Оптика 4'
    },
    {
        source: 'Оптика 4',
        target: 'Оптика 5'
    },
    {
        source: 'Оптика 5',
        target: 'Основы Оптики'
    },
    {
        source: 'Химия',
        target: 'Химия 1'
    },
    {
        source: 'Химия 1',
        target: 'Химия 2'
    },
    {
        source: 'Химия 2',
        target: 'Химия 3'
    },
    {
        source: 'Химия 3',
        target: 'Химия 4'
    },
    {
        source: 'Химия 4',
        target: 'Химия 5'
    },
    {
        source: 'Химия 5',
        target: 'Основы Химии'
    },
    {
        source: 'Основы Химии',
        target: 'Ядерная Физика'
    },
    {
        source: 'Основы Динамики',
        target: 'Ядерная Физика'
    },
    {
        source: 'Информатика',
        target: 'Информатика 1'
    },
    {
        source: 'Информатика 1',
        target: 'Информатика 2'
    },
    {
        source: 'Информатика 2',
        target: 'Информатика 3'
    },
    {
        source: 'Информатика 3',
        target: 'Информатика 4'
    },
    {
        source: 'Информатика 4',
        target: 'Информатика 5'
    },
    {
        source: 'Информатика 5',
        target: 'Основы Информатики'
    },
    {
        source: 'Устройства 1',
        target: 'Устройства 2'
    },
    {
        source: 'Устройства 2',
        target: 'Устройства 3'
    },
    {
        source: 'Устройства 3',
        target: 'Основы Устройств'
    },
    {
        source: 'Основы Информатики',
        target: 'Устройства 1'
    },
    {
        source: 'Основы Электромагнитизма',
        target: 'Физические Установки'
    },
    {
        source: 'Основы Устройств',
        target: 'Физические Установки'
    },
    {
        source: 'Физические Установки',
        target: 'Физические Установки 1'
    },
    {
        source: 'Физические Установки 1',
        target: 'Физические Установки 2'
    },
    {
        source: 'Физические Установки 2',
        target: 'Физические Установки 3'
    },
    {
        source: 'Основы Информатики',
        target: 'Алгоритмы 1'
    },
    {
        source: 'Алгоритмы 1',
        target: 'Алгоритмы 2'
    },
    {
        source: 'Алгоритмы 2',
        target: 'Алгоритмы 3'
    },
    {
        source: 'Алгоритмы 3',
        target: 'Основы Алгоритмов'
    },
    {
        source: 'Основы Алгоритмов',
        target: 'Матанализ 1'
    },
    {
        source: 'Основы Алгебры',
        target: 'Матанализ 1'
    },
    {
        source: 'Матанализ 1',
        target: 'Матанализ 2'
    },
    {
        source: 'Матанализ 2',
        target: 'Матанализ 3'
    },
    {
        source: 'Матанализ 3',
        target: 'Основы Матанализа'
    },
    {
        source: 'Основы Химии',
        target: 'Неорганическая химия 1'
    },
    {
        source: 'Неорганическая химия 1',
        target: 'Неорганическая химия 2'
    },
    {
        source: 'Неорганическая химия 2',
        target: 'Неорганическая химия 3'
    },
    {
        source: 'Неорганическая химия 3',
        target: 'Неорганическая химия 4'
    },
    {
        source: 'Неорганическая химия 4',
        target: 'Неорганическая химия 5'
    },
    {
        source: 'Неорганическая химия 5',
        target: 'Секреты неорганической химии'
    },
    {
        source: 'Основы Химии',
        target: 'Органическая химия 1'
    },
    {
        source: 'Органическая химия 1',
        target: 'Органическая химия 2'
    },
    {
        source: 'Органическая химия 2',
        target: 'Органическая химия 3'
    },
    {
        source: 'Органическая химия 3',
        target: 'Органическая химия 4'
    },
    {
        source: 'Органическая химия 4',
        target: 'Органическая химия 5'
    },
    {
        source: 'Органическая химия 5',
        target: 'Секреты органической химии'
    },
];


/***/ }),

/***/ "./src/app/_data/people.ts":
/*!*********************************!*\
  !*** ./src/app/_data/people.ts ***!
  \*********************************/
/*! exports provided: PEOPLE_DEFAULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEOPLE_DEFAULT", function() { return PEOPLE_DEFAULT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _People_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People_links */ "./src/app/_data/People_links.ts");


const font = 20;
const max = { r: 100, fontSize: font, iamgeUrl: 'assets/icons/girl.svg', challengeId: 1 };
const medium = { r: 70, fontSize: font, iamgeUrl: 'assets/icons/boy.svg', challengeId: 1 };
const min = { r: 40, fontSize: font, iamgeUrl: 'assets/icons/boy.svg', challengeId: 1 };
const PEOPLE_DEFAULT = {
    nodes: [
        {
            name: 'Егор',
            result: null,
            r: 275,
            fontSize: 20,
            iamgeUrl: 'assets/icons/boy.svg',
            challengeId: 1
        },
        Object.assign({ name: 'Вова' }, max, { challengeId: 2 }),
        Object.assign({ name: 'Сеня' }, medium, { challengeId: 2 }),
        Object.assign({ name: 'Гриша' }, max, { challengeId: 2 }),
        Object.assign({ name: 'Женя' }, min, { challengeId: 2 }),
    ],
    linksP: _People_links__WEBPACK_IMPORTED_MODULE_1__["linksP"]
};


/***/ }),

/***/ "./src/app/_helpers/2draggable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/2draggable.directive.ts ***!
  \**************************************************/
/*! exports provided: DraggableDirective2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective2", function() { return DraggableDirective2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/d3.service */ "./src/app/_services/d3.service.ts");



let DraggableDirective2 = class DraggableDirective2 {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
};
DraggableDirective2.ctorParameters = () => [
    { type: _services_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDraggableNode2')
], DraggableDirective2.prototype, "draggableNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDraggableInGraph2')
], DraggableDirective2.prototype, "draggableInGraph", void 0);
DraggableDirective2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDraggableNode2]'
    })
], DraggableDirective2);



/***/ }),

/***/ "./src/app/_helpers/2zoomable.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/2zoomable.directive.ts ***!
  \*************************************************/
/*! exports provided: ZoomableDirective2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective2", function() { return ZoomableDirective2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/d3.service */ "./src/app/_services/d3.service.ts");



let ZoomableDirective2 = class ZoomableDirective2 {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.ZoomableOf2, this._element.nativeElement);
    }
};
ZoomableDirective2.ctorParameters = () => [
    { type: _services_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appZoomableOf2')
], ZoomableDirective2.prototype, "ZoomableOf2", void 0);
ZoomableDirective2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appZoomableOf2]'
    })
], ZoomableDirective2);



/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (!currentUser.token) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/draggable.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/draggable.directive.ts ***!
  \*************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/d3.service */ "./src/app/_services/d3.service.ts");



let DraggableDirective = class DraggableDirective {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
};
DraggableDirective.ctorParameters = () => [
    { type: _services_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDraggableNode')
], DraggableDirective.prototype, "draggableNode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appDraggableInGraph')
], DraggableDirective.prototype, "draggableInGraph", void 0);
DraggableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDraggableNode]'
    })
], DraggableDirective);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");






const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        roles: [_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin]
    },
    {
        id: 2,
        username: 'user',
        password: 'user',
        firstName: 'Normal',
        lastName: 'User',
        roles: [_models__WEBPACK_IMPORTED_MODULE_5__["Role"].User]
    }
];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            // tslint:disable-next-line: max-line-length
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])()));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles,
                token: `fake-jwt-token.${user.id}`
            });
        }
        function getUsers() {
            if (!isAdmin()) {
                return unauthorized();
            }
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            // only admins can access other user records
            if (!isAdmin() && currentUser().id !== idFromUrl()) {
                return unauthorized();
            }
            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }
        // helper functions
        function ok(responseBody) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: responseBody }));
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'unauthorized' } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 400, error: { message } });
        }
        function isLoggedIn() {
            const authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('token fake-jwt-token');
        }
        function isAdmin() {
            return isLoggedIn() && currentUser().roles.indexOf(_models__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin) !== -1;
        }
        function currentUser() {
            if (!isLoggedIn()) {
                return;
            }
            const id = parseInt(headers.get('Authorization').split('.')[1], 10);
            return users.find(x => x.id === id);
        }
        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1], 10);
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: RoleBasedModule, AuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor, DraggableDirective, ZoomableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _role_based_role_based_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-based/role-based.module */ "./src/app/_helpers/role-based/role-based.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleBasedModule", function() { return _role_based_role_based_module__WEBPACK_IMPORTED_MODULE_1__["RoleBasedModule"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"]; });

/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draggable.directive */ "./src/app/_helpers/draggable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _draggable_directive__WEBPACK_IMPORTED_MODULE_6__["DraggableDirective"]; });

/* harmony import */ var _zoomable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoomable.directive */ "./src/app/_helpers/zoomable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _zoomable_directive__WEBPACK_IMPORTED_MODULE_7__["ZoomableDirective"]; });











/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `token ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_helpers/role-based/role-based.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/_helpers/role-based/role-based.directive.ts ***!
  \*************************************************************/
/*! exports provided: RoleBasedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleBasedDirective", function() { return RoleBasedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/workflow.service */ "./src/app/_services/workflow.service.ts");



let RoleBasedDirective = class RoleBasedDirective {
    constructor(templateRef, viewContainer, workflowService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.workflowService = workflowService;
    }
    ngOnInit() {
        this.applyPermission();
    }
    applyPermission() {
        this.permission$ = this.workflowService
            .checkAuthorization(this.appCanAccess)
            .subscribe(authorized => {
            if (authorized) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
    ngOnDestroy() {
        this.permission$.unsubscribe();
    }
};
RoleBasedDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _services_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCanAccess')
], RoleBasedDirective.prototype, "appCanAccess", void 0);
RoleBasedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCanAccess]'
    })
], RoleBasedDirective);



/***/ }),

/***/ "./src/app/_helpers/role-based/role-based.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/_helpers/role-based/role-based.module.ts ***!
  \**********************************************************/
/*! exports provided: RoleBasedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleBasedModule", function() { return RoleBasedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _role_based_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-based.directive */ "./src/app/_helpers/role-based/role-based.directive.ts");




let RoleBasedModule = class RoleBasedModule {
};
RoleBasedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_role_based_directive__WEBPACK_IMPORTED_MODULE_3__["RoleBasedDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_role_based_directive__WEBPACK_IMPORTED_MODULE_3__["RoleBasedDirective"]]
    })
], RoleBasedModule);



/***/ }),

/***/ "./src/app/_helpers/zoomable.directive.ts":
/*!************************************************!*\
  !*** ./src/app/_helpers/zoomable.directive.ts ***!
  \************************************************/
/*! exports provided: ZoomableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return ZoomableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/d3.service */ "./src/app/_services/d3.service.ts");



let ZoomableDirective = class ZoomableDirective {
    constructor(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    }
};
ZoomableDirective.ctorParameters = () => [
    { type: _services_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appZoomableOf')
], ZoomableDirective.prototype, "zoomableOf", void 0);
ZoomableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appZoomableOf]'
    })
], ZoomableDirective);



/***/ }),

/***/ "./src/app/_models/_model.ts":
/*!***********************************!*\
  !*** ./src/app/_models/_model.ts ***!
  \***********************************/
/*! exports provided: PROPOSALS_MOCK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPOSALS_MOCK", function() { return PROPOSALS_MOCK; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PROPOSALS_MOCK = [
    {
        id: 305450,
        title: 'ООО "ГЕС"',
        accumulated: 476661.89,
        goal: 497959.19,
        goal_date: new Date().toISOString(),
        rate: 32,
        period: 90,
    },
    {
        id: 305450,
        title: 'ООО "ГЕС"',
        accumulated: 476661.89,
        goal: 497959.19,
        goal_date: new Date().toISOString(),
        rate: 32,
        period: 90
    },
    {
        id: 305450,
        title: 'ООО "ГЕС"',
        accumulated: 476661.89,
        goal: 497959.19,
        goal_date: new Date().toISOString(),
        rate: 32,
        period: 90
    },
    {
        id: 305450,
        title: 'ООО "ГЕС"',
        accumulated: 476661.89,
        goal: 497959.19,
        goal_date: new Date().toISOString(),
        rate: 32,
        period: 90
    }
];


/***/ }),

/***/ "./src/app/_models/education.ts":
/*!**************************************!*\
  !*** ./src/app/_models/education.ts ***!
  \**************************************/
/*! exports provided: EducationNode, EducationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationNode", function() { return EducationNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationLink", function() { return EducationLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EducationNode {
    constructor(id, r, fontSize, imageUrl, name, result, challengeId) {
        this.linkCount = 0;
        this.id = id;
        this.r = r;
        this.fontSize = fontSize;
        this.imageUrl = imageUrl;
        this.name = name;
        this.result = result;
        this.chalengeId = challengeId;
    }
}
class EducationLink {
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}


/***/ }),

/***/ "./src/app/_models/force-directed-graph.ts":
/*!*************************************************!*\
  !*** ./src/app/_models/force-directed-graph.ts ***!
  \*************************************************/
/*! exports provided: ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return ForceDirectedGraph; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/education */ "./src/app/_models/education.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




const FORCES = {
    LINKS: 30 / 50,
    COLLISION: 2,
    CHARGE: -60
};
class ForceDirectedGraph {
    constructor(nodes, links, options) {
        this.ticker = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    connectNodes(source, target) {
        let link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new _models_education__WEBPACK_IMPORTED_MODULE_2__["EducationLink"](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    }
    initNodes() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    }
    initLinks() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', d3__WEBPACK_IMPORTED_MODULE_3__["forceLink"](this.links)
            .id(d => d['id'])
            .strength(FORCES.LINKS));
    }
    initSimulation(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            const ticker = this.ticker;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_3__["forceSimulation"]()
                .force('charge', d3__WEBPACK_IMPORTED_MODULE_3__["forceManyBody"]().strength(d => FORCES.CHARGE * d['r']))
                .force('collide', d3__WEBPACK_IMPORTED_MODULE_3__["forceCollide"]()
                .strength(FORCES.COLLISION)
                .radius(d => d['r'] + 5)
                .iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', d3__WEBPACK_IMPORTED_MODULE_3__["forceCenter"](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    }
}


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: PROPOSALS_MOCK, Role, User, EducationNode, EducationLink, ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_model */ "./src/app/_models/_model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROPOSALS_MOCK", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["PROPOSALS_MOCK"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["Role"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["User"]; });

/* harmony import */ var _education__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education */ "./src/app/_models/education.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationNode", function() { return _education__WEBPACK_IMPORTED_MODULE_3__["EducationNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationLink", function() { return _education__WEBPACK_IMPORTED_MODULE_3__["EducationLink"]; });

/* harmony import */ var _force_directed_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./force-directed-graph */ "./src/app/_models/force-directed-graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _force_directed_graph__WEBPACK_IMPORTED_MODULE_4__["ForceDirectedGraph"]; });








/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: Role, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
class User {
}


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/users/authenticate`, {
            username,
            password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/challenge.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/challenge.service.ts ***!
  \************************************************/
/*! exports provided: ChallengeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeService", function() { return ChallengeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_challenge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_data/challenge */ "./src/app/_data/challenge.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ChallengeService = class ChallengeService {
    constructor() {
        this.challenges = _data_challenge__WEBPACK_IMPORTED_MODULE_2__["FAKE_CHALLENGES"];
    }
    getChallengeById(id) {
        const res = this.challenges.filter(item => item.id === id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(res.length > 0 ? res[0] : { id: 0, name: 'Урока не найден', desc: 'О ноууу!!', solved: false, excersices: [] });
    }
};
ChallengeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChallengeService);



/***/ }),

/***/ "./src/app/_services/d3.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_services/d3.service.ts ***!
  \*****************************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




let D3Service = class D3Service {
    /** This service will provide methods to enable user interaction with elements
     * while maintaining the d3 simulations physics
     */
    constructor() { }
    /** A method to bind a pan and zoom behaviour to an svg element */
    applyZoomableBehaviour(svgElement, containerElement) {
        let svg;
        let container;
        let zoomed;
        let zoom;
        svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"](svgElement);
        container = d3__WEBPACK_IMPORTED_MODULE_3__["select"](containerElement);
        zoomed = () => {
            const transform = d3__WEBPACK_IMPORTED_MODULE_3__["event"].transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };
        const initialTransform = d3__WEBPACK_IMPORTED_MODULE_3__["zoomIdentity"].translate(527, 187).scale(0.18);
        zoom = d3__WEBPACK_IMPORTED_MODULE_3__["zoom"]().on('zoom', zoomed);
        svg.call(zoom).call(zoom.transform, initialTransform);
    }
    /** A method to bind a draggable behaviour to an svg element */
    applyDraggableBehaviour(element, node, graph) {
        const d3element = d3__WEBPACK_IMPORTED_MODULE_3__["select"](element);
        function started() {
            /** Preventing propagation of dragstart to parent elements */
            d3__WEBPACK_IMPORTED_MODULE_3__["event"].sourceEvent.stopPropagation();
            if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            d3__WEBPACK_IMPORTED_MODULE_3__["event"].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
                node.fy = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
            }
            function ended() {
                if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(d3__WEBPACK_IMPORTED_MODULE_3__["drag"]().on('start', started));
    }
    /** The interactable graph we will simulate in this article
     * This method does not interact with the document, purely physical calculations with d3
     */
    getForceDirectedGraph(nodes, links, options) {
        const sg = new _models__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"](nodes, links, options);
        return sg;
    }
};
D3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], D3Service);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: D3Service, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3.service */ "./src/app/_services/d3.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return _d3_service__WEBPACK_IMPORTED_MODULE_3__["D3Service"]; });







/***/ }),

/***/ "./src/app/_services/telegram-bot.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/telegram-bot.service.ts ***!
  \***************************************************/
/*! exports provided: TelegramBotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramBotService", function() { return TelegramBotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let TelegramBotService = class TelegramBotService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.token = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].telegramBot;
        this.chat_id = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].chart_id;
    }
    userStartChallenge(challenge) {
        if (this.authService.currentUserValue.firstName) {
            const message = `User ${this.authService.currentUserValue.firstName}\n start challenge ${challenge.name}`;
            this.http
                .get(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${message}`)
                .subscribe();
        }
    }
};
TelegramBotService.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TelegramBotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TelegramBotService);



/***/ }),

/***/ "./src/app/_services/tree-progress.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/tree-progress.service.ts ***!
  \****************************************************/
/*! exports provided: TreeProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeProgressService", function() { return TreeProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/_services/index.ts");



let TreeProgressService = class TreeProgressService {
    constructor(auth) {
        this.auth = auth;
    }
    saveCurrentProgress(nodeId) {
        if (this.auth.currentUserValue) {
            const name = this.auth.currentUserValue.firstName;
            const test = JSON.parse(localStorage.getItem(name));
            const alreadyFinished = test ? test : [];
            nodeId.forEach(item => {
                if (!alreadyFinished.includes(item)) {
                    alreadyFinished.push(item);
                }
            });
            localStorage.setItem(name, JSON.stringify(alreadyFinished));
        }
    }
    getCurrentProgress() {
        if (this.auth.currentUserValue) {
            const name = this.auth.currentUserValue.firstName;
            const test = JSON.parse(localStorage.getItem(name));
            const alreadyFinished = test ? test : [];
            return alreadyFinished;
        }
        return [];
    }
};
TreeProgressService.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
TreeProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TreeProgressService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/_services/workflow.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/workflow.service.ts ***!
  \***********************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let WorkflowService = class WorkflowService {
    constructor(authService) {
        this.authService = authService;
        this.WORKFLOW_EVENTS = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].workflow;
        this.userRoles$ = this.authService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(user => {
            if (user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new Set(user.roles));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new Set());
            }
        }));
    }
    checkAuthorization(path) {
        return this.userRoles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(roles => this.doCheckAuthorization(path, roles)));
    }
    doCheckAuthorization(path, roles) {
        if (path.length) {
            const entry = this.findEntry(this.WORKFLOW_EVENTS, path);
            if (entry && entry['permittedRoles'] && roles.size) {
                return entry.permittedRoles.some(permittedRole => roles.has(permittedRole));
            }
            return false;
        }
        return false;
    }
    /**
     * Recursively find workflow-map entry based on the path strings
     */
    findEntry(currentObject, keys, index = 0) {
        const key = keys[index];
        if (currentObject[key] && index < keys.length - 1) {
            return this.findEntry(currentObject[key], keys, index + 1);
        }
        else if (currentObject[key] && index === keys.length - 1) {
            return currentObject[key];
        }
        else {
            return false;
        }
    }
};
WorkflowService.ctorParameters = () => [
    { type: ___WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
WorkflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkflowService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const CONFIG = {
    N: 100,
    SPECTRUM: [
        // "rgb(222,237,250)"
        'rgb(176,212,243)',
        'rgb(128,186,236)',
        'rgb(77,158,228)',
        'rgb(38,137,223)',
        'rgb(0,116,217)',
        'rgb(0,106,197)'
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default.a, 'ru');
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'ru' },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
            // provider used to create fake backend
            _helpers__WEBPACK_IMPORTED_MODULE_13__["fakeBackendProvider"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  width: 80%;\n  height: 400px;\n  perspective: 500px;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n}\n.carousel .carousel-item {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9BOlxcZWxpdGVcXEhhY2tQcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJvdXNlbFxcY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG5cclxuICAmIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iLCIuY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcGVyc3BlY3RpdmU6IDUwMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG59XG4uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min */ "./node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_2__);



let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        const instances = materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_2__["Carousel"].init(this.carousel.nativeElement, null);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], CarouselComponent.prototype, "carousel", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/carousel/carousel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.scss */ "./src/app/components/carousel/carousel.component.scss")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/components/carousel/carousel.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/carousel/carousel.module.ts ***!
  \********************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.component */ "./src/app/components/carousel/carousel.component.ts");




let CarouselModule = class CarouselModule {
};
CarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]]
    })
], CarouselModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  width: 100vw;\n  padding-bottom: 20px;\n  position: relative;\n  background-color: #222329;\n}\n.footer__copyright {\n  padding-top: 40px;\n  color: white;\n}\n* {\n  box-sizing: unset;\n}\n.menu {\n  position: absolute;\n  display: inline-block;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  list-style-type: none;\n}\nul.menu li {\n  display: inline-block;\n  margin: 10px;\n}\nul.menu li a i.fa {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  text-align: center;\n  line-height: 30px;\n  padding: 10px;\n  border-radius: 40px;\n  color: #424242;\n  position: relative;\n  transition: all ease 0.2s;\n}\nul.menu li a i.fa::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  border-radius: 40px;\n  background-color: #9E9E9E;\n}\nul.menu li a i.fa:hover {\n  color: #fff;\n}\nul.menu li a i.fa:hover::after {\n  -webkit-animation: animate ease 0.6s forwards;\n          animation: animate ease 0.6s forwards;\n}\nul.menu li a i.fa-facebook:hover::after {\n  background-color: #3b5998;\n}\nul.menu li a i.fa-twitter:hover::after {\n  background-color: #00aced;\n}\nul.menu li a i.fa-instagram:hover::after {\n  background-color: #8a3ab9;\n}\nul.menu li a i.fa-youtube-play:hover::after {\n  background-color: #ff0000;\n}\n@-webkit-keyframes animate {\n  0%, 20% {\n    transform: scale(1);\n    border-radius: 40px;\n    background-color: #9E9E9E;\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  40% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n    border-radius: 10px;\n  }\n  60%, 100% {\n    transform: scale(1);\n    border-radius: 5px;\n  }\n}\n@keyframes animate {\n  0%, 20% {\n    transform: scale(1);\n    border-radius: 40px;\n    background-color: #9E9E9E;\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  40% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n    border-radius: 10px;\n  }\n  60%, 100% {\n    transform: scale(1);\n    border-radius: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBUmtCO0FDS3BCO0FES0U7RUFDRSxpQkFBQTtFQUNBLFlBWGE7QUNRakI7QURPQTtFQUNFLGlCQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ0pGO0FETUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNIRjtBREtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FESUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNERjtBREdBO0VBQ0UsV0FBQTtBQ0FGO0FERUE7RUFDRSw2Q0FBQTtVQUFBLHFDQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0FDRUY7QURBQTtFQUNFLHlCQUFBO0FDR0Y7QUREQTtFQUNFLHlCQUFBO0FDSUY7QURGQTtFQUNFLHlCQUFBO0FDS0Y7QURGQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VDS0Y7RURIQTtJQUNFLHFCQUFBO0VDS0Y7RURIQTtJQUNFLHFCQUFBO0VDS0Y7RURIQTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUNLRjtFREhBO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtFQ0tGO0FBQ0Y7QUR4QkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQ0tGO0VESEE7SUFDRSxxQkFBQTtFQ0tGO0VESEE7SUFDRSxxQkFBQTtFQ0tGO0VESEE7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VDS0Y7RURIQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvb3Rlci1iYWNrZ3JvdW5kOiAjMjIyMzI5O1xyXG4kbmF2LXRleHQtY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcbi5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1iYWNrZ3JvdW5kO1xyXG5cclxuICAmX19jb3B5cmlnaHQge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogJG5hdi10ZXh0LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogdW5zZXQ7O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbnVsLm1lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxudWwubWVudSBsaSBhIGkuZmEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBjb2xvcjogIzQyNDI0MjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcclxufVxyXG51bC5tZW51IGxpIGEgaS5mYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlFOUU5RTtcclxufVxyXG51bC5tZW51IGxpIGEgaS5mYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxudWwubWVudSBsaSBhIGkuZmE6aG92ZXI6OmFmdGVyIHtcclxuICBhbmltYXRpb246IGFuaW1hdGUgZWFzZSAwLjZzIGZvcndhcmRzO1xyXG59XHJcbnVsLm1lbnUgbGkgYSBpLmZhLWZhY2Vib29rOmhvdmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG51bC5tZW51IGxpIGEgaS5mYS10d2l0dGVyOmhvdmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcclxufVxyXG51bC5tZW51IGxpIGEgaS5mYS1pbnN0YWdyYW06aG92ZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGEzYWI5O1xyXG59XHJcbnVsLm1lbnUgbGkgYSBpLmZhLXlvdXR1YmUtcGxheTpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgMCUsMjAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlFOUU5RTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICA2MCUsMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmZvb3RlciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjMyOTtcbn1cbi5mb290ZXJfX2NvcHlyaWdodCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiB1bnNldDtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG51bC5tZW51IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbnVsLm1lbnUgbGkgYSBpLmZhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogIzQyNDI0MjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xufVxuXG51bC5tZW51IGxpIGEgaS5mYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlFOUU5RTtcbn1cblxudWwubWVudSBsaSBhIGkuZmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxudWwubWVudSBsaSBhIGkuZmE6aG92ZXI6OmFmdGVyIHtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIGVhc2UgMC42cyBmb3J3YXJkcztcbn1cblxudWwubWVudSBsaSBhIGkuZmEtZmFjZWJvb2s6aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cblxudWwubWVudSBsaSBhIGkuZmEtdHdpdHRlcjpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkO1xufVxuXG51bC5tZW51IGxpIGEgaS5mYS1pbnN0YWdyYW06aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhM2FiOTtcbn1cblxudWwubWVudSBsaSBhIGkuZmEteW91dHViZS1wbGF5OmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlLCAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RTlFO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIDYwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link-holder {\n  border: 3px solid #222329;\n  min-height: 40px;\n  align-items: center;\n  display: flex;\n  padding: 0 10px;\n  margin: 0 20px;\n  height: 40px;\n  cursor: pointer;\n  color: white;\n  font-size: 1.2em;\n  font-weight: 100;\n}\n\n.link-holder:hover {\n  border-bottom: 3px solid #3f51b5;\n  border-radius: 2px;\n}\n\n.link-holder__active {\n  border-bottom: 3px solid #3f51b5;\n  border-radius: 2px;\n}\n\n.login-btn__icon {\n  height: 30px;\n  width: 40px;\n  background-image: url('login.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 60%;\n}\n\n.login-btn__text {\n  color: white;\n  font-weight: 100;\n  padding-right: 12px;\n}\n\n.menu {\n  display: flex;\n  align-items: center;\n}\n\n.menu .menu-icon {\n  height: 30px;\n  width: 40px;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 48%;\n}\n\n.menu .menu-text {\n  color: white;\n  font-weight: 100;\n  padding-right: 12px;\n}\n\n.header {\n  padding: 30px 89.5px 26px;\n  background-color: #222329;\n}\n\n.nav {\n  display: flex;\n}\n\n.nav__logo {\n  width: 250px;\n  height: 52px;\n  background: url('logo-education.svg');\n  background-position: center;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFiZTtFQWNmLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNKRjs7QURPQTtFQUNFLFlBdENlO0VBdUNmLGdCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9FO0VBQ0UsWUF6RGE7RUEwRGIsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFNBO0VBQ0UseUJBQUE7RUFDQSx5QkFsRWtCO0FDNERwQjs7QURTQTtFQUNFLGFBQUE7QUNORjs7QURRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWJhY2tncm91bmQ6ICMyMjIzMjk7XHJcbiRuYXYtdGV4dC1jb2xvcjogd2hpdGU7XHJcbiRhY2NlbnQ6ICMzZjUxYjU7XHJcblxyXG5cclxuLmxpbmstaG9sZGVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkaGVhZGVyLWJhY2tncm91bmQ7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRuYXYtdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5saW5rLWhvbGRlcjpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubGluay1ob2xkZXJfX2FjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhY2NlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubG9naW4tYnRuX19pY29uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xvZ2luLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcclxufVxyXG5cclxuLmxvZ2luLWJ0bl9fdGV4dCB7XHJcbiAgY29sb3I6ICRuYXYtdGV4dC1jb2xvcjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5tZW51LWljb24ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctZG93bi5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0OCU7XHJcbiAgfVxyXG5cclxuICAubWVudS10ZXh0IHtcclxuICAgIGNvbG9yOiAkbmF2LXRleHQtY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDMwcHggODkuNXB4IDI2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iYWNrZ3JvdW5kO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmX19sb2dvIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xvZ28tZWR1Y2F0aW9uLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iLCIubGluay1ob2xkZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCAjMjIyMzI5O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubGluay1ob2xkZXI6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNmNTFiNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubGluay1ob2xkZXJfX2FjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjM2Y1MWI1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5sb2dpbi1idG5fX2ljb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvbG9naW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xufVxuXG4ubG9naW4tYnRuX190ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudSAubWVudS1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWRvd24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNDglO1xufVxuLm1lbnUgLm1lbnUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDMwcHggODkuNXB4IDI2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIzMjk7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5hdl9fbG9nbyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvbG9nby1lZHVjYXRpb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() { }
    onLogout() {
        this.authService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
        ],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/components/map-skills/map-skills.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/map-skills/map-skills.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwLXNraWxscy9tYXAtc2tpbGxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/map-skills/map-skills.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/map-skills/map-skills.component.ts ***!
  \***************************************************************/
/*! exports provided: MapSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSkillsComponent", function() { return MapSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");



let MapSkillsComponent = class MapSkillsComponent {
    constructor(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 800, height: 600 };
    }
    onResize(event) {
        this.graph.initSimulation(this.options);
    }
    ngOnInit() {
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    }
    ngAfterViewInit() {
        this.graph.initSimulation(this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(d => {
            this.ref.markForCheck();
        });
    }
    get options() {
        return (this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
};
MapSkillsComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodes')
], MapSkillsComponent.prototype, "nodes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('links')
], MapSkillsComponent.prototype, "links", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], MapSkillsComponent.prototype, "onResize", null);
MapSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-skills',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [appZoomableOf]="svg">
        <g [appLinkVisual]="link" *ngFor="let link of links"></g>
        <g
          [appNodeVisual]="node"
          *ngFor="let node of nodes"
          [appDraggableNode]="node"
          [appDraggableInGraph]="graph"
        ></g>
      </g>
    </svg>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-skills.component.scss */ "./src/app/components/map-skills/map-skills.component.scss")).default]
    })
], MapSkillsComponent);



/***/ }),

/***/ "./src/app/components/map-skills/map-skills.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/map-skills/map-skills.module.ts ***!
  \************************************************************/
/*! exports provided: MapSkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSkillsModule", function() { return MapSkillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _map_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-skills.component */ "./src/app/components/map-skills/map-skills.component.ts");
/* harmony import */ var _visuals_node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visuals/node-visual/node-visual.component */ "./src/app/components/map-skills/visuals/node-visual/node-visual.component.ts");
/* harmony import */ var _visuals_link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visuals/link-visual/link-visual.component */ "./src/app/components/map-skills/visuals/link-visual/link-visual.component.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_helpers */ "./src/app/_helpers/index.ts");










let MapSkillsModule = class MapSkillsModule {
};
MapSkillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_map_skills_component__WEBPACK_IMPORTED_MODULE_5__["MapSkillsComponent"], _helpers__WEBPACK_IMPORTED_MODULE_9__["DraggableDirective"], _helpers__WEBPACK_IMPORTED_MODULE_9__["ZoomableDirective"], _visuals_node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_6__["NodeVisualComponent"], _visuals_link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_7__["LinkVisualComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_map_skills_component__WEBPACK_IMPORTED_MODULE_5__["MapSkillsComponent"]],
        providers: [src_app_services__WEBPACK_IMPORTED_MODULE_8__["D3Service"]]
    })
], MapSkillsModule);



/***/ }),

/***/ "./src/app/components/map-skills/visuals/link-visual/link-visual.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/map-skills/visuals/link-visual/link-visual.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link {\n  stroke-width: 3.25;\n  stroke: #ef6046;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAtc2tpbGxzL3Zpc3VhbHMvbGluay12aXN1YWwvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFwLXNraWxsc1xcdmlzdWFsc1xcbGluay12aXN1YWxcXGxpbmstdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hcC1za2lsbHMvdmlzdWFscy9saW5rLXZpc3VhbC9saW5rLXZpc3VhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAtc2tpbGxzL3Zpc3VhbHMvbGluay12aXN1YWwvbGluay12aXN1YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAzLjI1O1xyXG4gIHN0cm9rZTogcmdiKDIzOSwgOTYsIDcwKTtcclxufVxyXG4iLCIubGluayB7XG4gIHN0cm9rZS13aWR0aDogMy4yNTtcbiAgc3Ryb2tlOiAjZWY2MDQ2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/map-skills/visuals/link-visual/link-visual.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/map-skills/visuals/link-visual/link-visual.component.ts ***!
  \************************************************************************************/
/*! exports provided: LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return LinkVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkVisualComponent = class LinkVisualComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appLinkVisual')
], LinkVisualComponent.prototype, "link", void 0);
LinkVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[appLinkVisual]',
        template: `
    <svg:line
      class="link"
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
    ></svg:line>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link-visual.component.scss */ "./src/app/components/map-skills/visuals/link-visual/link-visual.component.scss")).default]
    })
], LinkVisualComponent);



/***/ }),

/***/ "./src/app/components/map-skills/visuals/node-visual/node-visual.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/map-skills/visuals/node-visual/node-visual.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".node {\n  cursor: pointer;\n  transition: stroke-width 0.1s ease-out, fill 0.1s ease-out, stroke 0.1s ease-out;\n}\n\n.node--disabled {\n  opacity: 0.1;\n}\n\n.node-name {\n  font-family: \"Lato\";\n  text-anchor: middle;\n  alignment-baseline: central;\n  font-weight: 300;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAtc2tpbGxzL3Zpc3VhbHMvbm9kZS12aXN1YWwvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFwLXNraWxsc1xcdmlzdWFsc1xcbm9kZS12aXN1YWxcXG5vZGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hcC1za2lsbHMvdmlzdWFscy9ub2RlLXZpc3VhbC9ub2RlLXZpc3VhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnRkFBQTtBQ0NGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC1za2lsbHMvdmlzdWFscy9ub2RlLXZpc3VhbC9ub2RlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLXdpZHRoIDAuMXMgZWFzZS1vdXQsIGZpbGwgMC4xcyBlYXNlLW91dCwgc3Ryb2tlIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gIC8vIHN0cm9rZTogd2hpdGU7XHJcbiAgLy8gc3Ryb2tlLXdpZHRoOiAwLjI1O1xyXG59XHJcblxyXG4ubm9kZS0tZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG5cclxuLm5vZGUtbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gIGFsaWdubWVudC1iYXNlbGluZTogY2VudHJhbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcbiIsIi5ub2RlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBzdHJva2Utd2lkdGggMC4xcyBlYXNlLW91dCwgZmlsbCAwLjFzIGVhc2Utb3V0LCBzdHJva2UgMC4xcyBlYXNlLW91dDtcbn1cblxuLm5vZGUtLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4ubm9kZS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IGNlbnRyYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZpbGw6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/map-skills/visuals/node-visual/node-visual.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/map-skills/visuals/node-visual/node-visual.component.ts ***!
  \************************************************************************************/
/*! exports provided: NodeVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return NodeVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_tree_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/tree-progress.service */ "./src/app/_services/tree-progress.service.ts");




let NodeVisualComponent = class NodeVisualComponent {
    constructor(router, treeProgress) {
        this.router = router;
        this.treeProgress = treeProgress;
    }
    checkCompleted() {
        return this.treeProgress.getCurrentProgress().includes(Number.parseInt(this.node.id, 10));
    }
    evaluateImageUrl() {
        return `url('#pat${this.node.id}')`;
    }
    onDoubleClick(event) {
        event.stopPropagation();
        this.router.navigate(['/test/' + this.node.chalengeId]);
    }
};
NodeVisualComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_tree_progress_service__WEBPACK_IMPORTED_MODULE_3__["TreeProgressService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appNodeVisual')
], NodeVisualComponent.prototype, "node", void 0);
NodeVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[appNodeVisual]',
        template: `
    <svg:g
      [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
      (dblclick)="onDoubleClick($event)"
      matTooltip="{{ this.node.name }} // {{ this.node.result }} баллов // Кликните два раза для перехода на урок."
    >
      <defs>
        <pattern [attr.id]="'pat' + node.id" [attr.x]="0" [attr.y]="0" width="100%" height="100%">
          <image
            xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.x]="node.r / 2"
            [attr.y]="node.r / 2"
            [attr.width]="node.r"
            [attr.height]="node.r"
            [attr.xlink:href]="node.imageUrl"
          ></image>
        </pattern>
      </defs>
      <svg:circle
        class="node"
        [class.node--disabled]="!checkCompleted()"
        [attr.fill]="evaluateImageUrl()"
        cx="0"
        cy="0"
        [attr.r]="node.r"
      ></svg:circle>

      <svg:text class="node-name" [attr.font-size]="node.fontSize">
        {{ node.id }}
      </svg:text>
    </svg:g>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./node-visual.component.scss */ "./src/app/components/map-skills/visuals/node-visual/node-visual.component.scss")).default]
    })
], NodeVisualComponent);



/***/ }),

/***/ "./src/app/components/people-skills/people-skills.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/people-skills/people-skills.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVvcGxlLXNraWxscy9wZW9wbGUtc2tpbGxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/people-skills/people-skills.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/people-skills/people-skills.component.ts ***!
  \*********************************************************************/
/*! exports provided: PeopleSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleSkillsComponent", function() { return PeopleSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");



let PeopleSkillsComponent = class PeopleSkillsComponent {
    constructor(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 800, height: 600 };
    }
    onResize(event) {
        this.graph.initSimulation(this.options);
    }
    ngOnInit() {
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    }
    ngAfterViewInit() {
        this.graph.initSimulation(this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(d => {
            this.ref.markForCheck();
        });
    }
    get options() {
        return (this._options = {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
};
PeopleSkillsComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["D3Service"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodes')
], PeopleSkillsComponent.prototype, "nodes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('links')
], PeopleSkillsComponent.prototype, "links", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], PeopleSkillsComponent.prototype, "onResize", null);
PeopleSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-skills',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: `
      <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
          <g [appZoomableOf2]="svg">
              <g [appLinkVisual]="link" *ngFor="let link of links"></g>
              <g
                      [appNodeVisual]="node"
                      *ngFor="let node of nodes"
                      [appDraggableNode2]="node"
                      [appDraggableInGraph2]="graph"
              ></g>
          </g>
      </svg>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people-skills.component.scss */ "./src/app/components/people-skills/people-skills.component.scss")).default]
    })
], PeopleSkillsComponent);



/***/ }),

/***/ "./src/app/components/people-skills/people-skills.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/people-skills/people-skills.module.ts ***!
  \******************************************************************/
/*! exports provided: PeopleSkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleSkillsModule", function() { return PeopleSkillsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _people_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-skills.component */ "./src/app/components/people-skills/people-skills.component.ts");
/* harmony import */ var _visuals_node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visuals/node-visual/node-visual.component */ "./src/app/components/people-skills/visuals/node-visual/node-visual.component.ts");
/* harmony import */ var _visuals_link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visuals/link-visual/link-visual.component */ "./src/app/components/people-skills/visuals/link-visual/link-visual.component.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _helpers_2zoomable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_helpers/2zoomable.directive */ "./src/app/_helpers/2zoomable.directive.ts");
/* harmony import */ var _helpers_2draggable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_helpers/2draggable.directive */ "./src/app/_helpers/2draggable.directive.ts");











let PeopleSkillsModule = class PeopleSkillsModule {
};
PeopleSkillsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_people_skills_component__WEBPACK_IMPORTED_MODULE_5__["PeopleSkillsComponent"], _visuals_node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_6__["NodeVisualComponent"], _helpers_2zoomable_directive__WEBPACK_IMPORTED_MODULE_9__["ZoomableDirective2"], _helpers_2draggable_directive__WEBPACK_IMPORTED_MODULE_10__["DraggableDirective2"], _visuals_link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_7__["LinkVisualComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_people_skills_component__WEBPACK_IMPORTED_MODULE_5__["PeopleSkillsComponent"]],
        providers: [src_app_services__WEBPACK_IMPORTED_MODULE_8__["D3Service"]]
    })
], PeopleSkillsModule);



/***/ }),

/***/ "./src/app/components/people-skills/visuals/link-visual/link-visual.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/people-skills/visuals/link-visual/link-visual.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link {\n  stroke-width: 3.25;\n  stroke: #ef6046;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUtc2tpbGxzL3Zpc3VhbHMvbGluay12aXN1YWwvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVvcGxlLXNraWxsc1xcdmlzdWFsc1xcbGluay12aXN1YWxcXGxpbmstdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Blb3BsZS1za2lsbHMvdmlzdWFscy9saW5rLXZpc3VhbC9saW5rLXZpc3VhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUtc2tpbGxzL3Zpc3VhbHMvbGluay12aXN1YWwvbGluay12aXN1YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAzLjI1O1xyXG4gIHN0cm9rZTogcmdiKDIzOSwgOTYsIDcwKTtcclxufVxyXG4iLCIubGluayB7XG4gIHN0cm9rZS13aWR0aDogMy4yNTtcbiAgc3Ryb2tlOiAjZWY2MDQ2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/people-skills/visuals/link-visual/link-visual.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/people-skills/visuals/link-visual/link-visual.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return LinkVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinkVisualComponent = class LinkVisualComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appLinkVisual')
], LinkVisualComponent.prototype, "link", void 0);
LinkVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[appLinkVisual]',
        template: `
    <svg:line
      class="link"
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
    ></svg:line>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link-visual.component.scss */ "./src/app/components/people-skills/visuals/link-visual/link-visual.component.scss")).default]
    })
], LinkVisualComponent);



/***/ }),

/***/ "./src/app/components/people-skills/visuals/node-visual/node-visual.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/people-skills/visuals/node-visual/node-visual.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".node {\n  cursor: pointer;\n  transition: stroke-width 0.1s ease-out, fill 0.1s ease-out, stroke 0.1s ease-out;\n}\n\n.node-name {\n  font-family: \"Lato\";\n  text-anchor: middle;\n  alignment-baseline: central;\n  font-weight: 300;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUtc2tpbGxzL3Zpc3VhbHMvbm9kZS12aXN1YWwvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVvcGxlLXNraWxsc1xcdmlzdWFsc1xcbm9kZS12aXN1YWxcXG5vZGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Blb3BsZS1za2lsbHMvdmlzdWFscy9ub2RlLXZpc3VhbC9ub2RlLXZpc3VhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnRkFBQTtBQ0NGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Blb3BsZS1za2lsbHMvdmlzdWFscy9ub2RlLXZpc3VhbC9ub2RlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2RlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLXdpZHRoIDAuMXMgZWFzZS1vdXQsIGZpbGwgMC4xcyBlYXNlLW91dCwgc3Ryb2tlIDAuMXMgZWFzZS1vdXQ7XHJcblxyXG4gIC8vIHN0cm9rZTogd2hpdGU7XHJcbiAgLy8gc3Ryb2tlLXdpZHRoOiAwLjI1O1xyXG59XHJcblxyXG4ubm9kZS1uYW1lIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgYWxpZ25tZW50LWJhc2VsaW5lOiBjZW50cmFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuIiwiLm5vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHN0cm9rZS13aWR0aCAwLjFzIGVhc2Utb3V0LCBmaWxsIDAuMXMgZWFzZS1vdXQsIHN0cm9rZSAwLjFzIGVhc2Utb3V0O1xufVxuXG4ubm9kZS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IGNlbnRyYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZpbGw6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/people-skills/visuals/node-visual/node-visual.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/people-skills/visuals/node-visual/node-visual.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NodeVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return NodeVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NodeVisualComponent = class NodeVisualComponent {
    constructor(router) {
        this.router = router;
    }
    evaluateImageUrl() {
        return `url('#pat${this.node.id}')`;
    }
    onDoubleClick(event) {
        event.stopPropagation();
        this.router.navigate(['/test/' + this.node.chalengeId]);
    }
};
NodeVisualComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appNodeVisual')
], NodeVisualComponent.prototype, "node", void 0);
NodeVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[appNodeVisual]',
        template: `
    <svg:g
      [attr.transform]="'translate(' + node.x + ',' + node.y + ')'"
      (dblclick)="onDoubleClick($event)"
      matTooltip="{{this.node.name}} // {{this.node.result}} баллов // Кликните два раза для перехода на урок."
    >
      <defs>
        <pattern [attr.id]="'pat' + node.id" [attr.x]="0" [attr.y]="0" width="100%" height="100%">
          <image
            xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.x]="node.r / 2"
            [attr.y]="node.r / 2"
            [attr.width]="node.r"
            [attr.height]="node.r"
            [attr.xlink:href]="node.imageUrl"
          ></image>
        </pattern>
      </defs>
      <svg:circle class="node" [attr.fill]="evaluateImageUrl()" cx="0" cy="0" [attr.r]="node.r"></svg:circle>

      <svg:text class="node-name" [attr.font-size]="node.fontSize">
        {{ node.id }}
      </svg:text>
    </svg:g>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./node-visual.component.scss */ "./src/app/components/people-skills/visuals/node-visual/node-visual.component.scss")).default]
    })
], NodeVisualComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-container {\n  display: flex;\n}\n\n.button {\n  font-size: 20px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  text-decoration: none;\n  background-color: #3f51b5;\n  padding: 20px 60px;\n  border-radius: 3px;\n  text-align: center;\n  position: relative;\n  font-weight: bold;\n  outline: none;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.button::after {\n  transition: background-color 0.2s ease;\n  position: absolute;\n  content: \"\";\n  height: 4px;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  opacity: 0.15;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  left: 0;\n}\n\n.button:focus, .button:hover {\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n}\n\n.button:hover {\n  background-color: #4558be;\n}\n\n.button:hover::after {\n  opacity: 0.1;\n}\n\n.button:active {\n  background-color: #3b4caa;\n  outline: none;\n}\n\n.button:active::after {\n  opacity: 0.2;\n}\n\n.button-wrapper {\n  padding-top: 30px;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-content {\n  flex-direction: column;\n  text-align: center;\n  color: #222329;\n  background-color: #f0f1f3;\n  min-height: 90%;\n}\n\n.header {\n  font-size: 40px;\n  padding: 60px 0 30px;\n}\n\n.info {\n  font-size: 24px;\n  margin-bottom: 30px;\n}\n\n.home-text {\n  font-size: 20px;\n  margin-bottom: 7.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9BOlxcZWxpdGVcXEhhY2tQcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksYUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQWhCSztFQWlCTCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0gsa0JBQUE7RUFDRyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRE1JO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsT0FBQTtBQ0pSOztBRE1JO0VBQ0kscUJBQUE7RUFDSixhQUFBO0VBQ0ksV0FBQTtBQ0pSOztBRE1JO0VBQ0kseUJBQUE7QUNKUjs7QURLUTtFQUNJLFlBQUE7QUNIWjs7QURNSTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0pKOztBREtRO0VBQ0ksWUFBQTtBQ0haOztBRFFBO0VBQ0ksaUJBMURLO0VBMkRMLG1CQUFBO0VBQ0EsdUJBQUE7QUNMSjs7QURPQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQS9ETTtFQWdFTix5QkEvRFM7RUFnRVQsZUFBQTtBQ0pKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDSEo7O0FES0E7RUFDSSxlQUFBO0VBQ0EsbUJBM0VLO0FDeUVUOztBRElBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYWNjZW50OiAjM2Y1MWI1O1xyXG4kZ3V0dGVyOiAzMHB4O1xyXG5cclxuJG1haW4tYmc6ICMyMjIzMjk7XHJcbiRjb250ZW50LWJnOiBsaWdodGVuKCRtYWluLWJnLCA4MCUpO1xyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xyXG4gICAgcGFkZGluZzogMjBweCA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYWNjZW50LCA1MCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IC4xNTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cywgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRhY2NlbnQsIDMlKTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC4xMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhY2NlbnQsIDMlKTtcclxuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjIwO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuXHJcbi5idXR0b24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogJGd1dHRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaG9tZS1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJG1haW4tYmc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1iZztcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6ICRndXR0ZXIqMiAwICRndXR0ZXI7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJGd1dHRlcjtcclxufVxyXG4uaG9tZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206ICRndXR0ZXIvNDtcclxufSIsIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC4xNTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICBsZWZ0OiAwO1xufVxuLmJ1dHRvbjpmb2N1cywgLmJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NThiZTtcbn1cbi5idXR0b246aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0Y2FhO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ1dHRvbjphY3RpdmU6OmFmdGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRlbnQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyMzI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMWYzO1xuICBtaW4taGVpZ2h0OiA5MCU7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmc6IDYwcHggMCAzMHB4O1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhvbWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");




let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app__container {\n  min-height: 100vh;\n  flex-direction: column;\n}\n.app__container > * + * {\n  margin-top: calc(2 * var(--app-medium-gap));\n}\n.login__form {\n  display: flex;\n  flex-direction: column;\n}\n.login__button--accept {\n  display: flex;\n  justify-content: center;\n}\n.login__error {\n  margin-top: var(--app-small-gap);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLDJDQUFBO0FDQ0o7QURJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNGSjtBREtFO0VBQ0UsZ0NBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9fY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAmPiorKiB7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDIgKiB2YXIoLS1hcHAtbWVkaXVtLWdhcCkpO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAmX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uLS1hY2NlcHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fZXJyb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tYXBwLXNtYWxsLWdhcCk7XHJcbiAgfVxyXG59IiwiLmFwcF9fY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwX19jb250YWluZXIgPiAqICsgKiB7XG4gIG1hcmdpbi10b3A6IGNhbGMoMiAqIHZhcigtLWFwcC1tZWRpdW0tZ2FwKSk7XG59XG5cbi5sb2dpbl9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW5fX2J1dHRvbi0tYWNjZXB0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW5fX2Vycm9yIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tYXBwLXNtYWxsLWdhcCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");











let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
        ],
        exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/map/landing/landing.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/map/landing/landing.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page__container {\n  background-image: url('star.gif');\n  width: 100vw;\n  height: 105%;\n  position: absolute;\n  z-index: -1;\n  opacity: 0.85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL2xhbmRpbmcvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXG1hcFxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VfX2NvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZ2lmcy9zdGFyLmdpZlwiKTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBvcGFjaXR5OiAwLjg1O1xyXG59XHJcbiIsIiNwYWdlX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZ2lmcy9zdGFyLmdpZlwiKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuODU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/map/landing/landing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/map/landing/landing.component.ts ***!
  \********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LandingComponent = class LandingComponent {
    constructor() {
        this.countX = 0;
        this.countY = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.moveEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove');
        this.moveEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((e) => {
            this.countX += e.movementX / 15;
            this.countY += e.movementY / 15;
            document.getElementById('page__container').style.backgroundPositionX = `${this.countX}px`;
            document.getElementById('page__container').style.backgroundPositionY = `${this.countY}px`;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/map/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/pages/map/map.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/map/map.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_data/map */ "./src/app/_data/map.ts");





let MapComponent = class MapComponent {
    constructor() {
        this.nodes = [];
        this.links = [];
        const nodesTree = _data_map__WEBPACK_IMPORTED_MODULE_4__["MAP_DEFAULT"].nodes;
        const linksTree = _data_map__WEBPACK_IMPORTED_MODULE_4__["MAP_DEFAULT"].links;
        const N = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["default"].N;
        const getIndex = number => number - 1;
        /** constructing the nodes array */
        for (let i = 0; i < nodesTree.length; i++) {
            this.nodes.push(new src_app_models__WEBPACK_IMPORTED_MODULE_2__["EducationNode"](i, nodesTree[i].r, nodesTree[i].fontSize, nodesTree[i].iamgeUrl, nodesTree[i].name, nodesTree[i].result, nodesTree[i].challengeId));
        }
        for (let i = 0; i < linksTree.length; i++) {
            /** increasing connections toll on connecting nodes */
            const sourceID = nodesTree.reduce((res, el, index) => {
                if (el.name === linksTree[i].source) {
                    return index;
                }
                return res;
            }, 0);
            const targetID = nodesTree.reduce((res, el, index) => {
                if (el.name === linksTree[i].target) {
                    return index;
                }
                return res;
            }, 0);
            /** connecting the nodes before starting the simulation */
            this.links.push(new src_app_models__WEBPACK_IMPORTED_MODULE_2__["EducationLink"](sourceID, targetID));
        }
    }
};
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/pages/map/map.component.scss")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/map/landing/landing.component.ts");
/* harmony import */ var _components_map_skills_map_skills_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/map-skills/map-skills.module */ "./src/app/components/map-skills/map-skills.module.ts");






let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_map_skills_map_skills_module__WEBPACK_IMPORTED_MODULE_5__["MapSkillsModule"]]
    })
], MapModule);



/***/ }),

/***/ "./src/app/pages/page-routing/page-routing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-routing/page-routing.component.ts ***!
  \**************************************************************/
/*! exports provided: PageRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingComponent", function() { return PageRoutingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageRoutingComponent = class PageRoutingComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
PageRoutingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-routing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-routing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-routing/page-routing.component.html")).default
    })
], PageRoutingComponent);



/***/ }),

/***/ "./src/app/pages/page-routing/page-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-routing/page-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_routing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-routing.component */ "./src/app/pages/page-routing/page-routing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test/test.component */ "./src/app/pages/test/test.component.ts");
/* harmony import */ var _map_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/landing/landing.component */ "./src/app/pages/map/landing/landing.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rating/rating.component */ "./src/app/pages/rating/rating.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tasks/tasks.component */ "./src/app/pages/tasks/tasks.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../people/people.component */ "./src/app/pages/people/people.component.ts");













const routes = [
    {
        path: '',
        component: _page_routing_component__WEBPACK_IMPORTED_MODULE_3__["PageRoutingComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
            { path: 'landing', component: _map_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: 'test/:id', component: _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"] },
            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"] },
            { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_12__["PeopleComponent"] },
            { path: 'rate', component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"] },
            { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] }
        ]
    }
];
let PageRoutingModule = class PageRoutingModule {
};
PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _page_routing_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-routing/page-routing.module */ "./src/app/pages/page-routing/page-routing.module.ts");
/* harmony import */ var _page_routing_page_routing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-routing/page-routing.component */ "./src/app/pages/page-routing/page-routing.component.ts");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test/test.component */ "./src/app/pages/test/test.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/carousel/carousel.module */ "./src/app/components/carousel/carousel.module.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/pages/rating/rating.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/pages/tasks/tasks.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _people_people_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./people/people.module */ "./src/app/pages/people/people.module.ts");


















let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // tslint:disable-next-line:max-line-length
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"], _page_routing_page_routing_component__WEBPACK_IMPORTED_MODULE_5__["PageRoutingComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"], _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_15__["TasksComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_12__["MapModule"],
            _people_people_module__WEBPACK_IMPORTED_MODULE_17__["PeopleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _page_routing_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["PageRoutingModule"],
            _components_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_16__["HomeModule"]
        ],
        exports: [_test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pages/people/landing/landing.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/people/landing/landing.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page__container {\n  background-color: rgba(118, 96, 56, 0.54);\n  background-image: linear-gradient(rgba(29, 39, 48, 0.57) 1px, transparent 1px), linear-gradient(90deg, rgba(67, 87, 102, 0.43) 1px, transparent 1px), linear-gradient(rgba(41, 82, 110, 0.44) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 93, 125, 0.55) 1px, transparent 1px), linear-gradient(rgba(81, 0, 94, 0.49) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 78, 105, 0.41) 1px, transparent 1px);\n  background-size: 200px 200px, 200px 200px, 20px 20px, 20px 20px, 50px 50px, 50px 50px;\n  background-position: -1px -1px, -1px -1px, 0 0, 0 0, -1px -1px, -1px -1px;\n  width: 100vw;\n  height: 105%;\n  position: absolute;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVvcGxlL2xhbmRpbmcvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHBlb3BsZVxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVvcGxlL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsNFpBQ0U7RUFNRixxRkFDRTtFQU1GLHlFQUNFO0VBTUYsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZW9wbGUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VfX2NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTgsIDk2LCA1NiwgMC41NCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI5LCAzOSwgNDgsIDAuNTcpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2NywgODcsIDEwMiwgMC40MykgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoNDEsIDgyLCAxMTAsIDAuNDQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0NiwgOTMsIDEyNSwgMC41NSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoODEsIDAsIDk0LCAwLjQ5KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNTIsIDc4LCAxMDUsIDAuNDEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAyMDBweCAyMDBweCxcclxuICAgIDIwMHB4IDIwMHB4LFxyXG4gICAgMjBweCAyMHB4LFxyXG4gICAgMjBweCAyMHB4LFxyXG4gICAgNTBweCA1MHB4LFxyXG4gICAgNTBweCA1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAtMXB4IC0xcHgsXHJcbiAgICAtMXB4IC0xcHgsXHJcbiAgICAwIDAsXHJcbiAgICAwIDAsXHJcbiAgICAtMXB4IC0xcHgsXHJcbiAgICAtMXB4IC0xcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTA1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiIsIiNwYWdlX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExOCwgOTYsIDU2LCAwLjU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjksIDM5LCA0OCwgMC41NykgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjcsIDg3LCAxMDIsIDAuNDMpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgbGluZWFyLWdyYWRpZW50KHJnYmEoNDEsIDgyLCAxMTAsIDAuNDQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQ2LCA5MywgMTI1LCAwLjU1KSAxcHgsIHRyYW5zcGFyZW50IDFweCksIGxpbmVhci1ncmFkaWVudChyZ2JhKDgxLCAwLCA5NCwgMC40OSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNTIsIDc4LCAxMDUsIDAuNDEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweCwgMjAwcHggMjAwcHgsIDIwcHggMjBweCwgMjBweCAyMHB4LCA1MHB4IDUwcHgsIDUwcHggNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4LCAtMXB4IC0xcHgsIDAgMCwgMCAwLCAtMXB4IC0xcHgsIC0xcHggLTFweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/people/landing/landing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/people/landing/landing.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LandingComponent = class LandingComponent {
    constructor() {
        this.countX = 0;
        this.countY = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.moveEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove');
        this.moveEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((e) => {
            this.countX += e.movementX / 15;
            this.countY += e.movementY / 15;
            document.getElementById('page__container').style.backgroundPositionX = `${this.countX}px`;
            document.getElementById('page__container').style.backgroundPositionY = `${this.countY}px`;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/people/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/pages/people/people.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/people/people.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/people/people.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/people/people.component.ts ***!
  \**************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var _data_people__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_data/people */ "./src/app/_data/people.ts");





let PeopleComponent = class PeopleComponent {
    constructor() {
        this.nodes = [];
        this.links = [];
        const nodesTree = _data_people__WEBPACK_IMPORTED_MODULE_4__["PEOPLE_DEFAULT"].nodes;
        const linksTree = _data_people__WEBPACK_IMPORTED_MODULE_4__["PEOPLE_DEFAULT"].linksP;
        const N = src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["default"].N;
        const getIndex = number => number - 1;
        /** constructing the nodes array */
        for (let i = 0; i < nodesTree.length; i++) {
            this.nodes.push(new src_app_models__WEBPACK_IMPORTED_MODULE_2__["EducationNode"](i, nodesTree[i].r, nodesTree[i].fontSize, nodesTree[i].iamgeUrl, nodesTree[i].name, nodesTree[i].result, nodesTree[i].challengeId));
        }
        for (let i = 0; i < linksTree.length; i++) {
            /** increasing connections toll on connecting nodes */
            const sourceID = nodesTree.reduce((res, el, index) => {
                if (el.name === linksTree[i].source) {
                    return index;
                }
                return res;
            }, 0);
            const targetID = nodesTree.reduce((res, el, index) => {
                if (el.name === linksTree[i].target) {
                    return index;
                }
                return res;
            }, 0);
            /** connecting the nodes before starting the simulation */
            this.links.push(new src_app_models__WEBPACK_IMPORTED_MODULE_2__["EducationLink"](sourceID, targetID));
        }
    }
};
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.scss */ "./src/app/pages/people/people.component.scss")).default]
    })
], PeopleComponent);



/***/ }),

/***/ "./src/app/pages/people/people.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/people/people.module.ts ***!
  \***********************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/people/landing/landing.component.ts");
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people.component */ "./src/app/pages/people/people.component.ts");
/* harmony import */ var _components_people_skills_people_skills_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/people-skills/people-skills.module */ "./src/app/components/people-skills/people-skills.module.ts");






let PeopleModule = class PeopleModule {
};
PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_people_skills_people_skills_module__WEBPACK_IMPORTED_MODULE_5__["PeopleSkillsModule"]]
    })
], PeopleModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  display: grid;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.profile {\n  font-size: 18px;\n  color: #222329;\n  padding: 30px;\n  background-color: #f0f1f3;\n}\n\n.img-wrapper {\n  margin-right: 30px;\n  height: 100px;\n  width: 100px;\n  overflow: hidden;\n  border-radius: 10em;\n  background-size: cover;\n  background-position: center;\n}\n\n.button {\n  font-size: 18px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  text-decoration: none;\n  background-color: #3f51b5;\n  padding: 20px 60px;\n  border-radius: 3px;\n  text-align: center;\n  position: relative;\n  font-weight: bold;\n  outline: none;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.button::after {\n  transition: background-color 0.2s ease;\n  position: absolute;\n  content: \"\";\n  height: 4px;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  opacity: 0.15;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  left: 0;\n}\n\n.button:focus, .button:hover {\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n}\n\n.button:hover {\n  background-color: #4558be;\n}\n\n.button:hover::after {\n  opacity: 0.1;\n}\n\n.button:active {\n  background-color: #3b4caa;\n  outline: none;\n}\n\n.button:active::after {\n  opacity: 0.2;\n}\n\n.section {\n  margin-bottom: 60px;\n}\n\n.section_about-you {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.section-title {\n  padding-bottom: 30px;\n  font-size: 40px;\n  font-weight: bold;\n  display: flex;\n  width: 100%;\n}\n\n.section-title:before, .section-title:after {\n  content: \"\";\n  border-bottom: 2px solid #222329;\n  margin: auto 0;\n}\n\n.section-title:before {\n  width: 50px;\n  margin-right: 30px;\n}\n\n.section-title:after {\n  flex-grow: 1;\n  margin-left: 30px;\n}\n\n.person-card {\n  align-items: center;\n  padding: 5px;\n  border-radius: 10em;\n  background-color: orange;\n}\n\n.user-name {\n  font-size: 28px;\n  font-weight: bold;\n  padding-bottom: 7.5px;\n}\n\n.user-name span:nth-last-child(1) {\n  margin-left: 0.5em;\n}\n\n.rate {\n  align-items: center;\n}\n\n.rate-title {\n  margin-right: 0.5em;\n}\n\n.rate-star {\n  color: #f0f1f3;\n}\n\n.user-information {\n  flex-direction: column;\n  margin: 0 30px;\n}\n\n.main-info {\n  color: #f0f1f3;\n  border-radius: 3px;\n  margin-top: 30px;\n  padding: 30px 0;\n  width: 100%;\n  justify-content: space-around;\n  background-color: #3f51b5;\n}\n\n.main-info span {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.achievement {\n  padding: 30px;\n  text-align: center;\n  margin: 0 30px;\n  border: 1px solid rgba(34, 35, 41, 0.5);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.achievement-icon {\n  font-size: 50px;\n}\n\n.achievement-name {\n  margin: 15px 0;\n}\n\n.achievements-content {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  margin: 30px 0;\n  gap: 30px;\n}\n\n.btn_achievements {\n  justify-content: center;\n  align-items: center;\n}\n\n.achievement-name {\n  font-weight: bold;\n}\n\n.mat-expansion-panel {\n  background-color: #3f51b5;\n  color: #fff;\n  transition: all 0.4s ease;\n}\n\n.mat-expansion-panel.mat-expanded {\n  background-color: #fff;\n  color: #222329;\n}\n\n.mat-expansion-panel-header {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9BOlxcZWxpdGVcXEhhY2tQcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGFBQUE7QUNsQko7O0FEb0JBO0VBQ0ksYUFBQTtBQ2pCSjs7QURtQkE7RUFDSSxlQUFBO0VBQ0EsY0F4Qk07RUF5Qk4sYUEzQks7RUE0QkwseUJBeEJTO0FDUWI7O0FEa0JBO0VBQ0ksa0JBL0JLO0VBZ0NMLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNmSjs7QURpQkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBeENLO0VBeUNMLGtCQUFBO0VBQ0Esa0JBQUE7RUFDSCxrQkFBQTtFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZEo7O0FEZUk7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxPQUFBO0FDYlI7O0FEZUk7RUFDSSxxQkFBQTtFQUNKLGFBQUE7RUFDSSxXQUFBO0FDYlI7O0FEZUk7RUFDSSx5QkFBQTtBQ2JSOztBRGNRO0VBQ0ksWUFBQTtBQ1paOztBRGVJO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDYko7O0FEY1E7RUFDSSxZQUFBO0FDWlo7O0FEa0JBO0VBQ0ksbUJBQUE7QUNmSjs7QURnQkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksb0JBaEdDO0VBaUdELGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDZFI7O0FEZVE7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FDYlo7O0FEZVE7RUFDSSxXQUFBO0VBQ0Esa0JBNUdIO0FDK0ZUOztBRGVRO0VBQ0ksWUFBQTtFQUNBLGlCQWhISDtBQ21HVDs7QURpQkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQTNHUTtBQzZGWjs7QURnQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2JKOztBRGNJO0VBQ0ksa0JBQUE7QUNaUjs7QURlQTtFQUNJLG1CQUFBO0FDWko7O0FEYUk7RUFDSSxtQkFBQTtBQ1hSOztBRGNBO0VBQ0ksY0FySVM7QUMwSGI7O0FEYUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUNWSjs7QURZQTtFQUNJLGNBNUlTO0VBNklULGtCQUFBO0VBQ0EsZ0JBbEpLO0VBbUpMLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFqSks7QUN3SVQ7O0FEVUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNSUjs7QURXQTtFQUNJLGFBN0pLO0VBOEpMLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDUko7O0FEU0k7RUFDSSxlQUFBO0FDUFI7O0FEU0k7RUFDSSxjQUFBO0FDUFI7O0FEVUE7RUFDSSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxTQWhMSztBQ3lLVDs7QURTQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURRQTtFQUNJLGlCQUFBO0FDTEo7O0FEU0E7RUFDSSx5QkF2TEs7RUF3TEwsV0FBQTtFQUNBLHlCQUFBO0FDTko7O0FET0k7RUFDSSxzQkFBQTtFQUNBLGNBL0xFO0FDMExWOztBRFFBO0VBQ0ksZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBWYXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kZ3V0dGVyOiAzMHB4O1xyXG5cclxuJG1haW4tYmc6ICMyMjIzMjk7XHJcbiRtYWluLWJnLWxpZ2h0OiBsaWdodGVuKCRtYWluLWJnLCA2MCUpO1xyXG4kY29udGVudC1iZzogbGlnaHRlbigkbWFpbi1iZywgODAlKTtcclxuJGFjY2VudDogIzNmNTFiNTtcclxuJHRyYW5zaXRpb24tdGltZTogLjRzO1xyXG5cclxuLy8gQ29sb3IgZ3JhZGF0aW9uXHJcbiRjb21tb246IGdyZXk7XHJcbiRyYXJlOiBncmVlbjtcclxuJHVuaXF1ZTogJGFjY2VudDtcclxuJGVwaWM6IHJnYigxMzMsIDAsIDE2MCk7XHJcbiRsZWdlbmRhcnk6IG9yYW5nZTtcclxuXHJcbiRwZXJzb24tY2FyZC1jb2xvcjogJGxlZ2VuZGFyeTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5wcm9maWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAgJG1haW4tYmc7XHJcbiAgICBwYWRkaW5nOiAkZ3V0dGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYmc7XHJcbn1cclxuLmltZy13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogJGd1dHRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhY2NlbnQsIDUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogLjE1O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzLCAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudCwgMyUpO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGFjY2VudCwgMyUpO1xyXG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuMjA7XHJcbiAgICAgICAgfVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206ICRndXR0ZXIqMjtcclxuICAgICZfYWJvdXQteW91IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICRndXR0ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtYWluLWJnO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3V0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJGd1dHRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBlcnNvbi1jYXJkIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBlcnNvbi1jYXJkLWNvbG9yO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJGd1dHRlci80O1xyXG4gICAgc3BhbjpudGgtbGFzdC1jaGlsZCgxKSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbiAgICB9XHJcbn1cclxuLnJhdGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICB9XHJcbn1cclxuLnJhdGUtc3RhciB7XHJcbiAgICBjb2xvcjogJGNvbnRlbnQtYmc7XHJcbn1cclxuLnVzZXItaW5mb3JtYXRpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMCAkZ3V0dGVyO1xyXG59XHJcbi5tYWluLWluZm8ge1xyXG4gICAgY29sb3I6ICRjb250ZW50LWJnO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogJGd1dHRlcjtcclxuICAgIHBhZGRpbmc6ICRndXR0ZXIgMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5hY2hpZXZlbWVudCB7XHJcbiAgICBwYWRkaW5nOiAkZ3V0dGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwICRndXR0ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRtYWluLWJnLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAmLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAkZ3V0dGVyLzIgMDtcclxuICAgIH1cclxufVxyXG4uYWNoaWV2ZW1lbnRzLWNvbnRlbnQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBtYXJnaW46ICRndXR0ZXIgMDtcclxuICAgIGdhcDogJGd1dHRlcjtcclxufVxyXG4uYnRuX2FjaGlldmVtZW50cyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFjaGlldmVtZW50LW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tdGltZSBlYXNlO1xyXG4gICAgJi5tYXQtZXhwYW5kZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICRtYWluLWJnO1xyXG4gICAgfVxyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iLCIuZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyMjIzMjk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjM7XG59XG5cbi5pbWctd3JhcHBlciB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMGVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBwYWRkaW5nOiAyMHB4IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC4xNTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICBsZWZ0OiAwO1xufVxuLmJ1dHRvbjpmb2N1cywgLmJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NThiZTtcbn1cbi5idXR0b246aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0Y2FhO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ1dHRvbjphY3RpdmU6OmFmdGVyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uc2VjdGlvbl9hYm91dC15b3Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VjdGlvbi10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLXRpdGxlOmJlZm9yZSwgLnNlY3Rpb24tdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjMyOTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnNlY3Rpb24tdGl0bGU6YWZ0ZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ucGVyc29uLWNhcmQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwZW07XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiA3LjVweDtcbn1cbi51c2VyLW5hbWUgc3BhbjpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLnJhdGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJhdGUtdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4ucmF0ZS1zdGFyIHtcbiAgY29sb3I6ICNmMGYxZjM7XG59XG5cbi51c2VyLWluZm9ybWF0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbi5tYWluLWluZm8ge1xuICBjb2xvcjogI2YwZjFmMztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tYWluLWluZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY2hpZXZlbWVudCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsIDM1LCA0MSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWNoaWV2ZW1lbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5hY2hpZXZlbWVudC1uYW1lIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5hY2hpZXZlbWVudHMtY29udGVudCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBtYXJnaW46IDMwcHggMDtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uYnRuX2FjaGlldmVtZW50cyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWNoaWV2ZW1lbnQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwubWF0LWV4cGFuZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyMjIzMjk7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], ProfileComponent.prototype, "carousel", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/rating/rating.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/rating/rating.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.picked {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n.paited-star {\n  color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5nL0E6XFxlbGl0ZVxcSGFja1Byb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxyYXRpbmdcXHJhdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBpY2tlZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG4ucGFpdGVkLXN0YXJ7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBpY2tlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5wYWl0ZWQtc3RhciB7XG4gIGNvbG9yOiBnb2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/rating/rating.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/rating/rating.component.ts ***!
  \**************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const Student_DATA = new Array(30).fill(null).map((v, i) => ({
    name: faker__WEBPACK_IMPORTED_MODULE_2__["name"].firstName(),
    position: i,
    score: faker__WEBPACK_IMPORTED_MODULE_2__["random"].number(),
    region: faker__WEBPACK_IMPORTED_MODULE_2__["address"].country()
}));
const Teacher_DATA = new Array(30).fill(null).map((v, i) => ({
    name: faker__WEBPACK_IMPORTED_MODULE_2__["name"].firstName(),
    position: i,
    score: faker__WEBPACK_IMPORTED_MODULE_2__["random"].number(),
    region: faker__WEBPACK_IMPORTED_MODULE_2__["address"].country()
}));
let RatingComponent = class RatingComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'score', 'region'];
    }
    ngOnInit() {
        this.DATA = Student_DATA;
        this.length = this.DATA.length;
        this.fiiterData(0);
    }
    fiiterData(page) {
        this.dataSource = this.DATA.slice(10 * page, 10 * (page + 1));
    }
    pageEvent(e) {
        console.log(e);
        this.fiiterData(e.pageIndex);
    }
    changeData(value) {
        this.DATA = value === 'students' ? Student_DATA : Teacher_DATA;
        this.fiiterData(0);
    }
    getStar(position) {
        switch (position) {
            case 0:
                return '★'.repeat(3);
            case 1:
                return '★'.repeat(2);
            case 2:
                return '★'.repeat(1);
            default:
                return '';
        }
    }
};
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.component.scss */ "./src/app/pages/rating/rating.component.scss")).default]
    })
], RatingComponent);



/***/ }),

/***/ "./src/app/pages/tasks/tasks.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/tasks/tasks.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 20px 0;\n}\n\n.section {\n  padding: 0 30px;\n  margin-bottom: 60px;\n}\n\n.section_about-you {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.section-title {\n  padding-bottom: 30px;\n  font-size: 40px;\n  font-weight: bold;\n  display: flex;\n  width: 100%;\n}\n\n.section-title:before, .section-title:after {\n  content: \"\";\n  border-bottom: 2px solid #222329;\n  margin: auto 0;\n}\n\n.section-title:before {\n  width: 50px;\n  margin-right: 30px;\n}\n\n.section-title:after {\n  flex-grow: 1;\n  margin-left: 30px;\n}\n\nmat-expansion-panel {\n  border: 1px solid rgba(34, 35, 41, 0.1);\n}\n\nmat-expansion-panel-header {\n  font-size: 24px;\n}\n\n.mat-expansion-panel-content {\n  font-size: 20px;\n  line-height: 1.25;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFza3MvQTpcXGVsaXRlXFxIYWNrUHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXHRhc2tzXFx0YXNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRkY7O0FER0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0U7RUFDRSxvQkFqQks7RUFrQkwsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNESjs7QURFSTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUNBTjs7QURFSTtFQUNFLFdBQUE7RUFDQSxrQkE3Qkc7QUM2QlQ7O0FERUk7RUFDRSxZQUFBO0VBQ0EsaUJBakNHO0FDaUNUOztBREtBO0VBQ0UsdUNBQUE7QUNGRjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3V0dGVyOiAzMHB4O1xyXG5cclxuJG1haW4tYmc6ICMyMjIzMjk7XHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAgJGd1dHRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3V0dGVyKjI7XHJcbiAgJl9hYm91dC15b3Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYtdGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRndXR0ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWFpbi1iZztcclxuICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRndXR0ZXI7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogJGd1dHRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJG1haW4tYmcsIC4xKTtcclxuICAmLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uc2VjdGlvbl9hYm91dC15b3Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VjdGlvbi10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWN0aW9uLXRpdGxlOmJlZm9yZSwgLnNlY3Rpb24tdGl0bGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjMyOTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uc2VjdGlvbi10aXRsZTpiZWZvcmUge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnNlY3Rpb24tdGl0bGU6YWZ0ZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzUsIDQxLCAwLjEpO1xufVxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tasks/tasks.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const data1 = [
    { title: 'Глава 1. Основные химические понятия и законы', description: 'Вам предстоит изучение основных понятий и определений, а также атомно-молекулярного учения.' },
    { title: 'Глава 2. Сроение вещества', description: 'В этой главе Вы познакомитесь с такими понятиями, как Строение атома, Волновая теория строения атома и Периодическая система.' },
    { title: 'Глава 3. Строение молекул и химическая связь', description: 'Здесь вы найдете информацию об основных характеристиках химической связи, Современных теориях хим. связи, Водородных связях, Межмолекулярных силах Ван-дер-Ваальса и Комплексных соединениях.' }
];
const data2 = [
    { title: 'Глава 1. Основы основ', description: 'В этой главе Вы познакомитесь с основными понятиями в физике, такими как Пространство и время, Материя и вещество, а также Движение.' },
    { title: 'Глава 2. Единицы', description: 'Здесь Вас ожидает информация о стандартных величинах в физике, единицах времени и длины, окружностей и углов.' },
    { title: 'Глава 3. Минимум математики', description: 'Понимание физики без опоры на некоторые математические действия существенно затрудняется, поэтому Вам предстоит познакомиться с такими понятиями как сложение/вычитание, умножение/деление, возведение в степень и логарифмирование. Также необходимым будет понятие мнимой единицы i.' }
];
const data3 = [
    { title: 'Глава 1. Величины и числовые системы', description: 'Уже не хватает фантазии на описание.' },
    { title: 'Глава 2. Решение неравенств и уравнений', description: 'Поэтому я просто буду писать то, что приходит в голову.' },
    { title: 'Глава 3. Системы координат', description: 'А здесь вообще психану и сделаю так: Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заглавных наш всеми предупреждал гор предупредила мир последний предложения бросил своего коварных о оксмокс семантика, он взгляд пор снова которое.' }
];
let TasksComponent = class TasksComponent {
    constructor() { }
    ngOnInit() {
        this.topics1 = data1;
        this.topics2 = data2;
        this.topics3 = data3;
    }
};
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.scss */ "./src/app/pages/tasks/tasks.component.scss")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/app/pages/test/test.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/test/test.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test-name {\n  margin: 20px;\n  text-align: center;\n  width: 100%;\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n.action-button {\n  padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9BOlxcZWxpdGVcXEhhY2tQcm9qZWN0L3NyY1xcYXBwXFxwYWdlc1xcdGVzdFxcdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1uYW1le1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5hY3Rpb24tYnV0dG9ue1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG59XHJcbiIsIi50ZXN0LW5hbWUge1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/test/test.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/challenge.service */ "./src/app/_services/challenge.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_telegram_bot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/telegram-bot.service */ "./src/app/_services/telegram-bot.service.ts");
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_data/map */ "./src/app/_data/map.ts");
/* harmony import */ var src_app_services_tree_progress_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/tree-progress.service */ "./src/app/_services/tree-progress.service.ts");









let TestComponent = class TestComponent {
    constructor(router, _formBuilder, challengeService, route, telegramBot, treeProgress) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.challengeService = challengeService;
        this.route = route;
        this.telegramBot = telegramBot;
        this.treeProgress = treeProgress;
        this.isLinear = false;
    }
    ngOnInit() {
        this.challenge$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => this.challengeService.getChallengeById(Number.parseInt(params.get('id'), 10))));
        this.challenge$.subscribe(e => {
            this.telegramBot.userStartChallenge(e);
            this.testData = e;
        });
        const hobbiesGroup = {};
        this.testData.excersices.forEach(hobby => {
            hobbiesGroup[hobby.title] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        });
        this.contactForm = this._formBuilder.group({
            hobbies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](hobbiesGroup)
        });
    }
    onSubmit() {
        console.log(this.testData, _data_map__WEBPACK_IMPORTED_MODULE_7__["MAP_DEFAULT"].nodes[this.testData.id]);
        // @ts-ignore
        _data_map__WEBPACK_IMPORTED_MODULE_7__["MAP_DEFAULT"].nodes.reduce((res, el) => {
            if (el.challengeId === this.testData.id) {
                this.treeProgress.saveCurrentProgress([this.testData.id]);
                return el;
            }
            return res;
        }, {}).result = this.testData.excersices.reduce((sum, el) => {
            if (el.rightAnswer === this.contactForm.value.hobbies[el.title]) {
                return (sum += 10);
            }
            return sum;
        }, 0);
        this.router.navigate(['../../map']);
    }
};
TestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_challenge_service__WEBPACK_IMPORTED_MODULE_3__["ChallengeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_telegram_bot_service__WEBPACK_IMPORTED_MODULE_6__["TelegramBotService"] },
    { type: src_app_services_tree_progress_service__WEBPACK_IMPORTED_MODULE_8__["TreeProgressService"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/pages/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/_models */ "./src/app/_models/index.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
    platformName: 'Hack',
    telegramBot: '983582356:AAEEgkekVOTfU9nojdeV-WWytaOS7Eu6AP8',
    chart_id: '-362853721',
    workflow: {
        opportunity: {
            watchHome: {
                permittedRoles: [_app_models__WEBPACK_IMPORTED_MODULE_1__["Role"].User, _app_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Admin]
            },
            watchProposals: {
                permittedRoles: [_app_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Admin]
            }
        }
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\elite\HackProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map