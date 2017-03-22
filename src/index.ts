import { List, Set } from "immutable";
import { createStore } from 'redux';

enum ArticleActions {
  ADD_TODO,
  DEL_TODO
};

interface IArticle {
  id: number,
  title: string;
  value: number;
}

enum ModeShowButton {
  SHOW,
  NOT
}

interface IState {
  articles?: List<IArticle>;
  visibilityButton: ModeShowButton;
};

const initialState: IState = {
  articles: List.of({id: 1, title: 'Доширак', value: 231}),
  visibilityButton: ModeShowButton.NOT
}

type IAddArticle = {
  type: ArticleActions;
  article: IArticle;
};

type IDelArticle = {
  type: ArticleActions;
  id: number;
};

type IAction = IAddArticle & IDelArticle;

const addArticle = (article: IArticle): IAddArticle => ({ type: ArticleActions.ADD_TODO, article });

const delArticle = (id: number): IDelArticle => ({ type: ArticleActions.DEL_TODO, id });

function articles(state: List<IArticle> = initialState.articles, action: IAction){
  switch(action.type){
    case ArticleActions.ADD_TODO:
      return state.push(action.article)
    default:
      return state
  }
}

let store = createStore(articles, initialState.articles);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addArticle({id: 2, title: 'Сосиски', value: 500}));
store.dispatch(addArticle({id: 3, title: 'Майонез', value: 350}));
store.dispatch(addArticle({id: 4, title: 'Вилки', value: 100}));
store.dispatch(addArticle({id: 5, title: 'Вилки', value: 100}));
console.log(initialState)

