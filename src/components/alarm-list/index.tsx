import { StyleSheet, View, Text } from "react-native";
import Alarm from "./alarm";

export default function AlarmList() {
  return (
    <View style={styles.alarmListSection}>
      <Text style={{ fontWeight: "bold", marginBottom: 16, color: "#468091" }}>
        Next Schedule
      </Text>
      <View style={{ flexDirection: "column", gap: 4, marginBottom: 32 }}>
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alarmListSection: {
    backgroundColor: "#ECF8FE",
    padding: 24,
    borderRadius: 32,
  },
});
