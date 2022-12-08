// appMethods.ts
/**
 * This is the doc comment for file1.ts
 * @brightid_sdk
 */

import axios from "axios";
import stringify from "fast-json-stable-stringify";
import B64 from "base64-js";
import nacl from "tweetnacl";

/**
 *
 * @param context - the application context string to create a deeplink for
 * @param contextId - the contextId string corresponding to a specific BrightID
 * @param nodeUrl - optional BrightID node url - of the form `http://node.brightid.org`
 *
 * @returns a deeplink of the form `brightid://link-verification/http://node.brightid.org/testContext/testContextId`
 */
export const generateDeeplink = (
  context: string,
  contextId: string,
  nodeUrl?: string
): string => {
  const endpoint = nodeUrl ? nodeUrl : `http:%2f%2fnode.brightid.org`;
  return `brightid://link-verification/${endpoint}/${context}/${contextId}`;
};

/**
 *
 * @param context - the application context in which to verify a given `contextId`'s status
 * @param contextId - the contextId to retrieve the status of
 * @param nodeUrl - optional BrightID node url - of the form `http://node.brightid.org`
 *
 * @returns An API response with a uniqueness indicator and a list of any other contextIds associated with the BrightID linked to the `contextId`
 */
export const verifyContextId = async (
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + "/node/v5/verifications"
    : "https://app.brightid.org/node/v5/verifications";
  try {
    const res = await axios.get(`${endpoint}/${context}/${contextId}`);
    return res.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data;
    } else {
      throw err;
    }
  }
};

/**
 *
 * @param key - the sponsor private key needed for sponsoring a BrightID
 * @param context  - the application context in which to sponsor a given BrightID
 * @param contextId - the contextId linked to the BrightID being sponsored
 * @param nodeUrl - optional BrightID node url - of the form `http://node.brightid.org`
 *
 * @returns A hash of the operation if successfully submitted to the BrightID node or an error
 */
export const sponsor = async (
  key: string,
  context: string,
  contextId: string,
  nodeUrl?: string
): Promise<any> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/operations`
    : "https://app.brightid.org/node/v5/operations";
  let sponsorships = await availableSponsorships(context, nodeUrl);

  if (typeof sponsorships === "number" && sponsorships < 1) {
    throw { error: true, errorMessage: "No available sponsorships" };
  }

  if (typeof sponsorships !== "number") return sponsorships;

  const op = {
    name: "Sponsor",
    app: context,
    contextId: contextId,
    timestamp: Date.now(),
    v: 5,
    sig: "",
  };

  const message = getMessage(op);
  const arrayedMessage = Buffer.from(message);
  const keyBuffer = B64.toByteArray(key);
  let signature = nacl.sign.detached(arrayedMessage, keyBuffer);
  op.sig = B64.fromByteArray(signature);
  try {
    let res = await axios.post(endpoint, op);
    return res.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data;
    } else {
      throw err;
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

/**
 *
 * @param context - the application context to retrieve available sponsorships for
 * @param nodeUrl - optional BrightID node url - of the form `http://node.brightid.org`
 *
 * @returns     Returns the number of sponsorships available to the specified `context`
 */
export const availableSponsorships = async (
  context: string,
  nodeUrl?: string
): Promise<number | any> => {
  const endpoint = nodeUrl
    ? nodeUrl + `/node/v5/testblocks`
    : "https://app.brightid.org/node/v5/apps";
  try {
    let res = await axios.get(`${endpoint}/${context}`);
    return res.data.data.unusedSponsorships;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data;
    } else {
      throw err;
    }
  }
};
