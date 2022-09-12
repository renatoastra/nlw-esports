import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Toque' />
      <Button title='Toque 2' />
      <Button title='Toque 3' />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string,
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity >
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


