import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';    //    importando ícones do Ionicons

const App = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const formatCpf = (text) => {
    //    remoção de caracteres que não são numéricos
    const cleaned = ('' + text).replace(/\D/g, '');
    //    aplicação da formatação padrão do cpf
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formatted.slice(0, 14); 
    //    limitar o comprimento para apenas 14 caracteres (XXX.XXX.XXX-XX)
  };

  const handleCpfChange = (text) => {
    const formattedCpf = formatCpf(text);
    setCpf(formattedCpf);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar hidden />
      <View style={styles.content}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} /> 
        <Text style={styles.title}>Cadastre-se agora</Text>
        <Text style={styles.subtitle}>Preencha com os seus dados!</Text>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Nome</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"    //    inicial maiúscula em cada palavra.
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>CPF</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="card" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="CPF"
              value={cpf}
              onChangeText={handleCpfChange}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"      //    remove a inicial maiúscula em cada palavra.
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.TextInput}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Comparativo')}>
          
          <Text style={styles.btnText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63a163',
    padding: 15
  },
  content: {
    width: '100%',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 15,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 8,
    marginTop: 1
  },
  icon: {
    marginRight: 5,
  },
  TextInput: {
    flex: 1,
    height: 40,
  },
  btnCadastro: {
    width: '40%',
    height: 40,
    backgroundColor: '#036704',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
});

export default App;