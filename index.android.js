import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class LotteryNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: ""
    };
  }

  getNumber() {
    return Math.floor(Math.random() * 49 + 1);
  }

  generateNumbers() {
    var numbers = new Set();
    for (var i = 0; i < 6; i++) {
      do {
        var num = this.getNumber();
      } while (numbers.has(num));
      numbers.add(num);
    }
    return Array.from(numbers).join('  ');
  }

  onPressButton() {
    this.setState({
      numbers: this.generateNumbers()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button}
          onPress={this.onPressButton.bind(this)}
          title="Generate Numbers!"
        />
        <Text style={styles.numbers}>
          {'\n'}{this.state.numbers}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    color: "#841584",
    fontSize: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  numbers: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
  },
});

AppRegistry.registerComponent('LotteryNumbers', () => LotteryNumbers);
