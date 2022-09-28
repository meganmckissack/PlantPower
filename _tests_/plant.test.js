import { storeState, stateControl, changeState, blueFood} from '../src/plant.js'

describe('storeState', () => {
  
  test('should return an anonymous function when no arguments are passed into it, that function will have access to the variable currentState from its parent function', () => {
    let test = storeState();
    expect(test).toEqual(expect.any(Function));
  });

  test('should return an object with soil property at 5 when the blueFood function is passed into it', () => {
    let test = storeState();
    let plantTest = test(blueFood);
    expect(plantTest).toEqual({ soil : 5 });
  });
  
});