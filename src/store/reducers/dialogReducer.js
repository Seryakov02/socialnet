import { ACCEPT_DIALOG } from "../types";

const defaultState = {
  dialogs: [
    { id: 1, name: "Grace" },
    { id: 2, name: "Grace" },
    { id: 3, name: "Evie" },
    { id: 4, name: "Grace" }
  ],

  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I’m good, and you?" },
    { id: 4, message: "I’m fine" }
  ]
};

const dialogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACCEPT_DIALOG: {
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: Math.random(), message: action.newMessageBody }
        ]
      };
    }
    default:
      return state;
  }
};

export default dialogReducer;
