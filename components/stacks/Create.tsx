import * as React from "react";
import {WrappedFormInternalProps} from "antd/lib/form/Form";
import {CreateStackContext} from "../../context/stacks/create";
import {Button, Card, Col, Form, Input, Layout, Row, Typography} from "antd";

interface Props extends WrappedFormInternalProps{}
const Create = (props: Props) => {
    const {onChangeName, onSubmit, state} = React.useContext(CreateStackContext)

    const {getFieldDecorator} = props.form;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if(!err){
                await onSubmit(state.name, state.token);
            }
        })
    };

    return (
        <Layout>
            <Layout.Content>
                <div>
                    <Row>
                        <Col span={20}>
                            <Card>
                                <div>
                                    <Typography.Title level={2}>
                                        Stackの作成
                                    </Typography.Title>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Item>
                                        {getFieldDecorator("title",{
                                            rules:[
                                                {
                                                    required: true,
                                                    message: "stack名を入力してください"
                                                }
                                            ]
                                        })(
                                        <Input
                                            placeholder={"stack name"}
                                            type={"text"}
                                            onChange={onChangeName}
                                            />
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type={"primary"} htmlType={"submit"}>
                                            作成
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    )
};

export const WrappedCreate =  Form.create({name:"createStack"})(Create);