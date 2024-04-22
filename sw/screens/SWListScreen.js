
import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SWListContext } from '../components/SWListContext.js';
import axios from 'axios';

const SWListScreen = ({navigation}) => {
  const { sw, setSW } = useContext(SWListContext);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/Suhani8787/mobile/smartwatches')
      .then((response) => {
        console.log("got sw");
        setSW(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      {sw.map((sw) => ( // Changed from techBooks to smart watch
        <View key={sw.brand} style={styles.brand}>
          <Text style={styles.brand}>{sw.brand}</Text>
          <Text style={styles.model}>{sw.model}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate( "SWDetailScreen", { sw }) 
            }
          />
        </View>
      ))}
    </View>
  );
};
export {SWListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
