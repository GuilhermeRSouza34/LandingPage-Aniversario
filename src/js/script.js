document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date('2024-06-10').getTime(); // Data do aniversário

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = deadline - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = 'Feliz Aniversário!';
        }
    }, 1000);
});