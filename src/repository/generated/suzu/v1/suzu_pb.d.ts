// package: suzu.v1
// file: suzu/v1/suzu.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Blog extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getDate(): string;
  setDate(value: string): void;

  getBlogType(): string;
  setBlogType(value: string): void;

  getBlogTitle(): string;
  setBlogTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blog.AsObject;
  static toObject(includeInstance: boolean, msg: Blog): Blog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blog;
  static deserializeBinaryFromReader(message: Blog, reader: jspb.BinaryReader): Blog;
}

export namespace Blog {
  export type AsObject = {
    url: string,
    date: string,
    blogType: string,
    blogTitle: string,
  }
}

export class GetBlogResponse extends jspb.Message {
  clearBlogListList(): void;
  getBlogListList(): Array<Blog>;
  setBlogListList(value: Array<Blog>): void;
  addBlogList(value?: Blog, index?: number): Blog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlogResponse): GetBlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlogResponse;
  static deserializeBinaryFromReader(message: GetBlogResponse, reader: jspb.BinaryReader): GetBlogResponse;
}

export namespace GetBlogResponse {
  export type AsObject = {
    blogListList: Array<Blog.AsObject>,
  }
}

export class GetHealthResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHealthResponse): GetHealthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHealthResponse;
  static deserializeBinaryFromReader(message: GetHealthResponse, reader: jspb.BinaryReader): GetHealthResponse;
}

export namespace GetHealthResponse {
  export type AsObject = {
    text: string,
  }
}

