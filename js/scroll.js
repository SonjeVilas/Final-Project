(function(){

function scroller() {

  var scroll = $('div.scroll');
  
  var height = scroll.height(); 
  
  var topAdj = -height-100; 
               
	scroll.animate({
		'top' : [topAdj, 'linear'] 
	}, 10000, function(){
		scroll.css('top', 0); 
		scroller(); 
	});}
	
scroller();

})();