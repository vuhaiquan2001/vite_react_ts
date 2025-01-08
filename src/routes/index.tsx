import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from '@/layout';
import NotFound from '@/app/pages/NotFound';
import { Form, Chart, Calendar, List, Map } from '@/routes/LazyComponents';
import { FallbackLoading } from '@/components/ui/FallbackLoading';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Chart />
                    </Suspense>
                ),
            },
            {
                path: 'home',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Chart />
                    </Suspense>
                ),
            },
            {
                path: 'today',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Form />
                    </Suspense>
                ),
            },
            {
                path: 'calendar',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <Calendar />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: <p>About</p>,
            },
            {
                path: 'list',
                element: (
                    <Suspense fallback={<FallbackLoading fullScreen={true} />}>
                        <List />
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
        ],
    },
]);
