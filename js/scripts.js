
$(document).ready(function(){

    $(".browseOptions__Title").click(function () {
        $(".browseOptions__CheckBoxBlock").toggleClass("browseOptions__CheckBoxBlock--active");
    });

    $(".articleMainRight__options").click(function () {
        $(".articleFaqCategory").toggleClass("articleFaqCategory__hide");
    });


    if ($('.customText').length){
        $('.customText').readmore({
            speed: 500,
            collapsedHeight: 160,
            lessLink: '<a href="#">Close</a>'
        });
    }

    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       false,       // default
            live:         true        // default
        }
    );
    wow.init();

});


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrolled);

    for (var i = 0; document.querySelectorAll('.workit').length > i; i++) {
        var elem = document.querySelectorAll('.workit')[i];
        var nc = "";
        var ts = getOffsetRect(elem).top - clientHeight() + 150;
        if (scrolled > ts && elem.getAttribute("data-animate") != 'true') {
            nc = "animate " + elem.getAttribute("class");
            elem.setAttribute("data-animate", "true");
            elem.setAttribute("class", nc);
        }
    }
};


function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) }
};