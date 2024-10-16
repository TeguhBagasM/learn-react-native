import React from "react";
import { StyleSheet, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const galleryImages = [
  require("@/assets/images/idol/taylor.jpg"),
  require("@/assets/images/idol/ariana.jpg"),
  require("@/assets/images/idol/gracie.jpg"),
  require("@/assets/images/idol/olivia.jpg"),
  require("@/assets/images/idol/billie.jpg"),
  require("@/assets/images/idol/bruno.jpg"),
];

export default function GalleryScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.header}>
        <ThemedText style={styles.headerText}>My Gallery</ThemedText>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <TouchableOpacity key={index} style={styles.imageContainer}>
              <Image source={image} style={styles.galleryImage} />
            </TouchableOpacity>
          ))}
        </View>
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
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 10,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
  },
});
