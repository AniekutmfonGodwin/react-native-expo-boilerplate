import { 
    AUTH_UPDATE
 } from "../Constants"



// all action creato should take in args as argument
export const example_action_creator=(arg)=>({
    type:'action'
})

// LOGIN
export const auth_login=(arg)=>({
    type:'AUTH_UPDATE',
    payload:{...args,login:true}
})