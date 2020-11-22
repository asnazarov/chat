import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Block, Button} from "../../components";
import './auth.scss';

const Auth = () => {


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <section className="auth">
      <div className="auth__content">
        <div className='auth__top'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдит в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

          </Form>
          <Button className="button__large" type="primary">кнопка</Button>
        </Block>
      </div>

    </section>

  )

}
export default Auth;