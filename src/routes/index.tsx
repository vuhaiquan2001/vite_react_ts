import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from '@/layout';
import NotFound from '@/app/pages/NotFound';
import { Form, Map, Chart } from '@/routes/LazyComponents';
import { FallbackLoading } from '@/components/ui/FallbackLoading';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            // <Suspense fallback={<FallbackLoading fullScreen={true} />}>
            <MainLayout />
            // </Suspense>
        ),
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <p>Home</p>,
            },
            {
                path: 'home',
                element: <p>Home</p>,
            },
            {
                path: 'form',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Form />
                    </Suspense>
                ),
            },
            {
                path: 'chart',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Chart />
                    </Suspense>
                ),
            },
            {
                path: 'map',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Map />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: <p>About</p>,
            },
        ],
    },
]);
