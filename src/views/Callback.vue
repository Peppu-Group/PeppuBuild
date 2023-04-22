<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script>
import { authorise } from '../netlify/auth'

export default {
  name: 'Callback',
  mounted() {
    return authorise.call()
  }
}
</script>
