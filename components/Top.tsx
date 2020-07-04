import * as React from "react";
import {Button, Card, Col, Layout, Row, Typography} from "antd";
import Link from "next/link";

export const Top = () =>{
    return (
        <Layout>
            <Layout.Content>
                <div>
                    <Row type={"flex"} justify={"center"}>
                        <Col span={20}>
                            <Card>
                                <div>
                                    <Typography.Title level={2}>
                                        Questackで楽々質問募集
                                    </Typography.Title>
                                </div>
                                <div>
                                    <Button style={{margin: "1em"}}>
                                     <Link href={"/questack/signup"}>
                                        <a>サインアップ</a>
                                     </Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button style={{margin: "1em"}}>
                                        <Link href={"/questack/signin"}>
                                            <a>サインイン</a>
                                        </Link>
                                    </Button>
                                </div>
                                <div>
                                    <Card
                                        style={{
                                            width: "35em",
                                            height: "30em",
                                            margin: "1em"
                                        }}
                                    >
                                        <img src={"/stack.png"} style={{width: "80%", height: "auto", marginLeft: "auto", marginRight: "auto"}}/>
                                        <Typography.Title level={2}>URLを貼るだけで質問募集</Typography.Title>
                                        <div>
                                            <p>stackは質問を募集する箱です</p>
                                            <p>stackを作成するのURLが発行されます</p>
                                            <p>URLを知っている人だけが質問をすることができます</p>
                                        </div>
                                    </Card>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    )
};