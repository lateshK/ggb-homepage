var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

var $ = jQuery.noConflict();




jQuery(".aj-home .items").hover(function() {
    $('.aj-our-work').addClass("invisible");
}, function() {
    $('.aj-our-work').removeClass("invisible");
});


if ($(window).width() < 1198) {
    $('.pf-1').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.pf-2').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.pf-3').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.pf-4').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.pf-5').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.pf-6').click(function() {
        $('.scroll-left').addClass('active');
        $('body').css("overflow", "hidden");
        ourWorkUrl();
    });
    $('.back').click(function() {
        window.history.go(-1);
    });

    function ourWorkUrl() {
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '#our-work';
            window.history.pushState({
                path: newurl
            }, '', newurl);
        }
        $(window).on('popstate', function(event) {
            ourWorkBack();
        });
    }

    function ourWorkBack() {
        $('.scroll-left').removeClass('active');
        $('div[id^=showdiv]').removeClass("highlight");
        $('body').css("overflow", "scroll");
        $(".scroll-left").animate({
            scrollTop: 0
        }, "slow");
        return false;
    }

}

$(document).ready(function(){       
    var $carousel = $('.product-image');

    var settings = {
      dots: true,
      arrows: false,
      slide: '.slick-slideshow__slide',
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '60px',
    };

    function setSlideVisibility() {
      //Find the visible slides i.e. where aria-hidden="false"
      var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
      //Make sure all of the visible slides have an opacity of 1
      $(visibleSlides).each(function() {
        $(this).css('opacity', 1);
      });

      //Set the opacity of the first and last partial slides.
      $(visibleSlides).first().prev().css('opacity', 0);
    }

    $carousel.slick(settings);
    $carousel.slick('slickGoTo', 1);
    setSlideVisibility();

    $carousel.on('afterChange', function() {
      setSlideVisibility();
    });

    $('.full-slider').slick({
        lazyLoad: 'ondemand',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $("input[type=radio]").click(function(){
        $(".product-image").slick('setPosition');
    });
});


$(document).ready(function() {
    $(".tabs").scrollCenter(".active", 300);
    $(".tabs .tab").on("click", function() {
        $(".tabs .tab").removeClass("active");
        $(this).addClass("active");
      // CALL scrollCenter PLUSGIN
    $(".tabs").scrollCenter(".active", 300);

    });
});


jQuery.fn.scrollCenter = function(elem, speed) {

  var active = jQuery(this).find(elem); 
  var activeWidth = active.width() / 2; 
  var pos = active.position().left + activeWidth;
  var elpos = jQuery(this).scrollLeft(); 
  var elW = jQuery(this).width(); 
  pos = pos + elpos - elW / 2;

  jQuery(this).animate({
    scrollLeft: pos
  }, speed == undefined ? 1000 : speed);
  return this;
};

jQuery.fn.scrollCenterORI = function(elem, speed) {
  jQuery(this).animate({
    scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
  }, speed == undefined ? 1000 : speed);
  return this;
};

$('#showdiv1').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div1').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv1').addClass("highlight");
});
$('#showdiv2').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div2').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv2').addClass("highlight");
});
$('#showdiv3').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div3').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv3').addClass("highlight");
});
$('#showdiv4').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div4').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv4').addClass("highlight");
});
$('#showdiv5').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div5').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv5').addClass("highlight");
});
$('#showdiv6').click(function() {
    $('div[id^=div]').css('opacity', 0);
    $('#div6').css('opacity', 1);
    $('div[id^=showdiv]').removeClass("highlight");
    $('#showdiv6').addClass("highlight");
});
$('.close').click(function() {
    $('body').css('overflow', 'visible');
    $('div[id^=div]').css('opacity', 0);
    $('div[id^=showdiv]').removeClass("highlight");

});

$(window).on("load", function() {
   // jQuery.ready().then(function() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-delaysrc')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-delaysrc'));
                imgDefer[i].setAttribute('srcset', imgDefer[i].getAttribute('data-delaysrcset'));
                imgDefer[i].setAttribute('sizes', imgDefer[i].getAttribute('data-delaysizes'));
                imgDefer[i].removeAttribute('data-delaysrc', 'data-delaysrcset', 'data-delaysizes');
                imgDefer[i].removeAttribute('data-delaysrcset');
                imgDefer[i].removeAttribute('data-delaysizes');
            }
        }
    //});
})

$(document).ready(function(){
    if(window.location.href.includes('#/cart') || window.location.href.includes('#/order-summary') || window.location.href.includes('#/order-details')){
        loadCartApp();
        showCartSlider()
    }

    let lat_lng = readFromLocalStorage('lat_lng')
    if(lat_lng){
        window.lat_lng = [parseFloat(lat_lng.split(',')[0]), parseFloat(lat_lng.split(',')[1])]
        let formatted_address = readFromLocalStorage('formatted_address');
        if(formatted_address){
            window.formatted_address = formatted_address;
            document.querySelector("#selected-location-address").innerHTML = 
            '<div>' + formatted_address + '</div><i class="fas fa-pencil-alt number-edit cursor-pointer"></i>'
        }
    }
})

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('data-original'));
        $('#imagemodal').modal('show');
        jQuery('meta[name=viewport]').attr('content', 'initial-scale=1.0');
    });
});
$('.modal').on('click', function() {
    $('#imagemodal').modal('hide');
    jQuery('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
});
$(window).on('hashchange', function(event) {
    $('.scroll-left').removeClass('active');
    locationHashChanged();
});
$(document).on('click', '.card-front .card-trigger', function() {
    $(this).toggleClass('active');
    $('.card-front').toggleClass('active');
    $(this).siblings().toggleClass('not-active');
})

$('.bread-crumb__menu').on('click', function(e) {
    // e.preventDefault();
    $(this).toggleClass('is-active');
});

function locationHashChanged() {
    console.log("location hash changed", window.location.hash);
    if (window.location.hash === '#/cart' || window.location.hash === '#/order-summary') { 
        loadCartApp();
        showCartSlider()
    }
    else if(!window.location.hash){
        closeCart();
    } else if(window.location.hash == '#/' || window.location.hash == '') {
        closeCart();
    }
}


function closeCart(){
    document.querySelector(".cart-wrapper").classList.remove('active');
    removeBackDrop();
}

function showCartSlider(){
    $('.cart-wrapper').addClass('active');
    addBackDrop();
}

loaded = false;

function loadCartApp(){
    console.log("file_hashes ==>", react_js_file_hashes);
    if(!loaded){
        addCartLoader();
        let url = app_url;

        $.ajaxSetup({ cache: true });

        $("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: url+"/cart/static/css/main."+ react_css_file_hashes['main'] + ".chunk.css"
        }).appendTo("head");

        $.getScript(url+"/cart/static/js/runtime-main."+ react_js_file_hashes['runtime-main'] +".js")        
            .done(function(script, textStatus){
                $.getScript(url+"/cart/static/js/main."+ react_js_file_hashes['main'] +".chunk.js")
                    .done(function(script2, textStatus2){
                                $.getScript(url+"/cart/static/js/2."+ react_js_file_hashes['2'] +".chunk.js")
                                    .done(function(script4,textStatus4){
                                        loaded = true;
                                    })
                                    .fail(function(jqxhr, settings, exception){
                                        console.log("loadCartApp failed")
                                    })
                    })
                    .fail(function(jqxhr, settings, exception){
                        console.log("loadCartApp failed")
                    })
            })
            .fail(function(jqxhr, settings, exception){
                console.log("loadCartApp failed")
            })
    }
}

$('.delivery-location').click(function() {
    setTimeout(()=>{
        if(window.lat_lng && window.formatted_address){
            $('#selected-location-address').addClass('show');
        }
        else{
            window.showGpsModalPrompt(true);
        }
    },50)
});

$('#selected-location-address').click(function(){
    window.showGpsModalPrompt(true);
})

$(window).click(function(e) {
    if($( "#selected-location-address" ).hasClass( "show" ) ){
        $('#selected-location-address').removeClass('show');
    }
});


function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function addBackDrop(){
    $('.backdrop').addClass('show');
    $('body').addClass('hide-scroll');
}

function hideScroll(){
    $('body').addClass('hide-scroll');
}

function showScroll(){
    $('body').removeClass('hide-scroll');
}


function removeBackDrop(){
    if(!$('.cart-wrapper').hasClass('active')){
        $('.backdrop').removeClass('show');
        $('body').removeClass('hide-scroll');
    }
}

function addCartLoader(){
    // $('.cart-wrapper').addClass('cart-loader');
    $('.site-loader').addClass('visible');
}

function removeCartLoader(){
    // $('.cart-wrapper').removeClass('cart-loader');   
    $('.site-loader').removeClass('visible');
}


function writeInLocalStorage(item_name, value) {
    if(isLocalStorageSupported()) {
        localStorage.setItem(item_name, value);
    }
    else {
        document.cookie = item_name + "=" + value + ";expires="+getCookieExpiryDate()+";max-age="+getCookieMaxAge()+";path=/";
    }
}


function readFromLocalStorage(item_name) {
    if(isLocalStorageSupported()) {
        return localStorage.getItem(item_name);
    }
    else {
        return getCookie(item_name);
    }
}

function removeFromLocalStorage(item_name) {
    if(isLocalStorageSupported()) {
        localStorage.removeItem(item_name);
    } else {
        removeCookie(item_name);  
    }
    return true;
}

function isLocalStorageSupported() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch(e) {
        return false;
    }
}

function removeCookie(item_name) {
    let expiredate = new Date('12-02-1970').toUTCString();
    document.cookie = item_name + "=" + ";expires="+expiredate+";max-age="+getCookieMaxAge()+";path=/";
}

function getCookieMaxAge(){
    return 30*24*60*60;
}

function getCookieExpiryDate(){
    let milli_sec = new Date().getTime();
    milli_sec = milli_sec+(30*24*60*60*1000);
    let expiredate = new Date(milli_sec).toUTCString();
}


window.addEventListener("click", checkInternetConnection, true);
window.addEventListener('online',  updateOnlineStatus);

function checkInternetConnection(){
    if(navigator.onLine){
        //do nothing
    } else {
        event.stopPropagation();
        disableSite();
        document.querySelector('#offline-toast').innerHTML = "You are offline and may be viewing outdated content!";
        document.querySelector('#offline-toast').classList.remove('d-none');
        setTimeout(()=>{
            document.querySelector('#offline-toast').classList.add('d-none');
        },5000)
    }
}

function updateOnlineStatus(){
    enableSite();
    document.querySelector('#offline-toast').innerHTML = "You are online";
    document.querySelector('#offline-toast').classList.remove('d-none');
    setTimeout(()=>{
        document.querySelector('#offline-toast').classList.add('d-none');
    },4000)
}

function enableSite(){
    $('body').removeClass('site-offline');
}

function disableSite(){
    $('body').addClass('site-offline');
}

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
  
    const lazyLoad = function() {
        if (active === false) {
        active = true;

        setTimeout(function() {
            lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.srcset = lazyImage.dataset.srcset;
                lazyImage.classList.remove("lazy");

                lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
                }
            }
            });

            active = false;
        }, 20);
    }
};

document.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationchange", lazyLoad);
});

window.addEventListener("load", function() {
    
    $('.product-image').on('init', function(event, slick){
        // console.log("initialized")
    });
    
});



function displayError(msg){
    displayToast(msg, 'failure');
}

function displaySuccess(msg){
    displayToast(msg, 'success')
}

function displayToast(msg, type){
    let length = $('#success-failure-toast-container div').length, element
    if(type == 'success'){
        element = '<div class="animated fadeInUp success toast d-flex justify-content-center sb-shadow mt-lg-5 position-relative"><span class="p-15 pt-lg-2 pb-lg-2 w-100 position-relative text-lg-center text-capitalize"> <svg class="bi bi-check-circle-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="#4aa74f" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>' + msg +'</span><button class="btn-reset close-img" onclick="removeToast(this)"><i class="sprite sprite-close_btn"></i></button></div>';
    }
    else{
        element = '<div class="animated fadeInUp failure toast d-flex justify-content-center position-relative mt-lg-5"><span class="alert-danger p-15 pt-lg-2 pb-lg-2 w-100 position-relative text-capitalize">'+ msg +'</span><button class="btn-reset close-img" onclick="removeToast(this)"><i class="sprite sprite-close_btn"></i></button></div>'
    }

    if(length == 2){
        $('#success-failure-toast-container').children().first().remove();
    }
    $('#success-failure-toast-container').append(element);

    setTimeout(()=>{
       $('#success-failure-toast-container').children().first().remove();
    },30000)
}

function removeToast(element){
    $(element).parent().remove();
}
