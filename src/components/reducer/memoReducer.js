export const initialState = {
  memoData: [
    {
      id: 1,
      title: "本日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-10-31",
    },
    {
      id: 2,
      title: "明日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-01",
    },
    {
      id: 3,
      title: "来週の予定",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-02",
    },
  ],
};

export const memoReducer = (state, action) => {
  switch (action.type) {
    case "INSERT_DATA":
      return {
        memoData: [
          ...state.memoData,
          { ...action.payload, id: state.memoData.length + 1 },
        ],
      };
    case "UPDATE_DATA":
      return {
        memoData: state.memoData.map((item) => {
          return item.id === action.payload.id
            ? {
                ...action.payload,
              }
            : {
                ...item,
              };
        }),
      };
    case "DELETE_DATA":
      return {
        memoData: state.memoData.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return initialState;
  }
};
