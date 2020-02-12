import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent} 
          />

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {

  }
});
