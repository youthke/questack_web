import * as React from "react";
import {WrappedFormInternalProps} from "antd/lib/form/Form";
import {QuestionCreateContext} from "../../context/questions/Create";
import {Button, Card, Col, Form, Input, Layout, Row, Typography} from "antd";

interface Props extends WrappedFormInternalProps{}
const Create = (props: Props) =>{
    const {onChangeQuestionerName, onChangeQuestionTitle, onChangeQuestionContent, onSubmit,state} = React.useContext(QuestionCreateContext);

    const {getFieldDecorator} = props.form;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        props.form.validateFields( async (err, values) =>{
            if(!err){
                await onSubmit(state.stackID,state.questionerName, state.title, state.content)
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
                                        質問を作る
                                    </Typography.Title>
                                    <div>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Item>
                                                <Input
                                                    placeholder={"questionerName"}
                                                    type={"text"}
                                                    onChange={onChangeQuestionerName}
                                                    />
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator("title",{
                                                    rules:[
                                                        {
                                                            required: true,
                                                            message: "質問タイトルを入力してください"
                                                        }
                                                    ]
                                                })(
                                                    <Input
                                                        placeholder={"質問タイトル"}
                                                        type={"text"}
                                                        onChange={onChangeQuestionTitle}
                                                        />
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator("content",{
                                                    rules:[
                                                        {
                                                            required: true,
                                                            message: "質問内容を入力してください"
                                                        }
                                                    ]
                                                })(
                                                    <Input.TextArea
                                                        placeholder={"質問内容"}
                                                        rows={4}
                                                        onChange={onChangeQuestionContent}
                                                        />
                                                )
                                                }
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type={"primary"} htmlType={"submit"}>
                                                    送信
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

export const WrappedCreate = Form.create({name: "questionCreate"})(Create);
