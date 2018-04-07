import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import {countries, callingCountries, lookup} from 'country-data';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {setCountryForHeadlines, setCategoryForHeadlines} from '../actions'

import ArticleList from './articleList';
import ModalDropdown from 'react-native-modal-dropdown';
import {supportedCountries} from '../constants/countries';
import {categories} from '../constants/categories';

class Home extends Component {
	constructor(props){
		super(props);
		console.log("Inside Home22");
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

  renderCountryRow(option,index,isSelected){
    console.log("renderCountryRow")
    console.log(option)
    let opt = option.toUpperCase();
    let country = countries[opt];
    let countryText = `${country.emoji} - ${country.name}`
    return (
      <View>
        <Text style={styles.optionText} > {countryText}</Text>
      </View>
    )
  }

  renderCategoryRow(option,index,isSelected){
    console.log("renderCategoryRow")
    console.log(option)
    categoryName = `${option[0].toUpperCase()}${option.substr(1)}` 
    return (
      <View>
        <Text style={styles.optionText}> {categoryName}</Text>
      </View>
    )
  }


	componentDidMount() {
		const { dispatch } = this.props
    console.log("Home componentDidMount");
    // dispatch(fetchHeadlines())
  }

	render(){
		console.log("Rendering Home11");
		console.log(this.props);
    // console.log(supportedCountries);
    let keyString = `${this.props.headlines.country}_${this.props.headlines.category}`

    let country = countries[this.props.headlines.country.toUpperCase()];
    let countryText = `${country.emoji} ${country.name}`
    let catStr= this.props.headlines.category
    let categoryName = `${catStr[0].toUpperCase()}${catStr.substr(1)}` 

    return(
      <View style={styles.container}>
        <View style={{flex: 0.7, backgroundColor: '#fff'}} >
           <View style={styles.filterContainer}>
            <View style={{flexGrow: 1, borderRightWidth: 1, borderRightColor: '#e3e3e3'}}>
              <ModalDropdown 
                style={{height: 60, width: 200, paddingHorizontal: 10, paddingVertical: 5}}
                textStyle={{fontSize: 20}}
                dropdownTextStyle={{fontSize: 20}}
                dropdownStyle={{flex: 1, width: 250, height: 300}}
                defaultValue={this.props.headlines.country} 
                options={supportedCountries}
                renderRow={this.renderCountryRow.bind(this)}
                onSelect={this.updateCountry}>
                <View style={styles.dropdownSelectedStyle}>
                  <Text 
                  style={{fontSize: 20, paddingHorizontal: 5}} 
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                    {countryText} 
                  </Text>
                  <Ionicons name='ios-arrow-down' size={20} color="#000" />
                </View>
              </ModalDropdown>
            </View>
            <View style={{flexGrow: 1}}>
              <ModalDropdown 
                style={{height: 50, width: 200, paddingHorizontal: 10, paddingVertical: 5}}
                textStyle={{height: 50, fontSize: 20}}
                dropdownTextStyle={{fontSize: 20}}
                dropdownStyle={{flex: 1, width: 250}}
                defaultValue={this.props.headlines.category} 
                options={categories}
                renderRow={this.renderCategoryRow.bind(this)}
                onSelect={this.updateCategory}
              >
                <View style={styles.dropdownSelectedStyle}>
                  <Text 
                  style={{fontSize: 20, paddingHorizontal: 5}} 
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                    {categoryName} 
                  </Text>
                  <Ionicons name='ios-arrow-down' size={20} color="#000" />
                </View>
              </ModalDropdown>
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
  },
  optionText: {
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  dropdownSelectedStyle: {
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});


const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Home);