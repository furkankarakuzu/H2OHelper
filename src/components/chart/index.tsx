import { StyleSheet, View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import CustomSwitch from "../custom-switch";
import Swiper from "react-native-swiper";

export const Chart = () => {
  const barData = [
    {
      value: 200,
      label: "01",
      frontColor: "#4ABFF4",
      sideColor: "#23A7F3",
      topColor: "#92e6f6",
    },
    {
      value: 400,
      label: "02",
      frontColor: "#79C3DB",
      sideColor: "#68BCD7",
      topColor: "#9FD4E5",
    },
    {
      value: 195,
      label: "03",
      frontColor: "#28B2B3",
      sideColor: "#0FAAAB",
      topColor: "#66C9C9",
    },
    {
      value: 450,
      label: "04",
      frontColor: "#4ADDBA",
      sideColor: "#36D9B2",
      topColor: "#7DE7CE",
    },
    {
      value: 320,
      label: "05",
      frontColor: "#91E3E3",
      sideColor: "#85E0E0",
      topColor: "#B0EAEB",
    },
    {
      value: 250,
      label: "06",
      frontColor: "#91E3E3",
      sideColor: "#85E0E0",
      topColor: "#B0EAEB",
    },
    {
      value: 380,
      label: "07",
      frontColor: "#91E3E3",
      sideColor: "#85E0E0",
      topColor: "#B0EAEB",
    },
  ];
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomSwitch
        selectionMode={1}
        roundCorner={true}
        option1={"Week"}
        option2={"Month"}
        onSelectSwitch={() => {}}
        selectionColor={"#34A3DC"}
      />
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        showsPagination={false}
      >
        <View style={styles.slide}>
          <Text style={styles.text}>1 Mar 2024 to 7 Mar 2024</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>8 Mar 2024 to 15 Mar 2024</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>16 Mar 2024 to 23 Mar 2024</Text>
        </View>
      </Swiper>
      <View style={{ width: "100%" }}>
        <BarChart
          data={barData}
          barWidth={28}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          yAxisThickness={0}
          xAxisType={"dashed"}
          xAxisColor={"gray"}
          yAxisTextStyle={{ color: "gray" }}
          maxValue={500}
          noOfSections={6}
          labelWidth={40}
          xAxisLabelTextStyle={{ color: "gray", textAlign: "center" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { height: 86 },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    marginTop: 12,
  },
});
