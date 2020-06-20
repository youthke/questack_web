import * as next from "next";
import Cookie from "next-cookies"
import Cookies from "js-cookie";
import Router from "next/router"


export const auth = async  (ctx: next.NextPageContext) =>{
    const  {questack_token}  = Cookie(ctx);

    if (ctx.res && !questack_token) {
        ctx.res.writeHead(302, {Location:"/questack/signin"});
        ctx.res.end();
    }else if(!questack_token){
        await Router.push("/questack/signin");
    }
};

export const logout = async () => {
    Cookies.remove("questack-token");
    await Router.push("/questack/login")
};



