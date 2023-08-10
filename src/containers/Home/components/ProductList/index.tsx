import { useState, useEffect } from 'react';
import { useProducts } from '@/services/product';
import { Grid, PullToRefresh } from 'antd-mobile';
import ProductCard from '../ProductCard';
import style from './index.module.less';

/**
* 商品列表
*/
const ProductList = () => {
  const [state, setState] = useState();
  const { data } = useProducts();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return (
    <div className={style.container}>
      <PullToRefresh>
        <Grid columns={2} gap={10}>
          {
        data?.map((item) => (
          <Grid.Item key={item.id}>
            <ProductCard data={item} />
          </Grid.Item>
        ))
      }
        </Grid>
      </PullToRefresh>
    </div>
  );
};

export default ProductList;
