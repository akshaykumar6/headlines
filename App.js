import React, { Component } from 'react';
import { WebView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, TouchableHighlight,  TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import Main from './src/components/main'


const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    console.disableYellowBox = true;
    return (
        <Provider store={store}>
          <Main />
        </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center'
  }
});