<template>
    <div class="row justify-content-center my-5">
        <div class="col-md-10">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Book Name</label>
                            <input v-model="post.name" id="name" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.name }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="publisher" class="form-label">Publisher</label>
                            <input v-model="post.publisher" id="publisher" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.publisher }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.publisher">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="isbn" class="form-label">Isbn</label>
                            <input v-model="post.isbn" id="isbn" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.isbn }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.isbn">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="category" class="form-label">Category</label>
                            <v-select multiple v-model="post.category" :options="roleList" :reduce="role => role.id" label="category" class="form-control" />
                            <div class="text-danger mt-1">
                                {{ errors.category }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.category">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="sub_category" class="form-label">Sub Category</label>
                            <v-select multiple v-model="post.sub_category" :options="roleList" :reduce="role => role.id" label="subcategory" class="form-control" />
                            
                            <div class="text-danger mt-1">
                                {{ errors.sub_category }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.sub_category">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea v-model="post.description" id="description" type="text" class="form-control"></textarea>
                            <div class="text-danger mt-1">
                                {{ errors.description }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.description">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="pages" class="form-label">Pages</label>
                            <input v-model="post.pages" id="pages" min="1" type="number" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.pages }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.pages">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="pages" class="form-label">Quantity</label>
                            <input v-model="post.quantity" id="quantity" min="1" type="number" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.quantity }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.quantity">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input v-on:change="post.imagefile" id="image"  type="file" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.pages }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.image">
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

    const { roleList, getRoleList } = useRoles();
    const { storeBook, validationErrors, isLoading } = useBooks();

    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules";
    defineRule('required', required);
    defineRule('min', min);

    // Define a validation schema
    const schema = {
        name: 'required',
        publisher: 'required',
        isbn: 'required',
        // sub_category: 'required',
        // category: 'required',
        description: 'required',
        pages: 'required', 
        quantity:'required',
        
    }
    // Create a form context with the validation schema
    const { validate, errors } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: name } = useField('name', null, { initialValue: '' });
    const { value: publisher } = useField('publisher', null, { initialValue: '' });
    const { value: isbn } = useField('isbn', null, { initialValue: '' });
    const { value: quantity } = useField('quantity', null, { initialValue: '' });
    const { value: sub_category } = useField('sub_category', null, { initialValue: '' });
    const { value: category } = useField('category', null, { initialValue: '' });
    const { value: description } = useField('description', null, { initialValue: '' });
    const { value: pages } = useField('pages', null, { initialValue: '' });
    const post = reactive({
        name,
        publisher,
        isbn,
        sub_category,
        category,
        description,
        pages,
        quantity
    })
    function submitForm() {
        validate().then(form => { if (form.valid) storeBook(post) })
    }
    onMounted(() => {
        getRoleList()
    })
</script>
