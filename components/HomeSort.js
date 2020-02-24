import * as React from 'react';
import { ButtonGroup } from 'react-native-elements';

export default class HomeSort extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render () {
    const buttons = ['最新', '人気', 'おすすめ']
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{width: '100%', height: 50, padding: 0, margin: 0}}
      />
  );
  }
}
