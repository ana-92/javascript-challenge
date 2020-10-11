const { getEventTypeIcon, getPremiumBadge, getCardDeadline } = require('./createElementsHTML');

/**
 * Handle when click in the apply button on the card.
 */
const applyButtonCardOnclick = () => {
    $('.apply').on('click', function (e) {
        let id = $(this).data('id');

        $('#modalDetails').modal('show', { id: id });
    });

    showModalEventDetail();
    hideModalEventDetail();
}

/**
 * Handle when the event detail modal is closed.
 */
const hideModalEventDetail = () => {
    $('#modalDetails').on('hide.bs.modal', function (e) {
        $('.alert').addClass('no-display');
    });
}

/**
 * Handle when the event detail modal is showed.
 */
const showModalEventDetail = () => {
    $('#modalDetails').on('show.bs.modal', function (e) {
        const { relatedTarget: { id } } = e;
        const events = window.events || [];
        const [event] = events.filter(({ event: eventObject }) => eventObject.id === id)

        $("#modalDetails .modal-title").html(event.title)
        $('.body-details').empty().append(getEventDetails(event));
        $('.button-footer').empty().append(getModalButton(event.applicationSent));

        $('.modal-detail-apply').on('click', (e) => onClickApplyEvent(event));
    });
}

/**
 * 
 * @param event {object} 
 */
const onClickApplyEvent = (event) => {
    const linkVanHackPremium = 'https://vanhack.com/premium/';
    const alert = $('.alert');
    alert.removeClass('no-display');
    alert.addClass('show');

    if (!event.isPremium) {
        event.setApplicationSent(true);
        if (alert.hasClass('alert-danger')) {
            alert.removeClass('alert-danger');
            alert.addClass('alert-success');
        }

        alert.html(`Successfully Applied!`);
        $(`.apply[data-id=${event.id.toString()}]`).html('See Application');
        $(`.card-featured[data-id=${event.id.toString()}]`).removeClass('offset-md-3').addClass('offset-md-2');
        $('.button-footer').empty().append(getModalButton(event.applicationSent));
        $(`.card-text[data-id=${event.id.toString()}]`).remove();

        $(`.card-body[data-id=${event.id.toString()}]`).append(getCardDeadline({ applicationSent: event.applicationSent, id: event.id }))
    }
    else {
        //Handle Error premium events 
        if (alert.hasClass('alert-success')) {
            alert.removeClass('alert-success');
            alert.addClass('alert-danger')
        }
        alert.html(`Need be premium read`);
        alert.append($('<a>', { class: 'alert-link', href: linkVanHackPremium }).html('&nbsphere'));
    }
}

/**
 * 
 * @param event { object } - instance of Event with all the details.
 * @returns list { html } - Unordered list with the details.
 */
const getEventDetails = (event) => {
    const list = $('<ul>').empty();
    const typeIcon = $('<div >', { class: "row icon-detail" })
        .append([
            $('<div >', { class: 'col-md-6' })
                .append([getEventTypeIcon(event.type), $('<b >').html(event.type.toUpperCase())]),
            getPremiumBadge(event.isPremium).removeClass('offset-md-7').addClass('offset-md-1')
        ]);

    const imageEvent = $($('<div >', { class: "text-center img-container-detail" }))
        .append($('<img>', { class: 'img-thumbnail img-detail' }).attr('src', event.imageURL));

    list.append([
        $('<li>').append([$('<b>').html('Description: '), $('<small>', { class: 'event-detail' }).html(`${event.description}`)]),
        $('<li>').append([$('<b>').html('Date: '), $('<small>', { class: 'event-detail' }).html(`${event.date}`)]),
        $('<li>').append([$('<b>').html('Deadline: '), $('<small>', { class: 'event-detail' }).html(`${event.deadline}`)]),
    ]);

    return [typeIcon, imageEvent, list];
};

/**
 * 
 * @param applicationSent {boolean}
 * @returns {html}
 */
const getModalButton = (applicationSent) => {
    const button = $('<button>', { class: 'btn btn-info modal-detail-apply apply-button' }).html("Apply");
    const applied = $('<div>')
        .append([
            $('<b>').html("Applied"),
            $('<i>', { class: 'fa fa-check-circle check-icon' })
        ]);

    return (applicationSent ? applied : button);
};


module.exports = { applyButtonCardOnclick };