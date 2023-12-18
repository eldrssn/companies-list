import 'normalize.css';
import { Provider } from 'react-redux';

// import { List } from './components/list';
import store from './store';
import './styles/global.scss';
import { Header } from './components/common/header';
import { Main } from './components/main';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
