import React from 'react'
import { View, Text, Image } from 'react-native'
import { Subheading, Headline,Chip, Button,Paragraph } from 'react-native-paper'

const EventDetails = ({item}) => {

  // const {title, description,price} = item

  return (
    <View style={{flex:1}}>
      <Image source={{ uri:"https://wallpapercave.com/wp/wp2737727.jpg"}} resizeMode="cover" style={{width:'100%',height:250}} />
      <View style={{padding:15}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:15}}>
        <Headline style={{fontWeight:'600'}}>Artes & Matemática</Headline>
        <Subheading style={{fontWeight:'bold', color:'#6200EE'}}>R$150,00</Subheading>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row"}}>
        <Chip icon="check">Online</Chip>
        <Chip icon="check">Example Chip</Chip>
        </View>
        <Button mode="contained" >Comprar</Button>
        </View>
        <Paragraph style={{marginVertical:20}}>
          Finely crafted graphite wooden pencil. Premium quality
          lead guarantees smoothness at all times. Ideal for artists and designers. 
          HB hardness only.
        </Paragraph>
      </View>
    </View>
  )
}

export default EventDetails
