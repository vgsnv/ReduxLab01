// const ADD_TODO = 'ADD_TODO';

enum Actions {ADD_TODO, DEL_TODO};

interface IAddTodo {
  type: Actions;
  text: string;
};

interface IDelTodo {
  type: Actions;
  id: number;
};

const addTodo = (text: string): IAddTodo => ({ type: Actions.ADD_TODO, text });

const delTodo = (id: number): IDelTodo => ({ type: Actions.DEL_TODO, id });