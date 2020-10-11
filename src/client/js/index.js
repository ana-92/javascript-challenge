
const { createEvents } = require('./createEvents');
const { insertEvents } = require('./insertEvents');
const { insertEventsInNavBar } = require('./navBar');
const { applyButtonCardOnclick } = require('./eventDetails');
const { shareFacebook } = require('./shareFacebook');

(() => {
    createEvents();
    insertEvents();
    insertEventsInNavBar();
    applyButtonCardOnclick();
    shareFacebook(document, 'facebook-jssdk');
})();


