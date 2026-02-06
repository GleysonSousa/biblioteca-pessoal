import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddBookScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Adicionar Livro</Text>

      <TextInput
        style={styles.input}
        placeholder="Título do livro"
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Observações"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 15
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
