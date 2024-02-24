import { View, Text } from "react-native";
import Alarm from "./alarm";

export default function AlarmList() {
  return (
    <View style={{ flexDirection: "column", gap: 4 }}>
      <Alarm />
    </View>
  );
}
