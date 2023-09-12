/**
 *
 * This file is autogenerated.
 *
 * DO NOT EDIT DIRECTLY
 *
 **/

import type { Bridge } from '../../bridge';

import type {
  ApiResponsePayload,
  BaseApiRequestMessage,
  BaseApiResponseMessage,
  BaseUrlParams,
  QueryParam,
} from '../../types';

export type RemoteResponseRequestApi = 'remoteResponse';

export type CommonApiResponseMessage =
  BaseApiResponseMessage<ApiResponsePayload>;

export interface CommonApiRequestMessage
  extends BaseApiRequestMessage<BaseUrlParams, unknown> {
  api: RemoteResponseRequestApi;
}

// types for getEntitiesAppCommandV1

export interface GetEntitiesAppCommandV1QueryParams extends BaseUrlParams {
  cloudRequestId: QueryParam;
  sequenceId: QueryParam;
}

export type GetEntitiesAppCommandV1ApiResponse = ApiResponsePayload;

export type GetEntitiesAppCommandV1ResponseMessage =
  BaseApiResponseMessage<GetEntitiesAppCommandV1ApiResponse>;

export interface GetEntitiesAppCommandV1RequestMessage
  extends BaseApiRequestMessage<GetEntitiesAppCommandV1QueryParams> {
  api: RemoteResponseRequestApi;
  method: 'getEntitiesAppCommandV1';
}

// types for getEntitiesPutFilesV2

export interface GetEntitiesPutFilesV2QueryParams extends BaseUrlParams {
  ids: QueryParam;
}

export type GetEntitiesPutFilesV2ApiResponse = ApiResponsePayload;

export type GetEntitiesPutFilesV2ResponseMessage =
  BaseApiResponseMessage<GetEntitiesPutFilesV2ApiResponse>;

export interface GetEntitiesPutFilesV2RequestMessage
  extends BaseApiRequestMessage<GetEntitiesPutFilesV2QueryParams> {
  api: RemoteResponseRequestApi;
  method: 'getEntitiesPutFilesV2';
}

// types for getQueriesPutFilesV1

export interface GetQueriesPutFilesV1QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
}

export type GetQueriesPutFilesV1ApiResponse = ApiResponsePayload;

export type GetQueriesPutFilesV1ResponseMessage =
  BaseApiResponseMessage<GetQueriesPutFilesV1ApiResponse>;

export interface GetQueriesPutFilesV1RequestMessage
  extends BaseApiRequestMessage<GetQueriesPutFilesV1QueryParams> {
  api: RemoteResponseRequestApi;
  method: 'getQueriesPutFilesV1';
}

// types for postEntitiesAppCommandV1

export interface PostEntitiesAppCommandV1QueryParams extends BaseUrlParams {
  appScriptVersion?: QueryParam;
}

export type PostEntitiesAppCommandV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesAppCommandV1PostData {}

export type PostEntitiesAppCommandV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesAppCommandV1ApiResponse>;

export interface PostEntitiesAppCommandV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesAppCommandV1QueryParams,
    PostEntitiesAppCommandV1PostData
  > {
  api: RemoteResponseRequestApi;
  method: 'postEntitiesAppCommandV1';
}

// types for postEntitiesAppRefreshSessionsV1

export type PostEntitiesAppRefreshSessionsV1QueryParams = BaseUrlParams;

export type PostEntitiesAppRefreshSessionsV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesAppRefreshSessionsV1PostData {}

export type PostEntitiesAppRefreshSessionsV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesAppRefreshSessionsV1ApiResponse>;

export interface PostEntitiesAppRefreshSessionsV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesAppRefreshSessionsV1QueryParams,
    PostEntitiesAppRefreshSessionsV1PostData
  > {
  api: RemoteResponseRequestApi;
  method: 'postEntitiesAppRefreshSessionsV1';
}

// types for postEntitiesAppSessionsV1

export interface PostEntitiesAppSessionsV1QueryParams extends BaseUrlParams {
  timeout?: QueryParam;
  timeoutDuration?: QueryParam;
}

export type PostEntitiesAppSessionsV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesAppSessionsV1PostData {}

export type PostEntitiesAppSessionsV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesAppSessionsV1ApiResponse>;

export interface PostEntitiesAppSessionsV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesAppSessionsV1QueryParams,
    PostEntitiesAppSessionsV1PostData
  > {
  api: RemoteResponseRequestApi;
  method: 'postEntitiesAppSessionsV1';
}

// types for postEntitiesPutFilesV1

export type PostEntitiesPutFilesV1QueryParams = BaseUrlParams;

export type PostEntitiesPutFilesV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesPutFilesV1PostData {}

export type PostEntitiesPutFilesV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesPutFilesV1ApiResponse>;

export interface PostEntitiesPutFilesV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesPutFilesV1QueryParams,
    PostEntitiesPutFilesV1PostData
  > {
  api: RemoteResponseRequestApi;
  method: 'postEntitiesPutFilesV1';
}

// general types

export type RemoteResponseApiRequestMessage =
  | GetEntitiesAppCommandV1RequestMessage
  | PostEntitiesAppCommandV1RequestMessage
  | PostEntitiesAppRefreshSessionsV1RequestMessage
  | PostEntitiesAppSessionsV1RequestMessage;

export type RemoteResponseApiResponseMessage =
  | GetEntitiesAppCommandV1ResponseMessage
  | PostEntitiesAppCommandV1ResponseMessage
  | PostEntitiesAppRefreshSessionsV1ResponseMessage
  | PostEntitiesAppSessionsV1ResponseMessage;

export class RemoteResponseApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  getBridge() {
    return this.bridge;
  }

  async getEntitiesAppCommandV1(
    urlParams: GetEntitiesAppCommandV1QueryParams,
  ): Promise<GetEntitiesAppCommandV1ApiResponse> {
    const message: GetEntitiesAppCommandV1RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'getEntitiesAppCommandV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesAppCommandV1(
    postBody: PostEntitiesAppCommandV1PostData,
    urlParams: PostEntitiesAppCommandV1QueryParams = {},
  ): Promise<PostEntitiesAppCommandV1ApiResponse> {
    const message: PostEntitiesAppCommandV1RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'postEntitiesAppCommandV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesAppRefreshSessionsV1(
    postBody: PostEntitiesAppRefreshSessionsV1PostData,
    urlParams: PostEntitiesAppRefreshSessionsV1QueryParams = {},
  ): Promise<PostEntitiesAppRefreshSessionsV1ApiResponse> {
    const message: PostEntitiesAppRefreshSessionsV1RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'postEntitiesAppRefreshSessionsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesAppSessionsV1(
    postBody: PostEntitiesAppSessionsV1PostData,
    urlParams: PostEntitiesAppSessionsV1QueryParams = {},
  ): Promise<PostEntitiesAppSessionsV1ApiResponse> {
    const message: PostEntitiesAppSessionsV1RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'postEntitiesAppSessionsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }
}
