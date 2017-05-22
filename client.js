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

  $('#previousButton').on('click', function() {
    // Decreasing the index by one to go to the previous person
    currentPersonIndex--;

    // Detect if we have gotten to the beginning of the array
    // go to the end if we have
    if (currentPersonIndex < 0) {
      currentPersonIndex = peopleArray.length - 1;
    }

    // set the current shout out with the new index
    setCurrentShoutOut(currentPersonIndex);
  });

});

function setCurrentShoutOut (currentIndex) {
  var currentPerson = peopleArray[currentIndex];
  console.log(currentPerson);
  $shoutLine = $('<p></p>');
  $shoutLine.append(currentPerson.name);
  $shoutLine.append(': ');
  $shoutLine.append(currentPerson.shoutout);
  $('.container').html($shoutLine);
  $('.container').append('<p>' + (currentIndex + 1) + '/' + peopleArray.length + '</p>');
}



















// placeholder
