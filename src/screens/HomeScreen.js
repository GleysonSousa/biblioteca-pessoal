import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Minha Biblioteca</Text>
      <Text style={styles.empty}>Nenhum livro cadastrado ainda.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    color: '#666'
  }
});
