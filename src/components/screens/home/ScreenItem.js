import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, GETPRODUCT, LOAD_MORE, PAGINATIONPRODUCT } from '../../../store/reducers/productReducer';
import './screenItem.css';
import Header from '../layouts/Header'
const ScreenItem = () => {
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch()
  useEffect(() => {
      // dispatch(GETPRODUCT())
      // dispatch(PAGINATIONPRODUCT({page:page, limit:limit}))
      dispatch(LOAD_MORE({page:page, limit:limit}));
  }, []);
  const loadmore =() =>{
    dispatch(LOAD_MORE({page:page + 1, limit:limit}));

  }
  const listProducts = useSelector(state => state?.productReducer?.listProducts);
  const loading = useSelector(state => state?.productReducer?.isloading);

    return (
      <div id='home-product'>
        <Header/>
        <div className="container">
          {listProducts?.map(product => 
            <div className="item">
              <div className="Image">
                <a href="#" title className="image">
                  <img alt={product.name} className="lazy" 
                  src={product.image} />
                </a> 
                <span className="top1"><span> - 20%</span></span>
              </div>
              <div className="info">
                <p className="infor-title">24mm | 3ATM | Sapphire</p>
                <a href="#" title className="name">
                  <h3>{product.name}</h3>
                </a>
                <div className="price">
                  <p className="new">{numeral(product.price *120/100).format('0,0')} đ</p>
                  <p className="old"> {numeral(product.price).format('0,0')} đ</p>
                </div>
                <a className="btnBuy" onClick= {() => {dispatch(addCart(product));alert('Thêm giỏ hàng thành công!')} }>Mua ngay</a>
              </div>
          </div>
            )}
            </div>
            <div className="text-center">
              <button type="button" className =" btn btn-primary m-5" 
                  onClick={()=> loadmore()}>
                  {loading === true ? 
                  <div className="loader"></div> : <span>Xem Thêm</span>}
                </button>
              </div>
      </div>
    )
}

export default ScreenItem
