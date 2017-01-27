// var diceFace = {
//   one:{
//     value:1
//     img:
//   }
//   two:{
//     value:2
//     img:
//   }
//   three:{
//     value:3
//     img:
//   }
//   four:{
//     value:4
//     img:
//   }
//   five:{
//     value:5
//   }
//   six:{
//     value:6
//   }
// }


$diceArray = [
  {
    img: 'http://i.imgur.com/keLQwA1.png'
  },
  {
    img: 'http://i.imgur.com/MxJDafx.png'
  },
  {
    img: 'http://i.imgur.com/K36HBvK.png'
  },
  {
    img: 'http://i.imgur.com/Q0cK4vZ.png'
  },
  {
    img: 'http://i.imgur.com/qQQQCIz.png'
  },
  {
    img: 'http://i.imgur.com/wq0NeTc.png'
  }
]
var $diceRando = $diceArray[Math.floor(Math.random()*($diceArray.length))].img;

$(document).ready(function(){

  $("#rollBtn").on("click", function(){
    $(".dice").addClass("roll");
    $("src").each(function(){
      return $diceRando
    });

    // $("#diceP1-1").attr("src", $diceRando);
    // $("#diceP1-2").attr("src", $diceRando);
    // $("#diceP1-3").attr("src", $diceRando);
    //
    // $("#diceP2-1").attr("src", $diceRando);
    // $("#diceP2-2").attr("src", $diceRando);
    // $("#diceP2-3").attr("src", $diceRando);

    $(".dice").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      $(".dice").removeClass("roll");

    });
  });

});
