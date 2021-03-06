$(document).ready(function(){
  //burger
  $('#nav-icon2').click(function(){
    $(this).toggleClass('open');
    $('nav ul').slideToggle("slow");
  });

  //form submission
  var posturl = "https://hooks.zapier.com/hooks/catch/2011153/r2z1z0/";
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var formdata = $( this ).serialize();
    $.post(posturl, formdata);
    var current = $.featherlight.current();
    current.close();
    $.featherlight($('#thanks'),{});
  });

  //typedjs
  !function(a){"use strict";var b=function(b,c){this.el=a(b),this.options=a.extend({},a.fn.typed.defaults,c),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};b.prototype={constructor:b,init:function(){var a=this;a.timeout=setTimeout(function(){for(var b=0;b<a.strings.length;++b)a.sequence[b]=b;a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},a.startDelay)},build:function(){var b=this;if(this.showCursor===!0&&(this.cursor=a('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var c=this.stringsElement.children();a.each(c,function(c,d){b.strings.push(a(d).html())})}this.init()},typewrite:function(a,b){if(this.stop!==!0){var c=Math.round(70*Math.random())+this.typeSpeed,d=this;d.timeout=setTimeout(function(){var c=0,e=a.substr(b);if("^"===e.charAt(0)){var f=1;/^\^\d+/.test(e)&&(e=/\d+/.exec(e)[0],f+=e.length,c=parseInt(e)),a=a.substring(0,b)+a.substring(b+f)}if("html"===d.contentType){var g=a.substr(b).charAt(0);if("<"===g||"&"===g){var h="",i="";for(i="<"===g?">":";";a.substr(b+1).charAt(0)!==i&&(h+=a.substr(b).charAt(0),b++,!(b+1>a.length)););b++,h+=i}}d.timeout=setTimeout(function(){if(b===a.length){if(d.options.onStringTyped(d.arrayPos),d.arrayPos===d.strings.length-1&&(d.options.callback(),d.curLoop++,d.loop===!1||d.curLoop===d.loopCount))return;d.timeout=setTimeout(function(){d.backspace(a,b)},d.backDelay)}else{0===b&&d.options.preStringTyped(d.arrayPos);var c=a.substr(0,b+1);d.attr?d.el.attr(d.attr,c):d.isInput?d.el.val(c):"html"===d.contentType?d.el.html(c):d.el.text(c),b++,d.typewrite(a,b)}},c)},c)}},backspace:function(a,b){if(this.stop!==!0){var c=Math.round(70*Math.random())+this.backSpeed,d=this;d.timeout=setTimeout(function(){if("html"===d.contentType&&">"===a.substr(b).charAt(0)){for(var c="";"<"!==a.substr(b-1).charAt(0)&&(c-=a.substr(b).charAt(0),b--,!(b<0)););b--,c+="<"}var e=a.substr(0,b);d.attr?d.el.attr(d.attr,e):d.isInput?d.el.val(e):"html"===d.contentType?d.el.html(e):d.el.text(e),b>d.stopNum?(b--,d.backspace(a,b)):b<=d.stopNum&&(d.arrayPos++,d.arrayPos===d.strings.length?(d.arrayPos=0,d.shuffle&&(d.sequence=d.shuffleArray(d.sequence)),d.init()):d.typewrite(d.strings[d.sequence[d.arrayPos]],b))},c)}},shuffleArray:function(a){var b,c,d=a.length;if(d)for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a},reset:function(){var a=this;clearInterval(a.timeout);this.el.attr("id");this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},a.fn.typed=function(c){return this.each(function(){var d=a(this),e=d.data("typed"),f="object"==typeof c&&c;e&&e.reset(),d.data("typed",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

  //initialize
  $(function(){
      //Replace .element with the class or ID of your target text
      $("#typed").typed({
          //Replace placeholder text with your own text
          strings: ["build", "improve", "connect"],
          //change speed
          typeSpeed: 100,
          backDelay: 2000,
          //loop the animation
      loop: true
      });
  });

  //smooth scroll
  $(function($) {
      // The speed of the scroll in milliseconds
      var speed = 1000;
      // Find links that are #anchors and scroll to them
      $('a[href^="#"]')
        .unbind('click.smoothScroll')
        .not('.button')
        .bind('click.smoothScroll', function(event) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, speed);
        });
    });

  //service hover
  $('.service').hover(function(){
    $(this).find("div").addClass('serviceHover');
  }, function(){
    $(this).find("div").removeClass('serviceHover');
  });

  $('.showcase div').hover(function(){
    $(this).find("ul").removeClass('invisible');
  }, function(){
    $(this).find("ul").addClass('invisible');
  });

  //featherlight tab fix
  $.featherlight._callbackChain.beforeOpen = function (event) {
          //http://stackoverflow.com/q/42234790/470749
          //By overriding this function, I can prevent the messing up of tabindex values done by: https://github.com/noelboss/featherlight/blob/master/src/featherlight.js#L559            
      };
      $.featherlight._callbackChain.afterClose = function (event) {
          //See note above in $.featherlight._callbackChain.beforeOpen
      };
      $.featherlight.defaults.afterContent = function (event) {
          var firstInput = $('.featherlight-content #firstname');
          console.log('Considering whether to focus on input depending on window size...', $(window).width(), $(window).height(), firstInput);
          if (Math.min($(window).width(), $(window).height()) > 736) {//if the smallest dimension of the device is larger than iPhone6+
              console.log('yes, focus');
              firstInput.attr('autofocus', true);
          }
      };
  //checkbox styling
  function statecheck(layer) {
      console.log('click');
      var ischecked = layer.childNodes[0].checked;
      
    if(ischecked === true){
      layer.style.color = "#87BB36 !important";
      console.log("checked!");
      } else {
      layer.style.color = "#fff !important";
      console.log("unchecked!");
    };
    
  }
  document.getElementById('buildlabel').addEventListener("click", function(){
      statecheck(this);
  });
  document.getElementById('improvelabel').addEventListener("click", function(){
      statecheck(this);
  });document.getElementById('connectlabel').addEventListener("click", function(){
      statecheck(this);
  });

});

