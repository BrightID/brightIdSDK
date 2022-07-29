[brightid_sdk](README.md)

# brightid_sdk

## Index

### Type aliases

* [AppData](README.md#appdata)
* [Connection](README.md#connection)
* [SignatureData](README.md#signaturedata)
* [SignedVerification](README.md#signedverification)
* [SponorshipData](README.md#sponorshipdata)
* [UserProfile](README.md#userprofile)

### Functions

* [appInformation](README.md#const-appinformation)
* [putTestingBlock](README.md#const-puttestingblock)
* [removeTestingBlock](README.md#const-removetestingblock)
* [sign](README.md#const-sign)
* [signedVerification](README.md#const-signedverification)
* [sponsorshipInformation](README.md#const-sponsorshipinformation)
* [userProfile](README.md#const-userprofile)

## Type aliases

###  AppData

Ƭ **AppData**: *object*

*Defined in [appMethods.ts:58](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L58)*

#### Type declaration:

* **assignedSponsorships**? : *undefined | number*

* **callbackUrl**? : *undefined | string*

* **context**? : *undefined | string*

* **id**: *string*

* **idAsHex**? : *undefined | false | true*

* **logo**? : *undefined | string*

* **name**: *string*

* **nodeUrl**? : *undefined | string*

* **soulbound**? : *undefined | false | true*

* **sponsorPublicKey**? : *undefined | string*

* **testing**? : *undefined | false | true*

* **unusedSponsorships**? : *undefined | number*

* **url**? : *undefined | string*

* **usingBlindSig**? : *undefined | false | true*

* **verification**: *string*

* **verificationExpirationLength**? : *undefined | number*

* **verifications**? : *string[]*

* **verificationsUrl**: *string*

___

###  Connection

Ƭ **Connection**: *object*

*Defined in [appMethods.ts:157](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L157)*

#### Type declaration:

* **activeAfter**: *number*

* **activeBefore**: *number*

* **id**: *string*

* **isActive**: *boolean*

___

###  SignatureData

Ƭ **SignatureData**: *object*

*Defined in [appMethods.ts:9](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L9)*

#### Type declaration:

* **roundedTimestamp**: *number*

* **sig**(): *object*

  * **delta**: *string*

  * **omega**: *string*

  * **rho**: *string*

  * **sigma**: *string*

* **uid**: *string*

* **verification**: *string*

___

###  SignedVerification

Ƭ **SignedVerification**: *object*

*Defined in [appMethods.ts:101](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L101)*

#### Type declaration:

* **app**: *string*

* **appUserId**: *string*

* **publicKey**? : *undefined | string*

* **sig**? : *undefined | string*

* **timestamp**? : *undefined | number*

* **unique**: *boolean*

* **verification**: *string*

* **verificationHash**? : *undefined | string*

___

###  SponorshipData

Ƭ **SponorshipData**: *object*

*Defined in [appMethods.ts:201](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L201)*

#### Type declaration:

* **app**: *string*

* **appHasAuthorized**: *boolean*

* **spendRequested**: *boolean*

* **timestamp**: *number*

___

###  UserProfile

Ƭ **UserProfile**: *object*

*Defined in [appMethods.ts:163](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L163)*

#### Type declaration:

* **connectedAt**: *number*

* **connectionsNum**: *number*

* **createdAt**: *number*

* **groupsNum**: *number*

* **id**: *string*

* **level**: *"reported" | "suspicious" | "just met" | "already known" | "recovery"*

* **mutualConnections**: *string[]*

* **mutualGroups**: *string[]*

* **recoveryConnections**: *[Connection](README.md#connection)[]*

* **reports**: *Array‹object›*

* **signingKeys**: *string[]*

* **sponsored**: *boolean*

* **verifications**: *any[]*

## Functions

### `Const` appInformation

▸ **appInformation**(`app`: string): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:85](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L85)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application app to get information about  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*

- the signature data for the appUserId

___

### `Const` putTestingBlock

▸ **putTestingBlock**(`operation`: string, `testingKey`: string, `app`: string, `appUserId`: string): *Promise‹any›*

*Defined in [testMethods.ts:17](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/testMethods.ts#L17)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operation` | string | the status type to be temporarily removed from a appUserId in a given application.  Must be `sponsorship`, `verification`, or `link` |
`testingKey` | string | the testing key corresponding to the application being tested |
`app` | string | the application where the appUserId's status is being removed |
`appUserId` | string | the appUserId who's status is being temporarily removed  |

**Returns:** *Promise‹any›*

a success objected with a status code 204 and success message

___

### `Const` removeTestingBlock

▸ **removeTestingBlock**(`operation`: string, `testingKey`: string, `context`: string, `contextId`: string, `nodeUrl?`: undefined | string): *Promise‹any›*

*Defined in [testMethods.ts:75](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/testMethods.ts#L75)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`operation` | string | the status type to be restored for a contextId in a given application context.  Must be `sponsorship`, `verification`, or `link` |
`testingKey` | string | the testing key corresponding to the application context being tested |
`context` | string | the application context where the contextId's status is being removed |
`contextId` | string | the contextId who's status is being temporarily removed |
`nodeUrl?` | undefined &#124; string | optional BrightID node url - of the form `http://node.brightid.org`  |

**Returns:** *Promise‹any›*

a success objected with a status code 204 and success message if the operation was successfully submitted to the BrightID node

___

### `Const` sign

▸ **sign**(`app`: string, `appUserId`: string): *Promise‹undefined | object | AxiosError‹any››*

*Defined in [appMethods.ts:28](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L28)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application that is doing the signing |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app  |

**Returns:** *Promise‹undefined | object | AxiosError‹any››*

- the signature data for the appUserId

___

### `Const` signedVerification

▸ **signedVerification**(`app`: string, `appUserId`: string, `params?`: undefined | object): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:120](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L120)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application app to get information about |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app |
`params?` | undefined &#124; object | the query parameters to pass to the signed verification endpoint  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*

___

### `Const` sponsorshipInformation

▸ **sponsorshipInformation**(`appUserId`: string): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:214](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L214)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*

- the sponsorship status for the user

___

### `Const` userProfile

▸ **userProfile**(`id`: string): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:185](https://github.com/BrightID/brightIdSDK/blob/32c379b/src/appMethods.ts#L185)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the BrightID user ID of the user to get information about  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*
