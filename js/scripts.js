$(document).ready(function(){
  var resultArray = [];
  $(".result").hide();
  $(".form").submit(function(event){
    event.preventDefault();
    $(".groceries").empty(); // empties class or id
    var userInput = $("#input").val(); //saves form value
    var inputCapitalized = userInput.toUpperCase(); //capitalizes string
    resultArray = inputCapitalized.split(" "); //splits all words into array
    var sortedArray = resultArray.sort(); //sorts array alphabetically

    // an alternative shortened version to the stuff above
    // var sortedArray = $("#input").val().toUpperCase().split(" ").sort();

    $(".result").show(); //shows result div
    for (var i = 0; i < sortedArray.length; i++) {
      $(".groceries").append("<li> " + sortedArray[i] + "</li>"); //appends each item in array to page. ~take extra time to study and fully understand the for loop. this will really help you later.
    }
  });
});
