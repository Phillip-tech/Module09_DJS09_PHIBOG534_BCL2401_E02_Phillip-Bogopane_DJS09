/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes.ts":
/*!********************!*\
  !*** ./classes.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainProperty)
/* harmony export */ });
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}


/***/ }),

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoyaltyUser: () => (/* binding */ LoyaltyUser),
/* harmony export */   Permissions: () => (/* binding */ Permissions)
/* harmony export */ });
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTopTwoReviews: () => (/* binding */ getTopTwoReviews),
/* harmony export */   makeMultiple: () => (/* binding */ makeMultiple),
/* harmony export */   populateUser: () => (/* binding */ populateUser),
/* harmony export */   showDetails: () => (/* binding */ showDetails),
/* harmony export */   showReviewTotal: () => (/* binding */ showReviewTotal)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./enums.ts");
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = _enums__WEBPACK_IMPORTED_MODULE_0__.LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./enums.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./classes.ts");
// Code Tidy



const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
// Reviews
const reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: _enums__WEBPACK_IMPORTED_MODULE_1__.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// Functions
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTopTwoReviews)(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
console.log(footer);
let yourMainProperty = new _classes__WEBPACK_IMPORTED_MODULE_2__["default"]('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxTQUFTO1FBQ2xDLElBQUksRUFBRSxZQUFZO0tBQ3JCLENBQUMsQ0FBRTtBQUVSLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQWlCO0FBQ2hGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzNDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUMvQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL2VudW1zLnRzIiwid2VicGFjazovL3Byb2plY3QvLi91dGlscy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJldmlldyB9IGZyb20gJy4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblByb3BlcnR5IHtcbiAgICBzcmM6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByZXZpZXdzOiBSZXZpZXdbXVxuICAgIGNvbnN0cnVjdG9yKHNyYzogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCByZXZpZXdzOiBSZXZpZXdbXSkge1xuICAgICAgICB0aGlzLnNyYyA9IHNyY1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5yZXZpZXdzID0gcmV2aWV3c1xuICAgIH1cbn0iLCJleHBvcnQgZW51bSBQZXJtaXNzaW9ucyB7XG4gICAgQURNSU4gPSAnQURNSU4nLCBcbiAgICBSRUFEX09OTFkgPSAnUkVBRF9PTkxZJ1xufVxuXG5leHBvcnQgZW51bSBMb3lhbHR5VXNlciB7XG4gICAgR09MRF9VU0VSID0gJ0dPTERfVVNFUicsXG4gICAgU0lMVkVSX1VTRVIgPSAnU0lMVkVSX1VTRVInLFxuICAgIEJST05aRV9VU0VSID0gJ0JST05aRV9VU0VSJ1xufSIsImNvbnN0IHJldmlld1RvdGFsRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgcmV0dXJuaW5nVXNlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV0dXJuaW5nLXVzZXInKSBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCB1c2VyTmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcicpIGFzIEhUTUxFbGVtZW50XHJcbmltcG9ydCB7IExveWFsdHlVc2VyLCBQZXJtaXNzaW9ucyB9IGZyb20gJy4vZW51bXMnXHJcbmltcG9ydCAgeyBSZXZpZXcgfSBmcm9tICcuL2ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlOiBudW1iZXIsIHJldmlld2VyOiBzdHJpbmcsIGlzTG95YWx0eTogTG95YWx0eVVzZXIpIHtcclxuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gTG95YWx0eVVzZXIuR09MRF9VU0VSID8gJ+KtkCcgOiAnJ1xyXG4gICAgcmV2aWV3VG90YWxEaXNwbGF5LmlubmVySFRNTCA9IHZhbHVlLnRvU3RyaW5nKCkgKyAnIHJldmlldycgKyBtYWtlTXVsdGlwbGUodmFsdWUpICsgJyB8IGxhc3QgcmV2aWV3ZWQgYnkgJyArIHJldmlld2VyICsgJyAnICsgaWNvbkRpc3BsYXkgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcgOiBib29sZWFuLCB1c2VyTmFtZTogc3RyaW5nICkge1xyXG4gICAgaWYgKGlzUmV0dXJuaW5nKXtcclxuICAgICAgICByZXR1cm5pbmdVc2VyRGlzcGxheS5pbm5lckhUTUwgPSAnYmFjaydcclxuICAgIH1cclxuICAgIHVzZXJOYW1lRGlzcGxheS5pbm5lckhUTUwgPSB1c2VyTmFtZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RldGFpbHModmFsdWU6IGJvb2xlYW4gfCBQZXJtaXNzaW9ucywgZWxlbWVudCA6IEhUTUxEaXZFbGVtZW50LCBwcmljZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBwcmljZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByaWNlRGlzcGxheS5pbm5lckhUTUwgPSBwcmljZS50b1N0cmluZygpICsgJy9uaWdodCdcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaWNlRGlzcGxheSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNdWx0aXBsZSh2YWx1ZTogbnVtYmVyKSA6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUgPiAxIHx8IHZhbHVlID09IDApIHtcclxuICAgICAgICByZXR1cm4gJ3MnXHJcbiAgICB9IGVsc2UgcmV0dXJuICcnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BUd29SZXZpZXdzKHJldmlld3MgOiBSZXZpZXdbXSkgOiBSZXZpZXdbXSAge1xyXG4gY29uc3Qgc29ydGVkUmV2aWV3cyA9IHJldmlld3Muc29ydCgoYSwgYikgPT4gYi5zdGFycyAtIGEuc3RhcnMpXHJcbiByZXR1cm4gc29ydGVkUmV2aWV3cy5zbGljZSgwLDIpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENvZGUgVGlkeVxyXG5cclxuaW1wb3J0IHsgc2hvd1Jldmlld1RvdGFsLCBwb3B1bGF0ZVVzZXIsIHNob3dEZXRhaWxzLCBnZXRUb3BUd29SZXZpZXdzfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9ucyAsIExveWFsdHlVc2VyIH0gZnJvbSAnLi9lbnVtcydcclxuaW1wb3J0IHsgUmV2aWV3LCBQcm9wZXJ0eSB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1haW5Qcm9wZXJ0eSBmcm9tICcuL2NsYXNzZXMnIFxyXG5jb25zdCBwcm9wZXJ0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0aWVzJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpIGFzIEhUTUxFbGVtZW50XHJcblxyXG5sZXQgaXNMb2dnZWRJbjogYm9vbGVhblxyXG5cclxuLy8gUmV2aWV3c1xyXG5jb25zdCByZXZpZXdzOiBSZXZpZXdbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnU2hlaWxhJyxcclxuICAgICAgICBzdGFyczogNSxcclxuICAgICAgICBsb3lhbHR5VXNlcjogTG95YWx0eVVzZXIuR09MRF9VU0VSLFxyXG4gICAgICAgIGRhdGU6ICcwMS0wNC0yMDIxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQW5kcnplaicsXHJcbiAgICAgICAgc3RhcnM6IDMsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IExveWFsdHlVc2VyLkJST05aRV9VU0VSLFxyXG4gICAgICAgIGRhdGU6ICcyOC0wMy0yMDIxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnT21hcicsXHJcbiAgICAgICAgc3RhcnM6IDQsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IExveWFsdHlVc2VyLlNJTFZFUl9VU0VSLFxyXG4gICAgICAgIGRhdGU6ICcyNy0wMy0yMDIxJyxcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IHlvdSA9IHtcclxuICAgIGZpcnN0TmFtZTogJ0JvYmJ5JyxcclxuICAgIGxhc3ROYW1lOiAnQnJvd24nLFxyXG4gICAgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLkFETUlOLFxyXG4gICAgaXNSZXR1cm5pbmc6IHRydWUsXHJcbiAgICBhZ2U6IDM1LFxyXG4gICAgc3RheWVkQXQ6IFsnZmxvcmlkYS1ob21lJywgJ29tYW4tZmxhdCcsICd0b2t5by1idW5nYWxvdyddXHJcbn1cclxuXHJcbi8vIEFycmF5IG9mIFByb3BlcnRpZXNcclxuY29uc3QgcHJvcGVydGllcyA6IFByb3BlcnR5W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICdpbWFnZXMvY29sb21iaWEtcHJvcGVydHkuanBnJyxcclxuICAgICAgICB0aXRsZTogJ0NvbG9tYmlhbiBTaGFjaycsXHJcbiAgICAgICAgcHJpY2U6IDQ1LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ3NoYWNrIDM3JyxcclxuICAgICAgICAgICAgY2l0eTogJ0JvZ290YScsXHJcbiAgICAgICAgICAgIGNvZGU6IDQ1NjMyLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnQ29sb21iaWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbKzExMjM0MzgyMzk3ODkyMSwgJ21hcnl3aW5rbGVAZ21haWwuY29tJ10sXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9wb2xhbmQtcHJvcGVydHkuanBnJyxcclxuICAgICAgICB0aXRsZTogJ1BvbGlzaCBDb3R0YWdlJyxcclxuICAgICAgICBwcmljZTogMzAsXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgZmlyc3RMaW5lOiAnbm8gMjMnLFxyXG4gICAgICAgICAgICBjaXR5OiAnR2RhbnNrJyxcclxuICAgICAgICAgICAgY29kZTogMzQzOTAzLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnUG9sYW5kJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGFjdDogWysxMjk4MjM5MDI4NDkwODMwLCAnZ2FyeWRhdmlzQGhvdG1haWwuY29tJ10sXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9sb25kb24tcHJvcGVydHkuanBnJyxcclxuICAgICAgICB0aXRsZTogJ0xvbmRvbiBGbGF0JyxcclxuICAgICAgICBwcmljZTogMjUsXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgZmlyc3RMaW5lOiAnZmxhdCAxNScsXHJcbiAgICAgICAgICAgIGNpdHk6ICdMb25kb24nLFxyXG4gICAgICAgICAgICBjb2RlOiAnU1c0IDVYVycsXHJcbiAgICAgICAgICAgIGNvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbKzM0ODI5Mzc0ODkyNTUzLCAnYW5keWx1Z2VyQGFvbC5jb20nXSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogJ2ltYWdlcy9tYWxheXNpYW4taG90ZWwuanBlZycsXHJcbiAgICAgICAgdGl0bGU6ICdNYWxpYSBIb3RlbCcsXHJcbiAgICAgICAgcHJpY2U6IDM1LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ1Jvb20gNCcsXHJcbiAgICAgICAgICAgIGNpdHk6ICdNYWxpYScsXHJcbiAgICAgICAgICAgIGNvZGU6IDQ1MzM0LFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnTWFsYXlzaWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbICs2MDM0OTgyMjA4MywgJ2xlZTM0QGdtYWlsLmNvbSddLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZVxyXG4gICAgfVxyXG5dXHJcblxyXG4vLyBGdW5jdGlvbnNcclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpXHJcblxyXG5wb3B1bGF0ZVVzZXIoeW91LmlzUmV0dXJuaW5nLCB5b3UuZmlyc3ROYW1lKVxyXG5cclxuLy8gQWRkIHRoZSBwcm9wZXJ0aWVzXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBwcm9wZXJ0aWVzW2ldLnRpdGxlXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByb3BlcnRpZXNbaV0uaW1hZ2UpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgc2hvd0RldGFpbHMoeW91LnBlcm1pc3Npb25zLCBjYXJkLCBwcm9wZXJ0aWVzW2ldLnByaWNlKVxyXG4gICAgcHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcclxufVxyXG5cclxubGV0IGNvdW50ID0gMFxyXG5mdW5jdGlvbiBhZGRSZXZpZXdzKGFycmF5IDogUmV2aWV3W10pIDogdm9pZCB7XHJcbiAgICBpZiAoIWNvdW50ICkge1xyXG4gICAgICAgIGNvdW50KytcclxuICAgICAgICBjb25zdCB0b3BUd28gPSBnZXRUb3BUd29SZXZpZXdzKGFycmF5KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wVHdvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Jldmlldy1jYXJkJylcclxuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSB0b3BUd29baV0uc3RhcnMgKyAnIHN0YXJzIGZyb20gJyArIHRvcFR3b1tpXS5uYW1lXHJcbiAgICAgICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uKSBcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkUmV2aWV3cyhyZXZpZXdzKSlcclxuXHJcbmxldCBjdXJyZW50TG9jYXRpb24gOiBbc3RyaW5nLCBzdHJpbmcsIG51bWJlcl0gPSBbJ0xvbmRvbicsICcxMS4wMycsIDE3XVxyXG5mb290ZXIuaW5uZXJIVE1MID0gY3VycmVudExvY2F0aW9uWzBdICsgJyAnICsgY3VycmVudExvY2F0aW9uWzFdICsgJyAnICsgY3VycmVudExvY2F0aW9uWzJdICsgJ8KwJ1xyXG5jb25zb2xlLmxvZyhmb290ZXIpXHJcblxyXG5cclxubGV0IHlvdXJNYWluUHJvcGVydHkgPSBuZXcgTWFpblByb3BlcnR5KFxyXG4gICAgJ2ltYWdlcy9pdGFsaWFuLXByb3BlcnR5LmpwZycsIFxyXG4gICAgJ0l0YWxpYW4gSG91c2UnLFxyXG4gICAgW3tcclxuICAgICAgICBuYW1lOiAnT2xpdmUnLFxyXG4gICAgICAgIHN0YXJzOiA1LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBMb3lhbHR5VXNlci5HT0xEX1VTRVIsXHJcbiAgICAgICAgZGF0ZTogJzEyLTA0LTIwMjEnXHJcbiAgICB9XSApXHJcblxyXG5jb25zdCBtYWluSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbWFnZScpICBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbmltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgeW91ck1haW5Qcm9wZXJ0eS5zcmMpXHJcbm1haW5JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=