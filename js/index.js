
$(document).ready(function () {


    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Function to apply the selected mode (light/dark)
    function applyMode(isDark) {
        // Toggle the visibility of the buttons
        $('#lightModeButton').toggle(!isDark);
        $('#darkModeButton').toggle(isDark);

        // Toggle the dark mode CSS file
        $('#darkModeStyles').prop('disabled', !isDark);

        // Save the user's preference in local storage
        localStorage.setItem('darkMode', isDark);
    }

    // Initial mode application based on the user's preference
    applyMode(isDarkMode);

    // Light mode button click event handler
    $('#lightModeButton').click(function () {
        applyMode(true);
    });

    // Dark mode button click event handler
    $('#darkModeButton').click(function () {
        applyMode(false);
    });



    // for loader

    function showLoader() {
        $(".spinner-wrapper").fadeIn();
    }

    // Function to hide the loader
    function hideLoader() {
        $(".spinner-wrapper").fadeOut();
    }

    // Simulate a delay to demonstrate the loader (remove this in your real implementation)
    function simulateContentLoading() {
        showLoader();
        setTimeout(function () {
            hideLoader();
        }, 1000); // Replace 2000 with the time it takes to load your content (in milliseconds)
    }

    // Call simulateContentLoading() when the page is ready (remove this in your real implementation)
    $(document).ready(function () {
        simulateContentLoading();
    });



    // const spinnerwrapperE1 = document.querySelector('.spinner-wrapper')
    // window.addEventListener('load', () => {
    //     spinnerwrapperE1.style.opacity = '0';
    //     setTimeout(() => {
    //         spinnerwrapperE1.style.display = 'none';
    //     }, 400);
    // });





    $(window).scroll(function () {

        if (this.scrollY > 100) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });




    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });

        $('html').css("scrollBehavior", "auto");
    });

    $('header .menu li a').click(function () {

        $('html').css("scrollBehavior", "smooth");
    });


    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["Proud Indian.", "frontend developer.", "web Designer."],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["#Facebook", "#Instagram", "#Linkedin", "#youtube", "#Github"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    $('.num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });






    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });






    //progress bar


    // Progress bar
    function progress() {
        $('.p_bar').each(function () {
            $(this).find('.w_bar').animate({
                height: $(this).attr('aria-valuenow')
            },
                {
                    duration: 600, step: function (now) {
                        $(this).next().text(Math.ceil(now) + '%');
                    }
                });
        });
    };

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            // the animation that's executed
            progress();
        };
    });















});




