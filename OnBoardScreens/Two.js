

import React, {Component} from 'react';

import { StyleSheet,  ImageBackground, Image,View} from 'react-native';
import { Button, Text, Icon, Footer,Right, Left} from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
 class Two extends Component<Props> {
  static navigationOptions = {
    header: null,
};
  render() {
    return (
      <ImageBackground source={require("../Backgrounds/onboarding-bg-left.png")}
       style={[{width: '100%', height: '100%'}, styles.container]} >

    
       <Image
            source={require("../Backgrounds/khrogaty-logo.png")}
            style={{width: 180, height:180, }}/>
      <View style={{ justifyContent: "flex-end", alignItems: "center" , paddingTop:55}}>
      <Image
            source={require("../VectorIcons/home-second-icon.png")}
            style={{width: 60, height: 60 }}/>
      <Text>Resturant coffee Shopes</Text> 
      <Text style={{color:"gray", fontSize:15 ,marginVertical:10,marginHorizontal:20, textAlign:"center"}} >
      ryrtga adr jhoihy sadskdljf uhyerwefwef we werw8e ewhyf sddksd ushd</Text>
    
        <Footer style={{backgroundColor:"white"}}>
           
            <Button transparent onPress={()=>this.props.navigation.navigate('One')}>
              <Icon name="arrow-back" style={{color:"black", fontSize:25 }} />
              <Text style={{color:"black", fontSize:15 }}>Previous</Text>
            </Button>

            <Button transparent onPress={()=>this.props.navigation.navigate('three')}>
            <Text style={{color:"black", fontSize:15 }}>Next</Text>
              <Icon name="arrow-forward" style={{color:"black", fontSize:25 }} />
            </Button>
        </Footer>
        </View>
      </ImageBackground>
      
      
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "flex-end",
    alignItems: "center"
  } });
  export default withNavigation(Two);