import { Form, Input, Button, Checkbox } from 'antd';
import styles from './index.less';

interface Props {
  isshow: boolean;
  event: (a: boolean) => void;
}
export default ({ isshow, event }: Props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className={isshow ? styles.registerForm : styles.hidden}
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      style={{ width: '100%' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="邮箱"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="repassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 7,
          span: 17,
        }}
      >
        <Button
          style={{ marginLeft: '0px' }}
          htmlType="submit"
          type="primary"
          block
          onClick={() => {
            event(true);
          }}
        >
          完成注册
        </Button>
      </Form.Item>
    </Form>
  );
};
