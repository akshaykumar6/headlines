import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Icon } from 'react-native';
import { connect } from 'react-redux';

class Footer extends Component {
	constructor(props){
		super(props);
		console.log("Inside Footer");
		console.log(props);

	}

	componentDidMount() {
		const { dispatch } = this.props
    console.log("Footer componentDidMount");
    // dispatch(fetchHeadlines())
  }

	render(){
		console.log("Rendering Footer");
		console.log(this.props);

		return (
			<View style={styles.container}>
        <TouchableOpacity >
          
        </TouchableOpacity>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
});

export default Footer;