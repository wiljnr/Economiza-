import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supermercados from '../mock/mock';

const YourApp = () => {
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const resultadoPesquisa = () => {
    console.log(textoPesquisa);
  };

  const pressionarEnter = (event) => {
    if (event.key === 'Enter') {
      resultadoPesquisa();
    }
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>Explorar</Text>
      </View>
      <View style={styles.barraPesquisa}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pesquisar supermercados..."
          value={textoPesquisa}
          onChangeText={(texto) => setTextoPesquisa(texto)}
          onKeyPress={pressionarEnter}
        />
      </View>
      <View style={styles.navegacaoContainer}>        
          <Text style={styles.textoNavegacao}>Comparativo</Text>
      </View>
      <FlatList
        data={supermercados}
        numColumns={2}
        renderItem={({ item }) => (        
          <TouchableOpacity                      
            style={styles.characterContainer}
            onPress={() => navigation.navigate('Ofertas', {data: item })}
            >
            <Text style={styles.name}>{item.nome}</Text>
            <Image 
              source={{uri: item.imagem}}
              style={{ width: '70%', aspectRatio: 1, borderRadius: 20}}
            />
          </TouchableOpacity>
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63a163',
    padding: 15,
    justifyContent: 'center',
  },
  tituloContainer: {
    backgroundColor: '#63a163',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 30
  },
  tituloTexto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  barraPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#63a163',
  },
  TextInput: {
    flex: 1,
    color: '#fff',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  navegacaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  textoNavegacao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'transparent',
  },
  characterContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    aspectRatio: 1,
    width: '41.5%',
    borderRadius: 10,
    backgroundColor: '#036704',
    margin: 10,
    marginLeft: 20,
    padding: 10,
    justifyContent: 'center'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff'
  },
});

export default YourApp;
