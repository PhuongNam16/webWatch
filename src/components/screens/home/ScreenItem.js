import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, GETPRODUCT, PAGINATIONPRODUCT } from '../../../store/reducers/productReducer';
import './screenItem.css';
// import Pagination from '@material-ui/lab/Pagination';
import Header from '../layouts/Header'
const ScreenItem = () => {
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(5);
  const dispatch = useDispatch()
  useEffect(() => {
      // dispatch(GETPRODUCT())
      dispatch(PAGINATIONPRODUCT({page:page, limit:limit}))
  }, []);
  const listProducts = useSelector(state => state?.productReducer?.listProducts)

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
              <p>24mm | 3ATM | Sapphire</p>
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
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => dispatch(PAGINATIONPRODUCT({page:1, limit:limit}))}>1</a></li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => dispatch(PAGINATIONPRODUCT({page:2, limit:limit}))}>2</a></li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => dispatch(PAGINATIONPRODUCT({page:3, limit:limit}))}>3</a></li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => dispatch(PAGINATIONPRODUCT({page:4, limit:limit}))}>4</a></li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => dispatch(PAGINATIONPRODUCT({page:5, limit:limit}))}>5</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
            {/* <button onClick={() => dispatch(PAGINATIONPRODUCT({page:page, limit:limit}))}>page</button> */}
      </div>
    )
}

export default ScreenItem
