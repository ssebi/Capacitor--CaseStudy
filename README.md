# Capacitor--CaseStudy
Testing out a simple Capacitor Integration

# About
This is a very simple app created with Ionic and React
Its main functionality is to read the contacts from iOS native and relay them back to the app
You just need to tap the `Get Contacts` button and you should see a list of your contacts after you've given access

There's an additional button that only sends a message to the native code and the native code sends it back

The first button can even be ignored, it only counts the taps

<img width="588" alt="Screenshot 2023-05-13 at 17 17 39" src="https://github.com/ssebi/Capacitor--CaseStudy/assets/9042985/ee6b44bd-7dd8-46c4-852a-5931044e55dd">

# Run instructions
After cloning the app run the following commands:

```ruby
cd SampelApp

npm install

npm run build

ionic capacitor copy ios

ionic capacitor update

ionic capacitor run ios
```
