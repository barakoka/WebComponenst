import { EventEmitter } from '../../stencil.core';
export declare class KeepitBannerComponent {
    showFullBanner: boolean;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    redirect: EventEmitter;
    toggleBunner: EventEmitter;
    makeOpen(): void;
    handleUi2(): void;
    render(): any;
}
