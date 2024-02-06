import { View, Text, Alert } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { refresh } = useLocalSearchParams<{ refresh: string }>();

  if (refresh && refresh === '1') {
    Alert.alert('La page a ete actualisé');
  }

  return (
    <View>
      <Text>Following</Text>
    </View>
  );
};

export default Page;
