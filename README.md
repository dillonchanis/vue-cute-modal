# vue-cute-modal

[![NPM version](https://img.shields.io/npm/v/vue-cute-modal.svg?style=for-the-badge&colorA=6F213F&colorB=F66D9B)](https://www.npmjs.com/package/vue-cute-modal)

A simple and easy to use Modal component for Vue applications.

## Features

- Simple API
- Customizable modal classes
- Customizable Vue transition name
- Name component whatever you like!

## Install

```bash
npm i vue-cute-modal

yarn add vue-cute-modal
```

For In-DOM templates include the JS CDN and optionally the CSS in your project:
CDN: TODO

## Usage

[![Edit Cute Modal](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/m7p485mwoj)

### Setup

Include the plugin at the root of your application

```javascript
import CuteModal from 'vue-cute-modal'

Vue.use(CuteModal)
```

### Creating a Modal

Simply create your modal in your Vue app:

```html
<cute-modal name="example">
  Your modal content.
</cute-modal>
```

Then open/hide the modal within the app:

```javascript
// Opens the modal
this.$cuteModal.open('example')

// Hides the modal
this.$cuteModal.hide('example')
```

### Basic Example

```html
<template>
  <div>
    <button @click="open">Open Modal</button>
    <cute-modal name="hello">
      Hello World!
    </cute-modal>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      this.$cuteModal.open('hello')
    }
  }
}
</script>

<!-- import CSS through SCSS or Link to compiled CSS whichever you prefer -->
<!-- or use your own custom styles! -->
<style>
/* ... */
</style>
```

### Customizing the Component

The plugin comes with some base styles and classes. These may not fit your project and you may wish to override. We can do this via global settings or props.

To override defaults globally pass in the configuration object when you register the component to `Vue.use()`:

```javascript
/** Default Settings */
const DEFAULT_OPTIONS = {
  body: 'cute-modal__body',
  container: 'cute-modal__container',
  footer: 'cute-modal__footer',
  header: 'cute-modal__header',
  height: 'auto',
  overlay: 'cute-modal__overlay',
  transition: 'modal',
  width: '600px'
}

Vue.use(CuteModal, {
  // Override the component's name to match your app's
  // Default 'cute-modal' = <cute-modal>
  component: '',

  // Override the component's base classes to match your app's
  body: '',
  container: '',
  footer: '',
  header: '',
  overlay: ''

  // Set default width and heights for all your modals
  height: '',
  width: '',

  // Set the transition name to use custom Vue transitions
  // This will be set as the transition's name <transition name="...">
  transition: ''
})
```

Alternatively, you could pass props separately to each component. **Note that these will override the globally set options**.

```html
<cute-modal width="350px" headerClass="is-header">
  <!-- -->
</cute-modal>
```

## API

### Props

Full prop list

| Name      | Required | Type          | Description |
| ---       | ---      | ---           | ---         |
| name      | true     | String        | Name of your modal
| containerClass | false | String | Class name for container of modal
| footerClass | false | String | Modal footer class name
| headerClass | false | String | Modal header class name
| height | false | String | Set the height of the modal
| overlayClass | false | String | Overlay class name
| transition | false | String | Name for Vue transition
| wdith | false | String | Set the width of the modal

### Methods

```javascript
// Open a Modal
this.$cuteModal.open(/* modal name */)

// Close a Modal
this.$cuteModal.hide(/* modal name */)
```


## Development Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```
