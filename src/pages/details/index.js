import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ofertas = ({ route }) => {
  const { data } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{data.nome}</Text>
      <Text style={styles.oferta}>{data.oferta}</Text>
      <Text style={styles.descricao}>{data.descricao}</Text>
      <View style={styles.produtosContainer}>
        {data.produtos.map((produto, index) => (
          <View key={index} style={styles.produtoItem}>
            <Text style={styles.produtoNome}>{produto.nome_produto}</Text>
            <Text style={styles.produtoValor}> R$ {produto.valor.toFixed(2)}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#63a163'
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  oferta: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  descricao: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white'
  },
  produtosContainer: {
    alignItems: 'center',
  },
  produtoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 5,
    color: 'white'
  },
  produtoNome: {
    fontSize: 16,
    color: 'white'
  },
  produtoValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#036704'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
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
});

export default Ofertas;
