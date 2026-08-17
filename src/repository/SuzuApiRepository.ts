import { UrlConst } from 'constants/Const'
import { BlogServiceClient } from './generated/suzu/v1/suzu_grpc_pb'
import * as grpc from '@grpc/grpc-js'

// gRPC client initialization with proper error handling
const createGrpcClient = (): BlogServiceClient => {
  try {
    const credentials = grpc.credentials.createSsl()
    return new BlogServiceClient(UrlConst.SUZU_API, credentials)
  } catch (error) {
    console.error('Failed to create gRPC client:', error)
    throw error
  }
}

export const suzuApiBlogServiceClient = createGrpcClient()
