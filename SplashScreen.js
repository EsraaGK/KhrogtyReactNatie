import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  AsyncStorage,
  View,
  Animated,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";



type Props = {};
const { width, height } = Dimensions.get("window");
export default class SplashScreen extends Component<Props> {
  static navigationOptions = {
    header: null,
};
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();
  }


  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };
    return (
      <ImageBackground source={require("./Backgrounds/splash-bg.png")}
       style={{width: '100%', height: '100%'}} >
       <View style={styles.container}>
	  
	  
       <Animated.View style={truckStyle}>
          <Animated.Image
            source={require("./img/khrogaty-logo.png")}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
        {this.moveToHome()}
        </View>
      </ImageBackground>
    );
  }

  moveToHome(){
    AsyncStorage.getItem("here").then((val)=>{
      setTimeout(()=>{
          if(val !== "yes"){
              this.props.navigation.navigate('One');
          }else{
              this.props.navigation.navigate('Mother');
          }

      }, 3000);
  });
}

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    
    marginBottom: 5
  },
  
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});


