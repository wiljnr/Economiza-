import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
        <Text style={styles.headerText}>Meu Perfil</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.profileContainer}>
        <Text style={styles.label}>Nome</Text>

        <TextInput
          placeholder="Seu nome"
          style={styles.input}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Seu e-mail"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          placeholder="Seu telefone"
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Comparativo')}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#036704',
  },
  header: {
    backgroundColor: '#036704',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 40,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#036704',
    borderRadius: 4,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
