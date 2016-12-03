$(function() {
    // Stick the nav to the top of the window
    var nav = $('.navigation');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

document.addEventListener("mouseover", function(event){

  if (event.target.matches('.navigation-item-title')) {

	var parent = event.target.parentElement;
    var dropdowns = parent.getElementsByClassName('navigation-popup-items')[0]
	if (dropdowns != null){
  		dropdowns.classList.remove('hide');
	}
  } else {
	  var parent = event.target.parentNode;
	  if (parent != null){
		  var classList = parent.classList;
		if (classList != null && classList.contains('navigation-popup-items')){
	  		parent.classList.remove('hide');
		}	
	  }
  }
  
});

document.addEventListener("mouseout", function(event){
		hideAllPopups();
});

function hideAllPopups(){
	var items = document.getElementsByClassName('navigation-popup-items');
	if (items != null){
		for (var i = 0; i < items.length; i++){
			var item = items[i];
	  		item.classList.add('hide');
		}
	}
}

function openProfileBox(){
    var test = document.getElementById('light').style.display='block';
    var test = document.getElementById('fade').style.display='block';
}
function closeProfileBox(){
    var test = document.getElementById('light').style.display='none';
    var test = document.getElementById('fade').style.display='none';
}
