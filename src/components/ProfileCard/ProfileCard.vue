<template>
    <div class="profile-card">
        <div class="profile-card--background">
            <img loading="lazy" :src="dataProfileSection.header.image" />
            <span class="profile-card--name"> <!--tanpa span gbs style name-->
                {{ dataProfileSection.name }}
            </span>
            <span class="profile-card--location"> <!--tanpa span gbs style name-->
                {{ dataProfileSection.location }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { dataProfileSection } from '@/components/ProfileCard/types/ProfileCard';
</script>

<style scoped lang="scss">
@use "./style/profile-card"
</style>