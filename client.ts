import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import  ReadLine  from "readline";


const PORT=8002;
const PROTO_FILE="./proto/random.proto";
console.log(path.resolve(__dirname,PROTO_FILE));

const packageDef=protoLoader.loadSync(path.resolve(__dirname,PROTO_FILE));
const grpcObj= (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const client=new grpcObj.randomPackage.Random(
    `0.0.0.0:${PORT}`,grpc.credentials.createInsecure()
)
const deadline=new Date();
deadline.setSeconds(deadline.getSeconds()+30000);
client.waitForReady(deadline,(err)=>{
    if(err){
        console.error(err);
        return
    }
    onClientReady()

})

const onClientReady=()=>{
    // client.PingPong({message:"Ping"},(err,data)=>{
    //     if(err){
    //         console.error(err);
    //         return
            
    //     }
    //     console.log(data);
        
    // })
    // let stream=client.RandomNumber({number:90})
    // stream.on("data",(chunk)=>{
    //     console.log(chunk);
        
    // })
    // stream.on("end",()=>{
    //     console.log("communication ended");
        
    // })
    // let rl=ReadLine.createInterface({
    //     input:process.stdin,
    //     output:process.stdout,
    // })
//     const UserName=process.argv[2];
//     if (!UserName) console.error("No username, can't join chat"), process.exit()
//         const metadata = new grpc.Metadata()
//   metadata.set("username", UserName)
//   const call = client.Chat(metadata)
//   call.write({
//     message:"registered"
//   })
//   call.on("data",(chunk)=>{
//     console.log(`${chunk.username}=>${chunk.message}`); 
//   })
//   rl.on("line",(line)=>{
//     if(line === "quit"){
//         call.end()
//     }
//     else{
//         call.write({
//             message: line
//         })
//     }
//   })
  let stream2=client.TodoList((err,result)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(result);
    

  })
  stream2.write({
    todo:"walking",status:"done"
  })
  stream2.write({
    todo:"running",status:"done"
  })
  stream2.end()
}