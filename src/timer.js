(function () {

    const $second = $('#second_time'),
        $minutes = $('#minutes_time'),
        $hours = $('#hours_time'),
        $day = $('#day_time');

        const date_future = new Date(2020, 11, 1);

    setInterval(function () {
        const date_now = new Date();

        let seconds = Math.floor((date_future - (date_now)) / 1000),
            minutes = Math.floor(seconds / 60),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        if (date_now >= date_future) {

            $day.text('0');
            $second.text('0');
            $minutes.text('0');
            $hours.text('0');

            return
        }

        $day.text(days);
        $second.text(seconds);
        $minutes.text(minutes);
        $hours.text(hours);
    }, 1000);
})();
