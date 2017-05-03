import React from 'react';
import { StyleSheet, Text, View, Picker, Item} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Picker>
          <Item  label="MikeZiccardi" value="MikeZiccardi" />
          <Item label="Amy" value="amy" />
          <Item label="tyler" value="tyler" />
          <Item label="kira" value="kira" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'magenta',
    flex:1,
    // color:'black',
  },
});
