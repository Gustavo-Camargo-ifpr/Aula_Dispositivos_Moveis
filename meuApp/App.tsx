import React, { Component, ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import Mensagem from './src/components/Mensagem'

interface ImagemProps{

  largura : Number;
  altura : Number;
  nome2:string;
}

class App extends Component{
  render() {
    let nome = 'IFPR';
    

    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu segundo App!</Text>

        <Text style={{ color: 'red', fontSize: 25 }}>
          Desenvolvimento para dispositivos móveis!
        </Text>

        <Imagem largura ={300} altura={300} nome2={"Hick Gosta"}/>
        <Mensagem/>
        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    );
  }

}

class Imagem extends Component<ImagemProps>{
    render(){
      let img  =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvYq7cp1RLqo_6BteP3nTti80HIqe65DpxBA4v3Sv&s'
      let img1  =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EjQYXCJRenpGzvnhxdbKl4J4jVdJvpcBkA&s'

      
    return(
      <View>
        <Image
        source={{ uri: img }}
        style={{ width: this.props.largura, height: this.props.altura }}
        />

        <Image
        source={{ uri: img1 }}
        style={{ width: this.props.largura, height: this.props.altura }}
        />

        <Text style={{ fontSize: 30 }}>{this.props.nome2}</Text>
      </View>

    )
  }
}

export default App;