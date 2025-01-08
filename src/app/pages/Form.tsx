import { ShowAntdFormState } from '@/components';
import { Button, Col, DatePicker, Flex, Form, Input, message, notification, Radio, Row, Select } from 'antd';

function Home() {
    const [form] = Form.useForm();
    const handleShow = () => {
        notification.success({ message: 'abc' });
        message.success('Oke');
    };
    return (
        <div>
            <Form form={form} layout="vertical">
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Tên"
                            name="name"
                            rules={[
                                { min: 2, max: 50, message: 'Độ dài không hợp lệ' },
                                { required: true, message: 'Vui lòng nhập tên' },
                            ]}
                        >
                            <Input placeholder="Nhập tên" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                {
                                    pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                                    message: 'Số điện thoại không hợp lệ!',
                                },
                                { required: true, message: 'Vui lòng nhập số điện thoại' },
                            ]}
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email" name="email" rules={[{ type: 'email', message: 'Email không hợp lệ!' }]}>
                            <Input placeholder="Nhập email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Giới tính" name="gender">
                            <Select
                                allowClear
                                showSearch
                                placeholder="Chọn giới tính"
                                options={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Ngày sinh" name="birthday">
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Địa chỉ" name="address">
                            <Input placeholder="Nhập địa chỉ" />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.List name="hobbies" initialValue={['abc', 'def']}>
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields?.map((field) => (
                                            // Hidden when more than 10 items
                                            <Flex key={field.key} gap={16} style={{ marginBottom: 10, width: '100%' }}>
                                                <Button onClick={() => add()}>Thêm sở thích</Button>
                                                <Form.Item key={field.key} name={field.name} style={{ width: '100%' }}>
                                                    <Input placeholder="Nhập sở thích" />
                                                </Form.Item>
                                                <Button
                                                    disabled={fields.length === 1}
                                                    onClick={() => {
                                                        if (fields.length > 1) {
                                                            remove(field.name);
                                                        }
                                                    }}
                                                >
                                                    Xóa sở thích
                                                </Button>
                                            </Flex>
                                        ))}
                                    </div>
                                );
                            }}
                        </Form.List>
                    </Col>

                    <Col span={24}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>

                <ShowAntdFormState form={form} showErrors={false} />
            </Form>
            <Button onClick={handleShow}>Show notification</Button>
        </div>
    );
}

export default Home;
