import { types } from 'mobx-state-tree';

const Todo = types
  .model({
    name: '欢迎光临',
    done: false,
  })
  .actions(self => {
    function setTitle(newTitle) {
      self.name = newTitle;
    }

    return {
      setTitle,
    };
  });

export default Todo;
