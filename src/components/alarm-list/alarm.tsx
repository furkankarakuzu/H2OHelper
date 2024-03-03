import { useState } from "react";
import { Button, Switch, View, Text, TouchableHighlight } from "react-native";
import Icon from "@expo/vector-icons/Feather";

export default function Alarm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 8,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Switch
          trackColor={{ false: "#D8D8D9", true: "#31CCF4" }}
          onChange={() => setIsChecked(!isChecked)}
          thumbColor={"#f4f3f4"}
          value={isChecked}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "auto",
          }}
        >
          <View style={{ display: "flex", gap: 4 }}>
            <Text style={{ color: "#468091", fontWeight: "bold" }}>
              02:00 PM
            </Text>
            <Text style={{ color: "#468091" }}>250ml</Text>
          </View>
        </View>
      </View>
      <View style={{ marginEnd: 16 }}>
        <TouchableHighlight onPress={() => {}}>
          <View>
            <Icon name="more-horizontal" size={20} color={"#31CCF4"} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
