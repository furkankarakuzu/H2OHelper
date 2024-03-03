import { View } from "react-native";
import ProgressBar from "../../components/progress-bar";
import { Chart } from "../../components/chart";
import AlarmList from "../../components/alarm-list/index";
import { ScrollView } from "react-native";
export default function Stats() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={{ padding: 16 }}>
          <Chart />
        </View>
        <View style={{ marginTop: "auto" }}>
          <AlarmList isEditable={false} />
        </View>
      </View>
    </ScrollView>
  );
}
