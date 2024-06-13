import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import { RandomHandlers } from "./proto/randomPackage/Random";
import { chatRequest } from "./proto/randomPackage/chatRequest";
import { chatResponse } from "./proto/randomPackage/chatResponse";
import { TodoRequest } from "./proto/randomPackage/TodoRequest";

const PORT = 8002;
const PROTO_FILE = "./proto/random.proto";
console.log(path.resolve(__dirname, PROTO_FILE));
const todoList:any={todos:[]}

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const randomPackage = grpcObj.randomPackage;

function main() {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("server running at ", port);
      server.start();
    }
  );
}
const callObjByUsername = new Map<string, grpc.ServerDuplexStream<chatRequest, chatResponse>>()
function getServer() {
  const server = new grpc.Server();
  server.addService(randomPackage.Random.service, {
    // PingPong: (req, res) => {
    //   console.log(req.request);
    //   res(null, { message: "Pong" });
    // },
    // RandomNumber: (call) => {
    //   let { number = 0 } = call.request;
    //   let ranArr = 0;
    //   setInterval(() => {
    //     ++ranArr;
    //     call.write({ number: Math.random() * number });
    //     if (ranArr >= 10) {
    //       call.end();
    //     }
    //   }, 1000);
    //   // call.write({number:Math.random()*number})
    //   // call.end()
    // },
    // Chat: (call) => {
    //   call.on("data", (req) => {
    //     const username = call.metadata.get("username")[0] as string;
    //     const msg = req.message;
    //     console.log(username, req.message);

    //     for(let [user,userCall] of callObjByUsername){
    //         if(user !==username){
    //             userCall.write({
    //                 username,
    //                 message:msg
    //             })
    //         }
            
    //     }
    //     if(callObjByUsername.get(username)===undefined){
    //         callObjByUsername.set(username,call);
    //     }
    //     call.on("end", () => {
    //         const username = call.metadata.get('username')[0] as string
    //         callObjByUsername.delete(username)
    //         for(let [user, usersCall] of callObjByUsername) {
    //             usersCall.write({
    //               username: username,
    //               message: "Has Left the Chat!"
    //             })
    //         }
    //         console.log(`${username} is ending their chat session`)
    
    //         call.write({
    //           username: "Server",
    //           message: `See you later ${username}`
    //         })
    
    //         call.end()
    //       })
    
    //     })
        

    //   },
      TodoList: (call, callback) => {
        call.on("data", (chunk: TodoRequest) => {
          todoList.todos?.push(chunk)
          console.log(chunk)
        })
  
        call.on("end", () => {
          callback(null, {todos: todoList.todos})
        })
      },
      
  } as RandomHandlers);
  return server;
}

main();
