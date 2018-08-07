import { connect } from 'react-redux';
import SessionForm from './session_form';
import { processForm } from ;

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (ownProps.user)=> dispatch(login(ownProps.user)),
  }
}
