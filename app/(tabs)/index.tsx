import React from "react";
import { StyleSheet, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.header}>
        <Image source={require("@/assets/images/teguh.jpg")} style={styles.profileImage} />
        <ThemedText style={styles.headerText}>Welcome, Teguh!</ThemedText>
      </LinearGradient>

      <View style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardTitle}>Quick Stats</ThemedText>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="code-outline" size={24} color="#4c669f" />
              <ThemedText style={styles.statNumber}>10+</ThemedText>
              <ThemedText style={styles.statLabel}>Projects</ThemedText>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="star-outline" size={24} color="#4c669f" />
              <ThemedText style={styles.statNumber}>25+</ThemedText>
              <ThemedText style={styles.statLabel}>Certificates</ThemedText>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="git-network-outline" size={24} color="#4c669f" />
              <ThemedText style={styles.statNumber}>30+</ThemedText>
              <ThemedText style={styles.statLabel}>Repositories</ThemedText>
            </View>
          </View>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardTitle}>Recent Activities</ThemedText>
          {["Updated portfolio", "Completed React Native course", "Started new project"].map(
            (activity, index) => (
              <View key={index} style={styles.activityItem}>
                <Ionicons name="checkmark-circle-outline" size={24} color="#32cd32" />
                <ThemedText style={styles.activityText}>{activity}</ThemedText>
              </View>
            )
          )}
        </ThemedView>

        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>View Full Profile</ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4c669f",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#4c669f",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
