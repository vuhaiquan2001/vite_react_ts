import { createRoot } from 'react-dom/client';
import '@/setting/index.scss';
import App from './App.tsx';
import setupAxios from '@/setting/AxiosSetup';

setupAxios();
createRoot(document.getElementById('root')!).render(<App />);
