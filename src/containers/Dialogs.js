import { connect } from "react-redux";

import Dialogs from "../components/Dialogs";
import { addMessage } from "../store/actions/dialogActions";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: newMessageBody => {
      dispatch(addMessage(newMessageBody));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
