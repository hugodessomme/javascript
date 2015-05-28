function responsive_img_bg(target, tiny_breakpoint, large_breakpoint, max_breakpoint){

/* Objectif

	- Gestion d'un arriere-plan en fullscreen en chargeant une taille d'image differente suivant la taille de l'ecran
	- Ainsi, le chargement de la page est optimisé suivant le périphérique (performance)

*/

/* Arguments

	target 				: string
	tiny_breakpoint 	: number
	large_breakpoint 	: number
	max_breakpoint 		: number

*/

/* Fonctionnement

	1. on verifie que les attributs data-img-tiny, data-img-large, data-img-max existent et ne sont pas vides
	2. on ajoute la classe .is-load au chargement de l'image
	3. suivant la taille d'ecran (et au resize), on charge un format d'image different (optimisation)

*/

/* Utilisation (exemple)

	JS
	$(document).ready(function(){
		responsive_img_bg('.fn-responsive-img-bg', 640, 768, 1050); 1ere initialisation
		$(window).resize(function() {
			responsive_img_bg('.fn-responsive-img-bg', 640, 768, 1050); a chaque resize de la fenetre
		});
	});

	HTML
	<div class="fn-responsive-img-bg" 
		data-img-tiny="http://lorempixel.com/output/abstract-q-c-640-480-8.jpg" 
		data-img-large="http://lorempixel.com/output/abstract-q-c-1024-768-8.jpg" 
		data-img-max="http://lorempixel.com/output/abstract-q-c-1500-700-8.jpg">
	</div>

	CSS (arriere-plan fullscreen)
	.fn-responsive-img-bg {
		background-repeat: no-repeat;
		background-size: cover;
	}

*/

/* Acronymes 

	* w : width
	* h : height
	* ww : window

*/

	$(target).each(function(){
		var $this = $(this),
			ww_w = $(window).width(),
			ww_h = $(window).height(),
			img_tiny = $(this).attr("data-img-tiny"),
			img_large = $(this).attr("data-img-large"),
			img_max = $(this).attr("data-img-max");

		// 1. si les attributs sont manquants ou vides
		if(!img_tiny || !img_large || !img_max) {
			console.log('One or several "data-img-XXX" attributes are missing or empty, please add/fill first :)');
			return;
		}

		// 2. chargement de l'image
		if(!$this.hasClass('is-load')) {
			$this.addClass('is-load');
		}
		
		// 3. chargement de format d'image different suivant les breakpoints definis

		// si on est au format tiny, type mobile (< tiny_breakpoint)
		if(ww_w < tiny_breakpoint) {
			if(!$this.hasClass('is-tiny')){
				$this
					.addClass('is-tiny')
					.removeClass('is-large is-max')
					.css("background-image", "url("+ img_tiny +")");
			}
			$this.css('height', ww_h);
		}

		// si on est au format large, type tablette (>= tiny_breakpoint ET < large_breakpoint)
		else if(ww_w >= tiny_breakpoint && ww_w <= large_breakpoint) {
			if(!$this.hasClass('is-large')){
				$this
					.addClass('is-large')
					.removeClass('is-tiny is-max')
					.css("background-image", "url("+ img_large +")");
			}
			$this.css('height', ww_h);
		}
		// si on est au format max, type desktop (> max_breakpoint)
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
