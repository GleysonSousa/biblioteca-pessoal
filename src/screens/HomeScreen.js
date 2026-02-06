import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function HomeScreen({ books, goToAdd }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Minha Biblioteca</Text>

      {books.length === 0 ? (
        <Text style={styles.empty}>
          Nenhum livro cadastrado ainda.
        </Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={goToAdd}>
        <Text style={styles.buttonText}>➕ Adicionar livro</Text>
      </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: 20
  },
  empty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 10
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  bookAuthor: {
    fontSize: 14,
    color: '#555'
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
