import * as next from "next";
import Cookie from "next-cookies"
import Cookies from "js-cookie";
import Router from "next/router"


export const auth = async  (ctx: next.NextPageContext) =>{
    const { token } = Cookie(ctx);
    if (ctx.res && !token) {
        ctx.res.writeHead(302, {Location:"/questack/login"});
        ctx.res.end();
    }else if(!token){
        await Router.push("/questack/login");
    }
};

export const logout = async () => {
    Cookies.remove("questack-token");
    await Router.push("/questack/login")
};



