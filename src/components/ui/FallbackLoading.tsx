import { Spin } from 'antd';

export const FallbackLoading = ({ fullScreen }: { fullScreen?: boolean }) => {
    return <Spin fullscreen={fullScreen} />;
};
