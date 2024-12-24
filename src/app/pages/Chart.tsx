import React from 'react';
import { Line, Pie, Bar, RadialBar, Column, Area, Scatter, Funnel, Treemap } from '@ant-design/charts';
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
    const dataTree = {
        name: 'root',
        children: [
            { name: 'Tên 1', value: 560 },
            { name: 'Tên 2', value: 500 },
            { name: 'Tên 3', value: 150 },
            { name: 'Tên 4', value: 140 },
            { name: 'Tên 5', value: 115 },
            { name: 'Tên 6', value: 95 },
            { name: 'Tên 7', value: 90 },
            { name: 'Tên 8', value: 75 },
            { name: 'Tên 9', value: 98 },
            { name: 'Tên 10', value: 60 },
            { name: 'Tên 11', value: 45 },
            { name: 'Tên 12', value: 40 },
            { name: 'Tên 13', value: 40 },
            { name: 'Tên 14', value: 35 },
            { name: 'Tên 15', value: 40 },
            { name: 'Tên 16', value: 40 },
            {
                name: 'Tên 17',
                value: 40,
                children: [
                    { name: 'Tên 17.1', value: 10 },
                    { name: 'Tên 17.2', value: 10 },
                ],
            },
            { name: 'Tên 18', value: 30 },
            { name: 'Tên 19', value: 28 },
            {
                name: 'Tên 20',
                value: 16,
                children: [
                    { name: 'Tên 20.1', value: 10 },
                    { name: 'Tên 20.2', value: 10 },
                ],
            },
        ],
    };
    return (
        <Row style={{ width: '100%', height: '100%' }}>
            <Col span={12}>
                <Line data={data} xField="year" yField="value" theme={isDarkMode ? 'classicDark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Pie data={data} xField="year" yField="value" theme={isDarkMode ? 'classicDark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Bar data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <RadialBar data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Column data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Area data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Scatter data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Funnel data={data} xField="year" yField="value" theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
            <Col span={12}>
                <Treemap data={dataTree} valueField="value" colorField="value" scale={{ value: { sync: true } }} theme={isDarkMode ? 'dark' : 'classic'} />
            </Col>
        </Row>
    );
};

export default Chart;
