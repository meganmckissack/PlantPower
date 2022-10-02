// This function stores our state.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// export const stateControl = storeState();
// export const stateControl2 = storeState();
// export const plantsState = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);
export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

//stores list of plants as they are created

export const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState];
    return newState;
  }
}

export const changeListState = (plant) => {
  return (state) => ([
    ...state,
    plant
  ])
}



