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
			img_tiny = $(this).attr("data-tiny-img"),
			img_large = $(this).attr("data-large-img"),
			img_max = $(this).attr("data-max-img");

		// 1. si les attributs sont manquants ou vides
		if(!img_tiny || !img_large || !img_max) {
			console.log('One or several "data-XXX-img" attributes are missing or empty, please add/fill them first :)');
			return;
		}

		// 2. chargement de l'image
		if(!$this.hasClass('is-load')) {
			$this.addClass('is-load');
		}
		
		// 3. chargement de format d'image different suivant les breakpoints definis

		// si on est au format tiny, type mobile
		if(ww_w <= tiny_breakpoint) {
			if(!$this.hasClass('is-tiny')){
				$this
					.addClass('is-tiny')
					.removeClass('is-large is-max')
					.css("background-image", "url("+ img_tiny +")");
			}
			$this.css('height', ww_h);
		}

		// si on est au format large, type tablette
		else if(ww_w > tiny_breakpoint && ww_w <= large_breakpoint) {
			if(!$this.hasClass('is-large')){
				$this
					.addClass('is-large')
					.removeClass('is-tiny is-max')
					.css("background-image", "url("+ img_large +")");
			}
			$this.css('height', ww_h);
		}
		// si on est au format max, type desktop
		else {
			if(!$this.hasClass('is-max')){
				$this
					.addClass('is-max')
					.removeClass('is-tiny is-large')
					.css("background-image", "url("+ img_max +")");
			}
			$this.css('height', ww_h);
		}
	});
}
