// Wrap every letter in a span
$('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
    .add({
        targets: '.ml12 .letter',
        translateX: [40,10],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1700,
        delay: function(el, i) {
            return 500 + 30 * i;
        }
    });
