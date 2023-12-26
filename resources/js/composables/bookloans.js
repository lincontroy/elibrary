import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useBookLoans() {
    const bookLoans = ref([])
    const bookLoan = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getBookLoans = async (
        page = 1,
        search_id = '',
        search_title = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/bookloans?page=' + page +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                bookLoans.value = response.data;
            })
    }

    const getBookLoan = async (id) => {
        axios.get('/api/books/' + id)
            .then(response => {
                bookLoan.value = response.data.data;
            })
    }

    const storeBookLoan = async (user) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedPost = new FormData()
        for (let item in user) {
            if (user.hasOwnProperty(item)) {
                serializedPost.append(item, user[item])
            }
        }

        axios.post('/api/bookloans', serializedPost)
            .then(response => {
                router.push({name: 'bookloans.index'})
                swal({
                    icon: 'success',
                    title: 'Book Loan saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateBookLoan = async (book) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/bookloans/' + user.id, user)
            .then(response => {
                router.push({name: 'books.index'})
                swal({
                    icon: 'success',
                    title: 'Book Loan updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const returnBook = async (post) => {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, return it!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.put('/api/bookloans/' + post.id,post)
                        .then(response => {
                            getBookLoans()
                            router.push({name: 'bookloans.index'})
                            swal({
                                icon: 'success',
                                title: 'Book Loan returned successfully'
                            })
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })
    }

    return {
        bookLoans,
        bookLoan,
        getBookLoans,
        getBookLoan,
        storeBookLoan,
        updateBookLoan,
        returnBook,
        validationErrors,
        isLoading
    }
}
