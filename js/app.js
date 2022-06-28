

//mujkod//

var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

can.addEventListener('mousemove', function(e) {
    var mouse = getMouse(e, can);
    redraw(mouse);
}, false);


function redraw(mouse) {
    can.width = can.width;
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI*2, true)
    ctx.clip();
    ctx.drawImage(img2, 0, 0);
}

var img = new Image();
img.onload = function() {
    redraw({x: -200, y: -200})
}
        img.src = 'img/human.svg';
var img2 = new Image();
img2.onload = function() {
    redraw({x: -200, y: -200})
}
        img2.src = 'img/devil.svg';
// Creates an object with x and y defined,
// set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky,
// we have to worry about padding and borders
// takes an event and a reference to the canvas


function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    // Compute the total offset. It's possible to cache this if you want
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object with x and y defined
    return {
        x: mx,
        y: my
    };
}

// function changeSize(event) 
// {
//     event.preventDefault();

//     // dodajemy różnicę wysokości po scrollu i mnożymy razy jakąś liczbę, żeby to zmniejszyć 
//     scale += event.deltaY * 0.0008;
  
//     // Apply scale transform
//     kolo_obrazek.style.transform = `scale(${scale})`;

//     max_width_px = $('#kolo_obraz').css('max-width');

//     // 10px -> 10
//     var max_width = parseInt(max_width_px, 10);

//     var width = document.getElementById('kolo_obraz').getBoundingClientRect().width;

//     if (width >= max_width)
//     {
//         kolo_sekcja.onwheel = null;
//     }
// }
// let scale = 1;
// const kolo_sekcja = document.getElementById('kolo');
// const kolo_obrazek = document.getElementById('kolo_obraz');

// kolo_sekcja.onwheel = changeSize;





























//                                                    ###
//    ###   ## ##   ###                                ##
//   ## ##  ## ##  ## ##                               ##
//   ##     ## ##  ##            # ###   ###   ####    ##     ####   ####   ###
//    ###   ## ##  #####         ###    ## ##  ## ##   ##    ## ##  ##     ## ##
//      ##  ## ##  ## ##         ##     #####  ## ##   ##    ## ##  ##     #####
//   ## ##   ###   ## ##         ##     ##     ## ##   ##    ## ##  ##     ##
//    ###     #     ####         ##      ###   ####   ####    ## #   ####   ###
//                                             ##
//                                             ##
jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});


//
//     ###    ###    ###   ## ##  ####   #####
//    ## ##  ## ##  ## ##  ## ##   ##    ##
//    ##     ## ##  ## ##  ####    ##    ##
//    ##     ## ##  ## ##  ###     ##    ####
//    ##     ## ##  ## ##  ####    ##    ##
//    ## ##  ## ##  ## ##  ## ##   ##    ##
//     ###    ###    ###   ## ##  ####   #####
//
//

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


//
//   ## ##  #####  ##     ####   #####  ####    ###
//   ## ##  ##     ##     ## ##  ##     ## ##  ## ##
//   ## ##  ##     ##     ## ##  ##     ## ##  ##
//   #####  ####   ##     ####   ####   ####    ###
//   ## ##  ##     ##     ##     ##     ###       ##
//   ## ##  ##     ##     ##     ##     ####   ## ##
//   ## ##  #####  #####  ##     #####  ## ##   ###
//
//
jQuery(document).ready(function($) {
    //obrysowuje wszystkie elementu html
    var DEBUG = true;
        // szuka pozycji elementu
        function getOffset(el) {
          var rect = el.getBoundingClientRect();
          return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
          };
        }

    if (DEBUG) {
        var p = '<div id="czujnik" style="position:fixed; left:0; bottom:0; font-size:10px; background:white;"><input id="colors" type="checkbox"/> <span id="debug-width" ></span>x<span id="debug-height" ></span><br></div>';
        $('body').append(p);
        //wyświetla szerokość i wysokość okna
        $(window).resize(function() {
            $('#debug-height').html($(window).height());
            $('#debug-width').html($(window).width());
        }).resize();

        var ciacho = getCookie('obrysuj');
        if (ciacho == "tak") {
            $('input#colors').prop('checked', true);
        }

        var obrysuj = function() {
            if ($('input#colors').is(':checked')) {
                $('body *').each(function(index) {
                    var colors = ['red', 'blue', 'black', 'green', 'pink', 'orange', 'brown'];
                    var random_color = colors[Math.floor(Math.random() * colors.length)];
                    var box_shadow = '0 0 0 1px ' + random_color + ' ';
                    var tag_name = $(this).prop("tagName");
                    var class_name = $(this).attr("class");
                    var el_position = getOffset(this);

                    if ($(this).css('-webkit-box-shadow') == 'none') {
                        $(this).css('-webkit-box-shadow', box_shadow);
                          console.log("pozycja");
                    console.log(el_position);
                    console.log(el_position.top);
                         // to z pozycją ale jakos nie działa $(this).append('<div id="helper_tag_name" style="display: none; background:'+random_color+'; content:\''+ tag_name +'\'; position: absolute; top:'+el_position.top+'px; left:'+el_position.left+'px; color:white; font-size:9px; font-family: monospace; z-index:2222;">'+tag_name+'.'+class_name+'</div>');
                         $(this).append('<div id="helper_tag_name" style="display: none; background:'+random_color+'; content:\''+ tag_name +'\'; position: absolute; color:white; font-size:9px; font-family: monospace; z-index:2222;">'+tag_name+'.'+class_name+'</div>');
                         $(this).hover(function(){
                               
                                $(this).children('#helper_tag_name').css("display", "block");
                    
                                }, function(){
                                $(this).children('#helper_tag_name').css("display", "none");
                            });
                    }
                });
            } else {
                $('body *').each(function() {
                    $(this).remove('#helper_tag_name');
                    if ($(this).css('-webkit-box-shadow') !== 'none') {
                        $(this).css('-webkit-box-shadow', '');
                    }
                });
            }
        };
        obrysuj();

//    dodanie nazw klas
     // div{
//   position:relative;
// }
// div::after {
//     position: absolute;
//     background: black;
//     color: #fff;
//     top: 0;
//     left: 0;
//     content: 'cos';
// }

        //orbysowuje randomowym kolorem i trzyma w ciastku
        $('input#colors').change(function() {
            obrysuj();
            if ($('input#colors').is(':checked')) {

                setCookie('obrysuj', 'tak', 365);
            } else {
                setCookie('obrysuj', 'nie', 365);

            }

        });

    }
    // adds ios class to html tag
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
        $('html').addClass('ios');
    }
    //adds touch-screen to html if device
    if (Modernizr.touch) {
        $('html').addClass('touch-screen');
    } else {
        $('html').addClass('no-touch-screen');
    }
}); //end ready


//
//        #     ###    ###           ###   ## ##  ####    ###   ##     ##     ####
//       ###   ## ##  ## ##         ## ##  ## ##  ## ##  ## ##  ##     ##     ## ##
//      ## ##  ## ##  ##            ##     ####   ## ##  ## ##  ##     ##     ## ##
//      ## ##  ## ##   ###           ###   ###    ####   ## ##  ##     ##     ####
//      #####  ## ##     ##            ##  ####   ###    ## ##  ##     ##     ###
//      ## ##  ## ##  ## ##         ## ##  ## ##  ####   ## ##  ##     ##     ####
//      ## ##   ###    ###           ###   ## ##  ## ##   ###   #####  #####  ## ##
//
//
        AOS.init();

         skrollr.init({          
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
        });

//
//        #    #  ##  ####   #   #    #     ###     ###  #####
//       ###   ## ##   ##    ## ##   ###   ## ##     ##  ##
//      ## ##  #####   ##    #####  ## ##  ##        ##  ##
//      ## ##  #####   ##    #####  ## ##  ##        ##  ####
//      #####  #####   ##    #####  #####  ##     ## ##  ##
//      ## ##  ## ##   ##    ## ##  ## ##  ## ##  ## ##  ##
//      ## ##  ##  #  ####   ## ##  ## ##   ###    ###   #####
//
//

$(function () {
  

 
  $("*[class*='animacja-']").addClass('niewidoczny'); 
    
    
  inView('.czy-widoczny')
    .on('enter', function(el){
     console.log("enter");
    $(el).addClass('widoczny').removeClass('niewidoczny');
  })
    .on('exit', function(el){
       console.log("leave");
      $(el).addClass('niewidoczny').removeClass('widoczny');
    });
    

  split_class = function(el){
    classes = $(el).attr('class').split(' ');
    for (var i = 0; i < classes.length; i++) {
      var matches = /.*animacja\-(.+)/.exec(classes[i]);
      console.log(matches);
      if (matches != null) {
        var fxclass = matches[1];
          console.log(fxclass);
          return matches;
      }
    }
  }
  
  split_class($("*[class*='animacja-']"))
 
});


$(document).ready(function(){
  inView('.animacja1')
    .on('enter', function(el){
     console.log("enteranimacja");
              var src = $(el).attr("src");
          $(el).attr("src", src.replace(/\.png$/i, ".gif"));

  })
    .on('exit', function(el){
       console.log("leaveanimacja");
     var src = $(el).attr("src");
          $(el).attr("src", src.replace(/\.gif$/i, ".png"));
      
    }); 
});






