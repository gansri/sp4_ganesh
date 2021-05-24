import * as actionType from "./appActionTypes";

const initialState = {
  myCounter: 0,
  myText: "starting value",
  mySku: "",
  myPackage: ""
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DECREMENT_COUNTER:
      return { ...state, myCounter: state.myCounter - 1 };
    case actionType.INCREMENT_COUNTER:
      return { ...state, myCounter: state.myCounter + 1 };
    case actionType.SET_TEXT:
      return { ...state, myText: action.payload };
    case actionType.SET_ORDERID:
      return { ...state, myOrderid: action.payload };  
    case actionType.SET_SKU:
      return { ...state, mySku: action.payload };  
    case actionType.SET_PACKAGE:
      return { ...state, myPackage: action.payload };        
    default:
      return state;
  }
};

export { appReducer };
