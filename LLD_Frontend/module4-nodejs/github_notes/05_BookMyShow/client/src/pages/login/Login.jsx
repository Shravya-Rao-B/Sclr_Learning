import React from 'react';
import {Form, Input} from 'antd';

function Login() {
  return (
    <div>
      <h1>Login BookMyShow</h1>
        <Form layout='vertical'>
          <Form.Item
      label="email"
      name="email"
      rules={[{ required: true, message: 'Please input your email ID!' }]}
    >
      <Input type="email" placeholder='Please input your email'/>
            </Form.Item>
            <Form.Item
      label="password"
      name="password"
      rules={[{ required: true, message: 'password is required' }]}
    >
      <Input type="password" placeholder='your password'/>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Login