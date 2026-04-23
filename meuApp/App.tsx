import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class App extends Component {

  // STATE: controla o que aparece na tela
  state = {
    textoFrase: '', // frase que será exibida
    img: require('./assets/biscoito_fechado.png') // imagem inicial
  };

  // Vetor com frases (mínimo 7)
  frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Você está prestes a conquistar algo incrível."
  ];

  // Função que roda ao clicar no botão
  quebrarBiscoito = () => {

    // Gera número aleatório
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    // Atualiza o state
    this.setState({
      textoFrase: this.frases[numeroAleatorio], // frase sorteada
      img: require('./assets/biscoito_aberto.png') // troca imagem
    });
  }

  // (Extra) botão para reiniciar
  reiniciar = () => {
    this.setState({
      textoFrase: '',
      img: require('./assets/biscoito_fechado.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>

        {/* Imagem do biscoito */}
        <Image
          source={this.state.img}
          style={styles.imagem}
        />

        {/* Texto da frase */}
        <Text style={styles.texto}>
          {this.state.textoFrase}
        </Text>

        {/* Botão principal */}
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
        </TouchableOpacity>

        {/* Botão de reiniciar (opcional) */}
        <TouchableOpacity style={styles.botaoReiniciar} onPress={this.reiniciar}>
          <Text style={styles.botaoTexto}>Reiniciar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

// Estilos (organização visual)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  texto: {
    fontSize: 18,
    color: '#333',
    margin: 20,
    textAlign: 'center',
    fontStyle: 'italic'
  },

  botao: {
    backgroundColor: '#dd7b22',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  botaoReiniciar: {
    backgroundColor: '#888',
    padding: 15,
    borderRadius: 10
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16
  }
});

export default App;
