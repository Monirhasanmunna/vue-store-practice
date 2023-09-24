<script setup>
    import { useRoute } from 'vue-router';
    import { onBeforeMount,ref,reactive } from 'vue';
    import axios from 'axios'
    import {getProduct,product,item,clearItem} from '../store/store'

    const router = useRoute();
    const id = `${router.params.id}`

    onBeforeMount(()=>{
        clearItem()
        getProduct(id)
    });

</script>

<template>
    <div class="row mt-3" v-if="item == true">
        <div class="col-12">
            <div class="card" style="width: 100%;">
            <img class="card-img-top" :src="product.thumbnail" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text">Brand : {{ product.brand }}</p>
                <p class="card-text">Price : {{ product.price }}</p>
            </div>
            </div>
        </div>
    </div>

    <div class="col-12" v-else>
        <div class="text-center">
            <h4>..........Loading............</h4>
        </div>
    </div>
</template>

<style scoped>
    img{
        width: 100%;
        height: 600px;
        border: 1px solid rgb(196, 196, 196);
    }

    h4{
        font-size: 30px;
        color: rgba(0, 0, 0, 0.368);
    }
</style>