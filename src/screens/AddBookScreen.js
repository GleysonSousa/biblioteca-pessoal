import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddBookScreen({ onSave, goBack }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');

  function handleSave() {
    if (!title.trim()) return;

    onSave({
      id: Date.now(),
      title,
      author,
      notes
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Adicionar Livro</Text>

      <TextInput
        style={styles.input}
        placeholder="Título do livro"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Observações"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goBack} style={styles.back}>
        <Text style={styles.backText}>← Voltar</Text>
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
  },
  back: {
    marginTop: 20,
    alignItems: 'center'
  },
  backText: {
    color: '#4f46e5'
  }
});
