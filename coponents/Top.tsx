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
                                    <Button>
                                     <Link href={"/questack/signup"}>
                                        <a>サインアップ</a>
                                     </Link>
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    )
};