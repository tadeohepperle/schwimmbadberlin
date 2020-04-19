import Router from "next/router";
import { Cookies } from "react-cookie";
import { verifyJWT } from "./APIConnection";
// set up cookies
const cookies = new Cookies();

export const TOKEN_NAME = "schwimmbadberlintoken";

export function getJWTfromCookies() {
  let token = cookies.get(TOKEN_NAME);
  return token;
}

export async function handleAuthSSR(ctx) {
  let token = null;

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration

    let cci = ctx.req.headers.cookie; // cookie
    if (cci) {
      let a = cci.search(`${TOKEN_NAME}=`);
      if (a >= 0) {
        cci = cci.substr(a + TOKEN_NAME.length + 1, cci.length);
        let z = cci.search(";");
        if (z >= 0) {
          cci = cci.substr(0, z);
        }
      } else {
        cci = null;
      }
    }

    token = cci;

    /*
    token = ctx.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    */
  } else {
    // we dont have request info aka Client Side
    token = cookies.get(TOKEN_NAME);
  }

  //console.log("token: ", token);

  let verified = await verifyJWT(token);

  if (!verified) {
    //console.log("verific not successful!!!");
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  } else {
    //console.log("verific successful");
  }
}
