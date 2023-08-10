import { SearchBar } from 'antd-mobile';

import style from './index.module.less';
import TypeSelect from './components/TypeSelect';

/**
* 精选课程
*/
const Home = () => {
  const onSearchHandler = () => {

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
