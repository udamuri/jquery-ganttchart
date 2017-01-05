(function ( $ ) {
 
    $.fn.ganttchart = function( options ) {

        var settings = $.extend({
            month: date('month'),
            year: date('year'),
        }, options );

        return this.attr({
            //month: settings.month,
            //year: settings.year
        });
 
    };

    function daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    function date(get)
    {
        // Return today's date and time
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();

        if(get === 'day')
        {
            return day;
        }
        else if(get === 'month')
        {
            return month;
        }
        else
        {
           return year; 
        }

    }
 
}( jQuery ));