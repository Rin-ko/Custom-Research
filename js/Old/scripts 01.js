
$(document).ready(function(){

    $(".articleMainRight__options").click(function () {
        $(".articleFaqCategory").toggleClass("articleFaqCategory__hide");
    });

});

$(document).ready(function() {
    $(".js-example-basic-single").select2();
});


$(document).ready(function() {
    $('.customText').readmore({
        speed: 500,
        collapsedHeight: 160,
        lessLink: '<a href="#">Close</a>'
    });




});



$(document).ready(function() {
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();
});


$(document).ready(function(){

    $(".browseOptions__Title").click(function () {
      $(".browseOptions__CheckBoxBlock").toggleClass("browseOptions__CheckBoxBlock--active");
    });

  });





var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});



 // $(function(){
 //            $('.browseOptions__Title').click(function(){
 //                $('.browseOptions__Title').toggleClass('.browseOptions__TitleActive');
 //            });
 //        });




window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrolled);
   
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