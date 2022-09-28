import { blueFood, feed, hydrate, superWater, stateControl, stateControl2} from '../src/plant.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// //UI Logic

// //JQUERY UI Logic
$(document).ready(function() {
  console.log("hello");

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#superFeed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#superWater').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  
  // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
    console.log(`Soil: ${currentState.soil}`);
  });

  //PLANT 2:
  $('#feed2').click(function() {
    const newState = stateControl2(feed);
    $('#soil-value-2').text(`Soil: ${newState.soil}`);
  });

  $('#superFeed2').click(function() {
    const newState = stateControl2(blueFood);
    $('#soil-value-2').text(`Soil: ${newState.soil}`);
  });

  $('#water2').click(function() {
    const newState = stateControl2(hydrate);
    $('#water-value-2').text(`Water: ${newState.water}`);
  });

  $('#superWater2').click(function() {
    const newState = stateControl2(superWater);
    $('#water-value-2').text(`Water: ${newState.water}`);
  });

  $('#show-state2').click(function() {
    const currentState = stateControl2();
    $('#soil-value-2').text(`Soil: ${currentState.soil}`);
    $('#water-value-2').text(`Soil: ${currentState.water}`);
    console.log(`Soil: ${currentState.soil}, Water: ${currentState.water}`);
  });

});