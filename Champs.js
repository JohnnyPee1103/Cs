
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