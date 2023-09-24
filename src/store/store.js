import {ref,reactive} from 'vue';
import axios from 'axios'

const products = ref([])
const product = reactive({});
const item = ref(false);

function getProducts(){
    axios.get('https://dummyjson.com/products?limit=20')
        .then(res=>{
            products.value = res.data.products;
        });
}

function getProduct(id){
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res=>{
            product.title = res.data.title,
            product.price = res.data.price,
            product.brand = res.data.brand,
            product.thumbnail = res.data.thumbnail,
            product.description = res.data.description,
            item.value = true
        })
}

export {products, getProducts, getProduct,product,item}
