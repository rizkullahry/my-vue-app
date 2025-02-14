<template>
    <div class="simple-card">
        <h2>Simple Card</h2>
        <p>This is a simple card with some text content.</p>
    </div>

    <div class="image-card">
        <img src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg"
            alt="Card Image" class="card-image"> 
        <div class="card-content">
            <h2>Image Card</h2>
            <p>This card includes an image at the top.</p>
        </div>
    </div>

    <div class="interactive-card">
        <h2>Interactive Card</h2>
        <p>This card changes color when you hover over it.</p>
    </div>

    <div class="transition-card" @mouseover="changeText" @mouseleave="resetText">
        <h2>Transition Card</h2>
        <p>{{ transitionText }}</p>
    </div>

    <Card title="This is card" content="This card uses props to display its content." /> <!--tambahkan card-->
</template>

<script setup lang="ts">
import { ref } from 'vue'; /*import ref dari vue*/
const transitionText = ref('This card has a smooth text transition.');

function changeText() {
    transitionText.value = 'The text has changed!';
}

function resetText() {
    transitionText.value = 'This card has a smooth text transition.';
}

import Card from './Card.vue';
</script>

<style>
.simple-card {
    border: 1px solid #ccc;
    /*garis tepi elemen*/
    border-radius: 8px;
    /*sudut elemen jadi melengkung*/
    padding: 16px;
    /*jarak antara konten dengan batas elemen*/
    box-shadow: 2px, 2px, 12px, rgba(0, 0, 0, 0.1);
    /*bayangan elemen*/
    max-width: 300px;
    /*lebar maksimum elemen*/
    margin: 16px;
    /*jarak antara elemen dengan elemen lainnya*/
}

.image-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    /*menghilangkan gambar yang keluar dari elemen*/
    max-width: 300px;
    margin: 16px;
}

.card-image {
    width: 100%;
    /*lebar gambar 100% dari elemen*/
    height: auto;
    /*tinggi gambar menyesuaikan lebar*/
}

.card-content {
    padding: 16px;
    /*jarak antara konten dengan batas elemen*/
}

.interactive-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 16px;
    transition: background-color 0.3s ease;
    /*transisi warna latar belakang*/
}

.interactive-card:hover {
    background-color: #f0f0f0;
    /*warna latar belakang saat dihover*/
}

.transition-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 16px;
}

.transition-card:hover {
    color: burlywood;
}
</style>