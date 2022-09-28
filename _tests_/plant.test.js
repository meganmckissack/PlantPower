import { storeState, stateControl, changeState, feed} from '../src/plant.js'

describe('storeState', () => {
  
  test('should return an anonymous function when no arguments are passed into it, that function will have access to the variable currentState from its parent function', () => {
    let test = storeState();
    expect(test).toEqual(expect.any(Function));
  });

  
});