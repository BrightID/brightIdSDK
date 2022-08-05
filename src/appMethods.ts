// appMethods.ts
/**
 * This is the doc comment for file1.ts
 * @brightid_sdk
 */

import axios from "axios";
import stringify from "fast-json-stable-stringify";
import B64 from "base64-js";
import * as ed from "@noble/ed25519";

/**
 *
 * @param context - the application context string to create a deeplink for
 * @param contextId - the contextId string corresponding to a specific BrightID
 *
 * @returns a deeplink of the form `brightid://link-verification/http://node.brightid.org/testContext/testContextId`
 */
export const generateDeeplink = (
  context: string,
  contextId: string
): string => {
  const endpoint = `http:%2f%2fnode.brightid.org`;
  return `brightid://link-verification/${endpoint}/${context}/${contextId}`;
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
  soulbound: boolean;
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
      console.error(err.response?.data);
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
    timestamp?: "seconds" | "milliseconds";
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
      console.error(err.response?.data);
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
      console.error(err.response?.data);
      return err;
    } else {
      console.error(err);
      return;
    }
  }
};

/**
 * @ignore
 */
const getMessage = (op: any) => {
  const signedOp: any = {};
  for (let k in op) {
    if (["sig", "sig1", "sig2", "hash"].includes(k)) {
      continue;
    }
    signedOp[k] = op[k];
  }
  return stringify(signedOp);
};

type SponsorData = {
  hash: string;
};

export const sponsor = async (
  key: string | Uint8Array,
  app: string,
  appUserId: string
) => {
  let endpoint = "http://app.brightid.org/node/v6/operation";
  let timestamp = Date.now();
  let op = {
    name: "Sponsor",
    app,
    appUserId,
    timestamp,
    v: 6,
    sig: "",
  };

  const message = getMessage(op);
  const arrayedMessage = Buffer.from(message);

  try {
    const signature = await ed.sign(arrayedMessage, key);
    op.sig = B64.fromByteArray(signature);

    let res = await axios.post(endpoint, op);
    return res.data as SponsorData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data);
      return err;
    } else {
      console.error(err);
      return err;
    }
  }
};
