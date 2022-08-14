export default {
    namespaced: true,
    state: {
      // Khai báo state
      title:'Quản lý hoá đơn',
      tableData: [{
        id: 'KM-1',
        user: 'Tom',
        product: 'Tom, Tép, Cua, Cá',
        total: '10000000đ'
      }, {
        id: 'KM-2',
        user: 'Hoàng',
        product: 'Tép, Cua, Cá, Iphone 13',
        total: '100000000đ'
      }, {
         id: 'KM-3',
        user: 'Đào',
        product: 'Tép, Cua, Cá, Iphone 14',
        total: '200000000đ'
      }]
    },
    getters: {
      // Khai báo getters
    },
    mutations: {
      updateTitle(state){
        state.title = 'Đã chuyển'
      }
    },
  }