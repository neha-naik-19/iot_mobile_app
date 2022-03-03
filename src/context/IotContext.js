import createDataContext from "./createDataContext";
import iotDataApi from "../api/iotData";
import { Alert } from "react-native";
import { useState } from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "PULL_IOT_DATA":
      // return action.payload;
      return { ...state, data: action.payload, load: action.loading };
    default:
      return state;
  }
};

const getIotData = (dispatch) => {
  const [loading, setLoading] = useState(true);
  return async () => {
    try {
      setLoading(true);
      const configurationObject = {
        method: "get",
        url: "http://10.1.19.25:5000/energygrid1?where={%22Device_ID%22:%22D250AC01%22}&max_results=1440",
      };

      const res = await axios(configurationObject);
      dispatch({
        type: "PULL_IOT_DATA",
        payload: { data: res.data, load: setLoading(false) },
      });
    } catch (e) {
      //   Alert.alert("test", "e.response.status");
      console.log(e);
      dispatch({
        type: "PULL_IOT_DATA",
        payload: { data: e.data, load: setLoading(false) },
      });
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getIotData },
  []
);
