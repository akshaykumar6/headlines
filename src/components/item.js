import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Image } from 'react-native';

class Item extends Component {
	constructor(props){
		super(props);
		console.log("Inside Item");
		console.log(this.props);
	}

	render(){
		console.log("Render Item");
		console.log(this.props.item);
		item = this.props.item;
		date = new Date(item.publishedAt)
    imageUrl = item.urlToImage;
    if (!imageUrl) {
      imageUrl = "https://knolskape-website.s3.amazonaws.com/misc/akshay_sharma/2017/12/20/55/alp-web-banner.jpg"
    }

    return (
      <TouchableHighlight>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image 
              style={styles.itemBanner} 
              source={{uri: imageUrl}} 
            />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemTitle}>
              {item.title}
            </Text>
            <Text style={styles.itemContent}>
              {item.description}
            </Text>
          </View>
          <View style={styles.itemSubtitleContainer}>
            <View >
              <Text style={styles.itemRightSubtitle}>
                {date.toLocaleTimeString()} | {item.source.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.26
  },
  itemTextContainer: {
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 10
  },
  itemBanner: { 
    height: 120,
    left: 0,
    right: 0,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  itemSubtitleContainer: {
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
    flex: 1, 
    flexDirection: 'row-reverse'
  },
  itemRightSubtitle: {
    paddingHorizontal: 10,
    fontStyle: 'italic',
    textAlign: 'right',
    fontSize: 14,
  },
  itemContent: {
    fontSize: 16,
    marginVertical: 5,
    color: '#000'
  }
});



export default Item;