import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from 'mobx';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export class Store {
  @observable
  todoList: Todo[] = [];
  @observable
  todo: string = '';
  constructor() {
    makeObservable(this);
    autorun(() => {
      console.log('Energy level:', store);
    });
    this.setupReactions();
  }
  @action
  public async reset() {
    // Placeholder
    this.todo = '';
    return Promise.resolve();
  }
  @computed
  public get getTodo() {
    return this.todo;
  }
  @action
  public todoSetter(text: string) {
    this.todo = text;
  }

  @computed
  public get todos() {
    return this.todoList;
  }

  public setupReactions() {
    console.log('adasdad');
    reaction(
      () => {
        console.log('reaction 121212122121');
        return {
          todoList: this.todoList,
          todo: this.todo,
        };
      },
      (data) => {
        console.log(data, 'data');
      }
    );
  }

  public setDone(id: Number) {
    runInAction(() => {
      this.todoList.map((t) => (t.id === id ? (t.done = !t.done) : null));
    });
  }
  public setTodo() {
    runInAction(() => {
      this.todoList.push({ id: Math.random(), done: false, text: this.todo });
      this.reset();
    });
  }
}
const store = new Store();
export default store;
