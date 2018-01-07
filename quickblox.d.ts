declare module 'angular2-quickblox';

export class QuickBlox {
    version: string;
    buildNumber: string;
    chat: any;
    users: any;
    init(appIdOrToken: number, authKeyOrAppId: string, authSecret: string, configMap?: any);
    createSession(params: string, callback: any);
    login(params: any, callback: any);
    logout(callback: any);
}
