var geocoder,
    map,
    google,
    icon = 'themes/yellow-swan/img/marker-default.png';

function initialize() {
    'use strict';

    geocoder = new google.maps.Geocoder();

    var latlng = new google.maps.LatLng(0, 0),
        myOptions = {
            zoom: 16,
            center: latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    map.setCenter(latlng);
}

$(document).ready(function () {

    'use strict';

    $('#map-canvas').each(function () {

        var address = $(this).attr('data-address');

        geocoder = new google.maps.Geocoder();

        initialize();

        geocoder.geocode({ 'address': address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                map.setCenter(results[0].geometry.location);

                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: icon
                });
            } else {
                if (console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    });
});
/*
     FILE ARCHIVED ON 10:36:33 May 31, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:20:42 Sep 14, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 73.856 (3)
  exclusion.robots.policy: 0.224
  RedisCDXSource: 24.021
  PetaboxLoader3.datanode: 44.246 (4)
  PetaboxLoader3.resolve: 26.949
  exclusion.robots: 0.236
  esindex: 0.013
  load_resource: 61.069
  CDXLines.iter: 15.233 (3)
  captures_list: 116.514
*/