const { getEventTypes } = require('./utils/getEventType');
const { insertEvents } = require('./insertEvents');
const { applyButtonCardOnclick } = require('./eventDetails');


const navBarOnClick = (e) => {
    const currentType = e.currentTarget.innerHTML;

    const allEvents = window.allEvents;
    $('.card-columns').empty();

    window.events = currentType == "All" ? allEvents : allEvents.filter(({ event }) => event.eventType == currentType)

    insertEvents();
    applyButtonCardOnclick();
}

/**
 * Insert items in navbar
 */
const insertEventsInNavBar = () => {
    const all = $('<a>', { class: 'text-muted' }).html("All");
    const eventNavBar = getEventTypes().map(event => $('<a>', { class: 'text-muted' }).html(event));
    const allEvents = [all, ...eventNavBar];

    allEvents.forEach(elementHTML => {
        elementHTML.on('click', navBarOnClick);
    });

    $('.nav').append(allEvents);
};


module.exports = { insertEventsInNavBar, navBarOnClick }