import { Switch, View, Text } from "react-native";

export default function Alarm() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={"#f4f3f4"}
        value={true}
      />
      <Text>Demo Text1</Text>
    </View>
  );
}
