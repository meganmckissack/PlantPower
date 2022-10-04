# _NAME_

#### By _**Patty Otero**_

#### _description_

## Github pages site: 
https://patty-rose.github.io/TITLEHERE
## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_
* _Jest_
* _ESLint_
* _Babel_
* _Webpack_

## Description

_description_

## Setup/Installation Requirements

1. Clone this repository to your desktop
2. navigate to the directory in your terminal
3. install with npm: $npm install
4. build: $npm run build
5. Create an API key: 
    1. navigate to website: WEBSITE FOR API KEY HERE
    2. create an account and follow this link to create an API key: LINK HERE
    3. create a file in your root directory called .env
    4. add .env to .gitignore list
    5. list API key in your .env as 
        API_KEY:(your API key here w/o parens)
6. open terminal in your browser with: $npm run start
7. to test: $npm test

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _2022_ _Patty Otero_


//
import { blueFood, addPlant, plantsState, storeState, feed, hydrate, superWater, stateControl, stateControl2, storeListState, changeListState} from '../src/plant.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//UI Logic
// function (plantNum){
//   export const addPlantStateControl = changeState(`plant${plantNum}`)()
// }


function addPlantHtml(plantNum){
  $(".container").append(`<div class="plant-container" id="plant-container-${plantNum}">
  <h1>Plant #${plantNum}:</h1>
  <div class="grow-buttons">
    <button class="btn-success feed" id="feed${plantNum}">Add soil</button>
    <button class="btn-success superFeed" id="superFeed${plantNum}">give your plant the blue food!</button>
    <button class="btn-success water" id="water${plantNum}">water your baby</button>
    <button class="btn-success superWater" id="superWater${plantNum}">Give them a super water!!</button>
    <button class="btn-success show-state" id="show-state${plantNum}">Current Stats</button>
  </div>
  <div class="plant-stats">
    <h2>Stats:</h2>
    <h3><div id="soil-value-${plantNum}">0</div></h3>
    <h3><div id="water-value-${plantNum}">0</div></h3>
  </div>
  <p>--------------------------------------</p>
</div>`);
$('.plant-container').on("click", clickHandler);
}

// function addPlantScripts(num){
//   const newState = 
// }

function clickHandler(event){
  event.preventDefault();
  console.log(event);
  console.log("hello");
}

// //JQUERY UI Logic
$(document).ready(function() {
  console.log("docReady");

  const listControl = storeListState();

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  $('#addPlant').click(function() {
    const stateControl = storeState();
    const addPlant = changeListState(stateControl);
    console.log(listControl);
    const newList = listControl(addPlant);
    const plantNumber = newList.length - 1;
    addPlantHtml(plantNumber);
    // addPlantScripts(plantNumber);
  });

  // $('.plant-container').click(function(event) {
  //   console.log(event);
  // });

  $('.grow-buttons').on("click", clickHandler);
  
  // $('.feed').click(function(event) {
  //   console.log(event);
  //   const newState = stateControl(feed);
  //   $('#soil-value').text(`Soil: ${newState.soil}`);
    
  // });

  // $('#superFeed').click(function() {
  //   const newState = stateControl(blueFood);
  //   $('#soil-value').text(`Soil: ${newState.soil}`);
  // });

  // $('#water').click(function() {
  //   const newState = stateControl(hydrate);
  //   $('#water-value').text(`Water: ${newState.water}`);
  // });

  // $('#superWater').click(function() {
  //   const newState = stateControl(superWater);
  //   $('#water-value').text(`Water: ${newState.water}`);
  // });
  
  // // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
  // $('#show-state').click(function() {
  //   // We just need to call stateControl() without arguments to see our current state.
  //   const currentState = stateControl();
  //   $('#soil-value').text(`Soil: ${currentState.soil}`);
  //   console.log(`Soil: ${currentState.soil}`);
  // });

  // //PLANT 2:
  // $('#feed2').click(function() {
  //   const newState = stateControl2(feed);
  //   $('#soil-value-2').text(`Soil: ${newState.soil}`);
  // });

  // $('#superFeed2').click(function() {
  //   const newState = stateControl2(blueFood);
  //   $('#soil-value-2').text(`Soil: ${newState.soil}`);
  // });

  // $('#water2').click(function() {
  //   const newState = stateControl2(hydrate);
  //   $('#water-value-2').text(`Water: ${newState.water}`);
  // });

  // $('#superWater2').click(function() {
  //   const newState = stateControl2(superWater);
  //   $('#water-value-2').text(`Water: ${newState.water}`);
  // });

  // $('#show-state2').click(function() {
  //   const currentState = stateControl2();
  //   $('#soil-value-2').text(`Soil: ${currentState.soil}`);
  //   $('#water-value-2').text(`Soil: ${currentState.water}`);
  //   console.log(`Soil: ${currentState.soil}, Water: ${currentState.water}`);
  // });

});