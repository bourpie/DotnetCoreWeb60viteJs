<script setup>
    import './hello.scss'
    const props = defineProps({
        message: {
            type: String,
            default: 'Hello'
        }
    })

</script>

<template>
    <h1 class="display-4">{{props.message}}</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
</template>

<style>
    .display-4 {
        font-size: 3.5rem !important;
    }
</style>