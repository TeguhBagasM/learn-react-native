import React from "react";
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const projects = [
  {
    name: "CSA STMIK-MI",
    image: require("@/assets/images/projects/csa-stmikmi.png"),
    description:
      "CSA (Creative Student Association) adalah organisasi berbasis TI yang terletak di STMIK Mardira Indonesia. Organisasi ini mencakup semua aspek TI, seperti Pemrograman, Multimedia, IoT, dan Pengembangan Game.",
    demoUrl: "https://csa-stmikmi.vercel.app",
    repoUrl: "https://github.com/TeguhBagasM/csa-stmikmi",
  },
  {
    name: "ThievBook",
    image: require("@/assets/images/projects/thievbook.png"),
    description:
      "Thievbook adalah perpustakaan buku online terbaik Anda. Platform kami menyediakan akses ke koleksi buku yang luas dari berbagai genre dan topik, mulai dari bestseller terbaru, sastra klasik, hingga materi pendidikan. Thievbook memiliki sesuatu untuk semua orang.",
    demoUrl: "https://thievbook.vercel.app",
    repoUrl: "https://github.com/TeguhBagasM/thievbook",
  },
  {
    name: "Landing Page E-Commerce",
    image: require("@/assets/images/projects/thievshop.png"),
    description:
      "Thievshop adalah landing page e-commerce modern yang dibuat menggunakan React.js dan Vite, dengan Tailwind CSS untuk styling.",
    demoUrl: "https://thievshop.vercel.app",
    repoUrl: "https://github.com/TeguhBagasM/thievshop",
  },
  {
    name: "Noteverse",
    image: require("@/assets/images/projects/noteverse.png"),
    description:
      "Noteverse adalah aplikasi catatan online yang dibangun dengan Next.js, TypeScript, dan Prisma sebagai ORM, menggunakan PostgreSQL untuk databasenya",
    demoUrl: "https://noteverse-chi.vercel.app",
    repoUrl: "https://github.com/TeguhBagasM/noteverse",
  },
];

export default function MyProjectsScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.header}>
        <ThemedText style={styles.headerText}>My Projects</ThemedText>
      </LinearGradient>

      <View style={styles.content}>
        {projects.map((project, index) => (
          <ThemedView key={index} style={styles.projectCard}>
            <Image source={project.image} style={styles.projectImage} />
            <View style={styles.projectInfo}>
              <ThemedText style={styles.projectName}>{project.name}</ThemedText>
              <ThemedText style={styles.projectDescription}>{project.description}</ThemedText>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => openUrl(project.demoUrl)}>
                  <Ionicons name="play-circle-outline" size={20} color="white" />
                  <ThemedText style={styles.buttonText}>Demo</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => openUrl(project.repoUrl)}>
                  <Ionicons name="logo-github" size={20} color="white" />
                  <ThemedText style={styles.buttonText}>Repo</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </ThemedView>
        ))}
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
    padding: 15,
  },
  projectCard: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  projectInfo: {
    padding: 15,
  },
  projectName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  projectDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4c669f",
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
});
