#im_hero.js

**Description** : *Gestion d'un arrière-plan fullscreen en chargeant une taille d'image différente suivant les 3 breakpoints définis.*

##Aperçu

	im_hero(target, tiny_breakpoint, large_breakpoint, max_breakpoint);

##Utilisation (exemple)
	
###jQuery

	$(document).ready(function(){
		im_hero('.fn-im_hero', 640, 768, 1050); // 1ere initialisation

		$(window).resize(function() {
			im_hero('.fn-im_hero', 640, 768, 1050); // a chaque resize de la fenetre
		});
	});

###HTML

	<div class="fn-im_hero" 
		data-tiny-img="http://lorempixel.com/output/abstract-q-c-640-480-8.jpg" 
		data-large-img="http://lorempixel.com/output/abstract-q-c-1024-768-8.jpg" 
		data-max-img="http://lorempixel.com/output/abstract-q-c-1500-700-8.jpg">
	</div>

###CSS

	.fn-im_hero {
		background-repeat: no-repeat;
		background-size: cover;
	}

##Arguments

* `target` : string
* `tiny_breakpoint` : integer
* `large_breakpoint` : integer
* `max_breakpoint` : integer


##Fonctionnement

1. on verifie que les attributs data-img-tiny, data-img-large, data-img-max existent et ne sont pas vides
2. on ajoute la classe .is-load au chargement de l'image
3. suivant la taille d'ecran (et au resize), on charge un format d'image different (optimisation)