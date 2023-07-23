$(document).ready(function () {
    function showTime() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var p = "AM";
        if (hours == 0) {
            hours = 12;
        }
        if (hours >= 12) {
            p = "PM";
        }
        if (hours > 12) {
            hours = hours - 12;
        }

        var hours = hours < 10 ? "0" + hours : hours;
        var minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = seconds < 10 ? "0" + seconds : seconds;
        $(".shours").text(hours);
        $(".smin").text(minutes);
        $(".ssec").text(seconds);
        $(".speriod").text(p);
        setTimeout(showTime, 1000);
    }
    showTime();
});