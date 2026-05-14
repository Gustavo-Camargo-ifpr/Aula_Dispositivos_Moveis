import React, {Component} from "react";
import {FlatList, StyleSheet, Text, View, ListRenderItem} from "react-native";

type PessoaData = {
  nome: string;
  idade: number;
  email: string;
};

interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      feed: [
        {nome: "João", idade: 30, email: "joao@email.com"},
        {nome: "Maria", idade: 25, email: "maria@email.com"},
        {nome: "Carlos", idade: 28, email: "carlos@email.com"},
        {nome: "Ana", idade: 22, email: "anabanana@email.com"}
      ]
    };
  }

  private renderItem: ListRenderItem<PessoaData> = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.idade}>Idade: {item.idade}</Text>
      <Text style={styles.email}>Email: {item.email}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0"
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,            

  },
  nome: {
    fontSize: 18,
    fontWeight: "bold"
  },
  idade: {
    fontSize: 16,
    color: "#555"
  },
  email: {
    fontSize: 14,
    color: "#888"
  }
});

export default App;