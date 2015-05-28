function im_hero(target, tiny_breakpoint, large_breakpoint, max_breakpoint){

/* Objectif

	- Gestion d'un arriere-plan en fullscreen en chargeant une taille d'image differente suivant la taille de l'ecran
	- Ainsi, le chargement de la page est optimisé suivant le périphérique (performance)

*/

/* Arguments

	target 				: string
	tiny_breakpoint 	: integer
	large_breakpoint 	: integer
	max_breakpoint 		: integer

*/

/* Fonctionnement

	1. on verifie que les attributs data-img-tiny, data-img-large, data-img-max existent et ne sont pas vides
	2. on ajoute la classe .is-load au chargement de l'image
	3. suivant la taille d'ecran (et au resize), on charge un format d'image different (optimisation)

*/

/* Utilisation (exemple)

	JS
	$(document).ready(function(){
		im_hero('.fn-im_hero', 640, 768, 1050); 1ere initialisation
		$(window).resize(function() {
			im_hero('.fn-im_hero', 640, 768, 1050); a chaque resize de la fenetre
		});
	});

	HTML
	<div class="fn-im_hero" 
		data-tiny-img="http://lorempixel.com/output/abstract-q-c-640-480-8.jpg" 
		data-large-img="http://lorempixel.com/output/abstract-q-c-1024-768-8.jpg" 
		data-max-img="http://lorempixel.com/output/abstract-q-c-1500-700-8.jpg">
	</div>

	CSS (arriere-plan fullscreen)
	.fn-im_hero {
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
