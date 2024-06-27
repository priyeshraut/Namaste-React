import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // Vanila (older) Redux => DON'T MUTATE STATE AND RETURNING WAS MANDATORY
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit uses immer behind the scense
      // We have to mutate the state
      // mutating(modifying) the state here
      state.items.push(action.payload);


      // {redux uses something known as immer library to do this - (state.items.push(action.payload);). 

      // So, basically immer library is kond of like finding the difference b/w the origional state the mutated state, and then gives you back the new state which is an immutable state, a new copy of the state. whatever  I was writing upper logic all that logic has been abstracted we don't have to take care of it and immer takes care of it}
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(state)
      console.log(current(state))


      // RTK = either mutate  the exiting state or return a new state

      // mutate the exiting state
      state.items.length = 0;

      // return a new state
      // return { items: [] };


    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


// this cartSlice is a function and this function takes a configuration to create a slice it takes a configuration the first thing that we have to give it is the name of the slice let's give it a name which is known as "cart" the first configuratn that it takes is cart now the second configuration it takes is inital state what basically initially that cart slice wil be basically what will be the cart items and this item is an empty array and we have somthing known as reducers we will create action and reducer over here
// what is an action you can add an item you can remove a item you can clear the cart so these things are actions. It is kind of like small api you can think of it is apis to communicate with redux store

// reducer functin gets two parameter a state and an action and it will modify our state based on action.