# Part 3: Use Dedicated React Native SDKs over web

This is example code for the "Use Dedicated React Native SDKs over web" Best Practice chapter from the [Ultimate Guide to React Native Optimization](https://www.callstack.com/ebook/the-ultimate-guide-to-react-native-optimization).

## How to run it

1. Run `npm install`
1. Run `bundle` to produce `out.jsbundle` file:
   ```sh
   npx react-native bundle --platform android --entry-file index.js --bundle-output out.jsbundle --dev false --minify false
   ```
1. Run `hermesc` to produce `index.android.bundle` Hermes bytecode file:
   ```sh
   node_modules/react-native/sdks/hermesc/osx-bin/hermesc -emit-binary -max-diagnostic-width=80 -O -w -out index.android.bundle out.jsbundle
   ```
1. Run `ls -AlFh out.jsbundle index.android.bundle` and inspect the size
1. Check the `index.js` file and look for unnecessary imports based on guide instructions and remove them.
1. Repeat running `bundle` and `hermesc`
1. Run `ls -AlFh out.jsbundle index.android.bundle` again and compare the sizes
   Before:

   ```
   2.3M Apr 15 18:59 index.android.bundle
   3.5M Apr 15 18:58 out.jsbundle
   ```

   After:

   ```
   2.1M Apr 15 19:01 index.android.bundle
   3.2M Apr 15 19:01 out.jsbundle
   ```
