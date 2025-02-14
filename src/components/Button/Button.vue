<template>
    <button class="button" disabiled @click="onclick()">
        <slot>
            <Icon></Icon>
            <span v-if="label">
                {{ label }}
            </span>
        </slot>
    </button>
</template>
<script setup lang="ts">
import { ButtonProps } from './types/Button';

withDefaults(defineProps<ButtonProps>()){
    outline: false,
    smal
}
</script>

<style scoped lang="scss">

</style>