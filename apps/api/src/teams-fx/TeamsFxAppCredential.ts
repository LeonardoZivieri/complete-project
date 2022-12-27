import { AppCredential, AppCredentialAuthConfig } from "@microsoft/teamsfx";

const appAuthConfig: AppCredentialAuthConfig = {
    authorityHost: process.env.M365_AUTHORITY_HOST!,
    clientId: process.env.M365_CLIENT_ID!,
    tenantId: process.env.M365_TENANT_ID!,
    clientSecret: process.env.M365_CLIENT_SECRET!,
};
export class TeamsFxAppCredential extends AppCredential {
    constructor() {
        super(appAuthConfig);
    }
}