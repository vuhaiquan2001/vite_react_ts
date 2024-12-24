import { ShowAntdFormState } from '@/components';
import { Form, Input, message, notification, Select } from 'antd';

function Home() {
    const [form] = Form.useForm();
    const handleShow = () => {
        notification.success({ message: 'abc' });
        message.success('Oke');
    };
    return (
        <div>
            <Form form={form} layout="vertical" initialValues={{ name: 'Quân' }}>
                <Form.Item name="name" label="Text input">
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Form.Item name="description" label="Text area">
                    <Input.TextArea placeholder="Nhập mô tả" />
                </Form.Item>
                <Form.Item name="select" label="Select">
                    <Select
                        allowClear
                        showSearch
                        options={[
                            { label: 'Nam', value: 'male' },
                            { label: 'Nữ', value: 'female' },
                        ]}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        filterOption={(input: string, option: any) => {
                            return (
                                option?.label?.toLowerCase().includes(input.toLowerCase()) || option?.value?.toLowerCase().includes(input.toLowerCase()) // Tìm theo label // Tìm theo value
                            );
                        }}
                        placeholder="Chọn giới tính"
                    />
                </Form.Item>
                <ShowAntdFormState form={form} showErrors={true} />
            </Form>
            <div onClick={handleShow}>Show</div>
        </div>
    );
}

export default Home;
