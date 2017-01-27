$diceArray = [
  {
    img: 'img/diceImg1.png'
  },
  {
    img: 'img/diceImg2.png'
  },
  {
    img: 'img/diceImg3.png'
  },
  {
    img: 'img/diceImg4.png'
  },
  {
    img: 'img/diceImg5.png'
  },
  {
    img: 'img/diceImg6.png'
  }
]
// var $diceRando = $diceArray[Math.floor(Math.random()*($diceArray.length))].img;

$(document).ready(function(){
  var score = 0;

  var randomValue = function() {
    return $diceArray[Math.floor(Math.random()*($diceArray.length))].img;
  }

  var $checkP1d1 = parseInt($('#diceP1-1').attr('src')[11]);
  var $checkP1d2 = parseInt($('#diceP1-2').attr('src')[11])
  var $checkP1d3 = parseInt($('#diceP1-3').attr('src')[11])
  var $checkP2d1 = parseInt($('#diceP2-1').attr('src')[11])
  var $checkP2d2 = parseInt($('#diceP2-2').attr('src')[11])
  var $checkP2d3 = parseInt($('#diceP2-3').attr('src')[11])

  var instaLose = function(){
    var $diceRoll = [$checkP1d1, $checkP1d2, $checkP1d3];
    $diceRoll.sort(function (a, b) {
      return a-b
    }); if (diceRoll[0]===1 && diceRoll[1]===2 && diceRoll[2]===3){
      alert("you lose");
    }
  }
  var $P1dubs = function(){
    if ($checkP1d1 === $checkP1d2 || $checkP1d1 === $checkP1d3 || $checkP1d2 === $checkP1d3){
      if ($checkP1d1 === 1 && $checkP1d2 === 1 || $checkP1d1 === 1 && $checkP1d13 === 1 || $checkP1d2 === 1 && $checkP1d3 === 1) {
        $("P1score")=0;
        alert("you lose");
      } else {
        score=score+5;
      }
    }
  }
  var $P1trips = function(){
    if ($checkP1d1 === $checkP1d2 && $checkP1d2 === $checkP1d3) {
      if ($checkP1d1 === 1) {
        // snake eyes
      } else {
        score=score+10;
      }
    }
  }
  var $P1straight =function(){

  }

  $("#rollBtn").on("click", function(){
    $(".dice").addClass("roll");

    $("#diceP1-1").attr("src", randomValue());
    $("#diceP1-2").attr("src", randomValue());
    $("#diceP1-3").attr("src", randomValue());

    $("#diceP2-1").attr("src", randomValue());
    $("#diceP2-2").attr("src", randomValue());
    $("#diceP2-3").attr("src", randomValue());

    if ($P1dubs > 1){
      $P1dubs();
    }

    $(".dice").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      $(".dice").removeClass("roll");
    });

  });

});
