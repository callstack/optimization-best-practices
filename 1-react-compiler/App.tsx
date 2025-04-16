import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: '5%',
            paddingVertical: '5%',
          }}>
          <CountButton count={count} setCount={setCount} />
          <TextInputComponent value={value} setValue={setValue} />
        </View>
      </ScrollView>
    </View>
  );
}

function CountButton({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <View style={{padding: 10, backgroundColor: 'yellow'}}>
      <Pressable
        onPress={() => setCount(count + 1)}
        style={{padding: 10, backgroundColor: 'cyan'}}>
        <Text>Click me: {count}</Text>
      </Pressable>
    </View>
  );
}

function TextInputComponent({
  value,
  setValue,
}: {
  value: string;
  setValue: (text: string) => void;
}) {
  return (
    <>
      <Text>Here's my value: {value}</Text>
      <TextInput
        onChangeText={text => {
          setValue(text);
        }}
        value={value}
      />
    </>
  );
}

export default App;
