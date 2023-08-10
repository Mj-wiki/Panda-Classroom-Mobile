import {
  DotLoading, Result, Space, Steps,
} from 'antd-mobile';
import { useCanSubscribeCourses } from '@/services/schedule';
import CourseList from './components/CourseList';
import style from './index.module.less';

const { Step } = Steps;

/**
* 预约课程
*/
const OrderCourse = () => {
  const { data, loading } = useCanSubscribeCourses();
  if (loading) {
    return (
      <Space justify="center">
        <DotLoading color="primary" />
      </Space>
    );
  }
  if (!data || data.length === 0) {
    return (
      <Result
        status="warning"
        title="没有可以约的课程"
      />
    );
  }
  return (
    <div className={style.container}>
      <Steps
        direction="vertical"
      >
        {data?.map((item) => (
          <Step
            title={item.name}
            key={item.id}
            description={item.courses ? (
              <CourseList
                dataSource={item.courses}
              />
            ) : null}
            icon={(
              <img
                className={style.logo}
                src={item.logo}
                alt="门店logo"
              />
            )}
          />
        ))}
      </Steps>
    </div>
  );
};

export default OrderCourse;
