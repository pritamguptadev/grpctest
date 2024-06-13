// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumRequest as _randomPackage_NumRequest, NumRequest__Output as _randomPackage_NumRequest__Output } from '../randomPackage/NumRequest';
import type { NumResponse as _randomPackage_NumResponse, NumResponse__Output as _randomPackage_NumResponse__Output } from '../randomPackage/NumResponse';
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PongResponse as _randomPackage_PongResponse, PongResponse__Output as _randomPackage_PongResponse__Output } from '../randomPackage/PongResponse';
import type { TodoRequest as _randomPackage_TodoRequest, TodoRequest__Output as _randomPackage_TodoRequest__Output } from '../randomPackage/TodoRequest';
import type { TodoResponse as _randomPackage_TodoResponse, TodoResponse__Output as _randomPackage_TodoResponse__Output } from '../randomPackage/TodoResponse';
import type { chatRequest as _randomPackage_chatRequest, chatRequest__Output as _randomPackage_chatRequest__Output } from '../randomPackage/chatRequest';
import type { chatResponse as _randomPackage_chatResponse, chatResponse__Output as _randomPackage_chatResponse__Output } from '../randomPackage/chatResponse';

export interface RandomClient extends grpc.Client {
  Chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_chatRequest, _randomPackage_chatResponse__Output>;
  Chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_chatRequest, _randomPackage_chatResponse__Output>;
  chat(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_chatRequest, _randomPackage_chatResponse__Output>;
  chat(options?: grpc.CallOptions): grpc.ClientDuplexStream<_randomPackage_chatRequest, _randomPackage_chatResponse__Output>;
  
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumber(argument: _randomPackage_NumRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumResponse__Output>;
  RandomNumber(argument: _randomPackage_NumRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumResponse__Output>;
  randomNumber(argument: _randomPackage_NumRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumResponse__Output>;
  randomNumber(argument: _randomPackage_NumRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_randomPackage_TodoResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleBidiStreamingCall<_randomPackage_chatRequest__Output, _randomPackage_chatResponse>;
  
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PongResponse>;
  
  RandomNumber: grpc.handleServerStreamingCall<_randomPackage_NumRequest__Output, _randomPackage_NumResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randomPackage_TodoRequest__Output, _randomPackage_TodoResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_randomPackage_chatRequest, _randomPackage_chatResponse, _randomPackage_chatRequest__Output, _randomPackage_chatResponse__Output>
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PongResponse, _randomPackage_PingRequest__Output, _randomPackage_PongResponse__Output>
  RandomNumber: MethodDefinition<_randomPackage_NumRequest, _randomPackage_NumResponse, _randomPackage_NumRequest__Output, _randomPackage_NumResponse__Output>
  TodoList: MethodDefinition<_randomPackage_TodoRequest, _randomPackage_TodoResponse, _randomPackage_TodoRequest__Output, _randomPackage_TodoResponse__Output>
}
