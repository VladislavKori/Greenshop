import { createRoot } from 'react-dom/client';
import "./index.scss";
import "./App.scss";
import { AppRouter } from "./ui/app/AppRouter"
import { StoreProvider } from '@ui/app/StoreProvider';
import { AuthModalsProvider } from '@ui/app/AuthModalsProvider';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <AuthModalsProvider>
      <AppRouter />
    </AuthModalsProvider>
  </StoreProvider>
);
