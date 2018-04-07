import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoadingScreen extends Component {
	constructor(props){
		super(props);
		console.log("Inside LoadingScreen");
		console.log(props);
	}

	componentDidMount() {
		const { dispatch } = this.props
    console.log("LoadingScreen componentDidMount");
    // dispatch(fetchHeadlines())
  }

  render(){
    console.log("Rendering LoadingScreen");
    console.log(this.props);
    return(
      <View style={styles.container}>
        <Icon name="newspaper-o" size={50} color="#e3e3e3" />
        <Text style={{padding: 10}}>
          Getting some fresh news for you...
        </Text>
          

      </View>
    ) 
  }
}


       
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default LoadingScreen;
