import { Component, ReactNode} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


type AppState= {
  nome: String;
  input: string;
}

class App extends Component<{}, AppState>{

  constructor(props:{}){
    super(props);

    this.state= {
      nome: "",
      input:"",
    }


    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ""){
      alert("Digite seu nome para entrar!");
      return;
    }
    this.setState({nome: 'Bem vindo: '+ this.state.input})
  }

  render(){
    return(
      <View style={styles.container}>

        <TextInput 
        style={styles.input}
        placeholder='Digite'
        underlineColorAndroid={"transparent"}
        onChangeText={(texto)=> this.setState({input: texto})}
        />


        <Button title='Entrar' onPress={this.entrar}/>


        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: 'black',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      textAlign:'center',
      fontSize: 30,
    }
})

export default App;