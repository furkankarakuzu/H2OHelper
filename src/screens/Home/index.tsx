import { View } from "react-native";
import ProgressBar from "../../components/progress-bar";
import HeaderProfile from "../../components/header-profile";
import AlarmList from "../../components/alarm-list/index";
import { ScrollView } from "react-native";
export default function Home() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={{ padding: 16 }}>
          <HeaderProfile />
          <ProgressBar />
        </View>
        <View style={{ marginTop: "auto" }}>
          <AlarmList />
        </View>
      </View>
    </ScrollView>
  );
}
