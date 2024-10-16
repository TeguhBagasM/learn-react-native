import React from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.header}>
        <Image source={require("@/assets/images/teguh.jpg")} style={styles.profileLogo} />
        <ThemedText style={styles.headerText}>About Me</ThemedText>
      </LinearGradient>

      <View style={styles.content}>
        <ThemedView style={[styles.card, styles.profileCard]}>
          <ThemedText style={styles.cardTitle}>My Profile</ThemedText>
          <ThemedText style={styles.cardText}>Nama: Teguh Bagas M</ThemedText>
          <ThemedText style={styles.cardText}>NIM: 22110397</ThemedText>
          <ThemedText style={styles.cardText}>Kelas: J2022</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.card, styles.stepsCard]}>
          <ThemedText style={styles.cardTitle}>About Me</ThemedText>
          <ThemedText style={styles.cardText}>
            I'm a dedicated Informatics Engineering student with a strong passion for crafting
            innovative web applications. My expertise lies in leveraging popular frameworks and
            libraries like Laravel, Express.js, React JS, and Tailwind CSS to deliver efficient and
            visually appealing solutions. I'm committed to meeting project deadlines and continuously
            expanding my skillset through targeted training and certifications.
          </ThemedText>
        </ThemedView>
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  profileLogo: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  content: {
    padding: 20,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  profileCard: {
    backgroundColor: "#e8f4f8",
    borderLeftWidth: 5,
    borderLeftColor: "#4c669f",
  },
  stepsCard: {
    backgroundColor: "#fff0f5",
    borderLeftWidth: 5,
    borderLeftColor: "#ff69b4",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});
