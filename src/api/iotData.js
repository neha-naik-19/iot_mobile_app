import axios from "axios";
import { Alert } from "react-native";

const iotData = async () => {
  try {
    const configurationObject = {
      method: "get",
      url: "http://10.1.19.25:5000/energygrid1?where={%22Device_ID%22:%22D250AC01%22}&max_results=1440",
    };

    const res = await axios(configurationObject);
    return res.data;
  } catch (e) {
    // console.error("test error 1 : ", e.response.status);
    Alert.alert("test", "e.response.status");
  }
};

export default iotData;
