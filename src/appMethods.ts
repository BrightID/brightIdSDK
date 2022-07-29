// appMethods.ts
/**
 * This is the doc comment for file1.ts
 * @brightid_sdk
 */

import axios from "axios";

type SignatureData = {
  uid: string;
  sig: {
    rho: string;
    omega: string;
    sigma: string;
    delta: string;
  };
  verification: string;
  roundedTimestamp: number;
};

/**
 *
 * @param app - the application that is doing the signing
 * @param appUserId - the appUserId string corresponding to a specific user in a BrightID app
 *
 * @returns {SignatureData} - the signature data for the appUserId
 */
export const sign = async (app: string, appUserId: string) => {
  const endpoint = "https://app.brightid.org/node/v6/verifications";
  try {
    let headers = { "Content-Type": "application/json" };
    let sig = { rho: "", omega: "", sigma: "", delta: "" };
    const res = await axios.post(
      `${endpoint}/${app}/${appUserId}`,
      {
        uid: appUserId,
        sig,
        verification: "",
        roundedTimestamp: Date.now(),
      } as SignatureData,
      {
        headers,
      }
    );
    console.log("Res:", res);
    return res.data as SignatureData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.errorMessage);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};

type AppData = {
  id: string;
  name: string;
  context?: string;
  verification: string;
  verifications?: string[];
  verificationsUrl: string;
  logo?: string;
  url?: string;
  assignedSponsorships?: number;
  unusedSponsorships?: number;
  testing?: boolean;
  idAsHex?: boolean;
  usingBlindSig?: boolean;
  verificationExpirationLength?: number;
  sponsorPublicKey?: string;
  nodeUrl?: string;
  soulbound?: boolean;
  callbackUrl?: string;
};

/**
 *
 * @param app - the application app to get information about
 *
 * @returns {AppData} - the signature data for the appUserId
 */
export const appInformation = async (app: string) => {
  const endpoint = "https://app.brightid.org/node/v6/apps";
  try {
    const res = await axios.get(`${endpoint}/${app}`);
    return res.data as AppData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.errorMessage);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};

type SignedVerification = {
  unique: boolean;
  app: string;
  appUserId: string;
  verification: string;
  verificationHash?: string;
  timestamp?: number;
  sig?: string;
  publicKey?: string;
};

/**
 *
 * @param app - the application app to get information about
 * @param appUserId - the appUserId string corresponding to a specific user in a BrightID app
 * @param params - the query parameters to pass to the signed verification endpoint
 *
 * @returns {SignedVerification}
 */
export const signedVerification = async (
  app: string,
  appUserId: string,
  params?: {
    includeHash?: boolean;
    signed?: "eth" | "nacl";
    timestamp?: string;
  }
) => {
  const endpoint = "https://app.brightid.org/node/v6/verifications";
  try {
    let queryParams = encodeQueryData(params);
    const res = await axios.get(
      `${endpoint}/${app}/${appUserId}?${queryParams}` // Need a better way to do this
    );
    return res.data as SignedVerification;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.errorMessage);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};

/**
 * @ignore
 * ':
 */
const encodeQueryData = (data: any) => {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return ret.join("&");
};

type Connection = {
  id: string;
  isActive: boolean;
  activeAfter: number;
  activeBefore: number;
};
type UserProfile = {
  id: string;
  connectionsNum: number;
  groupsNum: number;
  createdAt: number;
  reports: Array<{ id: string; reason: string }>;
  verifications: any[];
  signingKeys: string[];
  recoveryConnections: Connection[];
  sponsored: boolean;
  mutualConnections: string[];
  mutualGroups: string[];
  level: "reported" | "suspicious" | "just met" | "already known" | "recovery";
  connectedAt: number;
};

/**
 *
 * @param id - the BrightID user ID of the user to get information about
 *
 * @returns {UserProfile}
 */
export const userProfile = async (id: string) => {
  const endpoint = "https://app.brightid.org/node/v6/users";
  try {
    const res = await axios.get(`${endpoint}/${id}/profile`);
    return res.data as UserProfile;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.errorMessage);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};

type SponsorshipData = {
  app: string;
  appHasAuthorized: boolean;
  spendRequested: boolean;
  timestamp: number;
};

/**
 *
 * @param appUserId - the appUserId string corresponding to a specific user in a BrightID app
 *
 * @returns {SponsorshipData} - the sponsorship status for the user
 */
export const sponsorshipInformation = async (appUserId: string) => {
  const endpoint = "https://app.brightid.org/node/v6/sponsorships";
  try {
    const res = await axios.get(`${endpoint}/${appUserId}`);
    return res.data as SponsorshipData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.errorMessage);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};
