import { 
    example_action_creator
 } from "./ActionCreator"





export const exampleAction=(args)=>dispatch=>{
    dispatch(example_action_creator({}))
    return 
}