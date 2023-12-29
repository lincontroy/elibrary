<template>
      <div class="wrapper">
     <nav class="navbar navbar-expand-md navbar-dark navbar-dark">
            <div class="container">
                <a href="" class="navbar-brand"> 
                    <span class="brand-text font-weight-light"><b>Elibrary</b></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <!-- Left navbar links -->
                    <ul class="navbar-nav  ml-auto">
                        <li class="nav-item">
                            <router-link to="/admin" class="nav-link">
                                <span class="d-none d-sm-inline ps-2">Dashboard</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/users" class="nav-link">
                                <span class="d-none d-sm-inline ps-2">Users</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/books" class="nav-link">
                                <span class="d-none d-sm-inline ps-2">Books</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/bookloans" class="nav-link">
                                <span class="d-none d-sm-inline ps-2">Book Loans</span>
                            </router-link>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    </div>
</template>

<script setup>
import {computed} from "vue";
import { useStore } from 'vuex';
import useAuth from "@/composables/auth";
import LocaleSwitcher from "../../components/LocaleSwitcher.vue";

    const store = useStore();
    const user = computed(() => store.state.auth.user)
    const {processing, logout} = useAuth();
</script>

<style scoped>

</style>
