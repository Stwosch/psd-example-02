$(function() {

    function written_text(name, arrLetters) {
    
        var index = arrLetters.length;

        (function x() {

            if (index > arrLetters.length) {

                index = 0;
                name.html('');

            } else {
                name.append(arrLetters[index]);
                index++;
            }

            setTimeout(x, 1000);
        })();
    }

    written_text($('#written_text-1'), ["U", "t", "&nbsp;", "e", "n", "i", "m"]);
    written_text($('#written_text-2'), ["A", "p", "o", "l", "l", "o", "&nbsp;", "P", "S", "D"]);

    (function cursor_blink() {

        var cursor = true;
        var el = $('.written_text');

        (function x() {

            if (cursor) {

                el.css("border-right", "none");
                cursor = false;

            } else {

                el.css("border-right", "1px solid black");
                cursor = true;
            }

            setTimeout(x, 500);
            
        })();
    })();


    (function slider() {

        var speed = 500;
        var autoswitch = true;
        var autoswitch_speed = 4000;

        $('.slide').hide();

        $('.activeSlide').show();

        $('#next_slide').click( function() { 
            nextSlide(); 
            clearInterval(interval); 
        });
	
	    $('#prev_slide').click( function() { 
            prevSlide(); 
            clearInterval(interval); 
        });

        if(autoswitch) { 
            var interval = setInterval(nextSlide, autoswitch_speed);
        }

        function nextSlide() {

            if ($('.activeSlide').is(':last-child')) {

                $('.activeSlide').removeClass('activeSlide');
                $('.slide').first().addClass('activeSlide');

            } else {

                $('.activeSlide').removeClass('activeSlide').next().addClass('activeSlide');
            }
            
            $('.slide').fadeOut(speed);
            $('.activeSlide').fadeIn(speed);
        }

        function prevSlide() {

            if ($('.activeSlide').is(':first-child')) {

                $('.activeSlide').removeClass('activeSlide');
                $('.slide').last().addClass('activeSlide');

            } else {

                $('.activeSlide').removeClass('activeSlide').prev().addClass('activeSlide');
            }
            
            $('.slide').fadeOut(speed);
            $('.activeSlide').fadeIn(speed);
        }

    })();

    (function slider3d() {

        $('#prev_slide3d').click(prevSlide);
        $('#next_slide3d').click(nextSlide);

        function prevSlide() {

            if(!$('.active3d').is(':first-child')){
                $('.active3d').removeClass('active3d').prev().addClass('active3d');
            }

            checkSlide();

        }

        function nextSlide() {

            if(!$('.active3d').is(':last-child')){
                $('.active3d').removeClass('active3d').next().addClass('active3d');
            }

            checkSlide();
        }

        function checkSlide() {

            if($('.active3d').is(':first-child')) {

                $('.slide3d').last().addClass('slide3d-last');

            } else {

                $('.slide3d').last().removeClass('slide3d-last');
            }

            if($('.active3d').is(':last-child')) {

                $('.slide3d').first().addClass('slide3d-last');

            } else {

                $('.slide3d').first().removeClass('slide3d-last');
            }
        }

    })();

    (function navigation_panel() {

        var navi = $('.navigation_panel ul');
        var btn = $('.page_navigation-burger');

        btn.click(init);

        function init() {

            animateHamburger();
            showMenu();
        }

        function showMenu() {
            
            if(navi.hasClass('activeMenu')) {

                navi.animate({opacity: 0}, 700);

            } else {

                navi.animate({opacity: 1}, 700);
            }

            navi.toggleClass('activeMenu');
        }

        function animateHamburger() {
            btn.toggleClass('burger_animation');
        }
    })();


    (function page_anchors() {

        $('.page_anchors').click(animateScrolling);

        function animateScrolling(e) {

            if (this.hash !== "") {
                e.preventDefault();

                var hash = this.hash;

                $('html, body').animate({scrollTop: $(hash).offset().top }, 800, function() {

                    window.location.hash = hash;
                });
            }
        }
        
    })();

});