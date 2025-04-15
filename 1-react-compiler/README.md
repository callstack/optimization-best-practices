# Part 1: React Compiler

This is example code for the "React Compiler" Best Practice chapter from the [Ultimate Guide to React Native Optimization](https://www.callstack.com/ebook/the-ultimate-guide-to-react-native-optimization).

## How to run it

1. Run `npm install`
1. Add following code to the app:

   Some state management:

   ```jsx
   const [value, setValue] = useState('');
   const [count, setCount] = useState(0);
   ```

   And inline components:

   ```jsx
   <View style={{padding: 10, backgroundColor: 'yellow'}}>
     <Pressable
       onPress={() => setCount(count + 1)}
       style={{padding: 10, backgroundColor: 'red'}}>
       <Text>Click me now and: {count}</Text>
     </Pressable>
   </View>
   ```

   ```jsx
   <TextInputComponent value={value} setValue={setValue} />
   ```

   ```jsx
   function TextInputComponent({
     value,
     setValue,
   }: {
     value: string,
     setValue: (text: string) => void,
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
   ```

1. Run `npm start` and `npm run android` or `npm run ios` to run the app
1. Open React Native DevTools and play with it, check Components tab, turn on "highlight updates". Run Profiler to see what changes.
1. Follow instructions in the chapter on how to add React Compiler.
1. Restart Metro devserver with `npm start -- --reset-cache`
1. Open DevTools again and see what changed
