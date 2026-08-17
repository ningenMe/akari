// GENERATED CODE -- DO NOT EDIT!

// package: suzu.v1
// file: suzu/v1/suzu.proto

import * as suzu_v1_suzu_pb from "../../suzu/v1/suzu_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IBlogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBlog: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, suzu_v1_suzu_pb.GetBlogResponse>;
  getHealth: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, suzu_v1_suzu_pb.GetHealthResponse>;
}

export const BlogServiceService: IBlogServiceService;

export interface IBlogServiceServer extends grpc.UntypedServiceImplementation {
  getBlog: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, suzu_v1_suzu_pb.GetBlogResponse>;
  getHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, suzu_v1_suzu_pb.GetHealthResponse>;
}

export class BlogServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBlog(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetBlogResponse>): grpc.ClientUnaryCall;
  getBlog(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetBlogResponse>): grpc.ClientUnaryCall;
  getBlog(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetBlogResponse>): grpc.ClientUnaryCall;
  getHealth(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetHealthResponse>): grpc.ClientUnaryCall;
  getHealth(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetHealthResponse>): grpc.ClientUnaryCall;
  getHealth(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<suzu_v1_suzu_pb.GetHealthResponse>): grpc.ClientUnaryCall;
}
