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
    text: 'Lorem Ipsum is simply dummy text.',
  },
  {
    id: '1',
    text: 'Lorem Ipsum has been the industry\'s standard.'
  },
  {
    id: '2',
    text: 'Scrambled it to make a type specimen book.'
  },
];

function Item({ item, gotoDetail }) {
  return (
    <View
      style={styles.item}
      onPress={() => gotoDetail(item.id)}
    >
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.bottom}>
        <Ionicons
          style={styles.icon}
          name={'md-thumbs-up'}
          size={35}
          color={'#AAA'}
        />
      </View>
    </View>
  );
}

export default function CommentList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
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
    marginTop: 10,
    marginVertical: 0,
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  bottom: {
    marginTop: 5
  },
  icon: {
    textAlign: 'right'
  }
});
