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
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  ActivityIndicatorBase
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 import * as Font from 'expo-font';
//import { Font } from 'expo';
// const fetchFonts = () => {
//   return Font.loadAsync({
//   'SFProText-Blod': require('./assets/fonts/FontsFree-Net-SFProText-Bold.ttf'),
//   'SFProText-Regular': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
//   'SFProText-Semibold': require('./assets/fonts/FontsFree-Net-SFProText-Semibold.ttf')
//   });
//   };


export default class Profile extends Component {
    constructor(){
      super();
      this.state = {
        fontloaded : false,
      }
    }
    async componentDidMount(){
      await Font.loadAsync({
           'SFProText-Blod': require('./assets/fonts/FontsFree-Net-SFProText-Bold.ttf'),
           'SFProText-Regular': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
           'SFProText-Semibold': require('./assets/fonts/FontsFree-Net-SFProText-Semibold.ttf')
           });
           //this.setState ({fontloaded : true});
     }
  render() {
   
      
    
    
    //const [dataLoaded, SetDataLoaded] = useState(false);
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.header}>
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
                <Text style={styles.textcardblod}>201</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Age</Text>
                <Text style={styles.textcardblod}>19</Text>
              </View>

              <View style={styles.smallcard}>
                <Text style={styles.textcard}>Projects</Text>
                <Text style={styles.textcardblod}>33</Text>
              </View>

            </View>

            <View style={styles.bigcard}>
              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Job</Text>
                <Text style={styles.main}>Etudtiant</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%'}}>
                <Text style={styles.title}>Notes</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Location</Text>
                <Text style={styles.main}>Bouraoui Campus</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Languages</Text>
                <Text style={styles.main}>Arabic,French,English</Text>
              </View>

              <View style={styles.line}></View>

              <Text>Private Infos</Text>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.main}>ia_nasri@esi.dz</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.main}>+213698367901</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Portfolio</Text>
                <Text style={styles.main}>linkto.website</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>Facebook</Text>
                <Text style={styles.main}>linkto.facebook</Text>
              </View>

              <View style={styles.line}></View>

              <View style={{width :'80%' ,flexDirection : 'row' , justifyContent : 'space-between'}}>
                <Text style={styles.title}>curriculum vitae</Text>
                <Text style={styles.main}>ALANASRI.docs</Text>
              </View>

              <View style={styles.line}></View>

            </View>
            

          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.ccc}> Nassim et3lm mn 3ala echikour xD</Text>
        </View>*/}

        {this.state.fontloaded ? (
          <Text>wooooooooooooooooooooooooows</Text>
        ) : (
          <ActivityIndicator size="large"/>
        )
        }
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
    width: 86,
    height: 58,
    marginLeft: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
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
    alignItems: 'center',
    width: 308,
    height: 695,
    marginTop: 57,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
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
    //fontFamily : 'SFProText-Blod',
    fontWeight : 'bold',
    textAlign: 'left',
    fontSize : 16,
    /*marginLeft : 20,*/
  },
  main: {
    textAlign: 'right',
    fontSize : 14,
  },
  description: {
    fontSize: 14,
    color: "#000",
    /*marginTop:-2000,*/
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
    fontSize: 14,
    textAlign: 'center'
  },
  textcardblod: {
    color: '#000',
    fontWeight: 'bold',
    /*marginTop : 10,
    fontWeight: 'bold',*/
    fontSize: 17,
    textAlign: 'center'
  },
  line: {
    backgroundColor: "#ECECEC",
    width: 280,
    height: 2,
    marginTop: 20,
    marginBottom : 20,
  }
});

