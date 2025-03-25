$(function () {
    $(".navbar-toggler").click(function () {
        $(".landingSection").toggleClass("align-items-start align-items-center");
    });

    $(window).scroll(function () {
        let sections = $("section");
        let scrollTop = $(window).scrollTop();

        sections.each(function () {
            let section = $(this);
            let titleOffset = section.offset().top - 100;

            let span1 = section.find(".title span:first-child");
            let span2 = section.find(".title span:nth-child(2)");
            let span3 = section.find(".title span:nth-child(3)");

            if (scrollTop >= titleOffset && scrollTop < titleOffset + section.outerHeight()) {
                // Animate titles when in view
                if (!span1.hasClass("animated")) { // Check if already animated
                    span1.animate({ left: 0 }, 200).removeClass("rounded-circle").addClass("w-50 h-50").addClass("animated");
                    span2.animate({ right: 0 }, 200).removeClass("rounded-circle").addClass("w-50 h-50").addClass("animated");
                    span3.addClass("text-light");
                }
            } else {
                // Reset animation if not in view
                if (span1.hasClass("animated")) {
                    span3.removeClass("text-light");
                    span1.animate({ left: -15 }, 200).addClass("rounded-circle").removeClass("w-50 h-50").removeClass("animated");
                    span2.animate({ right: -15 }, 200).addClass("rounded-circle").removeClass("w-50 h-50").removeClass("animated");
                }
            }
        });
    });
});
