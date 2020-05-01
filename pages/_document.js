import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/violet/favicon.png" />
                </Head>
                <body
                    style={{
                        width: "100vw",
                        height: "auto",
                        minHeight: "100vh",
                        backgroundColor: "#F0F2F5"
                    }}
                >
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
