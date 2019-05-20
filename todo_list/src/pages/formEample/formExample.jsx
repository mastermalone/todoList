import React, { Component } from "react";
import Checkbox from "../../components/checkBox/CheckBox";

class FormExample extends Component {
  componentDidMount() {
    const { fetchEventData, passengers, eventTimes } = this.props;
    console.log("FormExample mounted", passengers, eventTimes);
    fetchEventData();
  }

  render() {
    console.log("Form Example Props", this.props);
    return (
      <form>
        <Checkbox />
      </form>
    );
  }
}

export default FormExample;
