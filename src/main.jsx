import { Provider } from 'react-redux';
import { store } from './RTK-Store/store.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>

)
