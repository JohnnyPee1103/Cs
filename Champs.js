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
string += '<th>Clutches<th>Rounds Won</th>';
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


var nsOptions =
{
    sliderId: "ninja-slider",
    transitionType: "fade", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
    autoAdvance: false, //If autoAdvance is required, don't set this to true. You can set the autoAdvance of the Thumbnail Slider to true because the "before" callback function listed below has been set to let this slider to be driven by the Thumbnail Slider.
    delay: "default",
    transitionSpeed: 400,
    aspectRatio: "2:1",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    keyboardNav: true,
    before: function (currentIdx, nextIdx, manual) { if (manual && typeof mcThumbnailSlider != "undefined") mcThumbnailSlider.display(nextIdx); },
    license: "mylicense"
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2016.10.10 Copyright www.menucool.com */
function NinjaSlider(a){"use strict";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};var d="length",n=a.sliderId,ab=function(e){var a=e.childNodes,c=[];if(a)for(var b=0,f=a[d];b<f;b++)a[b].nodeType==1&&c.push(a[b]);return c},Bb=function(c){var a=c.childNodes;if(a&&a[d]){var b=a[d];while(b--)a[b].nodeType!=1&&a[b][p].removeChild(a[b])}},z=function(a,c,b){if(a[t])a[t](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},kb=function(e,c){for(var b=[],a=0;a<e[d];a++)b[b[d]]=String[Z](e[P](a)-(c?c:3));return b.join("")},db=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},cb=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},Eb=function(b){if(typeof b[e].webkitAnimationName!="undefined")var a="-webkit-";else a="";return a},zb=function(){var b=k.getElementsByTagName("head");if(b[d]){var a=k.createElement("style");b[0].appendChild(a);return a.sheet?a.sheet:a.styleSheet}else return 0},E=function(){return Math.random()},mb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],Jb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},lb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],o=window.setTimeout,p="parentNode",i="className",e="style",H="paddingTop",Z="fromCharCode",P="charCodeAt",x,O,F,B,C,hb,J={},u={},y;x=(navigator.msPointerEnabled||navigator.pointerEnabled)&&(navigator.msMaxTouchPoints||navigator.maxTouchPoints);O="ontouchstart"in window||window.DocumentTouch&&k instanceof DocumentTouch||x;var qb=function(){if(O){if(navigator.pointerEnabled){F="pointerdown";B="pointermove";C="pointerup"}else if(navigator.msPointerEnabled){F="MSPointerDown";B="MSPointerMove";C="MSPointerUp"}else{F="touchstart";B="touchmove";C="touchend"}hb={handleEvent:function(a){switch(a.type){case F:this.a(a);break;case B:this.b(a);break;case C:this.c(a)}db(a)},a:function(a){b[c][e].left="0px";if(x&&a.pointerType!="touch")return;var d=x?a:a.touches[0];J={x:d.pageX,y:d.pageY,t:+new Date};y=null;u={};f[t](B,this,false);f[t](C,this,false)},b:function(a){if(!x&&(a.touches[d]>1||a.scale&&a.scale!==1))return;var f=x?a:a.touches[0];u={x:f.pageX-J.x,y:f.pageY-J.y};if(x&&Math.abs(u.x)<21)return;if(y===null)y=!!(y||Math.abs(u.x)<Math.abs(u.y));if(!y){cb(a);S();b[c][e].left=u.x+"px"}},c:function(){var g=+new Date-J.t,d=g<250&&Math.abs(u.x)>20||Math.abs(u.x)>b[c].offsetWidth/2;y===null&&a.l&&!b[c].player&&j(c+1,1);if(y===false)if(d){j(c+(u.x>0?-1:1),1);var h=b[c];o(function(){h[e].left="0px"},1500)}else{b[c][e].left="0px";j(c,0)}f.removeEventListener(B,this,false);f.removeEventListener(C,this,false)}};f[t](F,hb,false)}},k=document,t="addEventListener",i="className",G=function(a){return k.getElementById(a)},g={};g.a=zb();var Hb=function(a){for(var c,e,b=a[d];b;c=parseInt(E()*b),e=a[--b],a[b]=a[c],a[c]=e);return a},Gb=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},D=function(a,c){var b=false;if(a[i]&&typeof a[i]=="string")b=Gb(a[i].split(" "),c);return b},s=function(a,b,c){if(!D(a,b))if(a[i]=="")a[i]=b;else if(c)a[i]=b+" "+a[i];else a[i]+=" "+b},A=function(c,f){if(c[i]){for(var e="",b=c[i].split(" "),a=0,g=b[d];a<g;a++)if(b[a]!==f)e+=b[a]+" ";c[i]=e.trim()}},tb=function(a){a[i]=a[i].replace(/\s?sl-\w+/g,"")},m=function(a){a="#"+n+a.replace("__",g.p);g.a.insertRule(a,0)},Db=function(a){var b=Jb(document.domain.replace("www.",""));try{typeof atob=="function"&&(function(a,c){var b=kb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="),a[d]+parseInt(a.charAt(1))).substr(0,3);typeof this[b]==="function"&&this[b](c,lb,mb)})(b,a)}catch(c){}},q=function(a,c,f,e,b){var d="@"+g.p+"keyframes "+a+" {from{"+c+";} to{"+f+";}}";g.a.insertRule(d,0);m(" "+e+"{__animation:"+a+" "+b+";}")},sb=function(){q("zoom-in","transform:scale(1)","transform:scale("+a.scale+")","li.ns-show .ns-img",a.e+h+"ms 1 alternate none");L();m(" ul li .ns-img {background-size:cover;}")},rb=function(){var c=a.e*100/(a.e+h),b="@"+g.p+"keyframes zoom-in {0%{__transform:scale(1.4);__animation-timing-function:cubic-bezier(.1,1.2,.02,.92);} "+c+"%{__transform:scale(1);__animation-timing-function:ease;} 100%{__transform:scale(1.1);}}";b=b.replace(/__/g,g.p);g.a.insertRule(b,0);m(" li.ns-show .ns-img {__animation:zoom-in "+(a.e+h)+"ms 1 alternate both;}");L();m(" ul li .ns-img {background-size:cover;}")},L=function(){m(" li {__transition:opacity "+h+"ms;}")},pb=function(){if(a.c=="slide")var c=h+"ms ease both",b=(screen.width/(1.5*f[p].offsetWidth)+.5)*100+"%";else{c=(h<100?h*2:300)+"ms ease both";b="100%"}var d=g.p+"transform:translateX(0)",e=g.p+"transform:translateX(",i=e+"-";q("sl-cl",d,i+b+")","li.sl-cl",c);q("sl-cr",d,e+b+")","li.sl-cr",c);q("sl-sl",e+b+")",d,"li.sl-sl",c);q("sl-sr",i+b+")",d,"li.sl-sr",c);if(a.c=="slide"){b="100%";q("sl-cl2",d,i+b+")","li.sl-cl2",c);q("sl-cr2",d,e+b+")","li.sl-cr2",c);q("sl-sl2",e+b+")",d,"li.sl-sl2",c);q("sl-sr2",i+b+")",d,"li.sl-sr2",c)}m(" li[class*='sl-'] {opacity:1;__transition:opacity 0ms;}")},T=function(){m(".fullscreen{z-index:2147481963;top:0;left:0;bottom:0;right:0;width:100%;position:fixed;text-align:center;overflow-y:auto;}");m(".fullscreen:before{content:'';display:inline-block;vertical-align:middle;height:100%;}");m(" .fs-icon{cursor:pointer;position:absolute;z-index:99999;}");m(".fullscreen .fs-icon{position:fixed;top:6px;right:6px;}");m(".fullscreen>div{display:inline-block;vertical-align:middle;width:95%;}");var a="@media only screen and (max-width:767px) {div#"+n+".fullscreen>div{width:100%;}}";g.a.insertRule(a,0)},xb=function(){q("mcSpinner","transform:rotate(0deg)","transform:rotate(360deg)","li.loading::after",".6s linear infinite");m(" li.loading::after{content:'';display:block;position:absolute;width:30px;height:30px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")},nb=function(){var a="#"+n+"-prev:after",b="content:'<';font-size:20px;font-weight:bold;color:#fff;position:absolute;left:10px;";g.a.addRule(a,b,0);g.a.addRule(a.replace("prev","next"),b.replace("<",">").replace("left","right"),0)},gb=function(b){var a=r;return b>=0?b%a:(a+b%a)%a},l=null,f,b=[],K,Q,v,jb,R,ib,w=false,c=0,r=0,h,Fb=function(a){return!a.complete?0:a.width===0?0:1},V=function(b){if(b.rT){f[e][H]=b.rT;if(a.g!="auto")b.rT=0}},bb=function(d,c,b){if(a.g=="auto"||f[e][H]=="50.1234%"){b.rT=c/d*100+"%";f[e][H]=="50.1234%"&&V(b)}},Ab=function(b,l){if(b.lL===undefined){var m=screen.width,k=b.getElementsByTagName("*");if(k[d]){for(var g=[],a,i,h,c=0;c<k[d];c++)D(k[c],"ns-img")&&g.push(k[c]);if(g[d])a=g[0];else b.lL=0;if(g[d]>1){for(var c=1;c<g[d];c++){h=g[c].getAttribute("data-screen");if(h){h=h.split("-");if(h[d]==2){if(h[1]=="max")h[1]=9999999;if(m>=h[0]&&m<=h[1]){a=g[c];break}}}}for(var c=0;c<g[d];c++)if(g[c]!==a)g[c][e].display="none"}if(a){b.lL=1;if(a.tagName=="A"){i=a.getAttribute("href");z(a,"click",cb)}else if(a.tagName=="IMG")i=a.getAttribute("src");else{var j=a[e].backgroundImage;if(j&&j.indexOf("url(")!=-1){j=j.substring(4,j[d]-1).replace(/[\'\"]/g,"");i=j}}if(a.getAttribute("data-fs-image")){b.nIs=[i,a.getAttribute("data-fs-image")];if(D(G(n),"fullscreen"))i=b.nIs[1]}if(i)b.nI=a;else b.lL=0;var f=new Image;f.onload=f.onerror=function(){var a=this;if(a.mA){if(a.width&&a.height){if(a.mA.tagName=="A")a.mA[e].backgroundImage="url('"+a.src+"')";bb(a.naturalWidth||a.width,a.naturalHeight||a.height,a.mL);A(a.mL,"loading")}a.is1&&N();o(function(){a=null},20)}};f.src=i;if(Fb(f)){A(b,"loading");bb(f.naturalWidth,f.naturalHeight,b);l===1&&N();if(a.tagName=="A")a[e].backgroundImage="url('"+i+"')";f=null}else{f.is1=l===1;f.mA=a;f.mL=b;s(b,"loading")}}}else b.lL=0}b.lL===0&&l===1&&N()},X=function(a){for(var e=a===1?c:c-1,d=e;d<e+a;d++)Ab(b[gb(d)],a);a==1&&vb()},W=function(){if(l)nsVideoPlugin.call(l);else o(W,300)},N=function(){o(function(){j(c,9)},500);z(window,"resize",yb);z(k,"visibilitychange",Ib)},Y=function(a){if(l&&l.playAutoVideo)l.playAutoVideo(a);else o(function(){Y(a)},typeof nsVideoPlugin=="function"?100:300)},yb=function(){typeof nsVideoPlugin=="function"&&l.setIframeSize()},vb=function(){(new Function("a","b","c","d","e","f","g","h","i","j",function(c){for(var b=[],a=0,e=c[d];a<e;a++)b[b[d]]=String[Z](c[P](a)-4);return b.join("")}("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_exsfCexsf,+^K=x][py+->k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this,[a,P,f,Eb,lb,g,kb,mb,document,p])},j=function(c,e){if(b[d]==1&&c>0)return;a.o&&clearTimeout(Q);l&&l.unloadPlayer&&l.unloadPlayer();eb(c,e)},I=function(){w=!w;ib[i]=w?"paused":"";!w&&j(c+1,0);return w},Ib=function(){if(a.d)if(w){if(l.iframe&&l.iframe[p][e].zIndex=="2147481964"){w=false;return}o(I,2200)}else I()},S=function(){clearInterval(K);K=null};function ub(a){if(!a)a=window.event;var b=a.keyCode;b==37&&j(c-1,1);b==39&&j(c+1,1)}var fb=function(l){var d=this;f=l;wb();Db(a.a);if(a.o&&a.d){f.onmouseover=function(){clearTimeout(Q);S()};f.onmouseout=function(){if(d.iframe&&d.iframe[p][e].zIndex=="2147481964")return;Q=o(function(){j(c+1,1)},2e3)}}if(a.c!="slide")f[e].overflow="hidden";d.d();d.c();typeof nsVideoPlugin=="function"&&W();r>1&&qb();d.addNavs();X(1);if(g.a){var q=k.all&&!window.atob;if(g.a.insertRule&&!q){if(a.c=="fade")L();else if(a.c=="zoom")rb();else a.c=="kb"&&sb();pb();T();xb()}else if(k.all&&!k[t]){nb();g.a.addRule("div.fs-icon","display:none!important;",0);g.a.addRule("#"+n+" li","visibility:hidden;",0);g.a.addRule("#"+n+" li[class*='sl-s']","visibility:visible;",0);g.a.addRule("#"+n+" li[class*='ns-show']","visibility:visible;",0)}else{T();m(" li[class*='sl-s'] {opacity:1;}")}}(a.c=="zoom"||a.c=="kb")&&b[0].nI&&U(b[0].nI,0,b[0].dL);if(a.c!="zoom")s(b[0],"ns-show");else{b[0][e].opacity=1;s(b[0],"dm-");var i=function(){if(c===0)o(i,a.e+h*2);else{b[0][e].opacity="";A(b[0],"dm-")}};o(i,a.e+h*2)}a.p&&r>1&&z(k,"keydown",ub)},wb=function(){a.c=a.transitionType;a.a=a.license;a.d=a.autoAdvance;a.e=a.delay;a.g=a.aspectRatio;a.j=a.shuffle;a.k=a.startSlideIndex;a.l=a.navigateByTap;a.m=a.m;a.n=a.before;a.o=!!a.pauseOnHover;a.p=a.keyboardNav;if(a.c.indexOf("kenburns")!=-1){var c=a.c.split(" ");a.c="kb";a.scale=1.2;if(c[d]>1)a.scale=parseFloat(c[1])}if(a.o)a.l=0;if(typeof a.m=="undefined")a.m=1;if(a.c=="none"){a.c="fade";a.transitionSpeed=0}var b=a.e;if(b==="default")switch(a.c){case"kb":case"zoom":b=6e3;break;case"slide":b=4e3;break;default:b=3500}h=a.transitionSpeed;if(h==="default")switch(a.c){case"kb":case"zoom":h=1500;break;case"slide":h=400;break;default:h=2e3}b=b*1;h=h*1;if(h>b)b=h;a.e=b},Kb=function(a,b){if(!a||a=="default")a=b;return a},U=function(b){var l=E(),f=E(),g=E(),h=E(),j=l<.5?"alternate":"alternate-reverse";if(f<.3)var c="left";else if(f<.6)c="center";else c="right";if(g<.45)var d="top";else if(g<.55)d="center";else d="bottom";if(h<.2)var i="linear";else i=h<.6?"cubic-bezier(.94,.04,.94,.49)":"cubic-bezier(.93,.2,.87,.52)";var k=c+" "+d;b[e].WebkitTransformOrigin=b[e].transformOrigin=k;if(a.c=="kb"){b[e].WebkitAnimationDirection=b[e].animationDirection=j;b[e].WebkitAnimationTimingFunction=b[e].animationTimingFunction=i}},ob=function(a){if(R){jb.innerHTML=R.innerHTML="<div>"+(a+1)+" &#8725; "+r+"</div>";if(v[d]){var b=v[d];while(b--)v[b][i]="";v[a][i]="active"}}},eb=function(d,j){d=gb(d);if(!j&&(w||d==c))return;clearTimeout(K);b[d][e].left="0px";for(var i=0,q=r;i<q;i++){b[i][e].zIndex=i===d?1:i===c?0:-1;if(i!=d)if(i==c&&(a.c=="zoom"||a.c=="kb")){var n=i;o(function(){A(b[n],"ns-show")},h)}else A(b[i],"ns-show");(a.c=="slide"||a.m)&&tb(b[i])}if(j!=9)if(a.c=="slide"||a.m&&j){!j&&s(b[d],"ns-show");var l=d>c||!d&&c==r-1;if(!c&&d!=1&&d==r-1)l=0;var k=a.c=="slide"&&f[p][p].offsetWidth==f[p].offsetWidth?"2":"";if(l){s(b[c],"sl-cl"+k);s(b[d],"sl-sl"+k)}else{s(b[c],"sl-cr"+k);s(b[d],"sl-sr"+k)}var n=c}else{s(b[d],"ns-show");(a.c=="zoom"||a.c=="kb")&&b[d].nI&&g.a.insertRule&&U(b[d].nI,d,b[d].dL)}ob(d);var m=c;c=d;X(4);V(b[d]);a.n&&a.n(m,d,j==9?false:j);if(a.d)K=o(function(){eb(d+1,0)},b[d].dL);b[d].player&&Y(b[d])};fb.prototype={b:function(){var g=f.children,e;r=g[d];for(var c=0,h=g[d];c<h;c++){b[c]=g[c];b[c].ix=c;e=b[c].getAttribute("data-delay");b[c].dL=e?parseInt(e):a.e}},c:function(){Bb(f);this.b();var e=0;if(a.j){for(var g=Hb(b),c=0,i=g[d];c<i;c++)f.appendChild(g[c]);e=1}else if(a.k){for(var h=a.k%b[d],c=0;c<h;c++)f.appendChild(b[c]);e=1}e&&this.b()},d:function(){if(a.g.indexOf(":")!=-1){var b=a.g.split(":"),c=b[1]/b[0];f[e][H]=c*100+"%"}else f[e][H]="50.1234%";f[e].height="0"},e:function(b,d){var c=n+b,a=k.getElementById(c);if(!a){a=k.createElement("div");a.id=c;a=f[p].appendChild(a)}if(b!="-pager"){a.onclick=d;O&&a[t]("touchstart",function(a){a.preventDefault();a.target.click();db(a)},false)}return a},addNavs:function(){if(r>1){var l=this.e("-pager",0);if(!ab(l)[d]){for(var o=[],a=0;a<r;a++)o.push('<a rel="'+a+'">'+(a+1)+"</a>");l.innerHTML=o.join("")}v=ab(l);for(var a=0;a<v[d];a++){if(a==c)v[a][i]="active";v[a].onclick=function(){var a=parseInt(this.getAttribute("rel"));a!=c&&j(a,1)}}jb=this.e("-prev",function(){j(c-1,1)});R=this.e("-next",function(){j(c+1,1)});ib=this.e("-pause-play",I)}var h=f[p][p].getElementsByTagName("*"),m=h[d];if(m)for(var a=0;a<m;a++)if(D(h[a],"fs-icon")){var g=h[a];break}if(g){z(g,"click",function(){var f=G(n),c=D(f,"fullscreen");if(c){A(f,"fullscreen");k.documentElement[e].overflow="auto"}else{s(f,"fullscreen");k.documentElement[e].overflow="hidden"}typeof fsIconClick=="function"&&fsIconClick(c);c=!c;for(var a,g=0;g<b[d];g++){a=b[g];if(a.nIs)if(a.nI.tagName=="IMG")a.nI.src=a.nIs[c?1:0];else a.nI[e].backgroundImage="url('"+a.nIs[c?1:0]+"')"}});z(k,"keydown",function(a){a.keyCode==27&&D(G(n),"fullscreen")&&g.click()})}},sliderId:n,stop:S,getLis:function(){return b},getIndex:function(){return c},next:function(){a.d&&j(c+1,1)}};var M=function(){var a=G(n);if(a){var b=a.getElementsByTagName("ul");if(b[d])l=new fb(b[0])}},Cb=function(c){var a=0;function b(){if(a)return;a=1;o(c,4)}if(k[t])k[t]("DOMContentLoaded",b,false);else z(window,"load",b)};if(!a.initSliderByCallingInitFunc)if(G(n))M();else Cb(M);return{displaySlide:function(a){if(b[d]){if(typeof a=="number")var c=a;else c=a.ix;j(c,0)}},next:function(){j(c+1,1)},prev:function(){j(c-1,1)},toggle:I,getPos:function(){return c},getSlides:function(){return b},playVideo:function(a){if(typeof a=="number")a=b[a];if(a.player){j(a.ix,0);l.playVideo(a.player)}},init:function(a){!l&&M();typeof a!="undefined"&&this.displaySlide(a)}}}


var thumbnailSliderOptions =
{
    sliderId: "thumbnail-slider",
    orientation: "horizontal",
    thumbWidth: "auto",
    thumbHeight: "50px",
    showMode: 3,
    autoAdvance: false,
    selectable: true,
    slideInterval: 3000,
    transitionSpeed: 700,
    shuffle: false,
    startSlideIndex: 0, //0-based
    pauseOnHover: true,
    initSliderByCallingInitFunc: false,
    rightGap: null,
    keyboardNav: false,
    mousewheelNav: true,
    before: function (currentIdx, nextIdx, manual) { if (typeof nslider != "undefined") nslider.displaySlide(nextIdx); },
    license: "b2e98"
};

var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);
/* ThumbnailSlider Slider v2015.10.26. Copyright(C) www.menucool.com. All rights reserved. */
function ThumbnailSlider(a){"use strict";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};var e="length",l=document,Mb=function(c){var a=c.childNodes;if(a&&a[e]){var b=a[e];while(b--)a[b].nodeType!=1&&a[b][m].removeChild(a[b])}},eb=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(a&&typeof a.cancelBubble!="undefined")a.cancelBubble=true},db=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},Qb=function(b){if(typeof b[f].webkitAnimationName!="undefined")var a="-webkit-";else a="";return a},Kb=function(){var b=l.getElementsByTagName("head");if(b[e]){var a=l.createElement("style");b[0].appendChild(a);return a.sheet?a.sheet:a.styleSheet}else return 0},xb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],vb=function(d,c){for(var b=[],a=0;a<d[e];a++)b[b[e]]=String[kb](d[Z](a)-(c?c:3));return b.join("")},Vb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},wb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],p=window.setTimeout,s="nextSibling",q="previousSibling",Ub=l.all&&!window.atob,o={};o.a=Kb();var mb=function(b){b="#"+a.b+b.replace("__",o.p);o.a.insertRule(b,0)},Db=function(a,c,f,e,b){var d="@"+o.p+"keyframes "+a+" {from{"+c+";} to{"+f+";}}";o.a.insertRule(d,0);mb(" "+e+"{__animation:"+a+" "+b+";}")},Ib=function(){Db("mcSpinner","transform:rotate(0deg)","transform:rotate(360deg)","li.loading::after",".7s linear infinite");mb(" ul li.loading::after{content:'';display:block;position:absolute;width:24px;height:24px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")},Ab=function(){var c="#"+a.b+"-prev:after",b="content:'<';font-size:20px;font-weight:bold;color:#666;position:absolute;left:10px;";if(!a.c)b=b.replace("<","^");o.a.addRule(c,b,0);o.a.addRule(c.replace("prev","next"),b.replace("<",">").replace("^","v").replace("left","right"),0)},E,N,A,B,C,rb,L={},w={},z;E=(navigator.msPointerEnabled||navigator.pointerEnabled)&&(navigator.msMaxTouchPoints||navigator.maxTouchPoints);var Bb=function(a){return A=="pointerdown"&&(a.pointerType==a.MSPOINTER_TYPE_MOUSE||a.pointerType=="mouse")};N="ontouchstart"in window||window.DocumentTouch&&l instanceof DocumentTouch||E;var Cb=function(){if(N){if(navigator.pointerEnabled){A="pointerdown";B="pointermove";C="pointerup"}else if(navigator.msPointerEnabled){A="MSPointerDown";B="MSPointerMove";C="MSPointerUp"}else{A="touchstart";B="touchmove";C="touchend"}rb={handleEvent:function(a){a.preventManipulation&&a.preventManipulation();switch(a.type){case A:this.a(a);break;case B:this.b(a);break;case C:this.c(a)}eb(a)},a:function(a){if(Bb(a)||c[e]<2)return;var d=E?a:a.touches[0];L={x:d[bb],y:d[cb],l:b.pS};z=null;w={};b[t](B,this,false);b[t](C,this,false)},b:function(a){if(!E&&(a.touches[e]>1||a.scale&&a.scale!==1))return;var b=E?a:a.touches[0];w={x:b[bb]-L.x,y:b[cb]-L.y};if(z===null)z=!!(z||Math.abs(w.x)<Math.abs(w.y));if(!z){db(a);W=0;ub();i(L.l+w.x,1)}},c:function(){if(z===false){var e=g,l=Math.abs(w.x)>30;if(l){var f=w.x>0?1:-1,m=f*w.x*1.5/c[g][h];if(f===1&&a.f==3&&!c[g][q]){var k=b.firstChild[d];b.insertBefore(b.lastChild,b.firstChild);i(b.pS+k-b.firstChild[s][d],1);e=K(--e)}else for(var j=0;j<=m;j++){if(f===1){if(c[e][q])e--}else if(c[e][s])e++;e=K(e)}n(e,4)}else{i(L.l);if(a.g)R=window.setInterval(function(){J(g+1,0)},a.i)}p(function(){W=1},500)}b.removeEventListener(B,this,false);b.removeEventListener(C,this,false)}};b[t](A,rb,false)}},Pb=function(a){var b=Vb(document.domain.replace("www.",""));try{typeof atob=="function"&&(function(a,c){var b=vb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="),a[e]+parseInt(a.charAt(1))).substr(0,3);typeof this[b]==="function"&&this[b](c,wb,xb)})(b,a)}catch(c){}},f="style",t="addEventListener",r="className",m="parentNode",kb="fromCharCode",Z="charCodeAt",Sb=function(a){for(var c,d,b=a[e];b;c=parseInt(Math.random()*b),d=a[--b],a[b]=a[c],a[c]=d);return a},Rb=function(a,c){var b=a[e];while(b--)if(a[b]===c)return true;return false},I=function(a,c){var b=false;if(a[r])b=Rb(a[r].split(" "),c);return b},P=function(a,b,c){if(!I(a,b))if(a[r]=="")a[r]=b;else if(c)a[r]=b+" "+a[r];else a[r]+=" "+b},H=function(c,f){if(c[r]){for(var d="",b=c[r].split(" "),a=0,g=b[e];a<g;a++)if(b[a]!==f)d+=b[a]+" ";c[r]=d.trim()}},K=function(b){var a=c[e];return b>=0?b%a:(a+b%a)%a},v=function(a,c,b){if(a[t])a[t](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},i=function(d,e){var c=b[f];if(o.c){c.webkitTransitionDuration=c.transitionDuration=(e?0:a.j)+"ms";c.webkitTransform=c.transform="translate"+(a.c?"X(":"Y(")+d+"px)"}else c[lb]=d+"px";b.pS=d},ob=function(a){return!a.complete?0:a.width===0?0:1},M=null,j,x=0,b,c=[],g=0,R,Wb,S=0,fb=0,tb,y=0,W=1,ab,ib,d,h,k,lb,u=0,bb,cb,sb,Lb=function(b){if(!b.zimg){b.zimg=1;b.thumb=b.thumbSrc=0;var h=b.getElementsByTagName("*");if(h[e])for(var i=0;i<h[e];i++){var d=h[i];if(I(d,"thumb")){if(d.tagName=="A"){var c=d.getAttribute("href");d[f].backgroundImage="url('"+c+"')"}else if(d.tagName=="IMG")c=d.src;else{c=d[f].backgroundImage;if(c&&c.indexOf("url(")!=-1)c=c.substring(4,c[e]-1).replace(/[\'\"]/g,"")}if(d[m].tagName!="A")d[f].cursor=a.h?"pointer":"default";if(c){b.thumb=d;b.thumbSrc=c;var g=new Image;g.onload=g.onerror=function(){b.zimg=1;var a=this;if(a.width&&a.height){H(b,"loading");O(b,a)}else O(b,0);p(function(){a=null},20)};g.src=c;if(ob(g)){b.zimg=1;O(b,g);g=null}else{P(b,"loading");b.zimg=g}}break}}}if(b.zimg!==1&&ob(b.zimg)){H(b,"loading");O(b,b.zimg);b.zimg=1}},qb=0,jb=function(a){return g==0&&a==c[e]-1},nb=function(i,m){var l=c[i],f=1;if(a.f==3)if(m==4)f=l[d]>=c[g][d];else f=i>g&&!jb(i)||g==c[e]-1&&i==0;else if(m==4)if(b.pS+l[d]<20)f=0;else if(b.pS+l[d]+l[h]>=j[k])f=1;else f=-1;else f=i>=g&&!jb(i);return f},F=function(a){return a.indexOf("%")!=-1?parseFloat(a)/100:parseInt(a)},Fb=function(a,d,c){if(d.indexOf("px")!=-1&&c.indexOf("px")!=-1){a[f].width=d;a[f].height=c}else{var b=a[q];if(!b||!b[f].width)b=a[s];if(b&&b[f].width){a[f].width=b[f].width;a[f].height=b[f].height}else a[f].width=a[f].height="64px"}},O=function(p,k){var j=a.d,d=a.e;if(!k)Fb(p,j,d);else{var i=k.naturalWidth||k.width,h=k.naturalHeight||k.height,e="width",g="height",c=p[f];if(j=="auto")if(d=="auto"){c[g]=h+"px";c[e]=i+"px"}else if(d.indexOf("%")!=-1){var o=(window.innerHeight||l.documentElement.clientHeight)*F(d);c[g]=o+"px";c[e]=i/h*o+"px";if(!a.c)b[m][f].width=c[e]}else{c[g]=d;c[e]=i/h*F(d)+"px"}else if(j.indexOf("%")!=-1)if(d=="auto"||d.indexOf("%")!=-1){var n=F(j),q=b[m][m].clientWidth;if(!a.c&&n<.71&&q<415)n=.9;var r=q*n;c[e]=r+"px";c[g]=h/i*r+"px";if(!a.c)b[m][f].width=c[e]}else{c[e]=i/h*F(d)+"px";c[g]=d}else{c[e]=j;if(d=="auto"||d.indexOf("%")!=-1)c[g]=h/i*F(j)+"px";else c[g]=d}}},G=function(d,i,l,o){var g=x||5,r=0;if(a.f==3&&i)if(l)var f=Math.ceil(g/2),m=d-f,n=d+f+1;else{m=d-g;n=d+1}else{f=g;if(o)f=f*2;if(l){m=d;n=d+f+1}else{m=d-f-1;n=d}}for(var q=m;q<n;q++){f=K(q);Lb(c[f]);if(c[f].zimg!==1)r=1}if(i){!qb++&&Gb();if((!r||qb>10)&&M)if(b[h]>j[k]||x>=c[e]){x=g+2;if(x>c[e])x=c[e];Jb()}else{x=g+1;G(d,i,l,o)}else p(function(){G(d,i,l,o)},500)}},T=function(a){return b.pS+a[d]<0?a:a[q]?T(a[q]):a},D=function(a){return b.pS+a[d]+a[h]>j[k]?a:a[s]?D(a[s]):a},U=function(a,b){return b[d]-a[d]+20>j[k]?a[s]:a[q]?U(a[q],b):a},zb=function(c){if(a.f==2)var b=c;else b=T(c);if(b[q])b=U(b,b);return b},Nb=function(f,l){f=K(f);var e=c[f];if(g==f&&l!=4&&a.f!=3)return f;var m=nb(f,l);if(a.f==3){if(l&&l!=3&&l!=4)e=m?D(c[g]):T(c[g]);i(-e[d]+(j[k]-e[h])/2,l==3)}else if(l===4){if(b.pS+e[d]<20){e=U(c[f],c[f]);if(e[q])i(-e[d]+u);else{i(80);p(function(){i(0)},a.j/2)}}else if(a.o===0&&!e[s]&&b.pS+b[h]==j[k]){i(j[k]-b[h]-80);p(function(){i(j[k]-b[h])},a.j/2)}else b.pS+e[d]+e[h]+30>j[k]&&V(e);return f}else if(l){e=m?D(c[g]):zb(c[g]);if(m)V(e);else i(-e[d]+u)}else if(a.f==2){if(!m)i(-e[d]+u);else if(b.pS+e[d]+e[h]+20>j[k]){var n=e[s];if(!n)n=e;i(-n[d]-n[h]-u+j[k])}}else if(b.pS+b[h]<=j[k]){e=c[0];i(-e[d]+u)}else{if(a.f==4)e=D(c[g]);V(e)}return e.ix},V=function(c){if(typeof a.o=="number"&&b[h]-c[d]+a.o<j[k])i(j[k]-b[h]-a.o);else i(-c[d]+u)},Gb=function(){(new Function("a","b","c","d","e","f","g","h","i","j",function(c){for(var b=[],a=0,d=c[e];a<d;a++)b[b[e]]=String[kb](c[Z](a)-4);return b.join("")}("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q2mrhi|Sj,N,+f+/r0s--AA15-zev$vAQexl2verhsq,-0w0yAk,+[o|tiuhps'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this,[a,Z,b,Qb,wb,o,vb,xb,document,m])},Jb=function(){u=c[e]>1?c[1][d]-c[0][d]-c[0][h]:0;b[f].msTouchAction=b[f].touchAction=a.c?"pan-y":"pan-x";b[f].webkitTransitionProperty=b[f].transitionProperty="transform";b[f].webkitTransitionTimingFunction=b[f].transitionTimingFunction="cubic-bezier(.2,.88,.5,1)";n(g,a.f==3?3:1)},n=function(c,b){a.m&&clearTimeout(ab);J(c,b);if(a.g){clearInterval(R);R=window.setInterval(function(){J(g+1,0)},a.i)}},Q=function(){y=!y;tb[r]=y?"pause":"";!y&&n(g+1,0)},Tb=function(){if(a.g)if(y)p(Q,2200);else Q()},Eb=function(a){if(!a)a=window.event;var b=a.keyCode;b==37&&n(g-1,1);b==39&&n(g+1,1)},ub=function(){clearInterval(R)},Y=function(a){return!a?0:a.nodeType!=1?Y(a[m]):a.tagName=="LI"?a:a.tagName=="UL"?0:Y(a[m])},Hb=function(){a.b=a.sliderId;a.c=a.orientation;a.d=a.thumbWidth;a.e=a.thumbHeight;a.f=a.showMode;a.g=a.autoAdvance;a.h=a.selectable;a.i=a.slideInterval;a.j=a.transitionSpeed;a.k=a.shuffle;a.l=a.startSlideIndex;a.m=a.pauseOnHover;a.o=a.rightGap;a.p=a.keyboardNav;a.q=a.mousewheelNav;a.r=a.before;a.a=a.license;a.c=a.c=="horizontal";if(a.i<a.j+1e3)a.i=a.j+1e3;sb=a.j+100;if(a.f==2||a.f==3)a.h=true;a.m=a.m&&!N&&a.g;var b=a.c;h=b?"offsetWidth":"offsetHeight";k=b?"clientWidth":"clientHeight";d=b?"offsetLeft":"offsetTop";lb=b?"left":"top";bb=b?"pageX":"pageY";cb=b?"pageY":"pageX"},pb=function(s){Hb();b=s;b.pS=0;Pb(a.a);j=b[m];if(a.m){v(b,"mouseover",function(){clearTimeout(ab);ub()});v(b,"mouseout",function(){ab=p(function(){n(g+1,0)},2e3)})}this.b();v(b,"click",function(c){var b=c.target||c.srcElement;if(b&&b.nodeType==1){b.tagName=="A"&&I(b,"thumb")&&db(c);if(a.h){var d=Y(b);if(d)W&&n(d.ix,4)}}eb(c)});if(a.q){var q=l.getElementById(a.b),i=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel",d=null;v(q,i,function(a){var a=a||window.event,b=a.detail?-a.detail:a.wheelDelta;if(b){clearTimeout(d);b=b>0?1:-1;d=p(function(){J(g-b,4)},60)}db(a)})}Cb();G(0,1,1,0);o.c=typeof b[f].transform!="undefined"||typeof b[f].webkitTransform!="undefined";if(o.a)if(o.a.insertRule&&!Ub)Ib();else l.all&&!l[t]&&Ab();a.p&&v(l,"keydown",Eb);v(l,"visibilitychange",Tb);if((a.d+a.e).indexOf("%")!=-1){var h=null,r=function(e){var d=e[f],j=e.offsetWidth,i=e.offsetHeight;if(a.d.indexOf("%")!=-1){var c=parseFloat(a.d)/100,g=b[m][m].clientWidth;if(!a.c&&c<.71&&g<415)c=.9;d.width=g*c+"px";d.height=i/j*g*c+"px"}else{c=parseFloat(a.e)/100;var h=(window.innerHeight||l.documentElement.clientHeight)*c;d.height=h+"px";d.width=j/i*h+"px"}if(!a.c)b[m][f].width=d.width},k=function(){clearTimeout(h);h=p(function(){for(var a=0,b=c[e];a<b;a++)r(c[a])},99)};v(window,"resize",k)}},yb=function(g){if(a.h){for(var d=0,i=c[e];d<i;d++){H(c[d],"active");c[d][f].zIndex=0}P(c[g],"active");c[g][f].zIndex=1}S==0&&M.e();if(a.f!=3){if(b.pS+u<0)H(S,"disabled");else P(S,"disabled");if(b.pS+b[h]-u-1<=j[k])P(fb,"disabled");else H(fb,"disabled")}},hb=function(){var a=b.firstChild;if(b.pS+a[d]>-50)return;while(1)if(b.pS+a[d]<0&&a[s])a=a[s];else{if(a[q])a=a[q];break}var e=a[d],c=b.firstChild;while(c!=a){b.appendChild(b.firstChild);c=b.firstChild}i(b.pS+e-a[d],1)},gb=function(){var a=D(b.firstChild),f=a[d],c=b.lastChild,e=0;while(c!=a&&e<x&&c.zimg===1){b.insertBefore(b.lastChild,b.firstChild);c=b.lastChild;e++}i(b.pS+f-a[d],1)},J=function(b,d){if(c[e]<2)return;b=K(b);if(!d&&(y||b==g))return;var f=nb(b,d);if(d&&f!=-1){G(b,0,f,1);if(a.f==3){clearTimeout(ib);if(f)hb();else gb()}}var h=g;b=Nb(b,d);yb(b);g=b;G(b,0,1,a.f==4);if(a.f==3)ib=p(hb,sb);a.r&&a.r(h,b,d)};pb.prototype={c:function(){for(var g=b.children,d=0,h=g[e];d<h;d++){c[d]=g[d];c[d].ix=d;c[d][f].display=a.c?"inline-block":"block"}},b:function(){Mb(b);this.c();var f=0;if(a.k){for(var g=Sb(c),d=0,i=g[e];d<i;d++)b.appendChild(g[d]);f=1}else if(a.l){for(var h=a.l%c[e],d=0;d<h;d++)b.appendChild(c[d]);f=1}f&&this.c()},d:function(d,c){var b=l.createElement("div");b.id=a.b+d;if(c)b.onclick=c;N&&b[t]("touchstart",function(a){a.preventDefault();a.target.click();eb(a)},false);b=j[m].appendChild(b);return b},e:function(){S=this.d("-prev",function(){!I(this,"disabled")&&n(g-1,1)});fb=this.d("-next",function(){!I(this,"disabled")&&n(g+1,1)});tb=this.d("-pause-play",Q)}};var X=function(){var b=l.getElementById(a.sliderId);if(b){var c=b.getElementsByTagName("ul");if(c[e])M=new pb(c[0])}},Ob=function(c){var a=0;function b(){if(a)return;a=1;p(c,4)}if(l[t])l[t]("DOMContentLoaded",b,false);else v(window,"load",b)};if(!a.initSliderByCallingInitFunc)if(l.getElementById(a.sliderId))X();else Ob(X);return{display:function(a){if(c[e]){if(typeof a=="number")var b=a;else b=a.ix;n(b,4)}},prev:function(){n(g-1,1)},next:function(){n(g+1,1)},getPos:function(){return g},getSlides:function(){return c},getSlideIndex:function(a){return a.ix},toggle:Q,init:function(e){!M&&X();if(typeof e=="number")var b=e;else b=e.ix;if(a.f==3){i(-c[b][d]+(j[k]-c[b][h])/2,1);gb();J(b,0)}else{i(-c[b][d]+j[h],4);n(b,4)}}}}