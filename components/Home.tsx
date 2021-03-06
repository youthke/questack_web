import * as React from "react";
import {Col, Layout, Typography, Row, Card, Table, Button} from "antd";
import CopyToClipboard from 'react-copy-to-clipboard';
import {HomeContext} from "../context/Home";
import Router from "next/router";

export const Home = () =>{
    const {state} = React.useContext(HomeContext);
    const dataSource = state.stacks.map((stack, index)=>{
        return {
            key: index,
            id: stack.id,
            name: stack.name
        }
    });
    const columns = [
        {
            title: "name",
            dataIndex: "name",
            key: "name",
            width: 200,
        },
        {
            title: "url",
            dataIndex: "id",
            key: "id",
            width: 200,
            render: (id: string) =>{
                return (
                    <div>
                        {`${process.env.domainName}/questack/${id}/questions`}
                    <CopyToClipboard text={`${process.env.domainName}/questack/${id}/questions`}>
                        <Button>copy</Button>
                    </CopyToClipboard>
                    </div>
                )
            }
        }
    ];
    return(
        <Layout>
            <div
                style={{
                    width: "100vw",
                    backgroundColor: "#fff"
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <Typography.Title
                        type="secondary"
                        style={{
                            marginTop: "10px",
                            marginBottom: 0,
                            fontSize: "6vw"
                        }}
                    >
                        Stacks
                    </Typography.Title>
                </div>
            </div>
            <Layout.Content>
                <div style={{ margin: "30px" }}>
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <Card style={{ minHeight: "78vh" }}>
                                <Typography.Title level={3} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    stacks
                                </Typography.Title>
                                <div>
                                    <Button onClick={() =>{
                                        Router.push("/questack/owner/stacks/new")
                                    }}>
                                        New Stack
                                    </Button>
                                </div>
                                <Table
                                    dataSource={dataSource}
                                    columns={columns}
                                    size="middle"
                                    style={{ whiteSpace: "pre-line" }}
                                    scroll={{ x: 1200, y: 400 }}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    )
};