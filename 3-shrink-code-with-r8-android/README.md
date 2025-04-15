# Part 3: Shrink Code with R8 on Android

This is example code for the "Shrink Code with R8 on Android" Best Practice chapter from the [Ultimate Guide to React Native Optimization](https://www.callstack.com/ebook/the-ultimate-guide-to-react-native-optimization).

## How to run it

1. Run `npm install`
1. Open "How to analyze app bundle size" guide in Part 3 of the Guide.
1. Follow instructions on how to run Ruler plugin by Spotify
1. Run:
   ```sh
    cd android
    ./gradlew analyzeReleaseBundle
   ```
   to generate app bundle size report
1. Now go back to "Shrink Code with R8 on Android" and apply R8
1. Run `analyzeReleaseBundle` Gradle task again and compare results
