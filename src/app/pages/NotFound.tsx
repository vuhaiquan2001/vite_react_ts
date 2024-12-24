import { Button, Flex, theme, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <Flex vertical justify="center" align="center" style={{ height: '100vh', backgroundColor: theme.useToken().token.colorBgContainer }}>
            <Typography.Title level={2}>404 - Không tìm thấy trang</Typography.Title>
            <Typography.Text>Trang bạn đang tìm kiếm không tồn tại.</Typography.Text>
            <Button type="primary" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
                Trở về trang chủ
            </Button>
        </Flex>
    );
}

export default NotFound;
