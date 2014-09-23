$(document).ready(function() {

  function Racer(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
    this.isFocused = function() {
      return Math.floor(Math.random() * 15) < this.focus;
    }
    this.advance = function() {
      if (this.isFocused()) {
        this.position += this.speed;

        $(this.name).css("left", this.position)
        console.log(this.position);
      }
    }
  }

  var blue = new Racer("#blue", 15, 15);
  var green = new Racer("#green", 13, 17);
  var pink = new Racer("#pink", 17, 13);
  var dinohulk = new Racer("#dinohulk", 18, 12);
  var meters = 450;

  $("#raceButton").click(function() {
    if (blue.position < meters && green.position < meters && pink.position < meters && dinohulk.position < meters) {
      blue.advance();
      green.advance();
      pink.advance();
      dinohulk.advance();
    } else {

      var winner;
      if (blue.position >= meters) {
        winner = "the blue polar bear";
      } else if (green.position >= meters) {
          winner = "the green polar bear";
      } else if (pink.position >= meters) {
          winner = "the pink polar bear";
      } else {
          winner = "dinohulk";
      }

      $("#raceButton").html("<b>AND THE WINNER IS:<p>" + winner + "!!!</p></b>")
      $("#announcer").html("<h1>WINNER: " + winner + "!!</h1>")
    }
  })
})