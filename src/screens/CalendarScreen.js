import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CalendarHeatmap from "react-native-calendar-heatmap";

const CalendarScreen = () => {
  return (
    <View>
      <CalendarHeatmap
        endDate={new Date("2022-01-31")}
        numDays={31}
        values={[
          { date: "2022-01-01" },
          { date: "2022-01-02" },
          { date: "2022-01-03" },
          { date: "2022-01-04" },
          { date: "2022-01-05" },
          { date: "2022-01-06" },
          { date: "2022-01-07" },
          { date: "2022-01-08" },
          { date: "2022-01-09" },
          { date: "2022-01-10" },
          { date: "2022-01-11" },
          { date: "2022-01-12" },
          { date: "2022-01-13" },
          { date: "2022-01-14" },
          { date: "2022-01-15" },
          { date: "2022-01-16" },
          { date: "2022-01-17" },
          { date: "2022-01-18" },
          { date: "2022-01-19" },
          { date: "2022-01-20" },
          { date: "2022-01-22" },
          { date: "2022-01-30" },
          // ...and so on
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CalendarScreen;
