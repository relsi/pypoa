// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
    'use strict';
    ({
        animateScroll : function () {
            $("#nav").find('.nav-link').on('click', function (event) {

                var $this = $(this),
                    $htmlBody = $('html, body'),
                    linkTarget = $this.attr('href'),
                    offSetTop;

                // If not start with #, stop here!
                if (linkTarget[0] !== '#') {
                    return false;
                }

                event.preventDefault();

                // Get distance of top
                offSetTop = $(linkTarget).offset().top;

                // Animate the scroll
                $htmlBody.stop().animate({scrollTop : offSetTop}, function () {
                    location.hash = linkTarget;
                });
            });
        },

        init : function () {
            var that = this;

            $(function () {
                that.animateScroll();
            });
        }
    }).init();
}(jQuery, window, document));
/*
     FILE ARCHIVED ON 10:44:10 May 31, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:21:04 Sep 14, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 89.113 (3)
  captures_list: 118.719
  esindex: 0.016
  PetaboxLoader3.datanode: 108.635 (4)
  exclusion.robots.policy: 0.485
  RedisCDXSource: 4.054
  CDXLines.iter: 19.688 (3)
  exclusion.robots: 0.508
  load_resource: 355.722
  PetaboxLoader3.resolve: 332.618
*/