import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { BlurView} from "expo-blur"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome({navigation}) {

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

        <Animatable.View delay={400} animation="fadeInLeft" style={styles.containerTitle}>
          <Text style={styles.logoTitle}>EconomizaMais</Text>
        </Animatable.View>

        <View style={styles.containerLogo}>
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: '50%' }}
            resizeMode="contain"
          />
       </View>

        <Animatable.View delay={400} animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Compare os preços de supermercado da sua região!</Text>
          <Text style={styles.buttonText}>Cadastre-se e comece a comparar</Text>
          
          
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        </Animatable.View>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  containerTitle:{
    fontSize: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250

  },
  containerForm: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 80,
  },
    logoTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {  
    flexDirection: 'row',
    marginTop: 10,
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036704', 
    paddingHorizontal: 10,
    borderRadius: 9,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  bgImg: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
