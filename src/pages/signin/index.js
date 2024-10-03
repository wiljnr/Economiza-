import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { BlurView} from "expo-blur";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../../../assets/mercado.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        estilo={styles.bgImg}
        blurRadius={4}
        >
        <BlurView intensity={5} style={styles.blur}/>  
        <LinearGradient
          colors={["rgba(146, 231, 7, 0.15)", "rgba(146, 231, 7, 0.10)", "rgba(146, 231, 7, 0.15)"]}
          locations={[0.2, 0.5, 0,5]}
          style={styles.gradient}
        />
        <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Sua senha"
            style={styles.input}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },
  containerForm: {
    backgroundColor: '#63a163',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    fontWeight: 'bold'

  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#fff'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 40,
    marginTop: 12,
    fontSize: 16,
    color: '#fff'
  },
  button: {
    backgroundColor: '#036704',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  registerText: {
    color: '#fff',
  }
});
