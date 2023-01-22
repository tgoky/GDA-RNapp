import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';




const Favorite = ({navigation}) => {


  const Nigeria = () => {
  
      return (
          <TouchableOpacity  onPress={() => navigation.navigate('Categories')}>
          <View style={{ padding:3, left: 1,  borderColor: "gray", 
          backgroundColor: "white",  borderWidth: 2,flexDirection:"row",width: 400, height: 100, top: 40}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", bottom: -40 }}>NIGERIA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Ghana = () => {
  
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray",  borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, height: 100, top: -0}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', bottom: -40}}>GHANA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Cameroun = () => {
  
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, height: 100, top: -40}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>CAMEROUN</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const IvoryCoast = () => {
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: -40, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>IVORY COAST</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const SouthAfrica = () => {
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: -20, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>SOUTH AFRICA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Angola = () => {
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: 0, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>ANGOLA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Kenya = () => {
      return (
         <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: 20, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>KENYA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Liberia = () => {
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: 40, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>LIBERIA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Congo = () => {
      return (
          <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: 60, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>CONGO</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  const Rwanda = () => {
      return (
       <TouchableOpacity>
          <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
          backgroundColor: "white", flexDirection:"row",width: 400, top: 80, height: 100}}>
             <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "black", textAlign: 'center', borderColor: 'black', bottom: -40}}>RWANDA</Text>
          </View>
          </TouchableOpacity>
      )
  }
  
  
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
  <View style={{textAlign: 'center',}}>
  <View style={{padding: 30, alignItems: 'center', }}>
   <Nigeria  />
    </View>
    <View style ={{padding: 30, alignItems: 'center', }} >
       <Ghana />
    </View>
    <View style={{padding: 30, alignItems: 'center', }}>
        <Cameroun/>
    </View>
    <View>
        <IvoryCoast />
    </View>
    <View> 
        <SouthAfrica/>
    </View>
    <View>
        <Angola/>
    </View>
    <View>
        <Kenya/>
    </View>
    <View>
        <Liberia/>
    </View>
    <View>
        <Congo />
    </View>
    <View>
        <Rwanda />
    </View>
    </View>
    </ScrollView>
  );
};

  
  
  


export default Favorite;

const styles = StyleSheet.create({});
