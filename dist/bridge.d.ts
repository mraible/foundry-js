import type { BroadcastMessage, DataUpdateMessage, LivereloadMessage, LocalData, MessageEnvelope, PayloadOf, RequestMessage, ResponseFor, ResponseMessage, UnidirectionalRequestMessage } from './types';
interface BridgeOptions<DATA extends LocalData> {
    onDataUpdate?: (event: DataUpdateMessage<DATA>) => void;
    onBroadcast?: (event: BroadcastMessage) => void;
    onLivereload?: (event: LivereloadMessage) => void;
}
export declare class Bridge<DATA extends LocalData = LocalData> {
    private onDataUpdate;
    private onBroadcast;
    private onLivereload;
    private pendingMessages;
    private targetOrigin;
    constructor({ onDataUpdate, onBroadcast, onLivereload, }?: BridgeOptions<DATA>);
    destroy(): void;
    setOrigin(origin: string): void;
    sendUnidirectionalMessage(message: UnidirectionalRequestMessage): void;
    postMessage<REQ extends RequestMessage>(message: REQ): Promise<PayloadOf<ResponseFor<REQ, DATA>>>;
    private handleMessageWrapper;
    handleMessage: (event: MessageEvent<MessageEnvelope<ResponseMessage<DATA>> | unknown>) => void;
    throwError(message: string): void;
}
export {};
