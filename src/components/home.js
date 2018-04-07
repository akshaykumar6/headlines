import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import {setCountryForHeadlines, setCategoryForHeadlines} from '../actions'

import ArticleList from './articleList';
import ModalDropdown from 'react-native-modal-dropdown';
import {countries} from '../constants/countries';
import {categories} from '../constants/categories';

class Home extends Component {
	constructor(props){
		super(props);
		console.log("Inside Home");
		console.log(props);
    this.updateCountry = this.updateCountry.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    
	}

  updateCountry(index, value){
    const { dispatch } = this.props
    dispatch(setCountryForHeadlines(value));
  }

  updateCategory(index, value){
    const { dispatch } = this.props
    dispatch(setCategoryForHeadlines(value));
  }


	componentDidMount() {
		const { dispatch } = this.props
    console.log("Home componentDidMount");
    // dispatch(fetchHeadlines())
  }

	render(){
		console.log("Rendering Home11");
		console.log(this.props);
    console.log(countries);
    let keyString = `${this.props.headlines.country}_${this.props.headlines.category}`

    return(
      <View style={styles.container}>
        <View style={{flex: 0.7, backgroundColor: '#fff'}} >
           <View style={styles.filterContainer}>
            <View style={{flexGrow: 1}}>
              <ModalDropdown 
                style={{height: 50, width: 100, paddingHorizontal: 10, paddingVertical: 5}}
                textStyle={{fontSize: 20}}
                dropdownTextStyle={{fontSize: 20}}
                dropdownStyle={{flex: 1, width: 200}}
                defaultValue={this.props.headlines.country} 
                options={countries}
                onSelect={this.updateCountry}
              />
            </View>
            <View style={{flexGrow: 1}}>
              <ModalDropdown 
                style={{height: 50, width: 200, paddingHorizontal: 10, paddingVertical: 5}}
                textStyle={{fontSize: 20}}
                dropdownTextStyle={{fontSize: 20}}
                dropdownStyle={{flex: 1, width: 200}}
                defaultValue={this.props.headlines.category} 
                options={categories}
                onSelect={this.updateCategory}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 10}} >
          <ArticleList key={keyString}  />
        </View>
      </View>
    ) 
	}
}


       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    shadowColor: '#e3e3e3',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.4
  }
});


const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Home);