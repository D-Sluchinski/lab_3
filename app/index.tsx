import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Go to Lab 3" onPress={() => navigation.navigate('Lab3')} />
    </View>
  );
};

export default HomeScreen;
