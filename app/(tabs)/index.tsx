import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Link href={'/details'} asChild>
        <Button title="Open detail Page" />
      </Link>

      <Link href={'/(tabs)/reactnative'} style={{ marginVertical: 10 }} asChild>
        <Button title="Open react native Page" />
      </Link>

      <Link
        href={{
          pathname: '/(tabs)/following',
          params: { refresh: '1' },
        }}
        style={{ marginTop: 10 }}
        asChild>
        <Button title="Open with params" />
      </Link>
    </View>
  );
};

export default Page;
