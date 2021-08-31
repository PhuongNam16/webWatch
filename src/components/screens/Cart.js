import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header'
const Cart = () => {
    const Cart = useSelector(state => state?.productReducer?.listCart)
  return (
    <div>
    <Header/>
    <div className ="container">
       {Cart.length> 0?
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên SP</th>
            <th scope="col">Ảnh SP</th>
            <th scope="col">SL</th>
            <th scope="col">Giá</th>
            <th scope="col">Thành Tiền</th>
            <th scope="col">Chức Năng</th>
          </tr>
        </thead>
        <tbody>
        {Cart?.map((cart, index) => (
          <tr key={cart._id}>
            <th scope="row">{index+1}</th>
            <td >{cart.name}</td>
            <td ><img src={cart.image} style={{width : '100px', height : '100px'}}/></td>
            <td >1</td>
            <td >{cart.price} VNĐ</td>
            <td>{cart.price *1} VNĐ</td>
            <td><button>Del</button></td>
          </tr>))}
        </tbody>
      </table>: <h1>Bạn chưa có sản phẩm nào</h1>}
    </div>

    </div>
  );
};
export default Cart;
