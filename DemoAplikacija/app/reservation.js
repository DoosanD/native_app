import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rezervacija dadilje</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Datum:</Text>
        <TextInput
          style={styles.input}
          placeholder="Unesite datum (npr. 01.10.2023)"
          value={date}
          onChangeText={setDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Vreme:</Text>
        <TextInput
          style={styles.input}
          placeholder="Unesite vreme (npr. 14:00)"
          value={time}
          onChangeText={setTime}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, isUrgent && styles.urgentButton]}
        onPress={() => setIsUrgent(!isUrgent)}
      >
        <Text style={styles.buttonText}>
          {isUrgent ? "Hitna rezervacija" : "Standardna rezervacija"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Potvrdi rezervaciju</Text>
      </TouchableOpacity>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Nazad na početnu</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#A6DCEF",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "rgb(84, 200, 51)",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  urgentButton: {
    backgroundColor: "rgb(247, 130, 150)",
  },
  submitButton: {
    backgroundColor: "rgb(249, 198, 207)",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
    alignItems: "center",
  },
  backButtonText: {
    color: "#333",
    fontSize: 16,
    backgroundColor: "#A6DCEF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    textAlign: "center",
  },
});
