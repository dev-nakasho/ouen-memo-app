export const initialState = {
  memoId: 0,
  title: "",
  text: "",
};

export const memoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload.title };
    case "UPDATE_TEXT":
      return { ...state, text: action.payload.text };
    case "UPDATE_MEMO_DATA":
      return { ...action.payload };
    case "CLEAR_MEMO_DATA":
      return initialState;
    default:
      return initialState;
  }
};
