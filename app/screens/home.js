import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";

import Book from "./book";
import bookData from "../bookData.json";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const renderItem = ({ item }) => {
    return (
      <Book
        id={item.id}
        title={item.title}
        author={item.author}
        thumbnail={item.thumbnail}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={bookData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
