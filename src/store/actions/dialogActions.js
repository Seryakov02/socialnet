import { ACCEPT_DIALOG } from "../types";

export const addMessage = newMessageBody => ({
  type: ACCEPT_DIALOG,
  newMessageBody
});
