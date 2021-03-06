import {NextPage, NextPageContext} from "next";
import React from "react";
import {Home} from "../../../components/Home";
import {auth} from "../../../util";
import {getStacks} from "../../../api/getStacks";
import Cookies from "next-cookies";
import {Stack} from "../../../model/stack";
import {HomeContext} from "../../../context/Home";

type Props = {
    stacks: Stack[];
}

const HomePage: NextPage<Props> = (props: Props) => {
    const {setState} = React.useContext(HomeContext);
    React.useEffect(() =>{
        setState(props.stacks)
    },[]);
    return(
        <div>
            <Home/>
        </div>
    );
};

HomePage.getInitialProps = async (ctx: NextPageContext) => {
    await auth(ctx);
    const { questack_token } = Cookies(ctx) as Record<string, string>;
    const result = await getStacks(questack_token);
    return {
        stacks: result.stacks
    };
};


export default HomePage;