import { Form, Input, Button, Checkbox } from 'antd';
import styles from './index.less';
import { userLogin } from '@/service/base';
import { history } from 'umi';
import { useRef } from 'react';
interface Props {
  isshow: boolean;
  event: (a: boolean) => void;
}
export default ({ isshow, event }: Props) => {
  const formRef = useRef(null);
  // const {run:login,data,loading} = useRequest(userLogin,{ manual: true })
  const onFinish = async (values: any) => {
    const res = await userLogin({ username: values.username, password: values.password });
    console.log(res);
    if (res?.token) {
      localStorage.setItem('token', res.token);

      history.replace('/');
    }

    return true;
    // console.log(formRef);
  };

  return (
    <Form
      ref={formRef}
      className={isshow ? styles.loginForm : styles.hidden}
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      style={{ width: '100%', paddingTop: '20px' }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
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
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 5,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 18,
        }}
      >
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <a style={{ marginLeft: '85px' }} className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 18,
        }}
      >
        <Button type="primary" htmlType="submit" block>
          登陆
        </Button>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 17,
          span: 18,
        }}
      >
        <Button
          style={{ marginLeft: '0px', background: '', color: '#333' }}
          htmlType="submit"
          type="link"
          block
          onClick={() => {
            event(false);
          }}
        >
          立即注册
        </Button>
      </Form.Item>
    </Form>
  );
};
