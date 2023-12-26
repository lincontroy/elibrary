import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useBooks() {
    const BookList = ref({})
    const books = ref([])
    const book = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    


    const getBookList = async () => {
        axios.get('/api/books')
            .then(response => {
                BookList.value = response.data.data;
            })
    }

    const getBooks = async (
        page = 1,
        search_id = '',
        search_title = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/books?page=' + page +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                books.value = response.data;
            })
    }

    const getBook = async (id) => {
        axios.get('/api/books/' + id)
            .then(response => {
                book.value = response.data.data;
            })
    }

    const storeBook = async (user) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedPost = new FormData()
        for (let item in user) {
            if (user.hasOwnProperty(item)) {
                serializedPost.append(item, user[item])
            }
        }

        axios.post('/api/books', serializedPost)
            .then(response => {
                router.push({name: 'books.index'})
                swal({
                    icon: 'success',
                    title: 'Book saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateBook = async (book) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/books/' + user.id, user)
            .then(response => {
                router.push({name: 'books.index'})
                swal({
                    icon: 'success',
                    title: 'Book updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteBook = async (id) => {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/books/' + id)
                        .then(response => {
                            getBooks()
                            router.push({name: 'books.index'})
                            swal({
                                icon: 'success',
                                title: 'Book deleted successfully'
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
        books,
        book,
        getBookList,
        BookList,
        getBooks,
        getBook,
        storeBook,
        updateBook,
        deleteBook,
        validationErrors,
        isLoading
    }
}
