<template>
  <div id="app">
    <button @click="openModal">Open Modal</button>

    <cute-modal name="modal-1">
      <template slot="header">
        <h3>I Love Kale</h3>
      </template>
      <p>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
        welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
      </p>
      <p>
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
        Dandelion cucumber earthnut pea peanut soko zucchini.
      </p>

      <hr>

      <button type="button" @click="secondAction">Another Modal?</button>
    </cute-modal>

    <cute-modal name="modal-2" width="150px">
      Second modal.
    </cute-modal>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    openModal () {
      this.$cuteModal.open('modal-1')
    },
    closeModal () {
      this.$cuteModal.hide('modal-1')
    },
    secondAction () {
      this.$cuteModal.open('modal-2')
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
}

h3 {
  margin: 5px 0;
}

.block {
  display: block;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
