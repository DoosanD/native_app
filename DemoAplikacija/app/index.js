import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Stack } from "expo-router";

export default function Home() {
  <Stack.Screen
    options={{
      title: "DadiljaApp",
      headerStyle: {
        backgroundColor: "#A6DCEF",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DadiljaApp</Text>
      <Text style={styles.subtitle}>
        Pronađite pouzdanu dadilju u vašoj blizini
      </Text>

      <Link href="/register" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registracija</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/search" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pretraga dadilja</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/reservation" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Rezervacija dadilje</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A6DCEF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#F9C6CF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
