import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../components/Store';

const Todo = () => {
  const store = useStore();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10rem',
      }}
    >
      <div>
        <input
          placeholder="input"
          value={store.getTodo}
          onChange={(e) => (store.todoSetter(e.target.value))}
        />
        <button onClick={() => store.todo.length !== 0 && store.setTodo()}>
          Add
        </button>
      </div>
      <div>
        {store.todoList.map((t) => {
          return (
            <div key={t.id}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => store.setDone(t.id)}
              />
              <label>{t.text}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(Todo);
