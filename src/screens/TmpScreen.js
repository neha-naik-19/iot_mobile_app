import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const TmpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.MainView}>
        <View style={styles.SubView}></View>
        <View style={styles.SubView}></View>
        <View style={styles.SubView}></View>
        <View style={styles.SubView}></View>
      </View>
    </SafeAreaView>
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
});

export default TmpScreen;
