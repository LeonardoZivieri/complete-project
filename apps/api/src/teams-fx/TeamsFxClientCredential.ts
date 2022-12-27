import { OnBehalfOfCredentialAuthConfig, OnBehalfOfUserCredential } from "@microsoft/teamsfx";

const oboAuthConfig: OnBehalfOfCredentialAuthConfig = {
    authorityHost: process.env.M365_AUTHORITY_HOST!,
    clientId: process.env.M365_CLIENT_ID!,
    tenantId: process.env.M365_TENANT_ID!,
    clientSecret: process.env.M365_CLIENT_SECRET!,
};

export class TeamsFxClientCredential extends OnBehalfOfUserCredential {
    constructor(ssoToken: string) {
        super(ssoToken, oboAuthConfig);
    }
}