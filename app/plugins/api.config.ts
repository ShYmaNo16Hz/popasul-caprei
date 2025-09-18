import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: 'blabla',
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json"
        }
    })

    nuxtApp.provide('api', api)
})