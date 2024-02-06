import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerLeft: () => <Ionicons name="settings-outline" size={24} color="black" />,
          headerRight: () => <Ionicons name="settings-outline" size={24} color="black" />,
          headerTitle: () => (
            <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
              Taps twitter
            </Text>
          ),
        }}
      />
      <Stack.Screen name="details" options={{ headerTitle: 'Details', headerBackTitle: 'Back' }} />
    </Stack>
  );
}
