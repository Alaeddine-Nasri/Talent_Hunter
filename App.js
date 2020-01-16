/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//appp t3na 



<Text style={styles.info}>UX Designer / Mobile developer</Text>
<Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
          



<TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Et3LM</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>With One</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Click</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Bzayed ketherna</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Et3LM</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>With One</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Click</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.cc}>Bzayed ketherna</Text> 
              </TouchableOpacity>

              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
           
<Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Profile extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.ccch}> Talent Hunter </Text>
        </View>
        <Image style={styles.avatar} source={require('./Ala.jpg')} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Alaeddine</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Experience</Text>
                <Text style={styles.textcard}>201</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Age</Text>
                <Text style={styles.textcard}>19</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Projects</Text>
                <Text style={styles.textcard}>33</Text>
              </View>

            </View>

            <View style={styles.bigcard}>
              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Job</Text>
                <Text style={styles.main}>Etudtiant</Text>
              </View>
              <View style={styles.line}></View>
            </View>

          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.ccc}> Nassim et3lm mn 3ala echikour xD</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    height: 200,
  },
  footer: {
    backgroundColor: "#6A0888",
    height: 50,
    marginTop: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  smallcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    /* position : 'absolute',*/
    width: 100,
    height: 80,
    marginLeft: 10,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 3,
    elevation: 20
  },
  bigcard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    /*justifyContent: 'center',*/
    alignItems: 'center',
    width: 300,
    height: 800,
    //Below lines will help to set the border radius
    marginTop: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowOffset: { width: 10, height: 10, },
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 1.0,
    paddingVertical : 20,
    shadowRadius: 3,
    elevation: 20
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#6A0888",
    marginTop: 10
  },
  title: {
    textAlign: 'left',
    /*marginLeft : 20,*/
  },
  main: {
    textAlign: 'right',
  },
  description: {
    fontSize: 16,
    color: "#000",
    /*marginTop:-2000,*/
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#6A0888",
  },
  cc: {
    color: '#FFFFFF'
  },
  ccc: {
    color: '#FFFFFF',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  ccch: {
    color: '#000000',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: -60,
    textAlign: 'center'
  },
  blanc1: {
    backgroundColor: "#FF4000",
    position: 'absolute',
    textAlign: 'center',
    height: 800,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '80%',
    marginTop: 400,
  },
  textcard: {
    color: '#000',
    /*marginTop : 10,
    fontWeight: 'bold',*/
    fontSize: 20,
    textAlign: 'center'
  },
  line: {
    backgroundColor: "#000",
    width: 280,
    height: 2,
    opacity: .1,
    marginTop: 10,
  }
});

