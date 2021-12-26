import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Firebase from '../../../config/firebase';
import auth from '@react-native-firebase/auth';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

// const auth = Firebase.auth();

const Home = () => {

  const { user } = useContext(AuthenticatedUserContext);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
      </View>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e93b81',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});