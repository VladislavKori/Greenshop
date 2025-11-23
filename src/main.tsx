import { createRoot } from 'react-dom/client';
import "./index.css";
import "./App.css";
import { Provider } from 'react-redux';
import store from '@application/store';
import { AppRouter } from "./ui/app/AppRouter"

createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
      <AppRouter />
    </Provider>
);
