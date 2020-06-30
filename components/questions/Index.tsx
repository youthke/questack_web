import * as React from "react";
import {QuestionsContext} from "./../../context/questions/Index"
import {Question} from "../../model/question";
import {Avatar, Button, Card, Col, Icon, Layout, List, Row, Table, Typography} from "antd";
import Link from "next/link";

export const Index = () => {
    const { state }  = React.useContext(QuestionsContext);
     console.log(state);
    const dataSource = state.stack.questions.map((q: Question, index: number)=>{
        return {
            key: index,
            id: q.question_id,
            title: q.title,
            questioner: q.questioner_name,
            content: q.content
        }
    });

    return (
        <Layout>
            <div>
                <div>
                    <Layout.Content>
                        <div>
                            <Row>
                                <Col>
                                    <Card>
                                        <Typography.Title>
                                            {state.stack.name}
                                        </Typography.Title>
                                        <Button>
                                            <Link href={"questions/create"}>
                                                <a>質問を作成する</a>
                                            </Link>
                                        </Button>
                                        <List itemLayout={"vertical"}
                                              size={"large"}
                                              dataSource={dataSource}
                                              renderItem={item => (
                                                  <Link href={`/questack/stackID/questions/${item.id}`}>
                                                  <List.Item
                                                      key={item.id}
                                                  >
                                                      <List.Item.Meta
                                                          title={item.title}
                                                          description={item.questioner}
                                                      />
                                                      {item.content}
                                                  </List.Item>
                                                  </Link>
                                              )}
                                        >

                                        </List>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Layout.Content>
                </div>
            </div>
        </Layout>
    );
};