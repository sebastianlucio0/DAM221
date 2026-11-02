import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Switch, 
  TouchableOpacity, 
  ScrollView, 
  Alert, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const handleSubmit = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`,
      [{ text: 'Aceptar' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.title}>Registro de Evento Universitario</Text>

        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Carrera</Text>
        <TextInput
          style={styles.input}
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text style={styles.label}>Semestre</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.sectionTitle}>Opciones</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={taller ? '#007AFF' : '#f4f3f4'}
            onValueChange={setTaller}
            value={taller}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={constancia ? '#007AFF' : '#f4f3f4'}
            onValueChange={setConstancia}
            value={constancia}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={deportes ? '#007AFF' : '#f4f3f4'}
            onValueChange={setDeportes}
            value={deportes}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar Registro</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#000',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});