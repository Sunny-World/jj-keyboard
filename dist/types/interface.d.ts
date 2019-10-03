export interface jjKeyStru {
    REALKEYS: string[];
    init: () => any;
    destroy: () => any;
    isConsole: boolean;
    target: any;
    catch: any;
    defaultCatch: (str: string, event: any) => any;
    delCatch: (key: string) => any;
    delAllCatch: () => any;
    parseKey: (event: any) => any;
    keydownFn: (event: any) => any;
    keyupFn: (event: any) => any;
    addKey: (key: string) => any;
    delKey: (key: string) => any;
}
//# sourceMappingURL=interface.d.ts.map