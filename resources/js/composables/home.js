import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useHome() {
    const totalbooks = ref([])
    const totalusers = ref([])
    const totalloans = ref([])
    const bookLoan = ref({
        name: ''
    })

    const router = useRouter()

    const getTotalBooks = async (
      
    ) => {
        axios.get('/api/totalbooks')
            .then(response => {
                totalbooks.value = response.data;
            })
    }

    const getTotalUsers = async (
      
        ) => {
            axios.get('/api/totalusers')
                .then(response => {
                    totalusers.value = response.data;
                })
        }

        const getTotalLoans = async (
      
            ) => {
                axios.get('/api/totalloans')
                    .then(response => {
                        totalloans.value = response.data;
                    })
            }
    return {
        getTotalBooks,
        totalbooks,
        getTotalUsers,
        totalusers,
        totalloans,
        getTotalLoans

    }
}