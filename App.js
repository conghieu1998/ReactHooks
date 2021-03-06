import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import List from './src/components/List';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <List />
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;
