import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Footer from './footer';
import Header from './header';
import Home from './home';


class Main extends Component {
	constructor(props){
		super(props);
		console.log("Inside Main");
		console.log(props);
	}

	componentDidMount() {
		const { dispatch } = this.props
    console.log("Main componentDidMount");
    // dispatch(fetchHeadlines())
  }

  render(){
    console.log("Rendering Main");
    console.log(this.props);

    return(
      <View style={styles.container}>
        <View style={{flex: 2, backgroundColor: '#014473'}} >
          <Header />
        </View>
        <View style={{flex: 11}} >
          <Home {...this.props}/>
        </View>
      </View>
    ) 
  }
}


       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Main);
