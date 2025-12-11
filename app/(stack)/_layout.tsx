import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f0f23',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen 
        name="cultura" 
        options={{
          title: 'Cultura',
          headerStyle: {
            backgroundColor: '#667eea',
          },
        }}
      />
      <Stack.Screen 
        name="educacao" 
        options={{
          title: 'Educação',
          headerStyle: {
            backgroundColor: '#f093fb',
          },
        }}
      />
      <Stack.Screen 
        name="empregos" 
        options={{
          title: 'Empregos',
          headerStyle: {
            backgroundColor: '#4facfe',
          },
        }}
      />
      <Stack.Screen 
        name="seguranca" 
        options={{
          title: 'Segurança',
          headerStyle: {
            backgroundColor: '#43e97b',
          },
        }}
      />
      <Stack.Screen 
        name="fatecCourses" 
        options={{
          title: 'Cursos Fatec Cotia',
          headerStyle: {
            backgroundColor: '#7c3aed',
          },
        }}
      />
    </Stack>
  );
}