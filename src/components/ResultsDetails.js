import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stars, {result.review_count} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    rating: {
        color: "grey"
    },
    container: {
        marginLeft: 10
    }
});

export default ResultsDetails;
