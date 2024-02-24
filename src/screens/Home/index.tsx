import { View } from "react-native";
import ProgressBar from "../../components/progress-bar";
import HeaderProfile from "../../components/header-profile";
import AlarmList from "../../components/alarm-list/alarm";

export default function Home() {
  return (
    <View style={{ padding: 16 }}>
      <HeaderProfile />
      <ProgressBar />
      <AlarmList />
    </View>
  );
}
