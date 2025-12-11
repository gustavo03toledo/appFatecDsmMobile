import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalChatAssistant } from './components/GlobalChatAssistant';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(stack)" />
        <Stack.Screen 
          name="desenvolvedor" 
          options={{
            title: 'Sobre o Desenvolvedor',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#0f0f23',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack>
      {/* Chat Assistant - Persiste em todas as telas */}
      <GlobalChatAssistant />
    </SafeAreaProvider>
  );
}
