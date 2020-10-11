const { createImage, createCardBody, createCardFooter, createCardHeader } = require('./createElementsHTML');

/**
 * This function insert the card for each event  in the DOM
 */
const insertEvents = () => {
    const events = window.events;

    events.forEach((event) => {
        insertEvent({
            imageURL: event.imageURL,
            title: event.title,
            isPremium: event.isPremium,
            deadline: event.deadline,
            id: event.id,
            description: event.description,
            type: event.type,
            isImportant: event.isImportant,
            applicationSent: event.applicationSent

        });
    })

};

/**
 * This function insert one event in the card-block
 * @param params {object} 
 * @param params.imageURL {string} 
 * @param params.title {string} 
 * @param params.isPremium {boolean} 
 * @param params.deadline {string} 
 * @param params.id {number} 
 * @param params.description {string} 
 * @returns void.
 */
const insertEvent = ({
    imageURL,
    title,
    isPremium,
    deadline,
    id,
    description,
    type,
    isImportant,
    applicationSent }) => {

    const clasImportant = isImportant ? `card-important` : '';
    const card = $('<div>', { class: `card  mb-3 card-shadow ${clasImportant}` });

    card.append([
        createCardHeader({ title }),
        createImage(imageURL),
        createCardBody({
            title,
            isPremium,
            deadline,
            id,
            description,
            type,
            applicationSent
        }),
        createCardFooter({ isImportant, applicationSent, id })
    ]);

    $('#card-block').append(card);
};


module.exports = { insertEvents };