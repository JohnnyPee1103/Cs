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


function statsMouseOver(){
    var test = document.getElementById('fade').style.display='block';
}


function infoTooltipValue(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18, value19, value20){
var string = '<table>';
string += '<tbody>';
string += '<tr>';
string += '<th>';
string += value1;
string += '</th>';
string += '<td>';
string += value2;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value3;
string += '</th>';
string += '<td>';
string += value4;
string += '</td>'
string += '</tr>'
string += '<tr>';
string += '<th>';
string += value5;
string += '</th>';
string += '<td>';
string += value6;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value7;
string += '</th>';
string += '<td>';
string += value8;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value9;
string += '</th>';
string += '<td>';
string += value10;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value11;
string += '</th>';
string += '<td>';
string += value12;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value13;
string += '</th>';
string += '<td>';
string += value14;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value15;
string += '</th>';
string += '<td>';
string += value16;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value17;
string += '</th>';
string += '<td>';
string += value18;
string += '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>';
string += value19;
string += '</th>';
string += '<td>';
string += value20;
string += '</td>';
string += '</tr>';
return string;
}
