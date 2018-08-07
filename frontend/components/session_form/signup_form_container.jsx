import { connect } from 'react-redux';
import SessionForm from './session_form';
import { processForm } from ;

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'signup',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (ownProps.user)=> dispatch(signup(ownProps.user)),
  }
}
