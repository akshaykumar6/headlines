import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from './item';
import {fetchHeadlines} from '../actions'
import { Provider, connect } from 'react-redux';

class ArticleList extends Component {
	constructor(props){
		super(props);
		console.log("Inside ArticleList");
		console.log(props);

		this.renderItem = this.renderItem.bind(this);
		this.keyExtractor = this.keyExtractor.bind(this);

    const { dispatch } = this.props
    dispatch(fetchHeadlines())
	}

	componentDidMount() {
    console.log("ArticleList componentDidMount");
  }

  componentWillReceiveProps(){
    
  }

	renderItem(obj){
		console.log("Rendering renderItem");
		return (
			<Item {...obj} />
		)
	}

	keyExtractor(item, index){
    return index;
  }

	render(){
		console.log("Rendering ArticleList");
		console.log(this.props);

		return (
			<View style={styles.container}>
        <FlatList
            data={this.props.headlines.articles}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
      </View>
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
    backgroundColor: '#fff',
    padding: 10
  },
  itemBanner: { 
    height: 200,
    left: 0,
    right: 0,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  itemSubtitle: {
    fontSize: 14,
    marginVertical: 2,
    fontStyle: 'italic',
    color: '#000'
  },
  itemContent: {
    fontSize: 16,
    marginVertical: 5,
    color: '#000'
  }
});

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(ArticleList);