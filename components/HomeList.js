import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '0',
    title: 'お題1',
    like: 100,
    card: 20
  },
  {
    id: '1',
    title: 'お題2',
    like: 80,
    card: 15
  },
  {
    id: '2',
    title: 'お題3',
    like: 70,
    card: 10
  },
];

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.row}>
        <View style={styles.col}>
          <Ionicons
            name={'md-heart'}
            size={35}
            color={'#C00'}
          />
          <Text style={styles.num}>{item.like}</Text>
        </View>
        <View style={styles.col}>
          <Ionicons
            name={'md-text'}
            size={35}
            color={'#0C9'}
          />
          <Text style={styles.num}>{item.card}</Text>
        </View>
      </View>
    </View>
  );
}

export default function HomeList(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        onPress={() => props.navigation.navigate('Detail', {id: item.id})}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 10,
    marginHorizontal: 0,
  },
  item: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
    marginVertical: 0,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10
  },
  col: {
    flex: 1,
    flexDirection: 'row',
    width: '45%',
  },
  num: {
    marginLeft: 5,
    fontSize: 24,
    lineHeight: 35,
  }
});
