import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressBar() {
  return (
    <View style={styles.progressSection}>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#468091",
            textAlign: "center",
          }}
        >
          Today's Goal
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#468091",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Drink 4000ml
        </Text>
      </View>
      <View>
        <AnimatedCircularProgress
          size={180}
          width={12}
          backgroundWidth={24}
          style={{
            shadowColor: "#EBFAFF",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}
          fill={70}
          tintColor="#00e0ff"
          backgroundColor="#EBFAFF"
        >
          {(fill) => (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text>{70}%</Text>
              <Text>1200ml more</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 24,
  },
});
