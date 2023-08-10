import {
  Button, Divider, Selector, Tabs,
} from 'antd-mobile';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useSchedulesByCourse } from '@/services/schedule';
import { getWeekZh } from '@/utils';
import { useUseCards } from '@/services/card';
import style from './index.module.less';
import ConsumeCard from '../ConsumeCard';

interface IProps {
  courseId: string;
}

/**
* 预约课程弹窗
* 可以选择课程表和消费卡
*/
const SubscribePopup = ({
  courseId,
}: IProps) => {
  const { data } = useSchedulesByCourse(courseId);
  const { data: cards } = useUseCards(courseId);
  const [selectSchedule, setSelectSchedule] = useState<string[]>([]);
  const [selectCard, setSelectCard] = useState<string[]>([]);

  const weeks = useMemo(() => {
    const w = [];
    // 循环出未来的七天，按照周一，周二
    for (let i = 1; i < 8; i += 1) {
      const day = dayjs().add(i, 'day');
      const week = getWeekZh(day.format('dddd'));
      const times = data?.filter((item) => day.isSame(item.schoolDay, 'day'));
      const orderTimes = times?.map((time) => ({
        label: `${time.startTime.slice(0, 5)}-${time.endTime.slice(0, 5)}`,
        value: time.id,
      }));
      w.push({
        weekLabel: week,
        weekValue: day.format('dddd'),
        orderTimes,
      });
    }
    return w;
  }, [data]);

  const newCards = useMemo(() => cards?.map((item) => ({
    label: <ConsumeCard dataSource={item} />,
    value: item.id,
  })), [cards]);
  console.log('weeks', selectSchedule, weeks, selectCard);
  return (
    <div className={style.container}>
      <Divider>请选择预约时间</Divider>
      <Tabs>
        {weeks.map((week) => (
          <Tabs.Tab title={week.weekLabel} key={week.weekValue}>
            <Selector
              columns={3}
              options={week.orderTimes || []}
              onChange={(arr) => setSelectSchedule(arr)}
            />
          </Tabs.Tab>
        ))}
      </Tabs>
      <Divider>请选择消费卡</Divider>
      <Selector
        columns={1}
        onChange={(arr) => setSelectCard(arr)}
        options={newCards || []}
      />
      <Divider />
      <Button
        color="primary"
        className={style.button}
      >
        立即预约
      </Button>
    </div>
  );
};

export default SubscribePopup;
