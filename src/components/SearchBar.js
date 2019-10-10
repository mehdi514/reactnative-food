import React from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    fontSize: 19
  },
  iconStyle: {
    fontSize: 32,
    alignSelf: "center",
    marginHorizontal: 10
  }
});

export default SearchBar;
