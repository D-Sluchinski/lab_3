import React from 'react';
import {View, Button } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href={"/lab_3"}>Got to Lab 3</Link>
    </View>
  );
};

export default Index;
