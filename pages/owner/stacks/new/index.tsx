import {NextPage, NextPageContext} from "next";
import {WrappedCreate} from "../../../../components/stacks/Create";
import Cookie from "next-cookies"
import React from "react";
import {auth} from "../../../../util";
import {CreateStackContext} from "../../../../context/stacks/create";
import Router from "next/router";

type Props = {
    token: string
}

const CreateStackPage: NextPage<Props> = (props: Props) =>{
    const {state, onSetToken} = React.useContext(CreateStackContext);
    React.useEffect(() =>{
        onSetToken(props.token)
    },[]);
    React.useEffect(() =>{
        const func = async () => {
            if (state.success){
                await Router.push("/questack/owner/home")
            }
        };
        func()
    },[state.success]);
    return(
        <div>
            <WrappedCreate/>
        </div>
    )
};

CreateStackPage.getInitialProps = async (ctx: NextPageContext) =>{
    await auth(ctx);
    const {questack_token} = Cookie(ctx) as Record<string, string>;
    return {token: questack_token}
};

export default CreateStackPage;
