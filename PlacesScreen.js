
import React, { Component } from 'react';
import {  ImageBackground, Image, View } from 'react-native';
import {
  Container, Card, CardItem, Content, Thumbnail, Body,
  Footer, FooterTab, Button, Left, Text, Right
} from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class PlacesScreen extends Component<Props> {
  state = {
    places: this.props.navigation.getParam('places')
    , restaurants: this.props.navigation.getParam('restaurants'),
    ToDo: this.props.navigation.getParam('ToDo'), flag: 0
    
  }


  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <Container>
        <View style={{
                    width:"100%",height:'17%',   
                    justifyContent: 'space-between' }}>
                <ImageBackground  source={require('./Backgrounds/theme-header.png')} style={{ 
                      flexDirection: 'column',
                            justifyContent: 'center',width:'100%',height:'100%'
                            }}> 
                    <Text style={{fontWeight:'bold',fontSize:25,color:'white',marginLeft:'4%'}}>
                    Places
                        </Text>     
                </ImageBackground>
                </View>

               

        <Content>
          {this.getPlaces()}
        </Content>



        <Footer>
          <FooterTab style={{ backgroundColor: "white", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Button vertical onPress={() => this.props.navigation.navigate('Mother')}>
              <Image source={require('./Icons/home.png')} style={{ height: 35, width: 35 }} />
              <Text>HOME</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Searching',
            { places: this.state.places , 
                restaurants:this.state.restaurants , 
                ToDo:this.state.ToDo})}>
              <Image source={require('./Icons/filter.png')} style={{ height: 35, width: 35 }} />
              <Text>Filter</Text>
            </Button>
            <Button vertical >
              <Image source={require('./Icons/gfind-places.png')} style={{ height: 35, width: 35 }} />
              <Text>PLACE</Text>
            </Button>
            <Button vertical onPress={() => {
              this.props.navigation.navigate('ResturaceScreen', {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })
            }}>
              <Image source={require('./Icons/restaurants.png')} style={{ height: 35, width: 35 }} />
              <Text>FOOD</Text>
            </Button>
            <Button vertical onPress={() => {
              this.props.navigation.navigate('TodoScreen', {
                places: this.state.places,
                restaurants: this.state.restaurants,
                ToDo: this.state.ToDo
              })
            }}>
              <Image source={require('./Icons/todo.png')} style={{ height: 35, width: 35 }} />
              <Text>TO DO</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  getPlaces() {

    // if (this.state.flag == 1)
    return (
      //  this.props.navigation.getParam('places').map((elements) => {
      this.state.places.map((elements) => {

        return (
          <View >
            <Card >
              <CardItem key={elements.id}>

                <Left style={{ flex: 2 , paddingRight:15 }}>

                  <Image source={{ uri: elements.better_featured_image.source_url }}
                    style={{ height: 200, width: 130, borderRadius: 10,}} />

                </Left>
                <Right style={{ flex: 3 }}>
                  <Left >
                  
                    <Text style={{ fontSize: 20 }} > {elements.title.rendered}</Text>
                    <View style={{flexDirection: "row"}}>
                    <Thumbnail source={require('./Icons/map-marker.png')}
                      style={{ width: 20, height: 20 }} />
                      <Text style={{ color: 'green' }} >{elements.acf.address}</Text>
                      </View>
                  </Left>
                  <Body style={{ justifyContent: "center", }}>
                    <Text style={{ color: 'ffeeff', fontSize: 16 }} numberOfLines={6}>
                      {elements.content.rendered}</Text>
                    <Button rounded success style={{ justifyContent: "center", }}
                      onPress={() => {
                        this.props.navigation.navigate('CardDetails',
                          {
                            address:elements.acf.address ,
                            phone:elements.acf.phone_number
                            , email:elements.acf.email_address , 
                            map_location:elements.acf.map_location,
                            img: elements.better_featured_image.source_url, 
                            content:elements.content.rendered, 
                            title :elements.title.rendered,
                            id:elements.id, 
                            back:"PlacesScreen"


                          })
                      }}>
                      <Text>See More!s</Text>
                    </Button>

                  </Body>
                </Right>


              </CardItem>
            </Card>
          </View>

        )
      }
      )
    );
  }


}


export default withNavigation(PlacesScreen);