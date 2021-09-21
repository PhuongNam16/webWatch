import { Button } from '@material-ui/core';
import numeral from 'numeral';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../store/reducers/counterReducer';
import { deletedCart } from '../../../store/reducers/productReducer';
import Header from '../layouts/Header'

const Cart = () => {
  const dispatch = useDispatch();
    const Cart = useSelector(state => state?.productReducer?.listCart)
    const Sum = useSelector(state => state?.productReducer?.sum)
    const Count = useSelector(state => state?.counterReducer?.value)
  return (
    <div>
    <Header/>
    <div className ="container ">
       {Cart.length> 0?
        <div class="table-responsive table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl">
      <table className="table text-center">
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
            <td >
            <div className ="d-flex ">
              <Button onClick={()=> dispatch(decrement())}>-</Button>
              <p>{Count}</p>
              <Button onClick={()=> dispatch(increment())}>+</Button>
            </div>
            </td>
            <td >{numeral(cart.price).format('0,0')} VNĐ</td>
            <td>{numeral(cart.price *1).format('0,0')} VNĐ</td>
            <td><button type="button" class="btn btn-danger" onClick={() => dispatch(deletedCart(cart._id))}>Xóa</button></td>
          </tr>))}
        </tbody>
      </table><h1 style={{fontSize:'30px'}}>Tổng Tiền : {numeral(Sum).format('0,0')} VNĐ</h1>
      </div>: <h1>Bạn chưa có sản phẩm nào</h1>
      }
    </div>

    </div>
  );
};
export default Cart;
