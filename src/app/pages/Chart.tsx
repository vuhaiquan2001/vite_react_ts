import React from 'react';
import { Line, Pie } from '@ant-design/charts';
import { Col, Row } from 'antd';
import { useTheme } from '@/setting/AntdProvider';

const Chart: React.FC = () => {
    const { isDarkMode } = useTheme();
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    return (
        // Responsive
        <Row style={{ width: '100%', height: '100%' }}>
            <Col xs={24} md={12}>
                <Line data={data} xField="year" yField="value" theme={isDarkMode ? 'classicDark' : 'classic'} />
            </Col>
            <Col xs={24} md={12}>
                <Pie data={data} xField="year" yField="value" theme={isDarkMode ? 'classicDark' : 'classic'} />
            </Col>
        </Row>
    );
};

export default Chart;
