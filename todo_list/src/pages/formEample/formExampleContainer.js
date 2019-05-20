import { compose } from "redux";
import { connect } from "react-redux";
import FormExample from "./formExample";
import { reduxForm } from "redux-form";
import { FormExampleDuck, fetchEventData } from "./FormExampleStore";
const { getPassengers, getEventTimes } = FormExampleDuck.selectors;

const mapStateToProps = state => {
  return {
    passengers: getPassengers(state),
    eventTimes: getEventTimes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEventData: () => {
      fetchEventData(dispatch);
    }
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default reduxForm({
  form: "form-example"
})(enhance(FormExample));
