/* Based off the tabs function in Skeleton
* http://getskeleton.com
*/

$(document).ready(function() {

    /* Tabs Activiation
	================================================== */
    var tabs = $('#navigation');

    tabs.each(function(i) {
        //Get all tabs
        var tab = $(this).find('> li > a');
        tab.click(function(e) {

            //Get Location of tab's content
            var contentLocation = $(this).attr('href') + "_tab";

            //Let go if not a hashed one
            if (contentLocation.charAt(0) == "#") {

                e.preventDefault();

                //Make Tab Active
                tab.removeClass('active');
                $(this).addClass('active');

                //Show Tab Content & add active class
                $(contentLocation).fadeIn().addClass('active').siblings().hide().removeClass('active');

            }
        });
    });

});