import { StyleSheet, View, Text, Image } from "react-native";

export default function HeaderProfile() {
  return (
    <View style={styles.profileSection}>
      <Image
        source={require("../../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <View>
        <Text style={{ color: "#BEBEBE", fontWeight: "bold" }}>
          Good Morning
        </Text>
        <Text style={{ fontWeight: "bold" }}>Furkan Karakuzu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
});
