import { useState, useEffect } from 'react';

import style from './index.module.less';

/**
* 我的课程表
*/
const MyCourse = () => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return (<div className={style.container}>sss</div>);
};

export default MyCourse;
