import { GET_CAN_SUBSCRIBE_COURSES, GET_SCHEDULES_BY_COURSE, SUBSCRIBE_COURSE } from '@/graphql/schedule';
import { TBaseQuery, TOrgsQuery, TSchedulesQuery } from '@/utils/types';
import { useMutation, useQuery } from '@apollo/client';

// 获取我的可以约的课程
export const useCanSubscribeCourses = () => {
  const { loading, data } = useQuery<TOrgsQuery>(GET_CAN_SUBSCRIBE_COURSES);

  return {
    loading,
    data: data?.getCanSubscribeCourses.data,
  };
};

// 获取我的可以约的某个课程的课程表
export const useSchedulesByCourse = (courseId: string) => {
  const { loading, data } = useQuery<TSchedulesQuery>(GET_SCHEDULES_BY_COURSE, {
    variables: {
      courseId,
    },
  });

  return {
    loading,
    data: data?.getSchedulesByCourse.data,
  };
};

// 立即预约课程
export const useSubscribeCourse = () => {
  const [subscribe, { loading }] = useMutation<TBaseQuery>(SUBSCRIBE_COURSE);

  const subscribeHandler = async (
    scheduleId: string,
    cardId: string,
  ) => {
    const res = await subscribe({
      variables: {
        scheduleId,
        cardId,
      },
    });
    return res.data?.subscribeCourse;
  };

  return {
    subscribe: subscribeHandler,
    loading,
  };
};
