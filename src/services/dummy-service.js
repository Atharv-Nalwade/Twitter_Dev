import { helper } from "./helper-service.js";

export const execute = () =>{
    const result = helper();
    if(result){
        return 'Learning Js'
    }else{
        return 'Learning ReactJs'
    }
}

// Testing ways
// export const helper = () =>{
//   const num = Math.floor(Math.random()*10);
//   return num%2 == 0;
// }

// export const execute = () =>{
//     // const result = helper();   Commenting it and hardcoding avlues
//     if(true){
//         return 'Learning Js'
//     }else{
//         return 'Learning ReactJs'
//     }
// }

