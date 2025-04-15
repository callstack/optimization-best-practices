import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const number = 123456.789;
  const germanFormat = new Intl.NumberFormat('de-DE');
  const formattedText = germanFormat.format(number);

  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: '5%',
            paddingBottom: '5%',
          }}>
          <Text>Input text: {number}</Text>
          <Text>Formatted text in de-DE: {formattedText}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
