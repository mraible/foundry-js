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

export type CustomobjectsRequestApi = 'customobjects';

export type CommonApiResponseMessage =
  BaseApiResponseMessage<ApiResponsePayload>;

export interface CommonApiRequestMessage
  extends BaseApiRequestMessage<BaseUrlParams, unknown> {
  api: CustomobjectsRequestApi;
}

// types for deleteV1CollectionsCollectionNameObjectsObjectKey

export type DeleteV1CollectionsCollectionNameObjectsObjectKeyQueryParams =
  BaseUrlParams;

export type DeleteV1CollectionsCollectionNameObjectsObjectKeyApiResponse =
  ApiResponsePayload;

export type DeleteV1CollectionsCollectionNameObjectsObjectKeyResponseMessage =
  BaseApiResponseMessage<DeleteV1CollectionsCollectionNameObjectsObjectKeyApiResponse>;

export interface DeleteV1CollectionsCollectionNameObjectsObjectKeyRequestMessage
  extends BaseApiRequestMessage<DeleteV1CollectionsCollectionNameObjectsObjectKeyQueryParams> {
  api: CustomobjectsRequestApi;
  method: 'deleteV1CollectionsCollectionNameObjectsObjectKey';
}

// types for getV1Collections

export interface GetV1CollectionsQueryParams extends BaseUrlParams {
  startKey?: QueryParam;
  endKey?: QueryParam;
  limit?: QueryParam;
}

export type GetV1CollectionsApiResponse = ApiResponsePayload;

export type GetV1CollectionsResponseMessage =
  BaseApiResponseMessage<GetV1CollectionsApiResponse>;

export interface GetV1CollectionsRequestMessage
  extends BaseApiRequestMessage<GetV1CollectionsQueryParams> {
  api: CustomobjectsRequestApi;
  method: 'getV1Collections';
}

// types for getV1CollectionsCollectionNameObjects

export interface GetV1CollectionsCollectionNameObjectsQueryParams
  extends BaseUrlParams {
  startKey?: QueryParam;
  endKey?: QueryParam;
  limit?: QueryParam;
}

export type GetV1CollectionsCollectionNameObjectsApiResponse =
  ApiResponsePayload;

export type GetV1CollectionsCollectionNameObjectsResponseMessage =
  BaseApiResponseMessage<GetV1CollectionsCollectionNameObjectsApiResponse>;

export interface GetV1CollectionsCollectionNameObjectsRequestMessage
  extends BaseApiRequestMessage<GetV1CollectionsCollectionNameObjectsQueryParams> {
  api: CustomobjectsRequestApi;
  method: 'getV1CollectionsCollectionNameObjects';
}

// types for getV1CollectionsCollectionNameObjectsObjectKey

export type GetV1CollectionsCollectionNameObjectsObjectKeyQueryParams =
  BaseUrlParams;

export type GetV1CollectionsCollectionNameObjectsObjectKeyApiResponse =
  ApiResponsePayload;

export type GetV1CollectionsCollectionNameObjectsObjectKeyResponseMessage =
  BaseApiResponseMessage<GetV1CollectionsCollectionNameObjectsObjectKeyApiResponse>;

export interface GetV1CollectionsCollectionNameObjectsObjectKeyRequestMessage
  extends BaseApiRequestMessage<GetV1CollectionsCollectionNameObjectsObjectKeyQueryParams> {
  api: CustomobjectsRequestApi;
  method: 'getV1CollectionsCollectionNameObjectsObjectKey';
}

// types for getV1CollectionsCollectionNameObjectsObjectKeyMetadata

export type GetV1CollectionsCollectionNameObjectsObjectKeyMetadataQueryParams =
  BaseUrlParams;

export type GetV1CollectionsCollectionNameObjectsObjectKeyMetadataApiResponse =
  ApiResponsePayload;

export type GetV1CollectionsCollectionNameObjectsObjectKeyMetadataResponseMessage =
  BaseApiResponseMessage<GetV1CollectionsCollectionNameObjectsObjectKeyMetadataApiResponse>;

export interface GetV1CollectionsCollectionNameObjectsObjectKeyMetadataRequestMessage
  extends BaseApiRequestMessage<GetV1CollectionsCollectionNameObjectsObjectKeyMetadataQueryParams> {
  api: CustomobjectsRequestApi;
  method: 'getV1CollectionsCollectionNameObjectsObjectKeyMetadata';
}

// types for postV1CollectionsCollectionNameObjects

export interface PostV1CollectionsCollectionNameObjectsQueryParams
  extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
}

export type PostV1CollectionsCollectionNameObjectsApiResponse =
  ApiResponsePayload;

export interface PostV1CollectionsCollectionNameObjectsPostData {}

export type PostV1CollectionsCollectionNameObjectsResponseMessage =
  BaseApiResponseMessage<PostV1CollectionsCollectionNameObjectsApiResponse>;

export interface PostV1CollectionsCollectionNameObjectsRequestMessage
  extends BaseApiRequestMessage<
    PostV1CollectionsCollectionNameObjectsQueryParams,
    PostV1CollectionsCollectionNameObjectsPostData
  > {
  api: CustomobjectsRequestApi;
  method: 'postV1CollectionsCollectionNameObjects';
}

// types for putV1CollectionsCollectionNameObjectsObjectKey

export type PutV1CollectionsCollectionNameObjectsObjectKeyQueryParams =
  BaseUrlParams;

export type PutV1CollectionsCollectionNameObjectsObjectKeyApiResponse =
  ApiResponsePayload;

export interface PutV1CollectionsCollectionNameObjectsObjectKeyPostData {}

export type PutV1CollectionsCollectionNameObjectsObjectKeyResponseMessage =
  BaseApiResponseMessage<PutV1CollectionsCollectionNameObjectsObjectKeyApiResponse>;

export interface PutV1CollectionsCollectionNameObjectsObjectKeyRequestMessage
  extends BaseApiRequestMessage<
    PutV1CollectionsCollectionNameObjectsObjectKeyQueryParams,
    PutV1CollectionsCollectionNameObjectsObjectKeyPostData
  > {
  api: CustomobjectsRequestApi;
  method: 'putV1CollectionsCollectionNameObjectsObjectKey';
}

// general types

export type CustomobjectsApiRequestMessage =
  | DeleteV1CollectionsCollectionNameObjectsObjectKeyRequestMessage
  | GetV1CollectionsRequestMessage
  | GetV1CollectionsCollectionNameObjectsRequestMessage
  | GetV1CollectionsCollectionNameObjectsObjectKeyRequestMessage
  | GetV1CollectionsCollectionNameObjectsObjectKeyMetadataRequestMessage
  | PostV1CollectionsCollectionNameObjectsRequestMessage
  | PutV1CollectionsCollectionNameObjectsObjectKeyRequestMessage;

export type CustomobjectsApiResponseMessage =
  | DeleteV1CollectionsCollectionNameObjectsObjectKeyResponseMessage
  | GetV1CollectionsResponseMessage
  | GetV1CollectionsCollectionNameObjectsResponseMessage
  | GetV1CollectionsCollectionNameObjectsObjectKeyResponseMessage
  | GetV1CollectionsCollectionNameObjectsObjectKeyMetadataResponseMessage
  | PostV1CollectionsCollectionNameObjectsResponseMessage
  | PutV1CollectionsCollectionNameObjectsObjectKeyResponseMessage;

export class CustomobjectsApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  getBridge() {
    return this.bridge;
  }

  async deleteV1CollectionsCollectionNameObjectsObjectKey(
    urlParams: DeleteV1CollectionsCollectionNameObjectsObjectKeyQueryParams = {},
  ): Promise<DeleteV1CollectionsCollectionNameObjectsObjectKeyApiResponse> {
    const message: DeleteV1CollectionsCollectionNameObjectsObjectKeyRequestMessage =
      {
        type: 'api',
        api: 'customobjects',
        method: 'deleteV1CollectionsCollectionNameObjectsObjectKey',
        payload: {
          params: urlParams,
        },
      };

    return this.bridge.postMessage(message);
  }

  async getV1Collections(
    urlParams: GetV1CollectionsQueryParams = {},
  ): Promise<GetV1CollectionsApiResponse> {
    const message: GetV1CollectionsRequestMessage = {
      type: 'api',
      api: 'customobjects',
      method: 'getV1Collections',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getV1CollectionsCollectionNameObjects(
    urlParams: GetV1CollectionsCollectionNameObjectsQueryParams = {},
  ): Promise<GetV1CollectionsCollectionNameObjectsApiResponse> {
    const message: GetV1CollectionsCollectionNameObjectsRequestMessage = {
      type: 'api',
      api: 'customobjects',
      method: 'getV1CollectionsCollectionNameObjects',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getV1CollectionsCollectionNameObjectsObjectKey(
    urlParams: GetV1CollectionsCollectionNameObjectsObjectKeyQueryParams = {},
  ): Promise<GetV1CollectionsCollectionNameObjectsObjectKeyApiResponse> {
    const message: GetV1CollectionsCollectionNameObjectsObjectKeyRequestMessage =
      {
        type: 'api',
        api: 'customobjects',
        method: 'getV1CollectionsCollectionNameObjectsObjectKey',
        payload: {
          params: urlParams,
        },
      };

    return this.bridge.postMessage(message);
  }

  async getV1CollectionsCollectionNameObjectsObjectKeyMetadata(
    urlParams: GetV1CollectionsCollectionNameObjectsObjectKeyMetadataQueryParams = {},
  ): Promise<GetV1CollectionsCollectionNameObjectsObjectKeyMetadataApiResponse> {
    const message: GetV1CollectionsCollectionNameObjectsObjectKeyMetadataRequestMessage =
      {
        type: 'api',
        api: 'customobjects',
        method: 'getV1CollectionsCollectionNameObjectsObjectKeyMetadata',
        payload: {
          params: urlParams,
        },
      };

    return this.bridge.postMessage(message);
  }

  async postV1CollectionsCollectionNameObjects(
    postBody: PostV1CollectionsCollectionNameObjectsPostData,
    urlParams: PostV1CollectionsCollectionNameObjectsQueryParams = {},
  ): Promise<PostV1CollectionsCollectionNameObjectsApiResponse> {
    const message: PostV1CollectionsCollectionNameObjectsRequestMessage = {
      type: 'api',
      api: 'customobjects',
      method: 'postV1CollectionsCollectionNameObjects',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async putV1CollectionsCollectionNameObjectsObjectKey(
    postBody: PutV1CollectionsCollectionNameObjectsObjectKeyPostData,
    urlParams: PutV1CollectionsCollectionNameObjectsObjectKeyQueryParams = {},
  ): Promise<PutV1CollectionsCollectionNameObjectsObjectKeyApiResponse> {
    const message: PutV1CollectionsCollectionNameObjectsObjectKeyRequestMessage =
      {
        type: 'api',
        api: 'customobjects',
        method: 'putV1CollectionsCollectionNameObjectsObjectKey',
        payload: {
          body: postBody,
          params: urlParams,
        },
      };

    return this.bridge.postMessage(message);
  }
}
