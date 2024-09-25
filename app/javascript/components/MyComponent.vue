<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <div class="list-container" v-if="isVisible">
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.text }}</li>
      </ul>
    </div>
    <div class="input-container">
      <input v-model="title">
    </div>
    <div class="button-container">
      <button @click="toggleVisibility">See More</button>
      <button v-on:click="createAlert">Show Me!</button>
    </div>
    <div class="message-container" v-bind:class="{ isItalic: isItalic }">
      <h3>{{ message }}</h3>
      <button @click="changeToItalic">Change My Style!</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        title: 'Lorem Ipsum',
        isVisible: false,
        isItalic: true,
        message: `"Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        list: [
          { id: 1, text: 'Lorem ipsum dolor sit amet' },
          { id: 2, text: 'consectetur adipiscing elit' },
          { id: 3, text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        ]
      }
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      },
      createAlert(){
        alert(this.title);
      },
      changeToItalic(){
        this.isItalic = !this.isItalic;
      }
    }
  }
</script>

<style scoped>
h2 {
  margin-bottom: 1.25rem;
}

.my-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-container {
  display: flex;
  gap: 0.625rem;
  margin: 0.625rem 0;
}

.input-container {
  margin: 0.625rem 0;
}

.list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.list-container ul {
  list-style: none;
  padding: 0;
}

.list-container li {
  margin: 0.25rem 0;
  text-align: center;
}

.isItalic {
  font-style: italic;
}

.message-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
}
</style>
