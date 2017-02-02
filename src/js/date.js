'use strict';

export default function formateDate(d) {

    var date = new Date(d),
        day = '0' + date.getDate(),
        month = '0' + (date.getMonth() + 1),
        year = date.getFullYear(),
        hours = '0' + date.getHours(),
        minutes = '0' + date.getMinutes();

    return [
        [ day.substr(-2), month.substr(-2), year ].join('.'),
        [ hours.substr(-2), minutes.substr(-2) ].join(':')
    ].join(' kl. ');
}
