import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import AntdProvider from '@/setting/AntdProvider';
function App() {
    // Other context here
    return (
        <AntdProvider>
            <RouterProvider router={router} />
        </AntdProvider>
    );
}

export default App;
