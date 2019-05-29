/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routing.tsx":
/*!*************************!*\
  !*** ./src/Routing.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// router
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
// views
var SearchPage_1 = __webpack_require__(/*! Views/SearchPage/SearchPage */ "./src/views/SearchPage/SearchPage.tsx");
var DetailsPage_1 = __webpack_require__(/*! Views/DetailsPage/DetailsPage */ "./src/views/DetailsPage/DetailsPage.tsx");
var ErrorPage_1 = __webpack_require__(/*! Views/ErrorPage/ErrorPage */ "./src/views/ErrorPage/ErrorPage.tsx");
var Routes = function (_a) {
    var router = _a.router;
    var Router = router || react_router_dom_1.HashRouter;
    return (React.createElement(Router, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: SearchPage_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/movie/:id", component: DetailsPage_1.default }),
            React.createElement(react_router_dom_1.Route, { component: ErrorPage_1.default }))));
};
exports.default = Routes;


/***/ }),

/***/ "./src/StoreProviderWrapper.tsx":
/*!**************************************!*\
  !*** ./src/StoreProviderWrapper.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// react
var React = __webpack_require__(/*! react */ "react");
// Redux
var redux_1 = __webpack_require__(/*! redux */ "redux");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "redux-thunk");
// reducers
var global_reducer_1 = __webpack_require__(/*! ./global.reducer */ "./src/global.reducer.ts");
var SearchPage_reducer_1 = __webpack_require__(/*! Views/SearchPage/SearchPage.reducer */ "./src/views/SearchPage/SearchPage.reducer.ts");
var DetailsPage_reducer_1 = __webpack_require__(/*! Views/DetailsPage/DetailsPage.reducer */ "./src/views/DetailsPage/DetailsPage.reducer.ts");
var initialState = typeof window != "undefined" && !!window.__PRELOADED_STATE__
    ? window.__PRELOADED_STATE__
    : undefined;
exports.rootReducer = redux_1.combineReducers({
    global: global_reducer_1.default,
    searchPage: SearchPage_reducer_1.default,
    detailsPage: DetailsPage_reducer_1.default
});
var StoreProviderWrapper = function (_a) {
    var providedState = _a.providedState, children = _a.children;
    var store = redux_1.createStore(exports.rootReducer, providedState || initialState, redux_1.applyMiddleware(redux_thunk_1.default));
    return React.createElement(react_redux_1.Provider, { store: store }, children);
};
exports.default = StoreProviderWrapper;


/***/ }),

/***/ "./src/components/Button/Button.styles.css":
/*!*************************************************!*\
  !*** ./src/components/Button/Button.styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--2PvMjmEKGj","small":"small--2x2Fu4F8tZ","icon":"icon--ZxbmSZ6dRR Typo-Base-Size","label":"label--2sTCEdU_ww Typo-Base","smallLabel":"smallLabel--2KPuQMrSI4 Typo-Small","smallIcon":"smallIcon--3N6HbN4hLI icon--ZxbmSZ6dRR Typo-Base-Size Typo-Small-Size","basic":"basic--3H_CF4nQit","primary":"primary--3oLrhkA1sK","white":"white--2sCRFIzGkg","negative":"negative--13uLUEqxro","disabled":"disabled--36dzZiYDf4"};

/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styles = __webpack_require__(/*! ./Button.styles.css */ "./src/components/Button/Button.styles.css");
var cx = __webpack_require__(/*! classnames */ "classnames");
var Button = function (props) {
    var _a;
    var type = props.type, disabled = props.disabled, icon = props.icon, variant = props.variant, size = props.size, label = props.label, clickAction = props.clickAction;
    var isSmall = !!size;
    var mainClass = cx(styles.main, (_a = {},
        _a[styles.basic] = !variant,
        _a[styles.white] = !disabled && variant && variant === "white",
        _a[styles.primary] = !disabled && variant && variant === "primary",
        _a[styles.negative] = !disabled && variant && variant === "negative",
        _a[styles.disabled] = !!disabled,
        _a[styles.small] = isSmall,
        _a));
    return (React.createElement("button", { className: mainClass, disabled: !!disabled, type: type, onClick: clickAction },
        icon && (React.createElement("i", { className: (isSmall ? styles.smallIcon : styles.icon) + " " + icon })),
        React.createElement("span", { className: isSmall ? styles.smallLabel : styles.label }, label)));
};
exports.default = Button;


/***/ }),

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// components
var LogoBar_1 = __webpack_require__(/*! Components/LogoBar/LogoBar */ "./src/components/LogoBar/LogoBar.tsx");
var Footer = function () { return (React.createElement("div", null,
    React.createElement(LogoBar_1.default, null))); };
exports.default = Footer;


/***/ }),

/***/ "./src/components/Header/Header.styles.css":
/*!*************************************************!*\
  !*** ./src/components/Header/Header.styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--3WcB7HhuAt","content":"content--24h273L6rD"};

/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// components
var LogoBar_1 = __webpack_require__(/*! Components/LogoBar/LogoBar */ "./src/components/LogoBar/LogoBar.tsx");
var styles = __webpack_require__(/*! ./Header.styles.css */ "./src/components/Header/Header.styles.css");
var Header = function (props) { return (React.createElement("div", { className: styles.main },
    React.createElement(LogoBar_1.default, null, props.actionItem),
    props.children && React.createElement("div", { className: styles.content }, props.children))); };
exports.default = Header;


/***/ }),

/***/ "./src/components/LogoBar/LogoBar.styles.css":
/*!***************************************************!*\
  !*** ./src/components/LogoBar/LogoBar.styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--2h0OYChSM1","logo":"logo--38LLapTivf Typo-Big","actionsWrapper":"actionsWrapper--N6RVU0ahF5"};

/***/ }),

/***/ "./src/components/LogoBar/LogoBar.tsx":
/*!********************************************!*\
  !*** ./src/components/LogoBar/LogoBar.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// css
var styles = __webpack_require__(/*! ./LogoBar.styles.css */ "./src/components/LogoBar/LogoBar.styles.css");
var LogoBar = function (props) { return (React.createElement("div", { className: styles.main },
    React.createElement("span", { className: styles.logo }, "netflixroulette"),
    props.children && (React.createElement("div", { className: styles.actionsWrapper }, props.children)))); };
exports.default = LogoBar;


/***/ }),

/***/ "./src/components/MovieGrid/MovieGrid.styles.css":
/*!*******************************************************!*\
  !*** ./src/components/MovieGrid/MovieGrid.styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--2CDpY4Geq5","results":"results--Rcw5bcqfC8","count":"count--2Uj_FOskjy Typo-Base Typo-Bold","sorting":"sorting--G_AmDpPF6O","sortingLabel":"sortingLabel--2Wdluvzh5m Typo-Base","grid":"grid--1zC8WBtbAE","sorryMessage":"sorryMessage--2byhF3-d3w Typo-Big"};

/***/ }),

/***/ "./src/components/MovieGrid/MovieGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/MovieGrid/MovieGrid.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// components and interfaces
var MovieGridItem_1 = __webpack_require__(/*! ./components/MovieGridItem/MovieGridItem */ "./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.tsx");
var Button_1 = __webpack_require__(/*! Components/Button/Button */ "./src/components/Button/Button.tsx");
// styles
var styles = __webpack_require__(/*! ./MovieGrid.styles.css */ "./src/components/MovieGrid/MovieGrid.styles.css");
// redux
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var SearchPage_actions_1 = __webpack_require__(/*! Views/SearchPage/SearchPage.actions */ "./src/views/SearchPage/SearchPage.actions.ts");
var MovieGrid = function (_a) {
    var similarResults = _a.similarResults, movieIDs = _a.movieIDs, getDetailsPageMovie = _a.getDetailsPageMovie, getSearchPageMovie = _a.getSearchPageMovie, sortMovies = _a.sortMovies, sortBy = _a.sortBy;
    var movieCount = !!movieIDs ? movieIDs.length : 0;
    var movieList = movieIDs &&
        movieIDs.map(function (movieID) {
            var movie = similarResults
                ? getDetailsPageMovie(movieID)
                : getSearchPageMovie(movieID);
            return React.createElement(MovieGridItem_1.default, __assign({ key: movieID }, movie));
        });
    var countMessage = (movieCount || "No") + " movie" + (movieCount === 1 ? "" : "s") + " found";
    var handleSortClick = function (sortKey) { return function (e) {
        e.preventDefault();
        sortMovies(sortKey);
    }; };
    return (React.createElement("div", { className: styles.main },
        React.createElement("div", { className: styles.results }, similarResults ? (React.createElement(React.Fragment, null,
            React.createElement("span", null, "Films by "),
            React.createElement("span", null, "Drama genre"))) : (React.createElement(React.Fragment, null,
            React.createElement("span", { className: styles.count }, countMessage),
            React.createElement("div", { className: styles.sorting },
                React.createElement("span", { className: styles.sortingLabel }, "Sort by"),
                React.createElement(Button_1.default, { label: "release date", size: "small", variant: sortBy === "releaseDate" ? "primary" : "white", clickAction: handleSortClick("releaseDate") }),
                React.createElement(Button_1.default, { label: "rating", size: "small", variant: sortBy === "rating" ? "primary" : "white", clickAction: handleSortClick("rating") }))))),
        !!movieIDs && !!movieIDs.length ? (React.createElement("div", { className: styles.grid }, movieList)) : (React.createElement("div", { className: styles.sorryMessage },
            React.createElement("span", null, "No movies :(")))));
};
exports.MovieGrid = MovieGrid;
/* istanbul ignore next*/
var mapState = function (state) { return ({
    sortBy: state.searchPage.sortBy,
    getDetailsPageMovie: function (id) {
        return state.detailsPage.similarMovies.find(function (movie) { return movie.id === id; });
    },
    getSearchPageMovie: function (id) {
        return state.searchPage.movies.find(function (movie) { return movie.id === id; });
    }
}); };
/* istanbul ignore next*/
var mapDispatch = function (dispatch) { return ({
    sortMovies: function (sortKey) {
        dispatch({ type: SearchPage_actions_1.default.movieListSorting, payload: sortKey });
    }
}); };
exports.default = react_redux_1.connect(mapState, mapDispatch)(MovieGrid);


/***/ }),

/***/ "./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.styles.css":
/*!************************************************************************************!*\
  !*** ./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.styles.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"posterBase":"posterBase--3HKyckwz-n","poster":"poster--1lWKpfZjHB posterBase--3HKyckwz-n","noPoster":"noPoster--3tY5o5T9RG posterBase--3HKyckwz-n","noPosterLabel":"noPosterLabel--3U2NI5KzNu Typo-Big Typo-Bold","data":"data--2J0ZE0111P","baseData":"baseData--1TTT652wwr","title":"title--KcdksvBbRs Typo-Big Typo-Bold","releaseDate":"releaseDate--1qemYuMYuC Typo-Base","genres":"genres--1h11aYsl9t Typo-Small"};

/***/ }),

/***/ "./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// react
var React = __webpack_require__(/*! react */ "react");
// redux
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var DetailsPage_actions_1 = __webpack_require__(/*! Views/DetailsPage/DetailsPage.actions */ "./src/views/DetailsPage/DetailsPage.actions.ts");
// Link
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
// styles
var styles = __webpack_require__(/*! ./MovieGridItem.styles.css */ "./src/components/MovieGrid/components/MovieGridItem/MovieGridItem.styles.css");
// components
var Poster_1 = __webpack_require__(/*! Components/Poster/Poster */ "./src/components/Poster/Poster.tsx");
var MovieGridItem = function (_a) {
    var id = _a.id, title = _a.title, poster = _a.poster, releaseDate = _a.releaseDate, genres = _a.genres, fetchMovie = _a.fetchMovie;
    return (React.createElement(react_router_dom_1.Link, { to: "/movie/" + id, onClick: function (e) {
            fetchMovie(id);
        } },
        React.createElement(Poster_1.default, { url: poster }),
        React.createElement("div", { className: styles.data },
            React.createElement("div", { className: styles.baseData },
                React.createElement("span", { className: styles.title }, title),
                !!releaseDate && releaseDate.length > 3 && (React.createElement("span", { className: styles.releaseDate }, releaseDate.substr(0, 4)))),
            !!genres && !!genres.length && (React.createElement("span", { className: styles.genres }, genres.join(" & "))))));
};
exports.MovieGridItem = MovieGridItem;
/* istanbul ignore next*/
var mapDispatchToProps = function (dispatch) { return ({
    fetchMovie: function (id) {
        DetailsPage_actions_1.fetchMovieById(id)(dispatch);
    }
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(MovieGridItem);


/***/ }),

/***/ "./src/components/Poster/Poster.styles.css":
/*!*************************************************!*\
  !*** ./src/components/Poster/Poster.styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"base":"base--XaDP8rqba0","main":"main--Li1wQn5agF base--XaDP8rqba0","noPoster":"noPoster--25KUyC8wJw base--XaDP8rqba0","noPosterLabel":"noPosterLabel--1G9GrwF056 Typo-Big Typo-Bold"};

/***/ }),

/***/ "./src/components/Poster/Poster.tsx":
/*!******************************************!*\
  !*** ./src/components/Poster/Poster.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var styles = __webpack_require__(/*! ./Poster.styles.css */ "./src/components/Poster/Poster.styles.css");
var Poster = function (_a) {
    var url = _a.url;
    return (React.createElement(React.Fragment, null,
        url && (React.createElement("div", { className: styles.main, style: { backgroundImage: "url(" + url + ")" } })),
        !url && (React.createElement("div", { className: styles.noPoster },
            React.createElement("span", { className: styles.noPosterLabel }, "No poster")))));
};
exports.default = Poster;


/***/ }),

/***/ "./src/components/WithError/WithError.tsx":
/*!************************************************!*\
  !*** ./src/components/WithError/WithError.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var WithError = /** @class */ (function (_super) {
    __extends(WithError, _super);
    function WithError(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        _this.componentDidCatch = _this.componentDidCatch.bind(_this);
        return _this;
    }
    WithError.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    WithError.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ hasError: true });
        this.props.errorCallback(error, errorInfo);
    };
    WithError.prototype.render = function () {
        if (this.state.hasError) {
            return React.createElement("span", null, "Something went wrong");
        }
        return React.createElement(React.Fragment, null, this.props.children);
    };
    return WithError;
}(React.Component));
exports.default = WithError;


/***/ }),

/***/ "./src/global.actions.ts":
/*!*******************************!*\
  !*** ./src/global.actions.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var globalActionTypes;
(function (globalActionTypes) {
    globalActionTypes["toggleFetchStatus"] = "TOGGLE_FETCHING_STATUS";
    globalActionTypes["setFetchError"] = "SET_FETCHING_ERROR";
})(globalActionTypes || (globalActionTypes = {}));
exports.default = globalActionTypes;
exports.toggleFetchStatus = function (status) { return ({
    type: globalActionTypes.toggleFetchStatus,
    payload: status
}); };
exports.fetchError = function (error) { return ({
    type: globalActionTypes.setFetchError,
    payload: error
}); };


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--E0HTVKQY0v main--1zhdlX0xdi"};

/***/ }),

/***/ "./src/global.reducer.ts":
/*!*******************************!*\
  !*** ./src/global.reducer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_actions_1 = __webpack_require__(/*! ./global.actions */ "./src/global.actions.ts");
var initialState = {
    fetching: {
        status: false,
        error: false
    }
};
var globalReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case global_actions_1.default.toggleFetchStatus:
            return __assign({}, state, { fetching: {
                    status: action.payload,
                    error: false
                } });
        case global_actions_1.default.setFetchError:
            return __assign({}, state, { fetching: {
                    status: false,
                    error: action.payload
                } });
        default:
            return state;
    }
};
exports.default = globalReducer;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// react
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
// components
var WithError_1 = __webpack_require__(/*! Components/WithError/WithError */ "./src/components/WithError/WithError.tsx");
var Routing_1 = __webpack_require__(/*! ./Routing */ "./src/Routing.tsx");
var StoreProviderWrapper_1 = __webpack_require__(/*! ./StoreProviderWrapper */ "./src/StoreProviderWrapper.tsx");
// assets
var styles = __webpack_require__(/*! ./global.css */ "./src/global.css");
__webpack_require__(/*! ./reset.css */ "./src/reset.css");
// init styles for whole app
styles;
var errorHandler = function (error, errorInfo) {
    console.log(error, errorInfo);
};
var App = function (_a) {
    var router = _a.router, providedErrorHandler = _a.providedErrorHandler, state = _a.state;
    return (React.createElement("div", { className: "app-container" },
        React.createElement(WithError_1.default, { errorCallback: providedErrorHandler || errorHandler },
            React.createElement(StoreProviderWrapper_1.default, { providedState: state },
                React.createElement(Routing_1.default, { router: router })))));
};
if (typeof document != "undefined") {
    ReactDOM.hydrate(React.createElement(App, null), document.getElementById("app"));
}
exports.default = App;


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--1zhdlX0xdi"};

/***/ }),

/***/ "./src/server/appRenderer.tsx":
/*!************************************!*\
  !*** ./src/server/appRenderer.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
var wrapAppStringWithTemplate_1 = __webpack_require__(/*! ./wrapAppStringWithTemplate */ "./src/server/wrapAppStringWithTemplate.ts");
// components
var index_1 = __webpack_require__(/*! ./../index */ "./src/index.tsx");
var renderAppToString = function (state) {
    return wrapAppStringWithTemplate_1.default(server_1.renderToString(React.createElement(index_1.default, { state: state, router: react_router_dom_1.StaticRouter })));
};
exports.default = renderAppToString;


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// imports
var express = __webpack_require__(/*! express */ "express");
var appRenderer_1 = __webpack_require__(/*! ./appRenderer */ "./src/server/appRenderer.tsx");
var templateMiddleware = function (html) { return function (req, res) {
    console.log(req.url);
    res.send(html);
}; };
exports.templateMiddleware = templateMiddleware;
var app = express();
app.use(express.static("./dist"));
app.use("*", templateMiddleware(appRenderer_1.default({})));
// run server
var port = process.env.PORT || "8080";
app.listen(port, function () { return console.log("listening on :" + port); });


/***/ }),

/***/ "./src/server/wrapAppStringWithTemplate.ts":
/*!*************************************************!*\
  !*** ./src/server/wrapAppStringWithTemplate.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapAppStringWithTemplate = function (html) { return "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Epam React Mentoring Project - SSR</title>\n    <link href=\"main.css\" rel=\"stylesheet\" type=\"text/css\"/>\n    <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro\" rel=\"stylesheet\" type=\"text/css\" />\n    <link\n      rel=\"stylesheet\"\n      href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\"\n      integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\"\n      crossorigin=\"anonymous\"\n    />\n  </head>\n  <body>\n    <div id=\"app\">" + html + "</div>\n    <script src=\"bundle.js\"></script>\n  </body>\n</html>"; };
exports.default = wrapAppStringWithTemplate;


/***/ }),

/***/ "./src/services/movieService.ts":
/*!**************************************!*\
  !*** ./src/services/movieService.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transformResponseMovie = function (movie) { return ({
    id: movie.id,
    rating: movie.vote_average,
    title: movie.title,
    poster: movie.poster_path,
    releaseDate: movie.release_date,
    genres: movie.genres,
    runtime: movie.runtime,
    overview: movie.overview
}); };
var movieService = function () {
    var apiURL = "https://reactjs-cdp.herokuapp.com";
    // convert options from object to query string "?optval&opt2=val2"
    var formatOptionsToQueryString = function (query) {
        return Object.keys(query).reduce(function (accumulator, key, index) {
            var ampersand = index > 0 ? "&" : "";
            var option = key + "=" + query[key].replace(" ", "%20");
            return accumulator + ampersand + option;
        }, "?");
    };
    var formatQueryStringToOptions = function (options) {
        var result = options
            .substr(1)
            .split("&")
            .reduce(function (acc, pair) {
            var splitPair = pair.split("=");
            acc[splitPair[0]] = splitPair[1].replace("%20", " ");
            return acc;
        }, {});
        return result;
    };
    var getMovieList = function (query) {
        return fetch(apiURL + "/movies" + formatOptionsToQueryString(query))
            .then(function (response) { return response.json(); })
            .then(function (responseData) {
            return responseData.data.map(function (movie) {
                return exports.transformResponseMovie(movie);
            });
        })
            .catch(function (error) {
            throw error;
        });
    };
    var getMovieByID = function (id) {
        return fetch(apiURL + "/movies/" + id)
            .then(function (response) { return response.json(); })
            .then(function (responseData) {
            return exports.transformResponseMovie(responseData);
        })
            .catch(function (error) {
            throw error;
        });
    };
    return {
        formatOptionsToQueryString: formatOptionsToQueryString,
        formatQueryStringToOptions: formatQueryStringToOptions,
        getMovieList: getMovieList,
        getMovieByID: getMovieByID
    };
};
exports.default = movieService();


/***/ }),

/***/ "./src/views/DetailsPage/DetailsPage.actions.ts":
/*!******************************************************!*\
  !*** ./src/views/DetailsPage/DetailsPage.actions.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var movieService_1 = __webpack_require__(/*! Services/movieService */ "./src/services/movieService.ts");
var global_actions_1 = __webpack_require__(/*! App/global.actions */ "./src/global.actions.ts");
var detailsActionTypes;
(function (detailsActionTypes) {
    detailsActionTypes["getMovieDetails"] = "GET_MOVIE_DETAILS_QUERY";
    detailsActionTypes["getMovieDetailsResponse"] = "GET_MOVIE_DETAILS_RESPONSE";
})(detailsActionTypes || (detailsActionTypes = {}));
exports.default = detailsActionTypes;
exports.errorHandler = function (dispatch) { return function (error) {
    dispatch(global_actions_1.fetchError(error));
    dispatch(global_actions_1.toggleFetchStatus(false));
}; };
exports.movieListSuccessHandler = function (dispatch, movie) { return function (similar) {
    dispatch({
        type: detailsActionTypes.getMovieDetailsResponse,
        payload: { movie: movie, similar: similar }
    });
    dispatch(global_actions_1.toggleFetchStatus(false));
}; };
// calls functions tested elsewhere
/* istanbul ignore next*/
var successHandler = function (dispatch) { return function (result) {
    movieService_1.default
        .getMovieList({
        search: result.genres ? result.genres[0] : "",
        searchBy: "genres"
    })
        .then(exports.movieListSuccessHandler(dispatch, result))
        .catch(exports.errorHandler(dispatch));
}; };
exports.fetchMovieById = function (id) { return function (dispatch) {
    dispatch(global_actions_1.toggleFetchStatus(true));
    movieService_1.default
        .getMovieByID(id)
        .then(successHandler(dispatch))
        .catch(exports.errorHandler(dispatch));
    return {
        type: detailsActionTypes.getMovieDetails
    };
}; };


/***/ }),

/***/ "./src/views/DetailsPage/DetailsPage.reducer.ts":
/*!******************************************************!*\
  !*** ./src/views/DetailsPage/DetailsPage.reducer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var DetailsPage_actions_1 = __webpack_require__(/*! ./DetailsPage.actions */ "./src/views/DetailsPage/DetailsPage.actions.ts");
var initialState = {
    details: false,
    similarMovies: []
};
var detailsPageReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DetailsPage_actions_1.default.getMovieDetailsResponse:
            return __assign({}, state, { details: action.payload.movie, similarMovies: action.payload.similar });
        case DetailsPage_actions_1.default.getMovieDetails:
        default:
            return state;
    }
};
exports.default = detailsPageReducer;


/***/ }),

/***/ "./src/views/DetailsPage/DetailsPage.tsx":
/*!***********************************************!*\
  !*** ./src/views/DetailsPage/DetailsPage.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// react
var React = __webpack_require__(/*! react */ "react");
// components
var Header_1 = __webpack_require__(/*! Components/Header/Header */ "./src/components/Header/Header.tsx");
var MovieGrid_1 = __webpack_require__(/*! Components/MovieGrid/MovieGrid */ "./src/components/MovieGrid/MovieGrid.tsx");
var Footer_1 = __webpack_require__(/*! Components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
var Button_1 = __webpack_require__(/*! Components/Button/Button */ "./src/components/Button/Button.tsx");
// child components
var MovieDetails_1 = __webpack_require__(/*! ./components/MovieDetails/MovieDetails */ "./src/views/DetailsPage/components/MovieDetails/MovieDetails.tsx");
// redux imports
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var DetailsPage_actions_1 = __webpack_require__(/*! Views/DetailsPage/DetailsPage.actions */ "./src/views/DetailsPage/DetailsPage.actions.ts");
var DetailsPage = /** @class */ (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailsPage.prototype.componentDidMount = function () {
        this.props.fetchMovie(+this.props.match.params.id);
    };
    DetailsPage.prototype.render = function () {
        var haveDetails = !!this.props.detailsID;
        var haveSimilar = !!this.props.similarMovies && !!this.props.similarMovies.length;
        return (React.createElement("div", null,
            React.createElement(Header_1.default, { actionItem: React.createElement(Button_1.default, { variant: "white", label: "search" }) },
                haveDetails && React.createElement(MovieDetails_1.default, __assign({}, this.props.getDetails())),
                !haveDetails && React.createElement("span", null, "TODO: Spinner component")),
            React.createElement("div", null,
                haveSimilar && (React.createElement(MovieGrid_1.default, { similarResults: true, movieIDs: this.props.similarMovies })),
                !haveSimilar && React.createElement("span", null, "TODO: Spinner component")),
            React.createElement(Footer_1.default, null)));
    };
    return DetailsPage;
}(React.PureComponent));
exports.DetailsPage = DetailsPage;
/* istanbul ignore next*/
var mapStateToProps = function (state) { return ({
    detailsID: !!state.detailsPage.details && state.detailsPage.details.id,
    getDetails: function () { return state.detailsPage.details; },
    similarMovies: state.detailsPage.similarMovies &&
        state.detailsPage.similarMovies.map(function (movie) { return movie.id; })
}); };
/* istanbul ignore next*/
var mapDispatchToProps = function (dispatch) { return ({
    fetchMovie: function (id) {
        DetailsPage_actions_1.fetchMovieById(id)(dispatch);
    }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DetailsPage);


/***/ }),

/***/ "./src/views/DetailsPage/components/MovieDetails/MovieDetails.styles.css":
/*!*******************************************************************************!*\
  !*** ./src/views/DetailsPage/components/MovieDetails/MovieDetails.styles.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--YWKTZc0fnx","poster":"poster--1L33cQ3Vhp","noPoster":"noPoster--3XH2HlLYii","noPosterLabel":"noPosterLabel--1BsZ8owRf-","details":"details--3S4I1MVBW5","title":"title--3FXPckeSIu","genres":"genres--1JmbPaCtFr","yearAndDuration":"yearAndDuration--2E6vTsJX45","year":"year--2UXyvW7HxL","duration":"duration--25dJcemmuG","overview":"overview--3AwaA5oXtZ"};

/***/ }),

/***/ "./src/views/DetailsPage/components/MovieDetails/MovieDetails.tsx":
/*!************************************************************************!*\
  !*** ./src/views/DetailsPage/components/MovieDetails/MovieDetails.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// styles
var styles = __webpack_require__(/*! ./MovieDetails.styles.css */ "./src/views/DetailsPage/components/MovieDetails/MovieDetails.styles.css");
// components
var Poster_1 = __webpack_require__(/*! Components/Poster/Poster */ "./src/components/Poster/Poster.tsx");
var MovieDetails = function (_a) {
    var title = _a.title, poster = _a.poster, releaseDate = _a.releaseDate, genres = _a.genres, runtime = _a.runtime, overview = _a.overview;
    return (React.createElement("div", { className: styles.main },
        React.createElement(Poster_1.default, { url: poster }),
        React.createElement("div", { className: styles.details },
            React.createElement("span", { className: styles.title }, title),
            !!genres && genres.length && (React.createElement("span", { className: styles.genres }, genres.join(" & "))),
            React.createElement("div", { className: styles.yearAndDuration },
                !!releaseDate && releaseDate.length > 3 && (React.createElement("span", { className: styles.year }, releaseDate.substr(0, 4))),
                !!runtime && (React.createElement("span", { className: styles.duration }, runtime + " min"))),
            React.createElement("span", { className: styles.overview }, overview))));
};
exports.default = MovieDetails;


/***/ }),

/***/ "./src/views/ErrorPage/ErrorPage.tsx":
/*!*******************************************!*\
  !*** ./src/views/ErrorPage/ErrorPage.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ErrorPage = function () { return React.createElement("span", null, "404"); };
exports.default = ErrorPage;


/***/ }),

/***/ "./src/views/SearchPage/SearchPage.actions.ts":
/*!****************************************************!*\
  !*** ./src/views/SearchPage/SearchPage.actions.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var movieService_1 = __webpack_require__(/*! Services/movieService */ "./src/services/movieService.ts");
var global_actions_1 = __webpack_require__(/*! App/global.actions */ "./src/global.actions.ts");
var searchActionTypes;
(function (searchActionTypes) {
    searchActionTypes["getMovieList"] = "GET_MOVIE_LIST_QUERY";
    searchActionTypes["getMovieListResponse"] = "GET_MOVIE_LIST_RESPONSE";
    searchActionTypes["movieListSorting"] = "MOVIE_LIST_SORT";
})(searchActionTypes || (searchActionTypes = {}));
exports.default = searchActionTypes;
// thunk action
exports.movieSearch = function (query) { return function (dispatch) {
    dispatch(global_actions_1.toggleFetchStatus(true));
    /* istanbul ignore next: covered by service tests*/
    movieService_1.default
        .getMovieList(query)
        .then(function (result) {
        dispatch({
            type: searchActionTypes.getMovieListResponse,
            payload: result
        });
        dispatch(global_actions_1.toggleFetchStatus(false));
    })
        .catch(function (error) {
        dispatch(global_actions_1.fetchError(error));
        dispatch(global_actions_1.toggleFetchStatus(false));
    });
    return {
        type: searchActionTypes.getMovieList,
        payload: query
    };
}; };


/***/ }),

/***/ "./src/views/SearchPage/SearchPage.reducer.ts":
/*!****************************************************!*\
  !*** ./src/views/SearchPage/SearchPage.reducer.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var SearchPage_actions_1 = __webpack_require__(/*! ./SearchPage.actions */ "./src/views/SearchPage/SearchPage.actions.ts");
var initialState = {
    query: "",
    movies: [],
    sortBy: "title"
};
var searchPageReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SearchPage_actions_1.default.getMovieList:
            return __assign({}, state, { query: action.payload });
        case SearchPage_actions_1.default.getMovieListResponse:
            return __assign({}, state, { movies: action.payload });
        case SearchPage_actions_1.default.movieListSorting:
            if (state.movies.length &&
                Object.keys(state.movies[0]).find(function (value) { return value === action.payload; })) {
                var newMovies = state.movies;
                newMovies.sort(function (a, b) {
                    if (typeof a[action.payload] === "string") {
                        return a[action.payload].localeCompare(b[action.payload]);
                    }
                    return b[action.payload] - a[action.payload];
                });
                return __assign({}, state, { movies: newMovies, sortBy: action.payload });
            }
            return __assign({}, state, { sortBy: action.payload });
        default:
            return state;
    }
};
exports.default = searchPageReducer;


/***/ }),

/***/ "./src/views/SearchPage/SearchPage.tsx":
/*!*********************************************!*\
  !*** ./src/views/SearchPage/SearchPage.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// react
var React = __webpack_require__(/*! react */ "react");
// components
var Header_1 = __webpack_require__(/*! Components/Header/Header */ "./src/components/Header/Header.tsx");
var MovieSearch_1 = __webpack_require__(/*! ./components/MovieSearch/MovieSearch */ "./src/views/SearchPage/components/MovieSearch/MovieSearch.tsx");
var MovieGrid_1 = __webpack_require__(/*! Components/MovieGrid/MovieGrid */ "./src/components/MovieGrid/MovieGrid.tsx");
var Footer_1 = __webpack_require__(/*! Components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
// services
var movieService_1 = __webpack_require__(/*! Services/movieService */ "./src/services/movieService.ts");
// redux imports
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var SearchPage = function (_a) {
    var location = _a.location, movieIDList = _a.movieIDList, props = __rest(_a, ["location", "movieIDList"]);
    return (React.createElement("div", null,
        React.createElement(Header_1.default, null,
            React.createElement(MovieSearch_1.default, { query: location.search &&
                    movieService_1.default.formatQueryStringToOptions(location.search) })),
        React.createElement("div", null,
            React.createElement(MovieGrid_1.default, { movieIDs: movieIDList })),
        React.createElement(Footer_1.default, null)));
};
exports.SearchPage = SearchPage;
/* istanbul ignore next*/
exports.default = react_redux_1.connect(function (state) {
    return {
        movieIDList: state.searchPage.movies.map(function (movie) { return movie.id; }) ||
            []
    };
}, undefined)(SearchPage);


/***/ }),

/***/ "./src/views/SearchPage/components/MovieSearch/MovieSearch.styles.css":
/*!****************************************************************************!*\
  !*** ./src/views/SearchPage/components/MovieSearch/MovieSearch.styles.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main--lwJ8YzOmOa","label":"label--PWCADLHhMH Typo-Base Typo-Bold","searchWrap":"searchWrap--3A6TicG3O-","searchField":"searchField--1_GP4PARK5","searchLabel":"searchLabel--1RtqNdZlQb label--PWCADLHhMH Typo-Base Typo-Bold","searchInput":"searchInput--22Tv-JRa-c Typo-Base","optionsLabel":"optionsLabel--1D99Vmq6-0 label--PWCADLHhMH Typo-Base Typo-Bold","options":"options--3u1uGhf6DA"};

/***/ }),

/***/ "./src/views/SearchPage/components/MovieSearch/MovieSearch.tsx":
/*!*********************************************************************!*\
  !*** ./src/views/SearchPage/components/MovieSearch/MovieSearch.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
// components
var Button_1 = __webpack_require__(/*! Components/Button/Button */ "./src/components/Button/Button.tsx");
// styles
var styles = __webpack_require__(/*! ./MovieSearch.styles.css */ "./src/views/SearchPage/components/MovieSearch/MovieSearch.styles.css");
// redux
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var SearchPage_actions_1 = __webpack_require__(/*! Views/SearchPage/SearchPage.actions */ "./src/views/SearchPage/SearchPage.actions.ts");
var movieService_1 = __webpack_require__(/*! Services/movieService */ "./src/services/movieService.ts");
var MovieSearch = /** @class */ (function (_super) {
    __extends(MovieSearch, _super);
    function MovieSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSearchFieldChange = function (event) {
            _this.setState({ searchFieldValue: event.target.value });
        };
        _this.handleSearchByChange = function (type) { return function (event) {
            event.preventDefault();
            _this.setState({ searchBy: type });
        }; };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            var query = __assign({ search: _this.state.searchFieldValue, searchBy: _this.state.searchBy }, _this.props.query);
            _this.props.submitAction(query);
            var newHash = _this.state.searchFieldValue
                ? movieService_1.default.formatOptionsToQueryString(query)
                : "";
            location.hash = newHash;
        };
        var searchValueExists = _this.props.query && _this.props.query.search;
        var searchByValueExists = _this.props.query && _this.props.query.searchBy;
        _this.state = {
            searchFieldValue: searchValueExists ? _this.props.query.search : "",
            searchBy: searchByValueExists ? _this.props.query.searchBy : "title"
        };
        return _this;
    }
    // search on mount
    MovieSearch.prototype.componentDidMount = function () {
        if (this.state.searchFieldValue) {
            this.props.submitAction(__assign({ search: this.state.searchFieldValue, searchBy: this.state.searchBy }, this.props.query));
        }
    };
    MovieSearch.prototype.render = function () {
        return (React.createElement("form", { className: styles.main, onSubmit: this.handleSubmit },
            React.createElement("div", { className: styles.searchWrap },
                React.createElement("div", { className: styles.searchField },
                    React.createElement("span", { className: styles.searchLabel }, "Find a movie"),
                    React.createElement("input", { className: styles.searchInput, type: "text", placeholder: "Movie title", onChange: this.handleSearchFieldChange, value: this.state.searchFieldValue })),
                React.createElement(Button_1.default, { label: "search", variant: "white", type: "submit", clickAction: this.handleSubmit })),
            React.createElement("div", { className: styles.options },
                React.createElement("span", { className: styles.optionsLabel }, "search by"),
                React.createElement(Button_1.default, { label: "title", size: "small", variant: this.state.searchBy === "title" ? "primary" : "white", clickAction: this.handleSearchByChange("title") }),
                React.createElement(Button_1.default, { label: "genres", size: "small", variant: this.state.searchBy === "genres" ? "primary" : "white", clickAction: this.handleSearchByChange("genres") }))));
    };
    return MovieSearch;
}(React.Component));
exports.MovieSearch = MovieSearch;
/* istanbul ignore next*/
exports.default = react_redux_1.connect(null, function (dispatch) { return ({
    submitAction: function (query) {
        SearchPage_actions_1.movieSearch(query)(dispatch);
    }
}); })(MovieSearch);


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map