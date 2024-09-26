<template>
  <div class="app-container">
    <h1>Hello Vue!</h1>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'App',
  components: {
    MyComponent
  }
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem;
}

:root {
  --background-color: #1d1e22;
  --text-color: #d4d4dc;
  --highlight-color: #feda6a;
  --button-hover-color: #e6c55f;
  --input-background: #393f4d;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

h1 {
  color: var(--highlight-color);
  font-style: italic;
  margin: 0;
}

p {
  color: var(--input-background);
}

button {
  background-color: var(--highlight-color);
  padding: 0.5rem 2rem;
  min-width: 10rem;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: var(--button-hover-color);
  color: var(--input-background);
}

input {
  background: var(--input-background);
  border: none;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  text-align: center;
}
</style>
