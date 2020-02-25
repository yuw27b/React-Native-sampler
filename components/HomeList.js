import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '0',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    like: 100,
    card: 20
  },
  {
    id: '1',
    title: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    like: 80,
    card: 15
  },
  {
    id: '2',
    title: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    like: 70,
    card: 10
  },
];

function Item({ item, gotoDetail }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => gotoDetail(item.id)}
    >
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
    </TouchableOpacity>
  );
}

export default function HomeList({ gotoDetail }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} gotoDetail={gotoDetail} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 0,
  },
  item: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 15,
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
