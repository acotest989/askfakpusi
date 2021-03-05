$('#thanks img').attr('src', 'https://devinfo.club/milenko/Chat/425/ps8/bs9/images/skin1.png').width(80);

$('#nextStep, #okBtn').click(function() {
    if ($('#thanks, #qEmail').is(':visible')) {
        $('.video-container').hide();
    }
});

$('#age').change(function() {
    if ($('#thanks, #qEmail').is(':visible')) {
        $('.video-container').hide();
    }
});

if ($('#thanks, #qEmail').is(':visible')) {
    $('.video-container').hide();
}