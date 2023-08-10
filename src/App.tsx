import { useQuery, useMutation } from '@apollo/client';
import {
  Button, Form, Input, Calendar,
} from 'antd-mobile';
import { useEffect } from 'react';

import { FIND, UPDATE } from './graphql/demo';

import './App.css';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'cb71e40d-9f15-40ef-a137-1acaa38831f4',
    },
  });

  const [update] = useMutation(UPDATE);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark',
    );
  }, []);

  const onClickHandler = (v: any) => {
    update(
      {
        variables: {
          id: 'cb71e40d-9f15-40ef-a137-1acaa38831f4',
          params: {
            ...v,
          },
        },
      },
    );
  };

  return (
    <div>
      <Calendar
        selectionMode="single"
        onChange={(val) => {
          console.log(val);
        }}
      />
      <p>
        data:
        {JSON.stringify(data)}
      </p>
      <p>
        loading:
        {`${loading}`}
      </p>
      <Form
        layout="horizontal"
        onFinish={onClickHandler}
        footer={(
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
      )}
      >
        <Form.Item
          name="name"
          label="姓名"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="desc"
          label="描述"
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
