// screens/ResponseScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResponseScreen = ({ route }) => {
  const { fullname, comments } = route.params.values;

  return (
    <View style={styles.responseContainer}>
      <Text style={styles.responseText}>Welcome Home {fullname}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  responseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  responseText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ResponseScreen;
2.