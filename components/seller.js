/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import SellerDetails from './sellerdetails';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Seller: () => React$Node = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8888/api/seller')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {/* <SellerDetails /> */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Seller List</Text>
            </View>
            <View>
              <TextInput placeholder="Search Here" />
            </View>
            {data.map(seller => (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  {' '}
                  {seller.name.toUpperCase()}
                </Text>
                {seller.meetingSlot.map(mSlots => (
                  <Text style={styles.sectionDescription}>
                    <Text style={styles.sectionDescription}>
                      {mSlots.day.toUpperCase()}:{' '}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      {' '}
                      {mSlots.startTime}{' '}
                    </Text>
                    <Text style={styles.sectionDescription}> To </Text>
                    <Text style={styles.sectionDescription}>
                      {' '}
                      {mSlots.endTime}
                    </Text>

                    <Text> {mSlots.available ? 'not booked' : ' booked'} </Text>
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    left: -10,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Seller;
