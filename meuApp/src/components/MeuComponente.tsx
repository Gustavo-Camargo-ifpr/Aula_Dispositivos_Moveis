import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';



export class MeuComponente extends Component{

    render (){

        let nome = 'IFPR'

        return(
        <View> 
            <Text>
                Hello moto!
            </Text>

            <Text style={{color : 'red', fontSize: 25, margin:15}}>
                Primeiro mobile {nome}
            </Text>

            <Image

                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfF98pUf53bRmy418zkV8N3OCluhtzVvjA5bNZVBHWQ&s'}}
                style= {{width: 300, height:200}}
            />

            <Image

                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PmTAq6tc_o1ZavZ9ych7D-iw4VHcLz8ZudhnFlAZLw&s'}}
                style= {{width: 300, height:200}}
            />

            
        </View>
    )

    }
 
}