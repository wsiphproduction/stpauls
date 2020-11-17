(function ($) {
    var o = $(".slick-slider");
    if (o.length > 0) {
        $(window).on("load", function () {
            setTimeout(function () {
                $("#preloader").fadeOut("slow");
                $("#load").fadeOut("slow");
                $("#pre-loader").fadeOut("slow");
            }, 100);
        });
    }
})(jQuery);




// @description FadeOut to Next Page

$(document).ready(function () {
    $(document).on("click", "a", function (e) {
        e.preventDefault();

        var link = $(this);
        var href = link.attr("href");
        var target = link.attr("target");
        if (target && target.indexOf("_blank") >= 0) {
            window.open(href, "_blank");
            return;
        }
        if (target && target.indexOf("_self") >= 0) {
            window.open(href, "_self");
            return;
        }
        if (href.indexOf("mailto:") == 0) {
            window.location = href;
            return;
        }
        if (href.indexOf("tel:") == 0) {
            window.location = href;
            return;
        }
        if (href.indexOf("images/") == 0) {
            return;
        }
        if (!href) {
            return;
        }

        setTimeout(function () {
            if (href[0] === "#") {
                window.location = href;
            } else {
                $("html").fadeOut(function () {
                    window.location = href;
                });
            }
        });
    });
});




// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $(".navbar-nav li a").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate({
                    scrollTop: $($anchor.attr("href")).offset().top
                },
                1500,
                "easeInOutExpo"
            );
        event.preventDefault();
    });
    $(".page-scroll a").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body")
            .stop()
            .animate({
                    scrollTop: $($anchor.attr("href")).offset().top
                },
                1500,
                "easeInOutExpo"
            );
        event.preventDefault();
    });
});




// jQuery for Side Menu feature

$(function() {
    var navikMenuListDropdown = $(".side-menu ul li:has(ul)");

    navikMenuListDropdown.each(function() {
        $(this).append('<span class="dropdown-append"></span>');
    });

    $(".side-menu li").each(function() {
        $(this)
            .parents("ul")
            .css("display", "block");
        $(this)
            .parents("ul")
            .next(".dropdown-append")
            .addClass("dropdown-open");
    });

    $(".side-menu .active").each(function() {
        $(this)
            .parents("ul")
            .css("display", "block");
        $(this)
            .parents("ul")
            .next(".dropdown-append")
            .addClass("dropdown-open");
    });

    $(".dropdown-append").on("click", function() {
        $(this)
            .prev("ul")
            .slideToggle(300);
        $(this).toggleClass("dropdown-open");
    });
});




// jQuery for Jump to Top

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    }
});

$("#top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
});




// Quantity

function customQuantity() {
    /** Custom Input number increment js **/
    jQuery(
        '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
    ).insertAfter(".quantity input");
    jQuery(".quantity").each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find(".quantity-up"),
            btnDown = spinner.find(".quantity-down"),
            min = input.attr("min"),
            max = input.attr("max"),
            valOfAmout = input.val(),
            newVal = 0;

        btnUp.on("click", function() {
            var varholder = input.val();
            var oldValue = parseFloat(input.val());

            if (varholder === "") {
                var newVal = 1;
            } else {
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on("click", function() {
            var varholder = input.val();
            var oldValue = parseFloat(input.val());

            if (varholder === "") {
                var newVal = 1;
            } else {
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
}
customQuantity();

// jQuery for Removing Product on Cart

$('a.remove').click(function() {
    event.preventDefault();
    $(this).parent().parent().hide(400);
});




// jQuery for closing Listing Filter Wrap

$(".rd-navbar-listing-close-toggle").on("click", function() {
    $(".listing-filter-wrap").removeClass("active");
});

$(".rd-navbar-sl-close-toggle").on("click", function () {
	$(".sl-filter-wrap").removeClass("active");
});

// $(document).ready(function () {
//     $('#example').DataTable();
// });

// reCaptcha responsive

$(function () {
    var width = $('.g-recaptcha').parent().width();
    if (width < 302) {
        var scale = width / 302;
        $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('transform-origin', '0 0');
        $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
});

$(window).on("resize", function () {
    var width = $('.g-recaptcha').parent().width();
    if (width < 302) {
        var scale = width / 302;
        $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
        $('.g-recaptcha').css('transform-origin', '0 0');
        $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
});

// Show/Hide Password input field

$("#password-field")
	.after("<span></span>")
	.next()
	.addClass("fa fa-fw fa-eye field-icon toggle-password").attr("toggle", "#password-field");


$(".toggle-password").on("click", function () {
	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
});

// side navigation responsive
function openNav() {
	document.getElementById("mySidenav").style.left = "0";
	$(".dark-curtain").fadeIn();
}
/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.left = "-300px";
	$(".dark-curtain").fadeOut();
}
function myFunction(x) {
	if (x.matches) { // If media query matches
		$(".tablet-view").addClass("sidenav").attr("id", "mySidenav");
	} else {
		$(".tablet-view").removeClass("sidenav").removeAttr("id");
	}
}

var x = window.matchMedia("(max-width: 991px)");
myFunction(x);
x.addListener(myFunction);