import * as React from "react";
import {SignInContext} from "../context/SignIn";
import {WrappedFormInternalProps} from "antd/lib/form/Form";
import {Button, Card, Col, Form, Input, Layout, Row, Typography} from "antd";

interface Props extends WrappedFormInternalProps{}
const SignIn = (props: Props)  =>{
    const {onChangeMail, onChangePassword, onSubmit, state} = React.useContext(SignInContext);

    const {getFieldDecorator} = props.form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.form.validateFields( async (err, values)=>{
            if(!err){
                await onSubmit(state.mail,state.password)
            }
        })
    };

  return (
      <Layout>
          <Layout.Content>
              <div>
                  <Row type={"flex"} justify={"center"}>
                      <Col span={20}>
                          <Card>
                              <div>
                                  <Typography.Title level={2}>
                                      サインイン
                                  </Typography.Title>
                                  <div>
                                      <Form>
                                          <Form.Item>
                                              {getFieldDecorator("mail",{
                                                  rules:[
                                                      {
                                                          required: true,
                                                          message: "Please input yor mail address"
                                                      }
                                                  ]
                                              })(
                                                  <Input
                                                      placeholder={"email"}
                                                      type={"text"}
                                                      onChange={onChangeMail}
                                                      />
                                              )}
                                          </Form.Item>
                                          <Form.Item>
                                              {getFieldDecorator("password",{
                                                  rules:[
                                                      {
                                                          required: true,
                                                          message: "Please input your password"
                                                      }
                                                  ]
                                              })(
                                                  <Input
                                                      placeholder={"password"}
                                                      type={"password"}
                                                      onChange={onChangePassword}
                                                      />
                                              )
                                              }
                                          </Form.Item>
                                          <Form.Item>
                                              <Button type={"primary"} htmlType={"submit"}>
                                                  Submit
                                              </Button>
                                          </Form.Item>
                                      </Form>
                                  </div>
                              </div>
                          </Card>
                      </Col>
                  </Row>
              </div>
          </Layout.Content>
      </Layout>
  )
};

export const WrappedSignIn = Form.create({name: "signIn"})(SignIn);