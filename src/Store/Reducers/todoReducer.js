const initialState = {
  par: "text-decoration-none",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "COMPLETED_TODO":
      return state.filter((todo) =>
        todo.id === action.payload ? (par = "text-decoration-underline") : ""
      );
    default:
      return state;
  }
}

export default todoReducer;
