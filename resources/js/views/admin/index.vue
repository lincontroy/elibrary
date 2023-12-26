<template>
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- small card -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>
                        {{totalusers.total_users}}
                    </h3>

                    <p>Total users</p>
                </div>
                <div class="icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small card -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3> {{ totalbooks.total_books}} </h3>

                    <p>Total Books</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small card -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>
                    {{totalloans.total_loans}}
                    
                    </h3>

                    <p>Books on Loan</p>
                </div>
                <div class="icon">
                    <i class="fas fa-user-plus"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small card -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>0</h3>

                    <p>Expenses</p>
                </div>
                <div class="icon">
                    <i class="fas fa-chart-pie"></i>
                </div>
            </div>
        </div>
        <!-- ./col -->
    </div>

</template>

<script setup>
import {ref, onMounted, watch} from "vue";
import useHome from "../../composables/home";
import {useAbility} from '@casl/vue'

const {users, getTotalBooks, totalbooks,getTotalUsers,totalusers,getTotalLoans,totalloans} = useHome()
const {can} = useAbility()
onMounted(() => {
    getTotalBooks(),
    getTotalUsers(),
    getTotalLoans()

})


</script>

<style scoped>

</style>
