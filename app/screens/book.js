import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function Book(props) {
  return (
    <View style={styles.rowContainer}>
      <Image
        source={{ uri: props.thumbnail }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.rowText}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode={"tail"}>
          {props.title}
        </Text>
        <Text style={styles.author} numberOfLines={1} ellipsizeMode={"tail"}>
          {props.author}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#777",
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: "#777",
  },
  thumbnail: {
    flex: 1,
  },
  rowText: {
    flex: 4,
    flexDirection: "column",
  },
});
