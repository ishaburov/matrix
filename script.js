$(window).on('load', function() { // makes sure the whole site is loaded 
  $('.status').fadeOut(); // will first fade out the loading animation 
  $('.preloader').delay(0).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(2000);
  drowMatrix();
});
 
  var setTime = setTimeout(function(){
    $(".matrix__row:nth-child(3n+3)").css({transform: "translateY(6000px)",transition:"180s",transitionTimingFunction: "linear"});
    $(".matrix__row:nth-child(3n+2)").css({transform: "translateY(5400px)",transition:"180s",transitionTimingFunction: "linear"});
    $('.matrix__row:nth-child(3n+1)').css({transform:"translateY(5600px)",transition:"180s",transitionTimingFunction: "linear"});
       $('.matrix__row:nth-child(2n+1)').css({transform:"translateY(5800px)",transition:"180s",transitionTimingFunction: "linear"})
  },2000);
 
setTimeout(function(){
    $(".matrix__row").css({transform: "translateY(-4000px)",transition:"180s"}); 
},180000);

  function drowMatrix(){
    var rowArr = 70;
  var colArr = 200; 
  var timer = 1;
  //var interval = setInterval(function setInt(){
   
  for (var i = 0; i < rowArr; i++) {
      var row = $('<div class="matrix__row">');
      for(var j = 0; j < colArr; j++){
        var col = $('<div class="matrix__column">').text(
          getRandomText()
        );
          row.append(col);
      }
     $(".matrix").append(row);
//$('.matrix__column').css({background:`rgb(${getRandomInt(200,255)}//,${getRandomInt(200,255)},${getRandomInt(200,255)})`,transition:"2//.5s"}); 
  };
 }  
   // if(timer === 20){
    //  timer = 0;
     //  $(".matrix").html('');
   // }
    // timer++;
// },1000)
    
function getRandomText(text = "") {
    var possible="社は現在、世界中の主要な金融センターに事務所をЌえており、お客様には24時間体制で、世界40ヶ所を越える市場での取引にアクセスいただけます。一二三四五六七八九+整天白天他都呆在办公室里。我爸爸对家里人都非常关心。如今的娱乐圈中有不少明星都是北漂，其中最有代表性的就有张国立和孙楠。我每次都把买东西找回来的毛票给孩子";
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
 return text;
  }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

