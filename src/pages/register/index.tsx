import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import './index.css'

type FieldType = {
    username?: string;
    password?: string;
    avatar?: string;
    email?: string;
    phone?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('注册失败！');
};

const Register = () => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <div className="register-main">
            {contextHolder}
            <div className="register-form">
                <h2>注册新用户</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    style={{ maxWidth: 500 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '用户名不能为空！' }]}
                    >
                        <Input style={{ backgroundColor: 'transparent', border: '1px, solid, #ccc' }} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '密码不能为空！' }]}
                    >
                        <Input.Password style={{ backgroundColor: 'transparent', border: '1px, solid, #ccc' }} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="邮箱"
                        name="email"
                    >
                        <Input style={{ backgroundColor: 'transparent', border: '1px, solid, #ccc' }} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="手机号"
                        name="phone"
                    >
                        <Input style={{ backgroundColor: 'transparent', border: '1px, solid, #ccc' }} />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Register;
