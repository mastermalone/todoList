import Duck from "extensible-duck";
import get from "lodash/get";
import axios from "axios";

export const FormExampleDuck = new Duck({
  namespace: "form-example",
  store: "formExampleStore",
  initialState: {},
  types: ["FETCH_EVENT_DATA", "UPDATE_FORM_EXAMPLE", "SET_PASSENGER_DATA"],
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.FETCH_EVENT_DATA:
        return {
          ...state,
          passengers: action.payload.passengers,
          eventTimes: action.payload.eventTimes
        };
      case types.SET_PASSENGER_DATA:
        return {
          ...state,
          passengers: action.payload
        };
      default:
        return state;
    }
  },
  creators: duck => ({
    fetchEventData: payload => ({
      type: duck.types.FETCH_EVENT_DATA,
      payload
    }),
    setPassengerData: payload => ({
      type: duck.types.SET_PASSENGER_DATA,
      payload
    })
  }),
  selectors: {
    getPassengers: state => get(state, "formExampleStore.passengers"),
    getEventTimes: state => get(state, "formExampleStore.eventTimes")
  }
});

export const fetchEventData = dispatch => {
  const url = "http://localhost:3000/eventData/events.json";
  console.log("Getting the fetch");
  axios({
    url: url,
    method: "get"
  })
    .then(response => {
      console.log("Data for events", response.data);
      dispatch(FormExampleDuck.creators.fetchEventData(response.data));
    })
    .catch(err => {
      console.warn("There was an error fetching the event data", err);
    });
};
