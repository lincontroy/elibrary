<template>
    
</template>

<script setup>
    import { computed } from "vue";
    import useAuth from "@/composables/auth";

    const { user, processing, logout } = useAuth();
    const currentPageTitle = computed(() => { return this.$route.meta.title})

</script>
