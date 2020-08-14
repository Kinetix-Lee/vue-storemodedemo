# vue-storemodedemo
A simple demonstration of the store mode for Vue.js. 

## Introduction
This demo shows a simple usage of the store mode in Vue.js, which helps exchanging information between multiple components. 

Edit content in the input box, and as you can see, the contents shown by each component changes. 

That's because the two components imports the same "store", to read and write the same variable. Thus the same information can be used by different components by importing the same "store". 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
