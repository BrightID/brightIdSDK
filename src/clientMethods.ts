// clientMethods.ts
/**
 * This is the doc comment for file2.ts
 * @brightid_sdk
 * This part of the sdk is a WIP and is not ready for use.
 */

// type SignatureData = {
//   uid: string;
//   sig: {
//     rho: string;
//     omega: string;
//     sigma: string;
//     delta: string;
//   };
//   verification: string;
//   roundedTimestamp: number;
// };

// /**
//  *
//  * @param app - the application that is doing the signing
//  * @param appUserId - the appUserId string corresponding to a specific user in a BrightID app
//  *
//  * @returns {SignatureData} - the signature data for the appUserId
//  */
// export const sign = async (app: string, appUserId: string) => {
//   const endpoint = "https://app.brightid.org/node/v6/verifications";
//   try {
//     let headers = { "Content-Type": "application/json" };
//     let sig = { rho: "", omega: "", sigma: "", delta: "" };
//     const res = await axios.post(
//       `${endpoint}/${app}/${appUserId}`,
//       {
//         uid: appUserId,
//         sig,
//         verification: "",
//         roundedTimestamp: Date.now(),
//       } as SignatureData,
//       {
//         headers,
//       }
//     );
//     console.log("Res:", res);
//     return res.data as SignatureData;
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       console.error(err.response?.data.errorMessage);
//       return err;
//     } else {
//       console.error(err);
//       return;
//     }
//   }
// };

// type Connection = {
//   id: string;
//   isActive: boolean;
//   activeAfter: number;
//   activeBefore: number;
// };

// type UserProfile = {
//   id: string;
//   connectionsNum: number;
//   groupsNum: number;
//   createdAt: number;
//   reports: Array<{ id: string; reason: string }>;
//   verifications: any[];
//   signingKeys: string[];
//   recoveryConnections: Connection[];
//   sponsored: boolean;
//   mutualConnections: string[];
//   mutualGroups: string[];
//   level: "reported" | "suspicious" | "just met" | "already known" | "recovery";
//   connectedAt: number;
// };

// /**
//  *
//  * @param id - the BrightID user ID of the user to get information about
//  *
//  * @returns {UserProfile}
//  */
// export const userProfile = async (id: string, requestor?: string) => {
//   const endpoint = "https://app.brightid.org/node/v6/users";
//   try {
//     const res = await axios.get(`${endpoint}/${id}/profile/${requestor}`);
//     return res.data as UserProfile;
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       console.error(err.response?.data.errorMessage);
//       return err;
//     } else {
//       console.error(err);
//       return;
//     }
//   }
// };
