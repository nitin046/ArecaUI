import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import '../../styles/custom/loginPage/loginPage.css';

function Login() {
  const [form] = Form.useForm();

  return (
    <div className="login-background">
      <motion.div
        className="gx-app-login-container"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          mass: 0.5,
          duration: 2,
        }}
      >
        <h2>Login</h2>
        <Form name="basic" form={form} onFinish={(values) => {}}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter registered email address.',
              },
              {
                type: 'email',
                message: 'Please enter valid email address.',
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Email"
              name="email"
              maxLength={150}
              style={{ marginTop: '4%' }}
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter password.' }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
              name="password"
              maxLength={16}
              prefix={<LockOutlined />}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              visibilityToggle
            />
          </Form.Item>
          <Row justify="end">
            <Col>
              <Link color="black" to="/forgotPassword">
                Forgot Password ?
              </Link>
            </Col>
          </Row>

          <Form.Item>
            <Button
              style={{
                width: '100%',
                marginTop: '10px',
                backgroundColor: 'black',
                color: 'white',
              }}
              htmlType="submit"
            >
              Login
            </Button>
            <Divider>
              <Typography style={{ fontWeight: 400, color: 'grey' }}>
                or
              </Typography>
            </Divider>
            <Row justify="center">
              <Col>
                <div>Join our community today!</div>
              </Col>
              <Col>
                <Link to="/sigIn">
                  &nbsp; Register <LockOutlined />
                </Link>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </motion.div>
    </div>
  );
}

export default Login;
