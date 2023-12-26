<template>
    <div class="row justify-content-center my-5">
        <div class="col-md-10">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="username" class="form-label">UserName</label>
                            <v-select v-model="post.username" :options="userList" :reduce="user => user.id" label="name" class="form-control"/>
                          
                            <div class="text-danger mt-1">
                                {{ errors.username }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.username">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="bookname" class="form-label">Bookname</label>
                            <select class="form-control" v-model="post.bookname" >
            
                                <option v-for="option in BookList" v-bind:value="option.id" >{{ option.name }}</option>
                            </select>
                            <div class="text-danger mt-1">
                                {{ errors.bookname }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.bookname">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                       
                       
                        <div class="mb-3">
                            <label for="loandate" class="form-label">Loan date</label>
                            <input v-model="post.loandate" type="date" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.loandate }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.loandate">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="days" class="form-label">Number of days</label>
                            <input v-model="post.days" min="1" type="number" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.days }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.days">
                                    {{ message }}
                                </div>
                            </div>
                        </div> 
                        <!-- Buttons -->
                        <div class="mt-4">
                            <button :disabled="isLoading" class="btn btn-primary">
                                <div v-show="isLoading" class=""></div>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Save</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, reactive } from "vue";
    import useRoles from "@/composables/roles";
    import useBooks from "@/composables/books";
    import useUsers from "@/composables/users";
    import useBookLoans from "@/composables/bookloans";

    const { roleList, getRoleList } = useRoles();
    const { userList, getUserList } = useUsers();
    const { storeBookLoan,isLoading} = useBookLoans();
    const { storeBook, validationErrors,BookList,getBookList,getBooks,books } = useBooks();


    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules";
    defineRule('required', required);
    defineRule('min', min);

    // // Define a validation schema
    const schema = {
        username: 'required',
        bookname: 'required',
        loandate: 'required',
        days: 'required',     
    }
    // // Create a form context with the validation schema
    const { validate, errors } = useForm({ validationSchema: schema })
    // // Define actual fields for validation
    const { value: username } = useField('username', null, { initialValue: '', label: 'name' });
    const { value: bookname } = useField('bookname', null, { initialValue: '', label: 'name' });
    const { value: loandate } = useField('loandate', null, { initialValue: '' });
    const { value: days } = useField('days', null, { initialValue: '' });
    const post = reactive({
        username,
        bookname,
        loandate,
        days,

    })
    function submitForm() {
        validate().then(form => { if (form.valid) 
            
            storeBookLoan(post)
        
        })
    }
    onMounted(() => {
        getRoleList(),
        getUserList(),
        getBookList()
    })
  
</script>
