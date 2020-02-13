import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: [
        {
          name:'Stewed Mushrooms',
          image: require("../asset/namkho.jpg"),
          rating: 3,
          price: "$12"
        },
        {
          name:'Jackfruit Fried',
          image: require("../asset/mitkho.jpg"),
          rating: 5,
          price: "$15"
        },
        {
          name:'Noodles',
          image: require("../asset/hutieu.jpg"),
          rating: 4,
          price: "$20"
        },
        {
          name:'Beef',
          image: require("../asset/cuonlalot.jpg"),
          rating: 2,
          price: "$12"
        },
        {
          name:'Salad dressing',
          image: require("../asset/cuondiep.jpg"),
          rating: 5,
          price: "$13"
        },
      ]
    }
  }

  _rating(item){
    let rating = [];
    for (i=0;i<item;i++) {
      rating.push(
        <Image 
          source={require('../asset/star.png')}
          style={{width: 15, height: 15, marginRight: 3}} 
          resizeMode='cover' />
      )
    }
    return rating;
  }

  renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        tyle={styles.item}>

        <View style={styles.image_container}>
          <Image source={item.image} style={styles.image} />
        </View>

        <View style={styles.content}>
          <Text style={styles.bane}>{item.name}</Text>
          <View style={styles.rating}>
            {this._rating(item.rating)}
          </View>
          <View style={styles.price_container}>
            <View style={styles.price}>
              <Text style={styles.textPrice}>{item.price}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => this.props.navigation.navigate('DetailScreen', {
            image: item.image,
            price: item.price,
            name: item.name
          })}>
          <AntDesign 
            name="arrowRight"
            color="green"
            size={15}  
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{ height: 10 }} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent} 
            showsVerticalScrollIndicator={false}
          />

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row'
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 50
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
  }
});
