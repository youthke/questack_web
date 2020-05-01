import App from "next/app";
import { ContextProvider } from "../context";
import React from "react";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        );
    }
}

export default MyApp;
