/**This class should handle the event */
const important = ['Leap', 'Mission Recruiting', 'Vanhackaton'];

class Event {
    /**
    * @param  {{ 
    *            id : number  - unique identifier
    *            eventType: string - could be : leap, meetup, mission,vanhackaton,premium,open.
    *            description : string.
    *            date: Date 
    *            type: string - online or on-site
    *            title: string 
    *            applicationSent: boolean - default false
    *            imageURL: string
    *  }} event - The object that contains all the information about the event.
    *
    */

    constructor(event) {
        this.event = event;
    }

    get id() {
        return this.event.id;
    }

    get eventType() {
        return this.event.eventType;
    }

    get date() {
        return formatDate(this.event.date);
    }

    get type() {
        return this.event.type;
    }

    get isPremium() {
        return this.event.eventType.toLowerCase() === 'premium';
    }

    get deadline() {
        return getDeadline(this.event.date);
    }

    get title() {
        return this.event.title;
    }

    get description() {
        return this.event.description;
    }

    get imageURL() {
        return this.event.imageURL;
    }

    get isImportant() {
        return important.includes(this.eventType);
    }

    get applicationSent() {
        return this.event.applicationSent || false;
    }

    setApplicationSent(sent) {
        this.event.applicationSent = sent;
    }
}


const setApplicationSent = () => {

}

/**
 * @param date  {date|string} - event date.
 * @returns {string} - Date format <Month> <day>, <year>
 */
const formatDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

/**
 * This function retuns the deadline for the event
 * @param date  {string} - event date.
 * @returns {string} - Date format <Month> <day>, <year>
 */
const getDeadline = (date) => {
    //assuming the deadline is the day before
    date.setDate(date.getDate() - 1);
    return formatDate(date);

}


module.exports = { Event };