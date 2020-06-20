import * as React from "react";
import {QuestionsContext} from "./../../context/questions/Index"
import {Question} from "../../model/question";
import {Avatar, Card, Col, Icon, Layout, List, Row, Table, Typography} from "antd";
import {QuestionOutlined} from "@ant-design/icons"
import Link from "next/link";

export const Index = () => {
    const { state }  = React.useContext(QuestionsContext);
    const dataSource = state.questions.map((q: Question, index: number)=>{
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
                                            質問一覧
                                        </Typography.Title>
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