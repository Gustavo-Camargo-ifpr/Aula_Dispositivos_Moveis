import React, {Component} from "react";
import {Text} from "react-native";

class Mensagem extends Component{
    render(){
        return(
            <Text style={{
                fontSize:22,
                color: "red",
                margin:10
            }}> David adora</Text>
        )
    }
}

export default Mensagem;