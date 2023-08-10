import { SearchBar } from 'antd-mobile';

import { useProducts } from '@/services/product';
import TypeSelect from './components/TypeSelect';

import style from './index.module.less';

/**
* 精选课程
*/
const Home = () => {
  useProducts();
  const onSearchHandler = (val: string) => {
    console.log('val', val);
  };

  const onTypeChangeHandler = (key: string) => {
    console.log('key', key);
  };

  return (
    <div className={style.container}>
      <SearchBar
        placeholder="搜索课程试试"
        onSearch={onSearchHandler}
      />
      <TypeSelect onChange={onTypeChangeHandler} />
    </div>
  );
};

export default Home;
