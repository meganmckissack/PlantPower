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
  <div class="grow-buttons" id="grow-buttons-${plantNum}">
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
  $(`#grow-buttons-${plantNum}`).on("click", buttonHandler);
}

// function addPlantScripts(num){
//   const newState = 
// }

function buttonHandler(event){
  event.preventDefault();
  const id = event.target.id.replace( /^\D+/g, '');
  console.log(id);
  if (event.target.id.includes("feed")){
    const stateControl = listControl()[id];
    const newState = stateControl(feed);
    console.log(newState);
    console.log(listControl());
    $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
  } else if (event.target.id.includes("Feed")){
    const stateControl = listControl()[id];
    const newState = stateControl(blueFood);
    $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
  } else if (event.target.id.includes("water")){
    const stateControl = listControl()[id];
    const newState = stateControl(hydrate);
    $(`#water-value-${id}`).text(`Water: ${newState.water}`);
  }  else if (event.target.id.includes("Water")){
    const stateControl = listControl()[id];
    const newState = stateControl(superWater);
    $(`#water-value-${id}`).text(`Water: ${newState.water}`);
  }
}

const listControl = storeListState();

// //JQUERY UI Logic
$(document).ready(function() {
  console.log("docReady");

  $('#addPlant').click(function() {
    const stateControl = storeState();
    const addPlant = changeListState(stateControl);
    const newList = listControl(addPlant);
    const plantNumber = newList.length - 1;
    addPlantHtml(plantNumber);
  });
});