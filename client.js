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

  // Allowing orderButton to show the current person's order
  // dynamic specifier to select only the button, but attach to the container
  // the container is static and doesn't get blown away (really important for selectors)
  $('.container').on('click', '.orderButton', function() {
    console.log('order button was clicked!');
    $(this).remove();
    $('.container').append('<p>' + (currentPersonIndex + 1) + '/' + peopleArray.length + '</p>');
  });

});

// This changes the shoutout displayed on the screen
function setCurrentShoutOut (currentIndex) {
  var currentPerson = peopleArray[currentIndex]; // grabs currePerson Object from the array
  console.log(currentPerson);
  // fades out the current container
  $('.container').fadeOut(1000, function() { // this callback function runs after fade out is complete
    console.log('fade out complete');
    // creating new container contents (paragraph with shoutout and the show order button)
    $shoutLine = $('<p></p>');
    $shoutLine.append(currentPerson.name);
    $shoutLine.append(': ');
    $shoutLine.append(currentPerson.shoutout);
    $('.container').html($shoutLine);
    $('.container').append('<button class="orderButton">Click to show order</button>');

    // Fade the container back in
    $('.container').fadeIn(1000, function() {
      // callback logs fade in complete when finished
      console.log('fade in complete');
    });
  });
}



















// placeholder
