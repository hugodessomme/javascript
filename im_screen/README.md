#im_screen.js

**Description** : *Génération d'une classe sur l'élément `html` suivant les 4 breakpoints définis (une 5ème classe est générée au-dessus de `big_breakpoint`).*

##Aperçu

	im_screen(tiny_breakpoint, medium_breakpoint, large_breakpoint, big_breakpoint); 

##Utilisation (exemple)
	
###jQuery

	$(document).ready(function(){
		im_screen(480, 640, 768, 1024); // 1ere initialisation

		$(window).resize(function() {
			im_screen(480, 640, 768, 1024); // a chaque resize de la fenetre
		});
	});

##Arguments

* `tiny_breakpoint` : integer
* `medium_breakpoint` : integer
* `large_breakpoint` : integer
* `big_breakpoint` : integer


##Fonctionnement

1. si la largeur d'écran est **inférieure ou égale** à `tiny_breakpoint`, génération de la classe `is-sm-screen`
2. si la largeur d'écran est **supérieure** à `tiny_breakpoint` et **inférieure ou égale** à `medium_breakpoint`, génération de la classe `is-md-screen`
3. si la largeur d'écran est **supérieure** à `medium_breakpoint` et **inférieure ou égale** à `large_breakpoint`, génération de la classe `is-lg-screen`
4. si la largeur d'écran est **supérieure** à `large_breakpoint` et **inférieure ou égale** à `big_breakpoint`, génération de la classe `is-bg-screen`
5. si la largeur d'écran est **supérieure** à `big_breakpoint`, génération de la classe `is-max-screen`