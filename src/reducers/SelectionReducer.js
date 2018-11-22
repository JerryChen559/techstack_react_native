// action creator
export const selectLibrary = libraryId => {
  return {
    type: "select_library",
    payload: libraryId
  };
};

const selectionReducer = (state = null, action) => {
  console.log("SELECTION REDUCER HIT: Action ->", action);

  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
};

export default selectionReducer;
