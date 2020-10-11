/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/createElementsHTML.js":
/*!*********************************************!*\
  !*** ./src/client/js/createElementsHTML.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 149:0-14 */
/***/ ((module) => {

eval("/**\n * This function create the image in the card.\n * @param imageURL {string}\n * @returns image {html}\n */\nconst createImage = (imageURL) => {\n    return $('<img>', { class: 'card-img-top' }).attr({ \"src\": imageURL, style: \"height:225px\" });\n};\n\n/**\n * This function create the content below the image in the card.\n * @param params {object} \n * @param params.title {string} \n * @param params.isPremium {boolean} \n * @param params.deadline {string} \n * @param params.index {number} \n * @param params.description {string} \n * @returns cardBody {html} - \n */\nconst createCardBody = ({ title, isPremium, deadline, id, description, type, applicationSent }) => {\n    const cardBody = $('<div>', { class: 'card-body', 'data-id': id });\n    cardBody.append([\n        createBodyHeader({ title, isPremium }),\n        ...createCardContent({ deadline, id, description, type, applicationSent })]);\n\n    return cardBody;\n};\n\n/**\n * This function create the header with the event title.\n * @param params {object} \n * @param params.title {string}\n */\nconst createCardHeader = ({ title }) => {\n    const titleH5Tag = $('<h5>', { class: `card-title`, }).html(title);\n    return $('<div>', { class: 'card-header' }).append(titleH5Tag)\n};\n\n/**\n * This function create the title, the premium badge (if is necessary) and the icon to share.\n * @param params {object} \n * @param params.isPremium {boolean}\n * @returns cardRow {html} - \n */\nconst createBodyHeader = ({ isPremium }) => {\n    const classIconShare = !isPremium ? `offset-md-8` : '';\n    const iconShare = $('<div>', {\n        class: `fb-share-button col-md-2 ${classIconShare}`,\n        \"data-href\": \"https://www.vanhack.com\",\n        \"data-layout\": \"button\"\n    });\n\n    const cardRow = $('<div>', { class: 'row card-badge' })\n        .append([getPremiumBadge(isPremium), iconShare])\n\n    return cardRow;\n\n};\n\n\n/**\n * \n * @param isPremium {boolean}\n * @returns premiumBadge {html}\n */\nconst getPremiumBadge = (isPremium) => {\n    const premiumBadge = isPremium\n        ? $('<span>', { class: 'badge badge-pill badge-outline-info  col-md-4 offset-md-4 ', style: \"height: 20px\" }).html(\"Premium\")\n        : $('<div>', { style: \"height: 20px\" });\n    return premiumBadge;\n}\n\n/**\n * This function create the button to apply and the deadline in the bottom.\n * @param params {object} \n * @param params.deadline {Date}\n * @param params.index {number}\n * @param params.description {string}\n * @returns htmlTags {array} - This array contain all the html tags to create the footer.\n */\nconst createCardContent = ({ deadline, id, description, type, applicationSent }) => {\n    //Event Description \n    const rowDescription = $('<div>', { class: 'row' });\n    const descriptionPTag = $('<p>', { class: 'card-tex col-md-10' }).html(description);\n    rowDescription.append([descriptionPTag, getEventTypeIcon(type)]);\n\n    return [\n        rowDescription,\n        getCardDeadline({ applicationSent, id, deadline })\n    ]\n\n};\n\n/**\n * Get Hmtl for the event deadline.\n * @param params {object}\n * @param params.applicationSent {boolean}\n * @param params.deadline {string}\n * @param params.id {string}\n */\nconst getCardDeadline = ({ applicationSent, id, deadline = null }) => {\n    const textDeadline = applicationSent ? `Applied` : `Deadline: ${deadline}`;\n    const checkIcon = applicationSent ? $('<i>', { class: 'fa fa-check-circle check-icon' }) : \"\";\n\n    const deadlineSmallTag = $('<small>', { class: `text-muted` }).html(textDeadline);\n    return $('<p>', { class: `card-text deadline`, 'data-id': id })\n        .append([checkIcon, deadlineSmallTag]);\n}\n\n/***\n * Return the card button apply.\n * @param params {object}\n * @param params.applicationSent {boolean}\n * @param params.id {string}\n */\nconst getCardButton = ({ applicationSent, id }) => {\n    const textApplyButton = applicationSent ? 'See Application' : 'Application';\n    return $('<button>', { class: 'btn btn-dark apply apply-button', \"data-id\": id }).html(textApplyButton)\n};\n\n/**\n * @param type {string} : online or on-site\n * @returns typeIcon {html} \n */\nconst getEventTypeIcon = (type) => {\n    const classIcon = type !== 'on-site' ? 'fa fa-globe' : 'fa fa-map-marker'\n    return $('<i>', { class: `${classIcon} type-icon col-md-1`, \"aria-hidden\": \"true\" });\n\n}\n\n/**\n * This function create the footer with the application button and the label of featured.\n * @param params {object} \n * @param params.isImportant {boolean}\n * @param params.applicationSent {boolean}\n * @param params.id {string}\n */\nconst createCardFooter = ({ isImportant, applicationSent, id }) => {\n    const divRow = $('<div>', { class: 'row' });\n    const offsetClass = applicationSent ? `offset-md-2` : `offset-md-3`;\n    const featureLabel = isImportant ? $('<div>', { class: `card-featured col-md-4 ${offsetClass}`, \"data-id\": id })\n        .append([$('<i>', { class: 'fa fa-exclamation-circle' }), $('<span>', { class: 'feature-icon' }).html(\"Featured\")]) : \"\";\n\n    divRow.append([getCardButton({ applicationSent, id }), featureLabel]);\n    return $('<div>', { class: 'card-footer' }).append(divRow);\n};\n\n\nmodule.exports = {\n    createImage,\n    createCardBody,\n    createCardFooter,\n    createCardHeader,\n    getEventTypeIcon,\n    getPremiumBadge,\n    getCardDeadline\n};\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/createElementsHTML.js?");

/***/ }),

/***/ "./src/client/js/createEvents.js":
/*!***************************************!*\
  !*** ./src/client/js/createEvents.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 50:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Event } = __webpack_require__(/*! ./event */ \"./src/client/js/event.js\");\nconst { getEventTypes } = __webpack_require__(/*! ./utils/getEventType */ \"./src/client/js/utils/getEventType.js\");\n\n/**\n * Get random date between today and 30 dias after;\n */\nconst randomDate = () => {\n    const start = new Date();\n    const endTime = start.getTime() + (86400000 * 30);\n    const diff = (endTime - start.getTime()) * Math.random();\n\n    return new Date(start.getTime() + diff);\n}\n\n\n/**\n * This function create events with dummy data\n */\nconst createEvents = () => {\n    const type = ['online', 'on-site'];\n    const imagesURL = [\n        'https://blog.vanhack.com/wp-content/uploads/2020/01/Leap2.png',\n        'https://inpaymentsmag.com/.protect/image/20200407-f54ead8b/meetups_54d14714171a1bda6c47.jpg',\n        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6FwGKI7X716VkKUgnccvCdKs7uQ_vDeS8fQ&usqp=CAU',\n        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzJCt2VxeHzE7Ud_ZRZ-mau7jk4ALb_eDoJA&usqp=CAU',\n        'https://www.vanhack.com/wp-content/uploads/2018/05/IMG_9501.jpg?x22068',\n        'https://news.communitech.ca/wp-content/uploads/kroetsch-main.jpg',\n    ];\n\n    const events = getEventTypes().map((event, index) => {\n        //In this case I put only the premium and meetup events as online.\n        const selectedType = event === 'Premium' || event === 'Meetup' ? type[0] : type[1]\n        return new Event({\n            id: index,\n            eventType: event,\n            type: selectedType,\n            applicationSent: index === 0, //should mark the first event as like is sent an application\n            description: `This is a ${selectedType} event you should assist.`,\n            date: randomDate(),\n            title: `Event ${event.toLowerCase()}`,\n            imageURL: imagesURL[index]\n        })\n    })\n\n    window.events = events;\n    window.allEvents = events;\n};\n\nmodule.exports = { createEvents }\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/createEvents.js?");

/***/ }),

/***/ "./src/client/js/event.js":
/*!********************************!*\
  !*** ./src/client/js/event.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 103:0-14 */
/***/ ((module) => {

eval("/**This class should handle the event */\nconst important = ['Leap', 'Mission Recruiting', 'Vanhackaton'];\n\nclass Event {\n    /**\n    * @param  {{ \n    *            id : number  - unique identifier\n    *            eventType: string - could be : leap, meetup, mission,vanhackaton,premium,open.\n    *            description : string.\n    *            date: Date \n    *            type: string - online or on-site\n    *            title: string \n    *            applicationSent: boolean - default false\n    *            imageURL: string\n    *  }} event - The object that contains all the information about the event.\n    *\n    */\n\n    constructor(event) {\n        this.event = event;\n    }\n\n    get id() {\n        return this.event.id;\n    }\n\n    get eventType() {\n        return this.event.eventType;\n    }\n\n    get date() {\n        return formatDate(this.event.date);\n    }\n\n    get type() {\n        return this.event.type;\n    }\n\n    get isPremium() {\n        return this.event.eventType.toLowerCase() === 'premium';\n    }\n\n    get deadline() {\n        return getDeadline(this.event.date);\n    }\n\n    get title() {\n        return this.event.title;\n    }\n\n    get description() {\n        return this.event.description;\n    }\n\n    get imageURL() {\n        return this.event.imageURL;\n    }\n\n    get isImportant() {\n        return important.includes(this.eventType);\n    }\n\n    get applicationSent() {\n        return this.event.applicationSent || false;\n    }\n\n    setApplicationSent(sent) {\n        this.event.applicationSent = sent;\n    }\n}\n\n\nconst setApplicationSent = () => {\n\n}\n\n/**\n * @param date  {date|string} - event date.\n * @returns {string} - Date format <Month> <day>, <year>\n */\nconst formatDate = (date) => {\n    const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n\n    const day = date.getDate();\n    const month = months[date.getMonth()];\n    const year = date.getFullYear();\n    return `${month} ${day}, ${year}`;\n}\n\n/**\n * This function retuns the deadline for the event\n * @param date  {string} - event date.\n * @returns {string} - Date format <Month> <day>, <year>\n */\nconst getDeadline = (date) => {\n    //assuming the deadline is the day before\n    date.setDate(date.getDate() - 1);\n    return formatDate(date);\n\n}\n\n\nmodule.exports = { Event };\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/event.js?");

/***/ }),

/***/ "./src/client/js/eventDetails.js":
/*!***************************************!*\
  !*** ./src/client/js/eventDetails.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 122:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getEventTypeIcon, getPremiumBadge, getCardDeadline } = __webpack_require__(/*! ./createElementsHTML */ \"./src/client/js/createElementsHTML.js\");\n\n/**\n * Handle when click in the apply button on the card.\n */\nconst applyButtonCardOnclick = () => {\n    $('.apply').on('click', function (e) {\n        let id = $(this).data('id');\n\n        $('#modalDetails').modal('show', { id: id });\n    });\n\n    showModalEventDetail();\n    hideModalEventDetail();\n}\n\n/**\n * Handle when the event detail modal is closed.\n */\nconst hideModalEventDetail = () => {\n    $('#modalDetails').on('hide.bs.modal', function (e) {\n        $('.alert').addClass('no-display');\n    });\n}\n\n/**\n * Handle when the event detail modal is showed.\n */\nconst showModalEventDetail = () => {\n    $('#modalDetails').on('show.bs.modal', function (e) {\n        const { relatedTarget: { id } } = e;\n        const events = window.events || [];\n        const [event] = events.filter(({ event: eventObject }) => eventObject.id === id)\n\n        $(\"#modalDetails .modal-title\").html(event.title)\n        $('.body-details').empty().append(getEventDetails(event));\n        $('.button-footer').empty().append(getModalButton(event.applicationSent));\n\n        $('.modal-detail-apply').on('click', (e) => onClickApplyEvent(event));\n    });\n}\n\n/**\n * \n * @param event {object} \n */\nconst onClickApplyEvent = (event) => {\n    const linkVanHackPremium = 'https://vanhack.com/premium/';\n    const alert = $('.alert');\n    alert.removeClass('no-display');\n    alert.addClass('show');\n\n    if (!event.isPremium) {\n        event.setApplicationSent(true);\n        if (alert.hasClass('alert-danger')) {\n            alert.removeClass('alert-danger');\n            alert.addClass('alert-success');\n        }\n\n        alert.html(`Successfully Applied!`);\n        $(`.apply[data-id=${event.id.toString()}]`).html('See Application');\n        $(`.card-featured[data-id=${event.id.toString()}]`).removeClass('offset-md-3').addClass('offset-md-2');\n        $('.button-footer').empty().append(getModalButton(event.applicationSent));\n        $(`.card-text[data-id=${event.id.toString()}]`).remove();\n\n        $(`.card-body[data-id=${event.id.toString()}]`).append(getCardDeadline({ applicationSent: event.applicationSent, id: event.id }))\n    }\n    else {\n        //Handle Error premium events \n        if (alert.hasClass('alert-success')) {\n            alert.removeClass('alert-success');\n            alert.addClass('alert-danger')\n        }\n        alert.html(`Need be premium read`);\n        alert.append($('<a>', { class: 'alert-link', href: linkVanHackPremium }).html('&nbsphere'));\n    }\n}\n\n/**\n * \n * @param event { object } - instance of Event with all the details.\n * @returns list { html } - Unordered list with the details.\n */\nconst getEventDetails = (event) => {\n    const list = $('<ul>').empty();\n    const typeIcon = $('<div >', { class: \"row icon-detail\" })\n        .append([\n            $('<div >', { class: 'col-md-6' })\n                .append([getEventTypeIcon(event.type), $('<b >').html(event.type.toUpperCase())]),\n            getPremiumBadge(event.isPremium).removeClass('offset-md-7').addClass('offset-md-1')\n        ]);\n\n    const imageEvent = $($('<div >', { class: \"text-center img-container-detail\" }))\n        .append($('<img>', { class: 'img-thumbnail img-detail' }).attr('src', event.imageURL));\n\n    list.append([\n        $('<li>').append([$('<b>').html('Description: '), $('<small>', { class: 'event-detail' }).html(`${event.description}`)]),\n        $('<li>').append([$('<b>').html('Date: '), $('<small>', { class: 'event-detail' }).html(`${event.date}`)]),\n        $('<li>').append([$('<b>').html('Deadline: '), $('<small>', { class: 'event-detail' }).html(`${event.deadline}`)]),\n    ]);\n\n    return [typeIcon, imageEvent, list];\n};\n\n/**\n * \n * @param applicationSent {boolean}\n * @returns {html}\n */\nconst getModalButton = (applicationSent) => {\n    const button = $('<button>', { class: 'btn btn-info modal-detail-apply apply-button' }).html(\"Apply\");\n    const applied = $('<div>')\n        .append([\n            $('<b>').html(\"Applied\"),\n            $('<i>', { class: 'fa fa-check-circle check-icon' })\n        ]);\n\n    return (applicationSent ? applied : button);\n};\n\n\nmodule.exports = { applyButtonCardOnclick };\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/eventDetails.js?");

/***/ }),

/***/ "./src/client/js/insertEvents.js":
/*!***************************************!*\
  !*** ./src/client/js/insertEvents.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 70:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createImage, createCardBody, createCardFooter, createCardHeader } = __webpack_require__(/*! ./createElementsHTML */ \"./src/client/js/createElementsHTML.js\");\n\n/**\n * This function insert the card for each event  in the DOM\n */\nconst insertEvents = () => {\n    const events = window.events;\n\n    events.forEach((event) => {\n        insertEvent({\n            imageURL: event.imageURL,\n            title: event.title,\n            isPremium: event.isPremium,\n            deadline: event.deadline,\n            id: event.id,\n            description: event.description,\n            type: event.type,\n            isImportant: event.isImportant,\n            applicationSent: event.applicationSent\n\n        });\n    })\n\n};\n\n/**\n * This function insert one event in the card-block\n * @param params {object} \n * @param params.imageURL {string} \n * @param params.title {string} \n * @param params.isPremium {boolean} \n * @param params.deadline {string} \n * @param params.id {number} \n * @param params.description {string} \n * @returns void.\n */\nconst insertEvent = ({\n    imageURL,\n    title,\n    isPremium,\n    deadline,\n    id,\n    description,\n    type,\n    isImportant,\n    applicationSent }) => {\n\n    const clasImportant = isImportant ? `card-important` : '';\n    const card = $('<div>', { class: `card  mb-3 card-shadow ${clasImportant}` });\n\n    card.append([\n        createCardHeader({ title }),\n        createImage(imageURL),\n        createCardBody({\n            title,\n            isPremium,\n            deadline,\n            id,\n            description,\n            type,\n            applicationSent\n        }),\n        createCardFooter({ isImportant, applicationSent, id })\n    ]);\n\n    $('#card-block').append(card);\n};\n\n\nmodule.exports = { insertEvents };\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/insertEvents.js?");

/***/ }),

/***/ "./src/client/js/navBar.js":
/*!*********************************!*\
  !*** ./src/client/js/navBar.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 34:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getEventTypes } = __webpack_require__(/*! ./utils/getEventType */ \"./src/client/js/utils/getEventType.js\");\nconst { insertEvents } = __webpack_require__(/*! ./insertEvents */ \"./src/client/js/insertEvents.js\");\nconst { applyButtonCardOnclick } = __webpack_require__(/*! ./eventDetails */ \"./src/client/js/eventDetails.js\");\n\n\nconst navBarOnClick = (e) => {\n    const currentType = e.currentTarget.innerHTML;\n\n    const allEvents = window.allEvents;\n    $('.card-columns').empty();\n\n    window.events = currentType == \"All\" ? allEvents : allEvents.filter(({ event }) => event.eventType == currentType)\n\n    insertEvents();\n    applyButtonCardOnclick();\n}\n\n/**\n * Insert items in navbar\n */\nconst insertEventsInNavBar = () => {\n    const all = $('<a>', { class: 'text-muted' }).html(\"All\");\n    const eventNavBar = getEventTypes().map(event => $('<a>', { class: 'text-muted' }).html(event));\n    const allEvents = [all, ...eventNavBar];\n\n    allEvents.forEach(elementHTML => {\n        elementHTML.on('click', navBarOnClick);\n    });\n\n    $('.nav').append(allEvents);\n};\n\n\nmodule.exports = { insertEventsInNavBar, navBarOnClick }\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/navBar.js?");

/***/ }),

/***/ "./src/client/js/shareFacebook.js":
/*!****************************************!*\
  !*** ./src/client/js/shareFacebook.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module) => {

eval("\n\nconst shareFacebook = (d, id) => {\n    let js;\n    const fjs = d.getElementsByTagName('script')[0];\n\n    if (d.getElementById(id)) {\n        return;\n    }\n\n    js = d.createElement('script');\n    js.id = id;\n    js.src = \"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0\";\n    fjs.parentNode.insertBefore(js, fjs);\n};\n\nmodule.exports = { shareFacebook };\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/shareFacebook.js?");

/***/ }),

/***/ "./src/client/js/utils/getEventType.js":
/*!*********************************************!*\
  !*** ./src/client/js/utils/getEventType.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 8:0-14 */
/***/ ((module) => {

eval("/**\n * All the even types in VanHack\n */\nconst getEventTypes = () => {\n    return ['Leap', 'Meetup', 'Mission Recruiting', 'Premium', 'Vanhackaton', 'Open'];\n}\n\nmodule.exports = { getEventTypes };\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/utils/getEventType.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!********************************!*\
  !*** ./src/client/js/index.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("\nconst { createEvents } = __webpack_require__(/*! ./createEvents */ \"./src/client/js/createEvents.js\");\nconst { insertEvents } = __webpack_require__(/*! ./insertEvents */ \"./src/client/js/insertEvents.js\");\nconst { insertEventsInNavBar } = __webpack_require__(/*! ./navBar */ \"./src/client/js/navBar.js\");\nconst { applyButtonCardOnclick } = __webpack_require__(/*! ./eventDetails */ \"./src/client/js/eventDetails.js\");\nconst { shareFacebook } = __webpack_require__(/*! ./shareFacebook */ \"./src/client/js/shareFacebook.js\");\n\n(() => {\n    createEvents();\n    insertEvents();\n    insertEventsInNavBar();\n    applyButtonCardOnclick();\n    shareFacebook(document, 'facebook-jssdk');\n})();\n\n\n\n\n//# sourceURL=webpack://vanhackchallenge/./src/client/js/index.js?");
})();

/******/ })()
;