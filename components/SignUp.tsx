import * as React from "react";
import {Alert, Button, Card, Col, Form, Icon, Input, Layout, Row, Spin, Typography} from "antd";
import {SignUpContext} from "../context/SignUp";
import {WrappedFormInternalProps} from "antd/lib/form/Form";


const styles = {
    div: {
        margin: "50px"
    }
};



const {Content} = Layout;
const {Title} = Typography;
interface Props extends WrappedFormInternalProps{}
export const SignUp = (props: Props) =>{
    const {
        onChangeName,
        onChangeMail,
        onChangePassword,
        onChangePasswordConfirmation,
        onSubmit,
        state
    } = React.useContext(SignUpContext);
    const {getFieldDecorator} = props.form;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                await onSubmit(state.name, state.mail, state.password);
            }
        });
    };
    return (
        <Layout>
            <Content>
                <div style={styles.div}>
                    <Row type={"flex"} justify={"center"}>
                        <Col span={20}>
                            <Card>
                                <div>
                                    <Title level={2}>
                                        サインアップ
                                    </Title>
                                    <div>
                                        <p>質問を募集する</p>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Item>
                                                {getFieldDecorator("name",{
                                                    rules:[
                                                {
                                                    required: true,
                                                    message: "please input your nickname!"
                                                }
                                                    ]
                                                }
                                                )(
                                                    <Input
                                                        placeholder={"user name"}
                                                        type={"text"}
                                                        onChange={onChangeName}
                                                        />
                                                )
                                                }
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator("mail",{
                                                    rules:[
                                                        {
                                                            required: true,
                                                            message: "Please input your mail address"
                                                        }
                                                    ]
                                                })(
                                                    <Input
                                                        placeholder={"email"}
                                                        type={"text"}
                                                        onChange={onChangeMail}
                                                        />
                                                    )
                                                }
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator("password",{
                                                    rules:[
                                                        {
                                                            required: true,
                                                            message: "Please input password"
                                                        }
                                                    ]
                                                })(
                                                    <Input.Password
                                                        placeholder={"password"}
                                                        type={"password"}
                                                        onChange={onChangePassword}
                                                        />
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator("passwordConfirmation",{
                                                    rules:[
                                                        {
                                                            required: true,
                                                            message: "Please input password confirmation"
                                                        }
                                                    ]
                                                })(
                                                    <Input.Password
                                                        placeholder={"password confirmation"}
                                                        type={"password"}
                                                        onChange={onChangePasswordConfirmation}
                                                        />
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {state.isLoading ?
                                                    <Spin indicator={<Icon type={"loading"}></Icon>}/>
                                                    :<Button type={"primary"} htmlType={"submit"} disabled={state.isLoading}>
                                                    Submit
                                                </Button>}
                                            </Form.Item>
                                        </Form>
                                        {state.message && (
                                            <Row type="flex" justify="center">
                                                <Col span={9}>
                                                    <Alert
                                                        type={state.isInvalid ? "error" : "success"}
                                                        message={state.message}
                                                        showIcon
                                                    />
                                                </Col>
                                            </Row>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
};

export const WrappedSignUp = Form.create({name: "sigUp"})(SignUp);