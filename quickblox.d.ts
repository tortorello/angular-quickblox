export interface QuickBlox {
    version: string;
    buildNumber: string;
    chat: any;
    users: any;
    init(appIdOrToken: number, authKeyOrAppId: string, authSecret: string, configMap?: any);
    createSession(params: string, callback: any);
    login(params: string, callback: any);
    logout(callback: any);
}