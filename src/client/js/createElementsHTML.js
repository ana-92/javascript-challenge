/**
 * This function create the image in the card.
 * @param imageURL {string}
 * @returns image {html}
 */
const createImage = (imageURL) => {
    return $('<img>', { class: 'card-img-top' }).attr({ "src": imageURL, style: "height:225px" });
};

/**
 * This function create the content below the image in the card.
 * @param params {object} 
 * @param params.title {string} 
 * @param params.isPremium {boolean} 
 * @param params.deadline {string} 
 * @param params.index {number} 
 * @param params.description {string} 
 * @returns cardBody {html} - 
 */
const createCardBody = ({ title, isPremium, deadline, id, description, type, applicationSent }) => {
    const cardBody = $('<div>', { class: 'card-body', 'data-id': id });
    cardBody.append([
        createBodyHeader({ title, isPremium }),
        ...createCardContent({ deadline, id, description, type, applicationSent })]);

    return cardBody;
};

/**
 * This function create the header with the event title.
 * @param params {object} 
 * @param params.title {string}
 */
const createCardHeader = ({ title }) => {
    const titleH5Tag = $('<h5>', { class: `card-title`, }).html(title);
    return $('<div>', { class: 'card-header' }).append(titleH5Tag)
};

/**
 * This function create the title, the premium badge (if is necessary) and the icon to share.
 * @param params {object} 
 * @param params.isPremium {boolean}
 * @returns cardRow {html} - 
 */
const createBodyHeader = ({ isPremium }) => {
    const classIconShare = !isPremium ? `offset-md-8` : '';
    const iconShare = $('<div>', {
        class: `fb-share-button col-md-2 ${classIconShare}`,
        "data-href": "https://www.vanhack.com",
        "data-layout": "button"
    });

    const cardRow = $('<div>', { class: 'row card-badge' })
        .append([getPremiumBadge(isPremium), iconShare])

    return cardRow;

};


/**
 * 
 * @param isPremium {boolean}
 * @returns premiumBadge {html}
 */
const getPremiumBadge = (isPremium) => {
    const premiumBadge = isPremium
        ? $('<span>', { class: 'badge badge-pill badge-outline-info  col-md-4 offset-md-4 ', style: "height: 20px" }).html("Premium")
        : $('<div>', { style: "height: 20px" });
    return premiumBadge;
}

/**
 * This function create the button to apply and the deadline in the bottom.
 * @param params {object} 
 * @param params.deadline {Date}
 * @param params.index {number}
 * @param params.description {string}
 * @returns htmlTags {array} - This array contain all the html tags to create the footer.
 */
const createCardContent = ({ deadline, id, description, type, applicationSent }) => {
    //Event Description 
    const rowDescription = $('<div>', { class: 'row' });
    const descriptionPTag = $('<p>', { class: 'card-tex col-md-10' }).html(description);
    rowDescription.append([descriptionPTag, getEventTypeIcon(type)]);

    return [
        rowDescription,
        getCardDeadline({ applicationSent, id, deadline })
    ]

};

/**
 * Get Hmtl for the event deadline.
 * @param params {object}
 * @param params.applicationSent {boolean}
 * @param params.deadline {string}
 * @param params.id {string}
 */
const getCardDeadline = ({ applicationSent, id, deadline = null }) => {
    const textDeadline = applicationSent ? `Applied` : `Deadline: ${deadline}`;
    const checkIcon = applicationSent ? $('<i>', { class: 'fa fa-check-circle check-icon' }) : "";

    const deadlineSmallTag = $('<small>', { class: `text-muted` }).html(textDeadline);
    return $('<p>', { class: `card-text deadline`, 'data-id': id })
        .append([checkIcon, deadlineSmallTag]);
}

/***
 * Return the card button apply.
 * @param params {object}
 * @param params.applicationSent {boolean}
 * @param params.id {string}
 */
const getCardButton = ({ applicationSent, id }) => {
    const textApplyButton = applicationSent ? 'See Application' : 'Application';
    return $('<button>', { class: 'btn btn-dark apply apply-button', "data-id": id }).html(textApplyButton)
};

/**
 * @param type {string} : online or on-site
 * @returns typeIcon {html} 
 */
const getEventTypeIcon = (type) => {
    const classIcon = type !== 'on-site' ? 'fa fa-globe' : 'fa fa-map-marker'
    return $('<i>', { class: `${classIcon} type-icon col-md-1`, "aria-hidden": "true" });

}

/**
 * This function create the footer with the application button and the label of featured.
 * @param params {object} 
 * @param params.isImportant {boolean}
 * @param params.applicationSent {boolean}
 * @param params.id {string}
 */
const createCardFooter = ({ isImportant, applicationSent, id }) => {
    const divRow = $('<div>', { class: 'row' });
    const offsetClass = applicationSent ? `offset-md-2` : `offset-md-3`;
    const featureLabel = isImportant ? $('<div>', { class: `card-featured col-md-4 ${offsetClass}`, "data-id": id })
        .append([$('<i>', { class: 'fa fa-exclamation-circle' }), $('<span>', { class: 'feature-icon' }).html("Featured")]) : "";

    divRow.append([getCardButton({ applicationSent, id }), featureLabel]);
    return $('<div>', { class: 'card-footer' }).append(divRow);
};


module.exports = {
    createImage,
    createCardBody,
    createCardFooter,
    createCardHeader,
    getEventTypeIcon,
    getPremiumBadge,
    getCardDeadline
};