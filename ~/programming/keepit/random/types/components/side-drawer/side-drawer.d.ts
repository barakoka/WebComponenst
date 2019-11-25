export declare class SideDrawer {
    showContact: boolean;
    titleName: string;
    open: boolean;
    onCloseDrawer(): void;
    onContentChange(content: string): void;
    makeOpen(): Promise<void>;
    render(): any;
}
