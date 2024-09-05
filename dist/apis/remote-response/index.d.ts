/**
 *
 * This file is autogenerated.
 *
 * DO NOT EDIT DIRECTLY
 *
 **/
import type { Bridge } from '../../bridge';
import type { ApiResponsePayload, BaseApiRequestMessage, BaseApiResponseMessage, BaseUrlParams, QueryParam } from '../../types';
export type RemoteResponseRequestApi = 'remoteResponse';
export type CommonApiResponseMessage = BaseApiResponseMessage<ApiResponsePayload>;
export interface CommonApiRequestMessage extends BaseApiRequestMessage<BaseUrlParams, unknown> {
    api: RemoteResponseRequestApi;
}
export interface DeleteEntitiesPutFilesV1QueryParams extends BaseUrlParams {
    ids: QueryParam;
}
export type DeleteEntitiesPutFilesV1ApiResponse = ApiResponsePayload;
export type DeleteEntitiesPutFilesV1ResponseMessage = BaseApiResponseMessage<DeleteEntitiesPutFilesV1ApiResponse>;
export interface DeleteEntitiesPutFilesV1RequestMessage extends BaseApiRequestMessage<DeleteEntitiesPutFilesV1QueryParams> {
    api: RemoteResponseRequestApi;
    method: 'deleteEntitiesPutFilesV1';
}
export interface GetEntitiesAppCommandV1QueryParams extends BaseUrlParams {
    cloudRequestId: QueryParam;
    sequenceId: QueryParam;
}
export type GetEntitiesAppCommandV1ApiResponse = ApiResponsePayload;
export type GetEntitiesAppCommandV1ResponseMessage = BaseApiResponseMessage<GetEntitiesAppCommandV1ApiResponse>;
export interface GetEntitiesAppCommandV1RequestMessage extends BaseApiRequestMessage<GetEntitiesAppCommandV1QueryParams> {
    api: RemoteResponseRequestApi;
    method: 'getEntitiesAppCommandV1';
}
export interface GetEntitiesPutFilesV2QueryParams extends BaseUrlParams {
    ids: QueryParam;
}
export type GetEntitiesPutFilesV2ApiResponse = ApiResponsePayload;
export type GetEntitiesPutFilesV2ResponseMessage = BaseApiResponseMessage<GetEntitiesPutFilesV2ApiResponse>;
export interface GetEntitiesPutFilesV2RequestMessage extends BaseApiRequestMessage<GetEntitiesPutFilesV2QueryParams> {
    api: RemoteResponseRequestApi;
    method: 'getEntitiesPutFilesV2';
}
export interface GetQueriesPutFilesV1QueryParams extends BaseUrlParams {
    filter?: string;
    limit?: QueryParam;
    offset?: QueryParam;
    sort?: QueryParam;
}
export type GetQueriesPutFilesV1ApiResponse = ApiResponsePayload;
export type GetQueriesPutFilesV1ResponseMessage = BaseApiResponseMessage<GetQueriesPutFilesV1ApiResponse>;
export interface GetQueriesPutFilesV1RequestMessage extends BaseApiRequestMessage<GetQueriesPutFilesV1QueryParams> {
    api: RemoteResponseRequestApi;
    method: 'getQueriesPutFilesV1';
}
export interface PostEntitiesAppCommandV1QueryParams extends BaseUrlParams {
    appScriptVersion?: QueryParam;
}
export type PostEntitiesAppCommandV1ApiResponse = ApiResponsePayload;
export interface PostEntitiesAppCommandV1PostData {
}
export type PostEntitiesAppCommandV1ResponseMessage = BaseApiResponseMessage<PostEntitiesAppCommandV1ApiResponse>;
export interface PostEntitiesAppCommandV1RequestMessage extends BaseApiRequestMessage<PostEntitiesAppCommandV1QueryParams, PostEntitiesAppCommandV1PostData> {
    api: RemoteResponseRequestApi;
    method: 'postEntitiesAppCommandV1';
}
export interface PostEntitiesAppSessionsV1QueryParams extends BaseUrlParams {
    timeout?: QueryParam;
    timeoutDuration?: QueryParam;
}
export type PostEntitiesAppSessionsV1ApiResponse = ApiResponsePayload;
export interface PostEntitiesAppSessionsV1PostData {
}
export type PostEntitiesAppSessionsV1ResponseMessage = BaseApiResponseMessage<PostEntitiesAppSessionsV1ApiResponse>;
export interface PostEntitiesAppSessionsV1RequestMessage extends BaseApiRequestMessage<PostEntitiesAppSessionsV1QueryParams, PostEntitiesAppSessionsV1PostData> {
    api: RemoteResponseRequestApi;
    method: 'postEntitiesAppSessionsV1';
}
export type PostEntitiesPutFilesV1QueryParams = BaseUrlParams;
export type PostEntitiesPutFilesV1ApiResponse = ApiResponsePayload;
export interface PostEntitiesPutFilesV1PostData {
}
export type PostEntitiesPutFilesV1ResponseMessage = BaseApiResponseMessage<PostEntitiesPutFilesV1ApiResponse>;
export interface PostEntitiesPutFilesV1RequestMessage extends BaseApiRequestMessage<PostEntitiesPutFilesV1QueryParams, PostEntitiesPutFilesV1PostData> {
    api: RemoteResponseRequestApi;
    method: 'postEntitiesPutFilesV1';
}
export type RemoteResponseApiRequestMessage = DeleteEntitiesPutFilesV1RequestMessage | GetEntitiesAppCommandV1RequestMessage | GetEntitiesPutFilesV2RequestMessage | GetQueriesPutFilesV1RequestMessage | PostEntitiesAppCommandV1RequestMessage | PostEntitiesAppSessionsV1RequestMessage;
export type RemoteResponseApiResponseMessage = DeleteEntitiesPutFilesV1ResponseMessage | GetEntitiesAppCommandV1ResponseMessage | GetEntitiesPutFilesV2ResponseMessage | GetQueriesPutFilesV1ResponseMessage | PostEntitiesAppCommandV1ResponseMessage | PostEntitiesAppSessionsV1ResponseMessage;
export declare class RemoteResponseApiBridge {
    private bridge;
    constructor(bridge: Bridge);
    getBridge(): Bridge<import("../../types").LocalData>;
    deleteEntitiesPutFilesV1(urlParams: DeleteEntitiesPutFilesV1QueryParams): Promise<DeleteEntitiesPutFilesV1ApiResponse>;
    getEntitiesAppCommandV1(urlParams: GetEntitiesAppCommandV1QueryParams): Promise<GetEntitiesAppCommandV1ApiResponse>;
    getEntitiesPutFilesV2(urlParams: GetEntitiesPutFilesV2QueryParams): Promise<GetEntitiesPutFilesV2ApiResponse>;
    getQueriesPutFilesV1(urlParams?: GetQueriesPutFilesV1QueryParams): Promise<GetQueriesPutFilesV1ApiResponse>;
    postEntitiesAppCommandV1(postBody: PostEntitiesAppCommandV1PostData, urlParams?: PostEntitiesAppCommandV1QueryParams): Promise<PostEntitiesAppCommandV1ApiResponse>;
    postEntitiesAppSessionsV1(postBody: PostEntitiesAppSessionsV1PostData, urlParams?: PostEntitiesAppSessionsV1QueryParams): Promise<PostEntitiesAppSessionsV1ApiResponse>;
}
