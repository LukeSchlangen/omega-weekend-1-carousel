var currentPersonIndex = 2;

$(document).ready(function() {
  setCurrentShoutOut(currentPersonIndex);
  $('#nextButton').on('click', function() {
    // Increasing the index by one to go to the next person
    currentPersonIndex++;

    // Detect if we have gotten to the end of the array
    // go back to the beginning if we have
    if (currentPersonIndex >= peopleArray.length) {
      currentPersonIndex = 0;
    }

    // set the current shout out with the new index
    setCurrentShoutOut(currentPersonIndex);
  });
});

function setCurrentShoutOut (currentIndex) {
  console.log(peopleArray[currentIndex]);
}
