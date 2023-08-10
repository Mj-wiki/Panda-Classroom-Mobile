import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { FIND, UPDATE } from './graphql/demo';

import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'cb71e40d-9f15-40ef-a137-1acaa38831f4',
    },
  });

  const [update] = useMutation(UPDATE);

  const onChangeNameHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setName(v.target.value);
  };

  const onChangeDescHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(v.target.value);
  };

  const onClickHandler = () => {
    update(
      {
        variables: {
          id: 'cb71e40d-9f15-40ef-a137-1acaa38831f4',
          params: {
            name,
            desc,
          },
        },
      },
    );
  };

  return (
    <div>
      <p>
        data:
        {JSON.stringify(data)}
      </p>
      <p>
        loading:
        {`${loading}`}
      </p>
      <p>
        name:
        <input onChange={onChangeNameHandler} />
      </p>
      <p>
        desc:
        <input onChange={onChangeDescHandler} />
      </p>
      <p>
        <button type="button" onClick={onClickHandler}>更新</button>
      </p>
    </div>
  );
};

export default App;
