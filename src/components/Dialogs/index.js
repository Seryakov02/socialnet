import React from "react";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";

import DialogItem from "./DialogItem";
import Message from "../Message";
import { Textarea, styleBtn } from "../../common/FormsControls";
import { required, maxLengthCreator } from "../../utils/validate";

const maxLength = maxLengthCreator(50);

const Dialogs = props => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map(message => (
    <Message text={message.message} key={message.id} />
  ));

  let addNewMessage = values => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>{dialogsElements}</div>
        <div style={{ marginLeft: "30px" }}>{messagesElements}</div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
        validate={[required, maxLength]}
        style={{ padding: "5px" }}
      />
      <button style={styleBtn}>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
