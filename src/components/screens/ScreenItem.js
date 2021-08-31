import numeral from 'numeral';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, GETPRODUCT } from '../../store/reducers/productReducer';
import './screenItem.css';
import Header from './Header'
const ScreenItem = () => {
  const dispatch = useDispatch()

useEffect(() => {
    dispatch(GETPRODUCT())
}, []);
  const listProducts = useSelector(state => state?.productReducer?.listProducts)

    return (
      <div>
        <Header/>
      <div className="container">
        {listProducts?.map(product =>
        <div className="item">
        <ul >
          <div className="Image">
            <a href="#" title className="image">
              <img alt="Đồng hồ Jacques Lemans JL-11-1654.2ZD" className="lazy" 
              src={product.image} />
            </a> 
            <span className="top1"><span> - 20%</span></span>
          </div>
          <div className="info">
            <a href="#" title className="name">
              <h3>{product.name}</h3>
            </a>
            <div className="price">
              <p className="new">{numeral(product.price *120/100).format('0,0')} đ</p>
              <p className="old"> {numeral(product.price).format('0,0')} đ</p>
            </div>
            <a className="btnBuy" onClick= {() => {dispatch(addCart(product));alert('Thêm giỏ hàng thành công!')} }>Mua ngay</a>
          </div>
          </ul>
      </div>
          )}
      </div>
      </div>
    )
}

export default ScreenItem
