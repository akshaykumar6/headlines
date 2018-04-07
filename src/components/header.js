import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props){
		super(props);
		console.log("Inside Header");
		console.log(props);

	}

	componentDidMount() {
		const { dispatch } = this.props
    console.log("Header componentDidMount");
    // dispatch(fetchHeadlines())
  }

	render(){
		console.log("Rendering Header");
		console.log(this.props);

		return (
			<View style={styles.container}>
        <TouchableOpacity >
          <Text style={{color: '#fff', fontSize: 28}}>
            Headlines
          </Text>
        </TouchableOpacity>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50
  }
});

export default Header;