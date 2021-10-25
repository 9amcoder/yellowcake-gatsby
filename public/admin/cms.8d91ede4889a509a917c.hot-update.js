webpackHotUpdate("cms",{

/***/ "./node_modules/emailjs-com/es/api/sendPost.js":
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/es/api/sendPost.js ***!
  \*****************************************************/
/*! exports provided: sendPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPost", function() { return sendPost; });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/emailjs-com/es/store/store.js");


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__["EmailJSResponseStatus"](target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__["EmailJSResponseStatus"](target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__["store"]._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/emailjs-com/es/index.js ***!
  \**********************************************/
/*! exports provided: init, send, sendForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/emailjs-com/es/methods/init/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _methods_init_init__WEBPACK_IMPORTED_MODULE_0__["init"]; });

/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/emailjs-com/es/methods/send/send.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return _methods_send_send__WEBPACK_IMPORTED_MODULE_1__["send"]; });

/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendForm", function() { return _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__["sendForm"]; });





/* harmony default export */ __webpack_exports__["default"] = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__["init"],
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__["send"],
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__["sendForm"],
});


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/init/init.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/init/init.js ***!
  \**********************************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__["store"]._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__["store"]._origin = origin;
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/send/send.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/send/send.js ***!
  \**********************************************************/
/*! exports provided: send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__["store"]._userID;
    Object(_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__["validateParams"])(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return Object(_api_sendPost__WEBPACK_IMPORTED_MODULE_2__["sendPost"])('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js ***!
  \******************************************************************/
/*! exports provided: sendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendForm", function() { return sendForm; });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__["store"]._userID;
    const currentForm = findHTMLForm(form);
    Object(_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__["validateParams"])(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return Object(_api_sendPost__WEBPACK_IMPORTED_MODULE_2__["sendPost"])('/api/v1.0/email/send-form', formData);
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js ***!
  \*********************************************************************/
/*! exports provided: EmailJSResponseStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailJSResponseStatus", function() { return EmailJSResponseStatus; });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ }),

/***/ "./node_modules/emailjs-com/es/store/store.js":
/*!****************************************************!*\
  !*** ./node_modules/emailjs-com/es/store/store.js ***!
  \****************************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/utils/validateParams.js":
/*!*************************************************************!*\
  !*** ./node_modules/emailjs-com/es/utils/validateParams.js ***!
  \*************************************************************/
/*! exports provided: validateParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateParams", function() { return validateParams; });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }),

/***/ "./src/components/ContactUS.js":
/*!*************************************!*\
  !*** ./src/components/ContactUS.js ***!
  \*************************************/
/*! exports provided: ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/components/ContactUS.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ContactUs = function ContactUs() {
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm('service_zx3r63r', 'template_d3zzh4o', form.current, 'user_9j9DE40Kp30fTz8EeyiGG').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: form,
    onSubmit: sendEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "user_name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "user_email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

__signature__(ContactUs, "useRef{form}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactUs, "ContactUs", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/components/ContactUS.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/ContactPage.js":
/*!**************************************!*\
  !*** ./src/templates/ContactPage.js ***!
  \**************************************/
/*! exports provided: ContactPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageTemplate", function() { return ContactPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormSimpleAjax */ "./src/components/FormSimpleAjax.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_GoogleMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GoogleMap */ "./src/components/GoogleMap.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactPage.css */ "./src/templates/ContactPage.css");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ContactUS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContactUS */ "./src/components/ContactUS.js");
var _this = undefined,
    _jsxFileName = "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









 // Export Template for use in CMS preview

var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      address = _ref.address,
      phone = _ref.phone,
      email = _ref.email,
      locations = _ref.locations;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section Contact--Section1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container Contact--Section1--Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    source: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact--Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(address),
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), " ", address), phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "tel:" + phone,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Smartphone"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), " ", phone), email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "mailto:" + email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mail"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), " ", email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Click here to send us email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContactUS__WEBPACK_IMPORTED_MODULE_8__["ContactUs"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GoogleMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    locations: locations,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }));
};

var ContactPage = function ContactPage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactPageTemplate, Object.assign({}, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  })));
};

var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "2576369059";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(ContactPage, "ContactPage", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
  reactHotLoader.register(_default, "default", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/templates/ContactPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.8d91ede4889a509a917c.hot-update.js.map