import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Context } from "../context/IotContext";
import iotDataApi from "../api/iotData";

const Loader = (props) => {
  const [loading, setLoading] = useState(true);

  const { state, getIotData } = useContext(Context);

  useEffect(() => {
    getIotData.data;
    // iotDataApi();
    // setTimeout(() => {
    setLoading(false);
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Test Laoder</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>Loader is hidden</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    borderWidth: 5,
    borderColor: "black",
    height: 200,
    backgroundColor: "white",
  },
  SubView: {
    borderWidth: 1,
    borderColor: "red",
    // margin: 20,
    // flex: 4,
    flex: 1,
  },
  container: { flex: 1, justifyContent: "center", backgroundColor: "#ffffff" },
});

export default Loader;
