<template>
   <button @click="auth">Authorize</button>
</template>

<script>
import axios from 'axios'
import {auth} from '../netlify/auth'

export default {
    name: 'Authorize',

    methods: {
        auth
    }
}
</script>