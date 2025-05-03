import {
  CLEARCOMPLETED,
  ALLCOMPLETED,
  DELETED,
  TOGGLED,
  ADDED,
  COLORSELECTED,
} from "./actionTypes";

export const added = (text) => {
  return {
    type: ADDED,
    payload: text,
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
