

import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, } from 'react-native';
import { Button, Text, Icon, Footer, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class One extends Component<Props> {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (

      <ImageBackground source={require("../Backgrounds/onboarding-bg-left.png")}
        style={{
          width: '100%', height: '100%',justifyContent: "flex-end",
          alignItems: "center"
          
        }} >


        <Image
          source={require("../Backgrounds/khrogaty-logo.png")}
          style={{ width: 180, height: 180, }} />

        <View style={{ justifyContent: "flex-end", alignItems: "center" , paddingTop:55}}>
          <Image
            source={require("../VectorIcons/home-first-icon.png")}
            style={{ width: 60, height: 60 }} />
          <Text>Places for going out</Text>
          <Text style={{ color: "gray", fontSize: 15, marginVertical: 10, marginHorizontal: 20, textAlign: "center" }} >
            ryrtga adr jhoihy sadskdljf uhyerwefwef we werw8e ewhyf sddksd ushd</Text>

          <Footer style={{ backgroundColor: "white" }}>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate('Two')}>
                <Text style={{ color: "black", fontSize: 25 }}>Next</Text>
                <Icon name="arrow-forward" style={{ color: "black", fontSize: 25 }} />
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

    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(One);