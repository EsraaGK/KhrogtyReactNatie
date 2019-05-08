
import React, { Component } from 'react';
import { AsyncStorage, ImageBackground, Image, View, ScrollView, NetInfo, Alert, BackHandler} from 'react-native';
import {
  Container, Card, CardItem, Content, Thumbnail, Body,
  Footer, FooterTab, Button, Left, Text, Right, Row
} from 'native-base';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { } from 'react-native';


type Props = {};
class Mother extends Component<Props> {
  state = { places: [], restaurants: [], ToDo: [], pflag: 0, rflag: 0, tflag: 0, conntected: 0 }



  static navigationOptions = {
    header: null,
  };
 
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }
  
  // handleBackButton() {
  //   return true;
  // }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {

      if (isConnected) {
        this.setState({ conntected: 1 })
       // Alert.alert("Internet  connected.!!!")
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4")
        .then((response) => response.json())
        .then((total) => this.setState({ pflag: 1, places: total }, function () { console.log(total); }))
        .catch(console.log("failed"))
  
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3")
        .then((response) => response.json())
        .then((rtotal) => this.setState({ rflag: 1, restaurants: rtotal }, function () { console.log(rtotal); }))
        .catch(console.log("failed"))
  
  
  
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2")
        .then((response) => response.json())
        .then((ttotal) => this.setState({ tflag: 1, ToDo: ttotal }, function () { console.log(ttotal); }))
        .catch(console.log("failed"))

      }else{
        Alert.alert("Internet not connected.!!!")
        this.setState({ conntected: 1 })
      }
     // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    })

   

  }

  render() {
    return (

      <Container>
        <Content>
          <ImageBackground source={require("./Backgrounds/home-header.png")}
            style={{
              width: '100%', height: 150,
              justifyContent: "center",
              alignItems: "center"
            }} >
            <Image
              source={require("./Backgrounds/khrogaty-logo.png")}
              style={{ width: 80, height: 80, }} />

          </ImageBackground>


          <Content>
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./VectorIcons/home-first-icon.png')} />
                  <Body>
                    <Text style={{ fontWeight: "bold" }}>Place For Going out</Text>

                  </Body>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('PlacesScreen',

                    {
                      places: this.state.places,
                      restaurants: this.state.restaurants,
                      ToDo: this.state.ToDo
                    })}>
                    <Text style={{ color: 'green' }}>View More</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
          <Content>
            <ScrollView horizontal={true} style={{ flexDirection: "row", width: '100%' }}>
              {this.getPlaces()}
            </ScrollView>
          </Content>


          <Content>
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./VectorIcons/home-second-icon.png')} />
                  <Body>
                    <Text style={{ fontWeight: "bold" }}>Restaurants and Coffe Shops</Text>

                  </Body>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('ResturaceScreen',
                    {
                      places: this.state.places,
                      restaurants: this.state.restaurants,
                      ToDo: this.state.ToDo
                    })}>
                    <Text style={{ color: 'green' }}>View More</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
          <Content>
            <ScrollView horizontal={true} style={{ flexDirection: "row", width: '100%' }}>
              {this.getResturants()}
            </ScrollView>
          </Content>


          <Content>
            <Card transparent>
              <CardItem>
                <Left>
                  <Thumbnail source={require('./VectorIcons/home-third-icon.png')} />
                  <Body>
                    <Text style={{ fontWeight: "bold" }}>What Do I Do?</Text>

                  </Body>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('TodoScreen',

                    {
                      places: this.state.places,
                      restaurants: this.state.restaurants,
                      ToDo: this.state.ToDo
                    })}>
                    <Text style={{ color: 'green' }}>View More</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
          <Content>
            <ScrollView horizontal={true} style={{ flexDirection: "row", width: '100%' }}>
              {this.getTodo()}
            </ScrollView>
          </Content>

        </Content>

        {this.saveDate()}


        <Footer >
          <FooterTab style={{ backgroundColor: "white", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Button vertical>
              <Image source={require('./Icons/ghome.png')} style={{ height: 35, width: 35 }} />
              <Text>HOME</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Searching',
              {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })}>
              <Image source={require('./Icons/filter.png')} style={{ height: 30, width: 30 }} />
              <Text >Filter</Text>
            </Button>

            <Button vertical onPress={() => this.props.navigation.navigate('PlacesScreen',
              {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })}>
              <Image source={require('./Icons/find-places.png')} style={{ height: 35, width: 35 }} />
              <Text>PLACE</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('ResturaceScreen',
              {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })}>
              <Image source={require('./Icons/restaurants.png')} style={{ height: 35, width: 35 }} />
              <Text>FOOD</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('TodoScreen',
              {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })}>
              <Image source={require('./Icons/todo.png')} style={{ height: 35, width: 35 }} />
              <Text>TO DO</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  getPlaces() {

    if (this.state.pflag == 1)
      return (
        this.state.places.map((elements) => {

          return (

            <View >
              <Card  >
                <Card transparent>
                  <CardItem cardBody key={elements.id} >
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('CardDetails',
                        {
                          address: elements.acf.address,
                          phone: elements.acf.phone_number
                          , email: elements.acf.email_address,
                          map_location: elements.acf.map_location,
                          img: elements.better_featured_image.source_url,
                          content: elements.content.rendered,
                          title: elements.title.rendered,
                          id: elements.id,
                          back: "Mother"
                        })

                    }}>
                      <Image source={{ uri: elements.better_featured_image.source_url }}
                        style={{ height: 200, width: 360, borderRadius: 10, flex: 1 }} />
                    </TouchableOpacity>
                  </CardItem>
                </Card>

                <Card transparent>
                  <CardItem cardBody >
                    <Left>
                      <Thumbnail source={require('./Icons/map-marker.png')}
                        style={{ width: 20, height: 20 }} />
                      <Body>
                        <Text style={{ color: 'green' }}>{elements.acf.address}</Text>

                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Card>
            </View>


          )
        }));
  }


  getResturants() {
    if (this.state.rflag == 1)
      return (
        this.state.restaurants.map((elements) => {

          return (

            <View >
              <Card transparent>
                <Card transparent>
                  <CardItem cardBody key={elements.id}>
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('CardDetails',
                        {
                          address: elements.acf.address,
                          phone: elements.acf.phone_number
                          , email: elements.acf.email_address,
                          map_location: elements.acf.map_location,
                          img: elements.better_featured_image.source_url,
                          content: elements.content.rendered,
                          title: elements.title.rendered,
                          id: elements.id,
                          back: "Mother"
                        })

                    }}>
                      <Image source={{ uri: elements.better_featured_image.source_url }}
                        style={{ height: 200, width: 360, borderRadius: 10, flex: 1 }} />
                    </TouchableOpacity>
                  </CardItem>
                </Card>

                <Card transparent>
                  <CardItem cardBody >
                    <Left>
                      <Thumbnail source={require('./Icons/map-marker.png')}
                        style={{ width: 20, height: 20 }} />
                      <Body>
                        <Text style={{ color: 'green' }}>{elements.acf.address}</Text>

                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Card>
            </View>


          )
        }));

  }
  saveDate() {
    AsyncStorage.setItem("here", "yes")
  }

  getTodo() {
    if (this.state.tflag == 1)
      return (
        this.state.ToDo.map((elements) => {

          return (

            <View >
              <Card transparent>
                <Card transparent>
                  <CardItem cardBody key={elements.id}>
                    <TouchableOpacity onPress={() => {
                      this.props.navigation.navigate('CardDetails',
                        {
                          address: elements.acf.address,
                          phone: elements.acf.phone_number
                          , email: elements.acf.email_address,
                          map_location: elements.acf.map_location,
                          img: elements.better_featured_image.source_url,
                          content: elements.content.rendered,
                          title: elements.title.rendered,
                          id: elements.id,
                          back: "Mother"
                        })

                    }}>
                      <Image source={{ uri: elements.better_featured_image.source_url }}
                        style={{ height: 200, width: 360, borderRadius: 10, flex: 1 }} />
                    </TouchableOpacity>
                  </CardItem>
                </Card>

                <Card transparent>
                  <CardItem cardBody >
                    <Left>
                      <Thumbnail source={require('./Icons/map-marker.png')}
                        style={{ width: 20, height: 20 }} />
                      <Body>
                        <Text style={{ color: 'green' }}>{elements.acf.address}</Text>

                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Card>
            </View>


          )
        }));

  }

 

}
export default withNavigation(Mother);
