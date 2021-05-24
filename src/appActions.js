import * as actionType from "./appActionTypes";

export const decrementCounter = () => ({
  type: actionType.DECREMENT_COUNTER
});

export const incrementCounter = () => ({
  type: actionType.INCREMENT_COUNTER
});

export const setText = data => ({
  type: actionType.SET_TEXT,
  payload: data
});

export const setOrderid = data => ({
  type: actionType.SET_ORDERID,
  payload: data
});

export const setSku = data => ({
  type: actionType.SET_SKU,
  payload: data
});

export const setPackage = data => ({
  type: actionType.SET_PACKAGE,
  payload: data
});

