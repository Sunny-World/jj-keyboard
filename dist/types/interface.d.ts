export interface jjKeyStru {
    REALKEYS: string[];
    init: () => any;
    destroy: () => any;
    isConsole: boolean;
    target: any;
    delTarget: (key: string) => any;
    delAllTarget: () => any;
    parseKey: (event: any) => any;
    keydownFn: (event: any) => any;
    keyupFn: (event: any) => any;
    addKey: (key: string) => any;
    delKey: (key: string) => any;
}
//# sourceMappingURL=interface.d.ts.map