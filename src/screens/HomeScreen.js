import React, { useEffect, useState, useRef } from "react";
import { Text, StyleSheet, View, Button, Animated } from "react-native";

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          // fontFamily: "Montserrat",
          fontSize: 12,
          fontWeight: "900",
          marginBottom: 8,
        }}
      >
        {step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: height,
            position: "absolute",
            left: 0,
            top: 0,
            transform: [{ translateX: animatedValue }],
          }}
        />
      </View>
    </>
  );
};

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };

    //iotDataApi();
  }, [index]);

  return (
    <View style={styles.container}>
      {/* <Button title="IOT" onPress={() => iotDataApi()} />
      <Button
        onPress={() => navigation.navigate("Calendar")}
        title="Calendar"
      />
      <Button onPress={() => navigation.navigate("Temp")} title="Temperature" /> */}
      <Progress step={index} steps={10} height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#666",
    padding: 20,
  },
});

export default HomeScreen;
