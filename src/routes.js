import { Route } from 'react-router';

// Import views here
import App from './containers/App';
import TodoApp from './components/todo';

export const routes = {
  component: App,
  childRoutes: [
    { path: '/', component: TodoApp }
  ]
};
