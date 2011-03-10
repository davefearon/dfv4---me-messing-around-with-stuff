/* Author: 

*/

$(document).ready(function(){
	/**/
	$('body').noisy({
		'noise' : 1,
		'tileSize' : '200',
		'backgroundColor' : '#00aeff',
		'maxNoiseOpacity' : 0.15,
		'fallbackImage' : '',
		'monochromatic' : true
	});
	/**/

	$(window).scroll(function(event){
		onscroll(event);
		//console.debug('here');
	});
	
	function onscroll(event) {
		
	}
});




















