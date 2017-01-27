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
  var $P1score = 0;
  var $P2score = 0;
  var $checkP1d1
  var $checkP1d2
  var $checkP1d3
  var $checkP2d1
  var $checkP2d2
  var $checkP2d3

  var $randomValue = function() {
    return $diceArray[Math.floor(Math.random()*($diceArray.length))].img;
  }

  var $getDiceValues = function() {
    $checkP1d1 = parseInt($('#diceP1-1').attr('src')[11]);
    $checkP1d2 = parseInt($('#diceP1-2').attr('src')[11])
    $checkP1d3 = parseInt($('#diceP1-3').attr('src')[11])
    $checkP2d1 = parseInt($('#diceP2-1').attr('src')[11])
    $checkP2d2 = parseInt($('#diceP2-2').attr('src')[11])
    $checkP2d3 = parseInt($('#diceP2-3').attr('src')[11])
  };


  var $instaLose = function(){
    $getDiceValues();
    var $p1Dice = [
      $checkP1d1,
      $checkP1d2,
      $checkP1d3,
    ]
    // var $diceRoll = [$checkP1d1, $checkP1d2, $checkP1d3];
    // $diceRoll.sort(function (a, b) {
    //   return a-b

    $p1Dice.sort(function (a, b) {
      return a-b
    }); if ($p1Dice[0]===1 && $p1Dice[1]===2 && $p1Dice[2]===3){
      $("#P1score").text('$0');
      alert("you lose");
    }
  }
  var $P1dubs = function(){
    $getDiceValues();
    if ($checkP1d1 === $checkP1d2 || $checkP1d1 === $checkP1d3 || $checkP1d2 === $checkP1d3){
      if ($checkP1d1 === $checkP1d2 && $checkP1d2 === $checkP1d3){

    }
        else if ($checkP1d1 === 1 && $checkP1d2 === 1 || $checkP1d1 === 1 && $checkP1d3 === 1 || $checkP1d2 === 1 && $checkP1d3 === 1) {
        $("#P1score").text('$'+ ($P1score=$P1score-$P1score));
        alert("you lose");
      } else {
        alert("You win: $5")
        $P1score=$P1score+5;
        $("#P1score").text("$" + $P1score);
      }
    }
  }
  var $P1trips = function(){
    $getDiceValues();
    if ($checkP1d1 === $checkP1d2 && $checkP1d2 === $checkP1d3) {
      // if (){}
         if ($checkP1d1 === 1) {
        $("#P1score").text('$' + ($P1score=$P1score-$P1score));
        alert("you lose");
        // snake eyes
      } else {
        alert("You Win: $10")
        $P1score=$P1score+10;
        $("#P1score").text("$"+ $P1score);
      }
    }
  }
  var $P1straight =function(){
    $getDiceValues();
    var $p1Dice = [
      $checkP1d1,
      $checkP1d2,
      $checkP1d3,
    ]
    // var $diceRoll = [$checkP1d1, $checkP1d2, $checkP1d3];
    // $diceRoll.sort(function (a, b) {
    //   return a-b
  $p1Dice.sort(function (a, b) {
      return a-b
    }); if ($p1Dice[0]===2 && $p1Dice[1]===3 && $p1Dice[2]===4){
      alert("You Win: $15");
      $P1score=$P1score+15;
      $("#P1score").text("$"+ $P1score);
    } else if ($p1Dice[0]===3 && $p1Dice[1]===4 && $p1Dice[2]===5){
      alert("You Win: $15");
      $P1score=$P1score+15;
      $("#P1score").text("$"+ $P1score);
    } else if ($p1Dice[0]===4 && $p1Dice[1]===5 && $p1Dice[2]===6){
      alert("You Win: $30");
      $P1score=$P1score+30;
      $("#P1score").text("$"+ $P1score);
    }

  }

  $("#rollBtn").on("click", function(){
    $(".dice").addClass("roll");

    $("#diceP1-1").attr("src", $randomValue());
    $("#diceP1-2").attr("src", $randomValue());
    $("#diceP1-3").attr("src", $randomValue());

    $("#diceP2-1").attr("src", $randomValue());
    $("#diceP2-2").attr("src", $randomValue());
    $("#diceP2-3").attr("src", $randomValue());

    $(".dice").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      $(".dice").removeClass("roll");
    });
    setTimeout($instaLose, 1000);
    setTimeout($P1dubs, 1000);
    setTimeout($P1trips, 1000);
    setTimeout($P1straight, 1000);

  });

});
