import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Feather";
export default function Profile() {
  const profileDetails = [
    { label: "Gender", value: "Male" },
    { label: "Weight", value: "70 Kg" },
    { label: "Height", value: "162 cm" },
    { label: "Wake-up Time", value: "06:00 am" },
    { label: "Bed Time", value: "10:30 pm" },
    { label: "Goal", value: "4000 ml" },
  ];
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: "100%", padding: 16 }}>
        <View style={{ padding: 16, alignItems: "flex-end" }}>
          <Icon name="settings" size={20} color={"#468091"} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            gap: 6,
          }}
        >
          <Image
            source={require("../../assets/profile.jpg")}
            style={{ width: 160, height: 160, borderRadius: 100 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 8 }}>
            Furkan Karakuzu
          </Text>
          <Text style={{ color: "#BEBEBE", fontWeight: "bold" }}>
            furkannkarakuzu@hotmail.com
          </Text>
        </View>
        <View style={{ marginTop: 48 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#468091",
            }}
          >
            Profile Details
          </Text>
          <View style={{ marginTop: 8 }}>
            {profileDetails.map((item) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#31CCF4",
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                  }}
                  key={item.label}
                >
                  <Text style={{ color: "#BEBEBE", fontWeight: "600" }}>
                    {item.label}
                  </Text>
                  <Text style={{ color: "#468091", fontWeight: "600" }}>
                    {item.value}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
