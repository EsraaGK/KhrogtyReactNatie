
import React, {Component} from 'react';
import { StyleSheet,  ImageBackground, Image,View} from 'react-native';
import { Button, Text, Icon, Footer,Right} from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
 class three extends Component<Props> {
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
            source={require("../VectorIcons/home-third-icon.png")}
            style={{width: 60, height: 60 }}/>
      <Text>What Do I Do</Text> 
      <Text style={{color:"gray", fontSize:15 ,marginVertical:10,marginHorizontal:20, textAlign:"center"}} >
      ryrtga adr jhoihy sadskdljf uhyerwefwef we werw8e ewhyf sddksd ushd</Text>
    
        <Footer style={{backgroundColor:"white"}}>
            <Right>
          <Button rounded success onPress={()=>this.props.navigation.navigate('Mother')}>
          <Text style={{color:"black", fontSize:25 }}>Start</Text>
              <Icon name="arrow-forward" style={{color:"black", fontSize:25 }} />
            </Button>
            </Right>
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
 export default withNavigation(three);