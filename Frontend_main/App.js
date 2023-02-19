import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View , Image , TextInput } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.title_img} source={require("./public/resources/img/man-user.png")}></Image>
      </View>
      <Text style={styles.title}>Name Second name</Text>
      <View style={styles.tools}>
          <Image style={styles.tools_img} source={require("./public/resources/img/setting.png")}></Image>
          <Image style={styles.tools_img} source={require("./public/resources/img/bell.png")}></Image>
          <Image style={styles.tools_img} source={require("./public/resources/img/pencil.png")}></Image>
      </View>
        <TextInput style={styles.searchBox} placeholder='Search your items...'></TextInput>
        <View style={styles.list_items}>
          <View style={[styles.item,{backgroundColor:"#DC7A81"}]}>
            <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/man-lifting-weight.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Gym</Text>
          </View>
          <View style={[styles.item,{backgroundColor:"#7AD6DC"}]}>
          <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/task.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Tasks</Text>
          </View>
          <View style={[styles.item,{backgroundColor:"#ECC683"}]}>
          <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/suitcase.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Work</Text>
          </View>
          <View style={[styles.item,{backgroundColor:"#85EC7E"}]}>
          <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/night.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Sleep</Text>
          </View>
          <View style={[styles.item,{backgroundColor:"#E099F2"}]}>
          <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/musical-note.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Music</Text>
          </View>
          <View style={[styles.item,{backgroundColor:"#7A88DC"}]}>
          <Image style={[styles.tools_img,{tintColor:"#FFF"}]} source={require("./public/resources/img/games.png")}></Image>
            <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Games</Text>
          </View>
        </View>
        <View style={styles.btn_logout}>
          <Text style={{fontWeight: "600", fontSize: 20, color:"#FFF"}}>Logout</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
  },
  title_img:{
    width:Dimensions.get('window').width * 0.2,
    height:Dimensions.get('window').height * 0.1,
  },  
  circle:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    backgroundColor: "#fcdbac",
    alignItems: 'center',
    justifyContent: "center",
    marginTop:"15%",
  },
  title:{
    fontSize:20,
    margin:15,
  },
  tools:{
    flexDirection:'row',
  },  
  tools_img:{
    width:Dimensions.get('window').width*0.07,
    height:Dimensions.get('window').width*0.07,
    marginLeft:15,
    marginRight:15,
    color:'#474743',
  },
  searchBox:{
    marginTop:"10%",
    width:Dimensions.get('window').width*0.6,
    height:Dimensions.get('window').height*0.06,
  },
  item:{
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: "5%",
    marginTop:"5%",
  },  
  list_items:{
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: "10%",
    padding:15,
  },
  btn_logout:{
    width:Dimensions.get('window').width*0.4,
    height:Dimensions.get('window').height*0.06,
    backgroundColor:"#505157",
    borderRadius:50,
    alignItems: 'center',
    justifyContent: "space-around",
    marginTop:60
  },    
});
