import { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import SWDetail from './SWDetail';

export class SWList extends Component {
  state = {
    sw: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/Suhani8787/mobile/smartwatches')
      .then((res) => {
        this.setState({ sw: res.data, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { sw, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {sw.map((sw, index) => (
          <View key={index} style={styles.swContainer}>
            <SWDetail
              brand={sw.brand}
              model={sw.model}
              urll={sw.url}
              image={sw.image}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobilesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
});
