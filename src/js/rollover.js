$(function() {
    $(".socialGraphics")
        .mouseover(function() {
            var src = $(this).attr("src");
            var regex = /_gray.png/gi;
            src = this.src.replace(regex,'_gradient.png');
            $(this).css('opacity', '0.7').attr("src", src);

        })
        .mouseout(function() {
            var src = $(this).attr("src");
            var regex = /_gradient.png/gi;
            src = this.src.replace(regex,'_gray.png');
            $(this).css('opacity', '1').attr("src", src);

        });
});
