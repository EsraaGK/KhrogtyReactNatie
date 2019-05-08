
import React, { Component } from 'react';
import {
    Container, Card, CardItem, Content, Thumbnail, Body,
    Footer, FooterTab, Button, Left, Text, Right,
    Header, Tab, Tabs
} from 'native-base';
import { Image, View } from 'react-native';
import { withNavigation } from 'react-navigation';
class PlaceDetails extends Component {
    state = {
        address: this.props.navigation.getParam('address'),
        phone_number: this.props.navigation.getParam('phone_number'),
        email_address: this.props.navigation.getParam('email_address'),
        map_location: this.props.navigation.getParam('map_location'),
        img: this.props.navigation.getParam('img'),
        content: this.props.navigation.getParam('content'),
        title: this.props.navigation.getParam('title'),
    }

    static navigationOptions = {

    };

    render() {
        return (
            <Container>

                <Tabs>

                    <Tab heading="Tab1">
                        <Content>
                            {this.getresturants()}
                        </Content>
                    </Tab>

                    <Tab heading="Map">
                        <Content>
                            {this.getresturants()}
                        </Content>
                    </Tab>

                </Tabs>



                <Footer>
                    <FooterTab style={{ backgroundColor: "white", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Mother')}>
                            <Image source={require('./Icons/home.png')} style={{ height: 35, width: 35 }} />
                            <Text>HOME</Text>
                        </Button>
                        <Button vertical>
                            <Image source={require('./Icons/filter.png')} style={{ height: 35, width: 35 }} />
                            <Text>SEARCH</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('PlacesScreen', {
                            places: this.state.places,
                            restaurants: this.state.restaurants,
                            ToDo: this.state.ToDo
                        })}>
                            <Image source={require('./Icons/find-places.png')} style={{ height: 35, width: 35 }} />
                            <Text>PLACE</Text>
                        </Button>
                        <Button vertical>
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
    getresturants() {
        return (
            //  this.props.navigation.getParam('places').map((elements) => {
            this.state.restaurants.map((elements) => {

                return (
                    <View >
                        <Card >
                            <CardItem key={elements.id}>

                                <Left style={{ flex: 2 }}>

                                    <Image source={{ uri: elements.better_featured_image.source_url }}
                                        style={{ height: 200, width: 130, borderRadius: 10, }} />

                                </Left>
                                <Right style={{ flex: 3 }}>
                                    <Left >
                                        <Text style={{ fontSize: 20 }} > {elements.title.rendered}</Text>
                                        <Thumbnail source={require('./Icons/map-marker.png')}
                                            style={{ width: 20, height: 20 }} />

                                        <Text style={{ color: 'green' }} >{elements.acf.address}</Text>
                                    </Left>
                                    <Body style={{ justifyContent: "center", }}>
                                        <Text style={{ color: 'ffeeff', fontSize: 16 }} numberOfLines={6}>
                                            {elements.content.rendered}</Text>
                                        <Button rounded success style={{ justifyContent: "center", }}>
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
export default withNavigation(PlaceDetails);