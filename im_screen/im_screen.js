function im_screen(tiny_breakpoint, medium_breakpoint, large_breakpoint, big_breakpoint) {
    $('html').each(function(){
        var $this = $(this),
            ww_w = $(window).width();

        if(typeof tiny_breakpoint === 'undefined' || typeof medium_breakpoint === 'undefined' || typeof large_breakpoint === 'undefined' || typeof big_breakpoint === 'undefined') { 
            console.log('One or several "XXX_breakpoint" argument(s) are missing or empty, please add/fill it first :)'); 
        }

        // si on est au tiny_breakpoint
        if(ww_w <= tiny_breakpoint) {
            if(!$this.hasClass('is-sm-screen')){
                $this
                    .addClass('is-sm-screen')
                    .removeClass('is-md-screen is-lg-screen is-bg-screen is-max-screen');
            }
        }

        // si on est au medium_breakpoint
        else if(ww_w > tiny_breakpoint && ww_w <= medium_breakpoint) {
            if(!$this.hasClass('is-md-screen')){
                $this
                    .addClass('is-md-screen')
                    .removeClass('is-sm-screen is-lg-screen is-bg-screen is-max-screen');
            }
        }

        // si on est au large_breakpoint
        else if(ww_w > medium_breakpoint && ww_w <= large_breakpoint) {
            if(!$this.hasClass('is-lg-screen')){
                $this
                    .addClass('is-lg-screen')
                    .removeClass('is-sm-screen is-md-screen is-bg-screen is-max-screen');
            }
        }

        // si on est au big_breakpoint
        else if(ww_w > large_breakpoint && ww_w <= big_breakpoint) {
            if(!$this.hasClass('is-bg-screen')){
                $this
                    .addClass('is-bg-screen')
                    .removeClass('is-sm-screen is-md-screen is-lg-screen is-max-screen');
            }
        }

        // si on est au-dessus du big_breakpoint
        else {
            if(!$this.hasClass('is-max-screen')){
                $this
                    .addClass('is-max-screen')
                    .removeClass('is-sm-screen is-md-screen is-lg-screen is-bg-screen');
            }
        }
    });
}