import { initialstate } from "./initialstate";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((todo, maxId) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case DELETED:
      return state.filter((todo) => todo.id != action.payload);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED: {
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    }

    default:
      return state;
  }
};

export default reducer;
