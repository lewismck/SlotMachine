/*
 * Pick a selection of random elements from an ArrayList (parameter 1: array)
 * The number of elements selected is specified in parameter 2: rowSize
 * Returns the array list generated containing rowSize randomly selected alements from array
 */
function generateRow(array, rowSize){
  row = [];

  for(i=0; i < rowSize; i++){
    var col = array[Math.floor(Math.random() * array.length)];
    row[i]= col;
  }
  console.log(row);
  return row;
}

/*
 * Check an array list to see if all the elements are identical
 * If all elements are the same return true else false
 */
function checkRow(array){
  for(i=1; i < array.length; i++){
    if(array[i] != array[0]){ //does any element not match the first element?
      return false; //if so return false
    }
  }
  return true; //if all elements have been checked return true
}

/*
 * Specifies values for the elements: $, *, % and ^
 * $ and % are wins * and ^ are losses
 * returns a string stating whether the element counts as a win or a loss
 * To be called when all elements in a row match to check the win value
 */
function checkValue(col){
  switch(col){
    case '$':
      return "Winner!";
      break;
    case '%':
      return "Winner!";
      break;
    case '*':
      return "Wamp, Wamp Waa!";
      break;
    case '^':
      return "Close, but no cigar";
      break;
    default:
      return "Unknown column value.";
      break;
    }
}

/*
 * Simulate the number of spins specified in parameter 1: numSpins. Return the number of wins
 * Simulate spins using generateRow(['$', '*', '%', '^'], 3)
 * Check the result using checkRow(row)
 * Return the number of wins (also logs to console the win loss rate)
 */
function simulateSpins(numSpins){
  var wins = 0;
  var losses = 0;
  var i = 0;

  for(i; i < numSpins; i++){
    row = generateRow(['$', '*', '%', '^'], 3);
    result = checkRow(row);
    console.log(i);

    if(result == true){ //if all are the same check to see if it's a winning row
      if(checkValue(row[0]) == "Winner!"){ //if row is a winner add to wins
        wins++;
      }
      else{
        losses++; //if row is a losing 3 col match add to losses
      }
    }
    else{
      losses++; //if columns are disimilar add to losses
    }
  }
  console.log("wins: " + wins + " losses: " + losses);
  return wins;
}

/*
 *Generate a row with 3 columns and return the result.
 */
function spin(){
  row = generateRow(['$', '*', '%', '^'], 3);
  result = checkRow(row);
  //print the result to #sm div
  $("#sm").hide().html(row[0] + " " + row[1] + " " + row[2] + "<br>").fadeIn(200);

  if(result == true){ //if all elements are identical check to see the winning string
      winningString = checkValue(row[0]);
      $("#sm").append(winningString);//print the winning string.
  }
  else{ //if not all elements are the same then return "Loser"
    console.log("Loser");
    $("#sm").append("Loser");
  }
}
