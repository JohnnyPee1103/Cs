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


function keyStats(kills, headshot, deaths, kd, maps, rounds, killsPR, assistsPR, deathsPR, rating){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Total Kills</th>';
string += '<td>'+ kills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Headshot%</th>';
string += '<td>'+ headshot + '</td>';
string += '</tr>'
string += '<tr>';
string += '<th>Total Deaths</th>';
string += '<td>'+ deaths + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>K/D Ratio</th>';
string += '<td>'+ kd + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Maps Played</th>';
string += '<td>'+ maps + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Rounds Played</th>';
string += '<td>'+ rounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Average Kills Per Round</th>';
string += '<td>'+ killsPR + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Average Assists Per Round</th>';
string += '<td>'+ assistsPR + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Average Deaths Per Round</th>';
string += '<td>'+ deathsPR + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Rating</th>';
string += '<td>'+ rating + '</td>';
string += '</tr>';
string += '</tbody></table>';
return string;
}

function roundStats(rounds, zerorounds, onerounds, tworounds, threerounds, fourrounds, fiverounds){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Total Rounds</th>';
string += '<td>'+ rounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Zero Kill Rounds</th>';
string += '<td>'+ zerorounds + '</td>';
string += '</tr>'
string += '<tr>';
string += '<th>One Kill Rounds</th>';
string += '<td>'+ onerounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Two Kill Rounds</th>';
string += '<td>'+ tworounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Three Kill Rounds</th>';
string += '<td>'+ threerounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Four Kill Rounds</th>';
string += '<td>'+ fourrounds + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Five Kill Rounds</th>';
string += '<td>'+ fiverounds + '</td>';
string += '</tbody></table>';
return string;
}

function openingStats(openingkills, openingdeaths, openkillratio, openkillrating, teamwinafterkill, firstkillwon){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Total Opening Kills</th>';
string += '<td>'+ openingkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Total Opening Deaths</th>';
string += '<td>'+ openingdeaths + '</td>';
string += '</tr>'
string += '<tr>';
string += '<th>Opening Kill Ratio</th>';
string += '<td>'+ openkillratio + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Opening Kill Rating</th>';
string += '<td>'+ openkillrating + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Team Win % after First Kill</th>';
string += '<td>'+ teamwinafterkill + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>First Kill in Won Rounds</th>';
string += '<td>'+ firstkillwon + '</td>';
string += '</tr>';
string += '</tbody></table>';
return string;
}

function killStats(sniperkills, riflekills, pistolkills, grenadekills, otherkills){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Sniper Kills</th>';
string += '<td>'+ sniperkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Rifle Kills</th>';
string += '<td>'+ riflekills + '</td>';
string += '</tr>'
string += '<tr>';
string += '<th>Pistol Kills</th>';
string += '<td>'+ pistolkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Grenade Kills</th>';
string += '<td>'+ grenadekills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Other Kills</th>';
string += '<td>'+ otherkills + '</td>';
string += '</tr>';
string += '</tbody></table>';
return string;
}

function clutchRounds(vs1, vs2, vs3, vs4, vs5){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Cluthes<th>Rounds Won</th>';
string += '</tr>';
string += '<tr>';
string += '<th>1 vs 1</th>';
string += '<td>'+ vs1 + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>1 vs 2</th>';
string += '<td>'+ vs2 + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>1 vs 3</th>';
string += '<td>'+ vs3 + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>1 vs 4</th>';
string += '<td>'+ vs4 + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>1 vs 5</th>';
string += '<td>'+ vs5 + '</td>';
string += '</tr>';
string += '</tbody></table>';
return string;
}

function weaponStats(akkills, m4a1skills, m4a1kills, uspkills, glockkills, famaskills, tec9kills, p250kills, umpkills, deaglekills, mp7kills,
 mac10kills, mp9kills, czkills, fivesevenkills, p90kills, galilkills, henadekills, molotovkills, awpkills, ssgkills, mag7kills, hkpkills, negevkills, scarkills, knifekills, augkills, bizonkills, novakills){
var string = '<table><tbody>';
string += '<tr>';
string += '<th>Ak47</th>';
string += '<td>'+ akkills + '</td>';
string += '<th>M4A1-S</th>';
string += '<td>'+ m4a1skills + '</td>';
string += '<th>M4A1</th>';
string += '<td>'+ m4a1kills + '</td>';
string += '<th>Usp-S</th>';
string += '<td>'+ uspkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Glock</th>';
string += '<td>'+ glockkills + '</td>';
string += '<th>Famas</th>';
string += '<td>'+ famaskills + '</td>';
string += '<th>Tec9</th>';
string += '<td>'+ tec9kills + '</td>';
string += '<th>P250</th>';
string += '<td>'+ p250kills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Ump45</th>';
string += '<td>'+ umpkills + '</td>';
string += '<th>Deagle</th>';
string += '<td>'+ deaglekills + '</td>';
string += '<th>Mp7</th>';
string += '<td>'+ mp7kills + '</td>';
string += '<th>Mac10</th>';
string += '<td>'+ mac10kills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Mp9</th>';
string += '<td>'+ mp9kills + '</td>';
string += '<th>Cz75a</th>';
string += '<td>'+ czkills + '</td>';
string += '<th>Fiveseven</th>';
string += '<td>'+ fivesevenkills + '</td>';
string += '<th>P90</th>';
string += '<td>'+ p90kills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Galil-AR</th>';
string += '<td>'+ galilkills + '</td>';
string += '<th>He-Grenade</th>';
string += '<td>'+ henadekills + '</td>';
string += '<th>Molotov</th>';
string += '<td>'+ molotovkills + '</td>';
string += '<th>Awp</th>';
string += '<td>'+ awpkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>SSG08</th>';
string += '<td>'+ ssgkills + '</td>';
string += '<th>Mag7</th>';
string += '<td>'+ mag7kills + '</td>';
string += '<th>HKP2000</th>';
string += '<td>'+ hkpkills + '</td>';
string += '<th>Negev</th>';
string += '<td>'+ negevkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Scar20</th>';
string += '<td>'+ scarkills + '</td>';
string += '<th>Knife</th>';
string += '<td>'+ knifekills + '</td>';
string += '<th>Aug</th>';
string += '<td>'+ augkills + '</td>';
string += '<th>Bizon</th>';
string += '<td>'+ bizonkills + '</td>';
string += '</tr>';
string += '<tr>';
string += '<th>Nova</th>';
string += '<td>'+ novakills + '</td>';
string += '</tr>';
string += '</tbody></table>';
return string;
}
