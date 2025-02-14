<template>
    <div class="card">
        <h2>{{ title }}</h2> <!--tampilkan title-->
        <p>{{ content }}</p> <!--tampilkan content-->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CardProps } from './Card'; // import CardProps dari Card.vue
defineProps<{
    title: string
    content: string
}>() // defineProps dengan tipe data title dan content bertipe string
// const Props = withDefaults(defineProps<CardProps>(), { 
//     title: 'Card Title',
//     content: 'Card Content',
// }); // defineProps dengan tipe data CardProps dan nilai default title dan content
// console.log(Props.title); // tampilkan title
// defineProps<CardProps>() // defineProps dengan tipe data CardProps

</script>

<style>
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 16px;
}
</style>