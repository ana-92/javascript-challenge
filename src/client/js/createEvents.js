
const { Event } = require('./event');
const { getEventTypes } = require('./utils/getEventType');

/**
 * Get random date between today and 30 dias after;
 */
const randomDate = () => {
    const start = new Date();
    const endTime = start.getTime() + (86400000 * 30);
    const diff = (endTime - start.getTime()) * Math.random();

    return new Date(start.getTime() + diff);
}


/**
 * This function create events with dummy data
 */
const createEvents = () => {
    const type = ['online', 'on-site'];
    const imagesURL = [
        'https://blog.vanhack.com/wp-content/uploads/2020/01/Leap2.png',
        'https://inpaymentsmag.com/.protect/image/20200407-f54ead8b/meetups_54d14714171a1bda6c47.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6FwGKI7X716VkKUgnccvCdKs7uQ_vDeS8fQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzJCt2VxeHzE7Ud_ZRZ-mau7jk4ALb_eDoJA&usqp=CAU',
        'https://www.vanhack.com/wp-content/uploads/2018/05/IMG_9501.jpg?x22068',
        'https://news.communitech.ca/wp-content/uploads/kroetsch-main.jpg',
    ];

    const events = getEventTypes().map((event, index) => {
        //In this case I put only the premium and meetup events as online.
        const selectedType = event === 'Premium' || event === 'Meetup' ? type[0] : type[1]
        return new Event({
            id: index,
            eventType: event,
            type: selectedType,
            applicationSent: index === 0, //should mark the first event as like is sent an application
            description: `This is a ${selectedType} event you should assist.`,
            date: randomDate(),
            title: `Event ${event.toLowerCase()}`,
            imageURL: imagesURL[index]
        })
    })

    window.events = events;
    window.allEvents = events;
};

module.exports = { createEvents }