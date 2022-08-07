import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Khai báo global state
    count: 1,
    todos: [
      { index: 1, name: 'task 1', done: true },
      { index: 2, name: 'task 2', done: false },
      { index: 3, name: 'task 3', done: true },
      { index: 4, name: 'task 4', done: false },
    ],

    products: [
      {
          id: 1,
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
          price: 32990000,
          quantity: 566,
      },
      {
          id: 2,
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
      },
      {
          id: 3,
          name: 'iPhone 11 Chính hãng',
          image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
          price: 16690000,
          quantity: 0,
      },
      {
          id: 4,
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
          price: 12190000,
          quantity: 1023,
      },
      {
          id: 5,
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 6,
      }
  ],
  carts:[],
  totalMoney :0,


  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosIndex: (state,getters)=> (index)=>{
      return getters.doneTodos.find(todo => todo.index === index)
    }
  },
  mutations: {
    // Khai báo mutations
    increment(state, input){
      state.count += input.number
      console.log(input.text);
    },

    addproduct(state, value){
      let check = false
      state.totalMoney = 0;
      if (value.quantity > 0) {
          if (state.carts.length > 0) {
              for (let i = 0; i < state.carts.length; i++) {
                  if (value.id === state.carts[i].id) {
                    state.carts[i].quantityCart = parseInt(state.carts[i].quantityCart) + 1
                    state.carts.push([])
                    state.carts.pop()
                      break
                  } else {
                      check = true
                  }
              }
              if (check) {
                  value.quantityCart = 1;
                  state.carts.push(value)
              }
          } else {
              value.quantityCart = 1;
              state.carts.push(value)
          }
      } else {
          alert("Sản phẩm hết hàng")
      }
      for (let i = 0; i < state.carts.length; i++) {
        state.totalMoney += state.carts[i].quantityCart * state.carts[i].price
      }
    },

    destroy(state,value){
        state.totalMoney = 0;
        state.carts.splice(value, 1);
        for (let i = 0 ; i < state.carts.length;i++){
          state.totalMoney += state.carts[i].quantityCart * state.carts[i].price
        }
    },

    updateMoney(state,value){
      if(state.carts[value].quantityCart <= 0){
        state.carts.splice(value, 1);
      }
      state.totalMoney = 0;
      for (let i = 0 ; i < state.carts.length;i++){
        state.totalMoney += state.carts[i].quantityCart*state.carts[i].price
      }
  },
  }
})

export default store