import { Avatar, Button, Card, Flex, Form, Input, Modal, Table, Tag } from 'antd';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
// DATA example
const List: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, isLoading, error } = useQuery({
        queryKey: ['list'],
        queryFn: () => axios.get('/users'),
    });
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar: string) => <Avatar src={avatar} />,
        },

        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => <Tag color="blue">{dayjs(createdAt).format('DD/MM/YYYY')}</Tag>,
        },
    ];
    useEffect(() => {
        console.log(data);
    }, [data]);
    useEffect(() => {
        console.log(error);
    }, [error]);
    const onSearch = (value: string) => {
        const user = data?.data.find((user: any) => user.name.includes(value));
        console.log(user);
    };
    return (
        <Card
            title="List"
            extra={
                <Flex justify="end" gap={12}>
                    <Input.Search placeholder="Nhập để tìm kiếm" onSearch={onSearch} enterButton />
                    {/* Open modal */}
                    <Button type="primary" onClick={() => setIsModalOpen(true)}>
                        Thêm mới
                    </Button>
                </Flex>
            }
        >
            <Table dataSource={data?.data} key="id" columns={columns} loading={isLoading} bordered />
            <Modal title="Thêm mới" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
                <Form>
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default List;
