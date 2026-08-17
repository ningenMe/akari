// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var suzu_v1_suzu_pb = require('../../suzu/v1/suzu_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suzu_v1_GetBlogResponse(arg) {
  if (!(arg instanceof suzu_v1_suzu_pb.GetBlogResponse)) {
    throw new Error('Expected argument of type suzu.v1.GetBlogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suzu_v1_GetBlogResponse(buffer_arg) {
  return suzu_v1_suzu_pb.GetBlogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_suzu_v1_GetHealthResponse(arg) {
  if (!(arg instanceof suzu_v1_suzu_pb.GetHealthResponse)) {
    throw new Error('Expected argument of type suzu.v1.GetHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_suzu_v1_GetHealthResponse(buffer_arg) {
  return suzu_v1_suzu_pb.GetHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogServiceService = exports.BlogServiceService = {
  getBlog: {
    path: '/suzu.v1.BlogService/GetBlog',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: suzu_v1_suzu_pb.GetBlogResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_suzu_v1_GetBlogResponse,
    responseDeserialize: deserialize_suzu_v1_GetBlogResponse,
  },
  getHealth: {
    path: '/suzu.v1.BlogService/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: suzu_v1_suzu_pb.GetHealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_suzu_v1_GetHealthResponse,
    responseDeserialize: deserialize_suzu_v1_GetHealthResponse,
  },
};

exports.BlogServiceClient = grpc.makeGenericClientConstructor(BlogServiceService, 'BlogService');
