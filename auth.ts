import NextAuth from "next-auth";
import { Github } from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma";

import { adapter } from "next/dist/server/web/adapter";
import { useCallback } from "react";
import { MySession, MyJWT, MyUser } from "@/types/next-auth";   // it used for typescript  that we created in types/next-auth.d.ts


export const {auth, handlers, signIn, signOut} = NextAuth({
    Session:{ 
        strategy: "jwt",
        },
        providers: [Github],
        adapter: PrismaAdapter(prisma),
        useCallbacks: {
            async jwt({token, user}:{token: MyJWT, user?: MyUser}){
                if(user){
                    token.id = user.id;
                    token.name = user.name;
                }

                return token;
                
            },
            async session({session, token}: {session: MySession, token: MyJWT}) {
                if(session.user){
                    session.user.id = token.id as string;
                    session.user.name = token.name as string;
                }
                return session;

            },
        },

});
