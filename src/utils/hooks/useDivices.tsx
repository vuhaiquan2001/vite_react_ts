// hook check device screen => mobile, tablet, desktop
import { useEffect, useState } from 'react';

export const useDeviceScreen = () => {
    const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
    useEffect(() => {
        const width = window.innerWidth;
        if (width < 768) setDevice('mobile');
        else if (width < 1024) setDevice('tablet');
        else setDevice('desktop');
        // size change
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width < 768) setDevice('mobile');
            else if (width < 1024) setDevice('tablet');
            else setDevice('desktop');
        });
        return () => {
            window.removeEventListener('resize', () => {});
        };
    }, []);
    return device;
};
