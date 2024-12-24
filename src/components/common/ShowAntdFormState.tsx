import { Form, FormInstance } from 'antd';
import React from 'react';

interface ShowAntdFormStateProps {
    form: FormInstance;
    showErrors?: boolean;
}

const ShowAntdFormState: React.FC<ShowAntdFormStateProps> = ({ form, showErrors }) => {
    return (
        <Form.Item noStyle shouldUpdate>
            {() => {
                const formValues = form.getFieldsValue();
                const formErrors = form.getFieldsError();
                return (
                    <pre>
                        <div>Form values: {JSON.stringify(formValues, null, 2)}</div>
                        <hr />
                        {showErrors && <div>Form errors: {JSON.stringify(formErrors, null, 2)}</div>}
                    </pre>
                );
            }}
        </Form.Item>
    );
};

export default ShowAntdFormState;
