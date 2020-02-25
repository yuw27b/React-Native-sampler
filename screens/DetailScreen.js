import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CommentList from '../components/CommentList';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailHeader}>
        <Text style={styles.detailTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <CommentList />
      </ScrollView>
      <View style={styles.button}>
        <Ionicons
          name={'md-add-circle'}
          size={70}
          color={'#903'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailHeader: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
  detailTitle: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height:70
  }
});
