$(document).ready(function () {
    $('#lvl1').find('ul').addClass('hidden');
})

$('button').on('click', function () {

    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $(this).parent('li').siblings().removeClass('hidden');
        $(this).parent('li').children('ul').addClass('hidden');
        $(this).parent('li').find('li').removeClass('hidden');
        $(this).parent().find('*').removeClass('selected');
        $(this).parent().find('ul').addClass('hidden');
        $('html, body').animate({ scrollTop: $(document).height() + 100 }, 'slow');
        $(this).find('*').prop('checked', false);
        $(this).removeClass('goback');
        return false;

    } else {
        $(this).addClass('selected');
        $(this).parent('li').siblings('li').addClass('hidden');
        $(this).parent('li').children('ul').removeClass('hidden');
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        $(this).find('*').prop('checked', false);
        return false;
    }
})

$('button').mouseenter(function () {
    if ($(this).hasClass('selected')) {
        $(this).addClass('goback');
    }
});

$('button').mouseleave(function () {
    if ($(this).hasClass('selected')) {
        $(this).removeClass('goback');
    }
});
