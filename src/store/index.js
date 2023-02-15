import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            cart: []
        }
    },
    mutations: {
        //Добавление товара в корзину. Если в корзине уже есть добавляемый товар, то у товара изменяется количество
        addToCart (state, payload) {
            let indexProduct = state.cart.findIndex((item) => item.id === payload.id);
            if (indexProduct === -1) {
                state.cart.push({...payload, count: 1})
            } else {
                ++state.cart[indexProduct].count
            }
            this.setLocal();
        },
        //Изменение количества
        changeCountProduct (state, payload){
            let product = state.cart.find((item) => item.id === payload.id)
            let productIndex = state.cart.findIndex((item) => item.id === payload.id)
            if (payload.count === -1) {
                --product.count
                if (product.count === 0) {
                    state.cart.splice(productIndex, 1);
                }
            } else {
                ++product.count
            }
            //Перезаписываем корзину в локал
            this.setLocal()
        },
        setLocal(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
})

export default store;