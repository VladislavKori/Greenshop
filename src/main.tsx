import { createRoot } from 'react-dom/client';
import "./index.scss";
import "./App.scss";
import { Provider } from 'react-redux';
import store from '@application/store';
import { AppRouter } from "./ui/app/AppRouter"

createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
      <AppRouter />
    </Provider>
);
