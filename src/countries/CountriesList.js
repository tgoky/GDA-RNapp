import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';


const Countries = () => {


const Nigeria = () => {

    return (
        <TouchableOpacity>
        <View style={{ padding:3, left: 1,  borderColor: "gray", 
        backgroundColor: "gray",  borderWidth: 2,flexDirection:"row",width: 400, top: 40}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white"}}>NIGERIA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Ghana = () => {

    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray",  borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: -0}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center'}}>GHANA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Cameroun = () => {

    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: -40}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>CAMEROUN</Text>
        </View>
        </TouchableOpacity>
    )
}

const IvoryCoast = () => {
    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: -40}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>IVORY COAST</Text>
        </View>
        </TouchableOpacity>
    )
}

const SouthAfrica = () => {
    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: -20}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>SOUTH AFRICA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Angola = () => {
    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: 0}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>ANGOLA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Kenya = () => {
    return (
       <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: 20}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>KENYA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Liberia = () => {
    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: 40}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>LIBERIA</Text>
        </View>
        </TouchableOpacity>
    )
}

const Congo = () => {
    return (
        <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: 60}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>CONGO</Text>
        </View>
        </TouchableOpacity>
    )
}

const Rwanda = () => {
    return (
     <TouchableOpacity>
        <View style={{ padding:3, bottom: 20, left: 1,  borderColor: "gray", borderWidth: 2,
        backgroundColor: "gray", flexDirection:"row",width: 400, top: 80}}>
           <Text style={{fontSize: 25, textAlign: 'center', left: 20, color: "white", textAlign: 'center', borderColor: 'black'}}>RWANDA</Text>
        </View>
        </TouchableOpacity>
    )
}










  return (
    <ScrollView showsVerticalScrollIndicator={true}>
  <SafeAreaView style={{textAlign: 'center'}}>
  <View style={{padding: 30, alignItems: 'center'}}>
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
    </SafeAreaView>
    </ScrollView>
  );
};

export default Countries;

const styles = StyleSheet.create({});
