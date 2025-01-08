import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import AntdProvider from '@/setting/AntdProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// query client
const queryClient = new QueryClient();
function App() {
    // Other context here
    return (
        <QueryClientProvider client={queryClient}>
            <AntdProvider>
                <RouterProvider router={router} />
            </AntdProvider>
        </QueryClientProvider>
    );
}

export default App;
