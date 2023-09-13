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

export type DevicesRequestApi = 'devices';

export type CommonApiResponseMessage =
  BaseApiResponseMessage<ApiResponsePayload>;

export interface CommonApiRequestMessage
  extends BaseApiRequestMessage<BaseUrlParams, unknown> {
  api: DevicesRequestApi;
}

// types for deleteEntitiesGroupsV1

export interface DeleteEntitiesGroupsV1QueryParams extends BaseUrlParams {
  ids: QueryParam;
}

export type DeleteEntitiesGroupsV1ApiResponse = ApiResponsePayload;

export type DeleteEntitiesGroupsV1ResponseMessage =
  BaseApiResponseMessage<DeleteEntitiesGroupsV1ApiResponse>;

export interface DeleteEntitiesGroupsV1RequestMessage
  extends BaseApiRequestMessage<DeleteEntitiesGroupsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'deleteEntitiesGroupsV1';
}

// types for getAggregatesBucketsV1

export interface GetAggregatesBucketsV1QueryParams extends BaseUrlParams {
  facet: QueryParam;
  filter?: string;
  sort?: QueryParam;
  groupId?: QueryParam;
  policyId?: QueryParam;
  policyType?: QueryParam;
  additionalHostsOnly?: QueryParam;
}

export type GetAggregatesBucketsV1ApiResponse = ApiResponsePayload;

export type GetAggregatesBucketsV1ResponseMessage =
  BaseApiResponseMessage<GetAggregatesBucketsV1ApiResponse>;

export interface GetAggregatesBucketsV1RequestMessage
  extends BaseApiRequestMessage<GetAggregatesBucketsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getAggregatesBucketsV1';
}

// types for getAggregatesTagPrefixCountsV1

export interface GetAggregatesTagPrefixCountsV1QueryParams
  extends BaseUrlParams {
  prefix: QueryParam;
  limit?: QueryParam;
}

export type GetAggregatesTagPrefixCountsV1ApiResponse = ApiResponsePayload;

export type GetAggregatesTagPrefixCountsV1ResponseMessage =
  BaseApiResponseMessage<GetAggregatesTagPrefixCountsV1ApiResponse>;

export interface GetAggregatesTagPrefixCountsV1RequestMessage
  extends BaseApiRequestMessage<GetAggregatesTagPrefixCountsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getAggregatesTagPrefixCountsV1';
}

// types for getEntitiesGroupsV1

export interface GetEntitiesGroupsV1QueryParams extends BaseUrlParams {
  ids: QueryParam;
}

export type GetEntitiesGroupsV1ApiResponse = ApiResponsePayload;

export type GetEntitiesGroupsV1ResponseMessage =
  BaseApiResponseMessage<GetEntitiesGroupsV1ApiResponse>;

export interface GetEntitiesGroupsV1RequestMessage
  extends BaseApiRequestMessage<GetEntitiesGroupsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getEntitiesGroupsV1';
}

// types for getEntitiesReleasesV1

export interface GetEntitiesReleasesV1QueryParams extends BaseUrlParams {
  ids: QueryParam;
}

export type GetEntitiesReleasesV1ApiResponse = ApiResponsePayload;

export type GetEntitiesReleasesV1ResponseMessage =
  BaseApiResponseMessage<GetEntitiesReleasesV1ApiResponse>;

export interface GetEntitiesReleasesV1RequestMessage
  extends BaseApiRequestMessage<GetEntitiesReleasesV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getEntitiesReleasesV1';
}

// types for getEntitiesRespondV1

export type GetEntitiesRespondV1QueryParams = BaseUrlParams;

export type GetEntitiesRespondV1ApiResponse = ApiResponsePayload;

export type GetEntitiesRespondV1ResponseMessage =
  BaseApiResponseMessage<GetEntitiesRespondV1ApiResponse>;

export interface GetEntitiesRespondV1RequestMessage
  extends BaseApiRequestMessage<GetEntitiesRespondV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getEntitiesRespondV1';
}

// types for getQueriesAvailableGroupsV1

export interface GetQueriesAvailableGroupsV1QueryParams extends BaseUrlParams {
  policyId?: QueryParam;
  policyType?: QueryParam;
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
}

export type GetQueriesAvailableGroupsV1ApiResponse = ApiResponsePayload;

export type GetQueriesAvailableGroupsV1ResponseMessage =
  BaseApiResponseMessage<GetQueriesAvailableGroupsV1ApiResponse>;

export interface GetQueriesAvailableGroupsV1RequestMessage
  extends BaseApiRequestMessage<GetQueriesAvailableGroupsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getQueriesAvailableGroupsV1';
}

// types for getQueriesDevicesHiddenV2

export interface GetQueriesDevicesHiddenV2QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
  groupId?: QueryParam;
  policyId?: QueryParam;
  policyType?: QueryParam;
  additionalHostsOnly?: QueryParam;
}

export type GetQueriesDevicesHiddenV2ApiResponse = ApiResponsePayload;

export type GetQueriesDevicesHiddenV2ResponseMessage =
  BaseApiResponseMessage<GetQueriesDevicesHiddenV2ApiResponse>;

export interface GetQueriesDevicesHiddenV2RequestMessage
  extends BaseApiRequestMessage<GetQueriesDevicesHiddenV2QueryParams> {
  api: DevicesRequestApi;
  method: 'getQueriesDevicesHiddenV2';
}

// types for getQueriesDevicesV1

export interface GetQueriesDevicesV1QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
  groupId?: QueryParam;
  policyId?: QueryParam;
  policyType?: QueryParam;
  additionalHostsOnly?: QueryParam;
}

export type GetQueriesDevicesV1ApiResponse = ApiResponsePayload;

export type GetQueriesDevicesV1ResponseMessage =
  BaseApiResponseMessage<GetQueriesDevicesV1ApiResponse>;

export interface GetQueriesDevicesV1RequestMessage
  extends BaseApiRequestMessage<GetQueriesDevicesV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getQueriesDevicesV1';
}

// types for getQueriesDevicesV2

export interface GetQueriesDevicesV2QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
  groupId?: QueryParam;
  policyId?: QueryParam;
  policyType?: QueryParam;
  additionalHostsOnly?: QueryParam;
}

export type GetQueriesDevicesV2ApiResponse = ApiResponsePayload;

export type GetQueriesDevicesV2ResponseMessage =
  BaseApiResponseMessage<GetQueriesDevicesV2ApiResponse>;

export interface GetQueriesDevicesV2RequestMessage
  extends BaseApiRequestMessage<GetQueriesDevicesV2QueryParams> {
  api: DevicesRequestApi;
  method: 'getQueriesDevicesV2';
}

// types for getQueriesGroupsV1

export interface GetQueriesGroupsV1QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
}

export type GetQueriesGroupsV1ApiResponse = ApiResponsePayload;

export type GetQueriesGroupsV1ResponseMessage =
  BaseApiResponseMessage<GetQueriesGroupsV1ApiResponse>;

export interface GetQueriesGroupsV1RequestMessage
  extends BaseApiRequestMessage<GetQueriesGroupsV1QueryParams> {
  api: DevicesRequestApi;
  method: 'getQueriesGroupsV1';
}

// types for patchEntitiesDevicesTagsV2

export type PatchEntitiesDevicesTagsV2QueryParams = BaseUrlParams;

export type PatchEntitiesDevicesTagsV2ApiResponse = ApiResponsePayload;

export interface PatchEntitiesDevicesTagsV2PostData {}

export type PatchEntitiesDevicesTagsV2ResponseMessage =
  BaseApiResponseMessage<PatchEntitiesDevicesTagsV2ApiResponse>;

export interface PatchEntitiesDevicesTagsV2RequestMessage
  extends BaseApiRequestMessage<
    PatchEntitiesDevicesTagsV2QueryParams,
    PatchEntitiesDevicesTagsV2PostData
  > {
  api: DevicesRequestApi;
  method: 'patchEntitiesDevicesTagsV2';
}

// types for patchEntitiesGroupsV1

export type PatchEntitiesGroupsV1QueryParams = BaseUrlParams;

export type PatchEntitiesGroupsV1ApiResponse = ApiResponsePayload;

export interface PatchEntitiesGroupsV1PostData {}

export type PatchEntitiesGroupsV1ResponseMessage =
  BaseApiResponseMessage<PatchEntitiesGroupsV1ApiResponse>;

export interface PatchEntitiesGroupsV1RequestMessage
  extends BaseApiRequestMessage<
    PatchEntitiesGroupsV1QueryParams,
    PatchEntitiesGroupsV1PostData
  > {
  api: DevicesRequestApi;
  method: 'patchEntitiesGroupsV1';
}

// types for postAggregatesDevicesGetV1

export interface PostAggregatesDevicesGetV1QueryParams extends BaseUrlParams {
  groupId?: QueryParam;
}

export type PostAggregatesDevicesGetV1ApiResponse = ApiResponsePayload;

export interface PostAggregatesDevicesGetV1PostData {}

export type PostAggregatesDevicesGetV1ResponseMessage =
  BaseApiResponseMessage<PostAggregatesDevicesGetV1ApiResponse>;

export interface PostAggregatesDevicesGetV1RequestMessage
  extends BaseApiRequestMessage<
    PostAggregatesDevicesGetV1QueryParams,
    PostAggregatesDevicesGetV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postAggregatesDevicesGetV1';
}

// types for postCombinedDevicesLoginHistoryV1

export type PostCombinedDevicesLoginHistoryV1QueryParams = BaseUrlParams;

export type PostCombinedDevicesLoginHistoryV1ApiResponse = ApiResponsePayload;

export interface PostCombinedDevicesLoginHistoryV1PostData {}

export type PostCombinedDevicesLoginHistoryV1ResponseMessage =
  BaseApiResponseMessage<PostCombinedDevicesLoginHistoryV1ApiResponse>;

export interface PostCombinedDevicesLoginHistoryV1RequestMessage
  extends BaseApiRequestMessage<
    PostCombinedDevicesLoginHistoryV1QueryParams,
    PostCombinedDevicesLoginHistoryV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postCombinedDevicesLoginHistoryV1';
}

// types for postEntitiesDevicesActionsV4

export interface PostEntitiesDevicesActionsV4QueryParams extends BaseUrlParams {
  actionName?: QueryParam;
}

export type PostEntitiesDevicesActionsV4ApiResponse = ApiResponsePayload;

export interface PostEntitiesDevicesActionsV4PostData {}

export type PostEntitiesDevicesActionsV4ResponseMessage =
  BaseApiResponseMessage<PostEntitiesDevicesActionsV4ApiResponse>;

export interface PostEntitiesDevicesActionsV4RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesDevicesActionsV4QueryParams,
    PostEntitiesDevicesActionsV4PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesDevicesActionsV4';
}

// types for postEntitiesDevicesHiddenActionsV4

export interface PostEntitiesDevicesHiddenActionsV4QueryParams
  extends BaseUrlParams {
  actionName?: QueryParam;
}

export type PostEntitiesDevicesHiddenActionsV4ApiResponse = ApiResponsePayload;

export interface PostEntitiesDevicesHiddenActionsV4PostData {}

export type PostEntitiesDevicesHiddenActionsV4ResponseMessage =
  BaseApiResponseMessage<PostEntitiesDevicesHiddenActionsV4ApiResponse>;

export interface PostEntitiesDevicesHiddenActionsV4RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesDevicesHiddenActionsV4QueryParams,
    PostEntitiesDevicesHiddenActionsV4PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesDevicesHiddenActionsV4';
}

// types for postEntitiesDevicesReportsV1

export type PostEntitiesDevicesReportsV1QueryParams = BaseUrlParams;

export type PostEntitiesDevicesReportsV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesDevicesReportsV1PostData {}

export type PostEntitiesDevicesReportsV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesDevicesReportsV1ApiResponse>;

export interface PostEntitiesDevicesReportsV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesDevicesReportsV1QueryParams,
    PostEntitiesDevicesReportsV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesDevicesReportsV1';
}

// types for postEntitiesDevicesV2

export type PostEntitiesDevicesV2QueryParams = BaseUrlParams;

export type PostEntitiesDevicesV2ApiResponse = ApiResponsePayload;

export interface PostEntitiesDevicesV2PostData {}

export type PostEntitiesDevicesV2ResponseMessage =
  BaseApiResponseMessage<PostEntitiesDevicesV2ApiResponse>;

export interface PostEntitiesDevicesV2RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesDevicesV2QueryParams,
    PostEntitiesDevicesV2PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesDevicesV2';
}

// types for postEntitiesGroupActionsV1

export interface PostEntitiesGroupActionsV1QueryParams extends BaseUrlParams {
  ids: QueryParam;
  actionName: QueryParam;
  disableHostnameCheck?: QueryParam;
}

export type PostEntitiesGroupActionsV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesGroupActionsV1PostData {}

export type PostEntitiesGroupActionsV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesGroupActionsV1ApiResponse>;

export interface PostEntitiesGroupActionsV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesGroupActionsV1QueryParams,
    PostEntitiesGroupActionsV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesGroupActionsV1';
}

// types for postEntitiesGroupsV1

export type PostEntitiesGroupsV1QueryParams = BaseUrlParams;

export type PostEntitiesGroupsV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesGroupsV1PostData {}

export type PostEntitiesGroupsV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesGroupsV1ApiResponse>;

export interface PostEntitiesGroupsV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesGroupsV1QueryParams,
    PostEntitiesGroupsV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesGroupsV1';
}

// types for postEntitiesReleasesV1

export interface PostEntitiesReleasesV1QueryParams extends BaseUrlParams {
  ids: QueryParam;
}

export type PostEntitiesReleasesV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesReleasesV1PostData {}

export type PostEntitiesReleasesV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesReleasesV1ApiResponse>;

export interface PostEntitiesReleasesV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesReleasesV1QueryParams,
    PostEntitiesReleasesV1PostData
  > {
  api: DevicesRequestApi;
  method: 'postEntitiesReleasesV1';
}

// general types

export type DevicesApiRequestMessage =
  | DeleteEntitiesGroupsV1RequestMessage
  | GetAggregatesBucketsV1RequestMessage
  | GetAggregatesTagPrefixCountsV1RequestMessage
  | GetEntitiesGroupsV1RequestMessage
  | GetEntitiesReleasesV1RequestMessage
  | GetEntitiesRespondV1RequestMessage
  | GetQueriesAvailableGroupsV1RequestMessage
  | GetQueriesDevicesHiddenV2RequestMessage
  | GetQueriesDevicesV1RequestMessage
  | GetQueriesDevicesV2RequestMessage
  | GetQueriesGroupsV1RequestMessage
  | PatchEntitiesDevicesTagsV2RequestMessage
  | PatchEntitiesGroupsV1RequestMessage
  | PostAggregatesDevicesGetV1RequestMessage
  | PostCombinedDevicesLoginHistoryV1RequestMessage
  | PostEntitiesDevicesActionsV4RequestMessage
  | PostEntitiesDevicesHiddenActionsV4RequestMessage
  | PostEntitiesDevicesReportsV1RequestMessage
  | PostEntitiesDevicesV2RequestMessage
  | PostEntitiesGroupActionsV1RequestMessage
  | PostEntitiesGroupsV1RequestMessage
  | PostEntitiesReleasesV1RequestMessage;

export type DevicesApiResponseMessage =
  | DeleteEntitiesGroupsV1ResponseMessage
  | GetAggregatesBucketsV1ResponseMessage
  | GetAggregatesTagPrefixCountsV1ResponseMessage
  | GetEntitiesGroupsV1ResponseMessage
  | GetEntitiesReleasesV1ResponseMessage
  | GetEntitiesRespondV1ResponseMessage
  | GetQueriesAvailableGroupsV1ResponseMessage
  | GetQueriesDevicesHiddenV2ResponseMessage
  | GetQueriesDevicesV1ResponseMessage
  | GetQueriesDevicesV2ResponseMessage
  | GetQueriesGroupsV1ResponseMessage
  | PatchEntitiesDevicesTagsV2ResponseMessage
  | PatchEntitiesGroupsV1ResponseMessage
  | PostAggregatesDevicesGetV1ResponseMessage
  | PostCombinedDevicesLoginHistoryV1ResponseMessage
  | PostEntitiesDevicesActionsV4ResponseMessage
  | PostEntitiesDevicesHiddenActionsV4ResponseMessage
  | PostEntitiesDevicesReportsV1ResponseMessage
  | PostEntitiesDevicesV2ResponseMessage
  | PostEntitiesGroupActionsV1ResponseMessage
  | PostEntitiesGroupsV1ResponseMessage
  | PostEntitiesReleasesV1ResponseMessage;

export class DevicesApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  getBridge() {
    return this.bridge;
  }

  async deleteEntitiesGroupsV1(
    urlParams: DeleteEntitiesGroupsV1QueryParams,
  ): Promise<DeleteEntitiesGroupsV1ApiResponse> {
    const message: DeleteEntitiesGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'deleteEntitiesGroupsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getAggregatesBucketsV1(
    urlParams: GetAggregatesBucketsV1QueryParams,
  ): Promise<GetAggregatesBucketsV1ApiResponse> {
    const message: GetAggregatesBucketsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getAggregatesBucketsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getAggregatesTagPrefixCountsV1(
    urlParams: GetAggregatesTagPrefixCountsV1QueryParams,
  ): Promise<GetAggregatesTagPrefixCountsV1ApiResponse> {
    const message: GetAggregatesTagPrefixCountsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getAggregatesTagPrefixCountsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getEntitiesGroupsV1(
    urlParams: GetEntitiesGroupsV1QueryParams,
  ): Promise<GetEntitiesGroupsV1ApiResponse> {
    const message: GetEntitiesGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getEntitiesGroupsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getEntitiesReleasesV1(
    urlParams: GetEntitiesReleasesV1QueryParams,
  ): Promise<GetEntitiesReleasesV1ApiResponse> {
    const message: GetEntitiesReleasesV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getEntitiesReleasesV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getEntitiesRespondV1(
    urlParams: GetEntitiesRespondV1QueryParams = {},
  ): Promise<GetEntitiesRespondV1ApiResponse> {
    const message: GetEntitiesRespondV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getEntitiesRespondV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getQueriesAvailableGroupsV1(
    urlParams: GetQueriesAvailableGroupsV1QueryParams = {},
  ): Promise<GetQueriesAvailableGroupsV1ApiResponse> {
    const message: GetQueriesAvailableGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getQueriesAvailableGroupsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getQueriesDevicesHiddenV2(
    urlParams: GetQueriesDevicesHiddenV2QueryParams = {},
  ): Promise<GetQueriesDevicesHiddenV2ApiResponse> {
    const message: GetQueriesDevicesHiddenV2RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getQueriesDevicesHiddenV2',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getQueriesDevicesV1(
    urlParams: GetQueriesDevicesV1QueryParams = {},
  ): Promise<GetQueriesDevicesV1ApiResponse> {
    const message: GetQueriesDevicesV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getQueriesDevicesV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getQueriesDevicesV2(
    urlParams: GetQueriesDevicesV2QueryParams = {},
  ): Promise<GetQueriesDevicesV2ApiResponse> {
    const message: GetQueriesDevicesV2RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getQueriesDevicesV2',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getQueriesGroupsV1(
    urlParams: GetQueriesGroupsV1QueryParams = {},
  ): Promise<GetQueriesGroupsV1ApiResponse> {
    const message: GetQueriesGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'getQueriesGroupsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async patchEntitiesDevicesTagsV2(
    postBody: PatchEntitiesDevicesTagsV2PostData,
    urlParams: PatchEntitiesDevicesTagsV2QueryParams = {},
  ): Promise<PatchEntitiesDevicesTagsV2ApiResponse> {
    const message: PatchEntitiesDevicesTagsV2RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'patchEntitiesDevicesTagsV2',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async patchEntitiesGroupsV1(
    postBody: PatchEntitiesGroupsV1PostData,
    urlParams: PatchEntitiesGroupsV1QueryParams = {},
  ): Promise<PatchEntitiesGroupsV1ApiResponse> {
    const message: PatchEntitiesGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'patchEntitiesGroupsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postAggregatesDevicesGetV1(
    postBody: PostAggregatesDevicesGetV1PostData,
    urlParams: PostAggregatesDevicesGetV1QueryParams = {},
  ): Promise<PostAggregatesDevicesGetV1ApiResponse> {
    const message: PostAggregatesDevicesGetV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postAggregatesDevicesGetV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postCombinedDevicesLoginHistoryV1(
    postBody: PostCombinedDevicesLoginHistoryV1PostData,
    urlParams: PostCombinedDevicesLoginHistoryV1QueryParams = {},
  ): Promise<PostCombinedDevicesLoginHistoryV1ApiResponse> {
    const message: PostCombinedDevicesLoginHistoryV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postCombinedDevicesLoginHistoryV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesDevicesActionsV4(
    postBody: PostEntitiesDevicesActionsV4PostData,
    urlParams: PostEntitiesDevicesActionsV4QueryParams = {},
  ): Promise<PostEntitiesDevicesActionsV4ApiResponse> {
    const message: PostEntitiesDevicesActionsV4RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesDevicesActionsV4',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesDevicesHiddenActionsV4(
    postBody: PostEntitiesDevicesHiddenActionsV4PostData,
    urlParams: PostEntitiesDevicesHiddenActionsV4QueryParams = {},
  ): Promise<PostEntitiesDevicesHiddenActionsV4ApiResponse> {
    const message: PostEntitiesDevicesHiddenActionsV4RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesDevicesHiddenActionsV4',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesDevicesReportsV1(
    postBody: PostEntitiesDevicesReportsV1PostData,
    urlParams: PostEntitiesDevicesReportsV1QueryParams = {},
  ): Promise<PostEntitiesDevicesReportsV1ApiResponse> {
    const message: PostEntitiesDevicesReportsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesDevicesReportsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesDevicesV2(
    postBody: PostEntitiesDevicesV2PostData,
    urlParams: PostEntitiesDevicesV2QueryParams = {},
  ): Promise<PostEntitiesDevicesV2ApiResponse> {
    const message: PostEntitiesDevicesV2RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesDevicesV2',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesGroupActionsV1(
    postBody: PostEntitiesGroupActionsV1PostData,
    urlParams: PostEntitiesGroupActionsV1QueryParams,
  ): Promise<PostEntitiesGroupActionsV1ApiResponse> {
    const message: PostEntitiesGroupActionsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesGroupActionsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesGroupsV1(
    postBody: PostEntitiesGroupsV1PostData,
    urlParams: PostEntitiesGroupsV1QueryParams = {},
  ): Promise<PostEntitiesGroupsV1ApiResponse> {
    const message: PostEntitiesGroupsV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesGroupsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesReleasesV1(
    postBody: PostEntitiesReleasesV1PostData,
    urlParams: PostEntitiesReleasesV1QueryParams,
  ): Promise<PostEntitiesReleasesV1ApiResponse> {
    const message: PostEntitiesReleasesV1RequestMessage = {
      type: 'api',
      api: 'devices',
      method: 'postEntitiesReleasesV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }
}
