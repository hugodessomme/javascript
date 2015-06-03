function im_hero(target, tiny_breakpoint, large_breakpoint, max_breakpoint){

/* Acronymes 

	* w : width
	* h : height
	* ww : window

*/

	$(target).each(function(){
		var $this = $(this),
			ww_w = $(window).width(),
			ww_h = $(window).height(),
			sm_img = $(this).attr("data-sm-img"),
			lg_img = $(this).attr("data-lg-img"),
			max_img = $(this).attr("data-max-img");

		// 1. si les arguments de la fonction sont manquants
		if(typeof target === 'undefined' || typeof tiny_breakpoint === 'undefined' || typeof large_breakpoint === 'undefined' || typeof max_breakpoint === 'undefined') { 
            console.log('One or several argument(s) are missing or empty, please add/fill it first :)'); 
        }

		// 1bis. si les attributs sont manquants ou vides
		if(!sm_img || !lg_img || !max_img) {
			console.log('One or several "data-XXX-img" attribute(s) are missing or empty, please add/fill them first :)');
			return;
		}

		// 2. chargement de l'image
		if(!$this.hasClass('is-load')) {
			$this.addClass('is-load');
		}
		
		// 3. chargement de format d'image different suivant les breakpoints definis

		// si on est au tiny_breakpoint
		if(ww_w <= tiny_breakpoint) {
			if(!$this.hasClass('is-sm-img')){
				$this
					.addClass('is-sm-img')
					.removeClass('is-lg-img is-max-img')
					.css("background-image", "url("+ sm_img +")");
			}
			$this.css('height', ww_h);
		}

		// si on est au large_breakpoint
		else if(ww_w > tiny_breakpoint && ww_w <= large_breakpoint) {
			if(!$this.hasClass('is-lg-img')){
				$this
					.addClass('is-lg-img')
					.removeClass('is-sm-img is-max-img')
					.css("background-image", "url("+ lg_img +")");
			}
			$this.css('height', ww_h);
		}
		// si on est au max_breakpoint
		else {
			if(!$this.hasClass('is-max-img')){
				$this
					.addClass('is-max-img')
					.removeClass('is-sm-img is-lg-img')
					.css("background-image", "url("+ max_img +")");
			}
			$this.css('height', ww_h);
		}
	});
}
