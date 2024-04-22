import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SWDetailScreen = ({ route }) => {
  const {sw} = route.params;

  return (
    <View>
      <Text>Brand: {sw.brand}</Text>
      <Image source={{ uri: sw.image }} style={styles.image}/>
      <Text>Model: {sw.model}</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
export {SWDetailScreen};