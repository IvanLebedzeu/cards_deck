$(document).ready(function() {
  $("#formOne").submit(function(){
  event.preventDefault();
  var suits = ["clubs", "spades", "diamonds", "hearts"];
  var ranks = ["ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var resultArray = [];
  suits.forEach(function(suit){
    ranks.forEach(function(rank) {
      resultArray.push(rank + " of " + suit + "<br>");
    })
   
  });
  resultArray.forEach(function(result) {
    $(".deck").append("<li>" + result);

  })
})
})