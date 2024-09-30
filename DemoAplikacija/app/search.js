import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const dummyData = [
  { id: "1", name: "Ana Marković", age: 25, rating: 4.8 },
  { id: "2", name: "Milica Jovanović", age: 30, rating: 4.9 },
  { id: "3", name: "Jovana Petrović", age: 28, rating: 4.7 },
];

export default function Search() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Godine: {item.age}</Text>
      <Text>Ocena: {item.rating}/5</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pretraga dadilja</Text>

      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Nazad na početnu</Text>
        </TouchableOpacity>
      </Link>
    </View>
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
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: "#A6DCEF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
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
