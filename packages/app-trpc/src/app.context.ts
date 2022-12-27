import { OnBehalfOfUserCredential, AppCredential } from "@microsoft/teamsfx";

export type AppContext = {
    appCredential: AppCredential,
    userCredential: OnBehalfOfUserCredential,
};