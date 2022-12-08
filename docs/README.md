[brightid_sdk_v6](README.md)

# brightid_sdk_v6

## Index

### Type aliases

* [AppData](README.md#appdata)
* [SignedVerification](README.md#signedverification)
* [SponsorData](README.md#sponsordata)
* [SponsorshipData](README.md#sponsorshipdata)

### Functions

* [generateDeeplink](README.md#const-generatedeeplink)
* [getApp](README.md#const-getapp)
* [sponsor](README.md#const-sponsor)
* [unusedSponsorships](README.md#const-unusedsponsorships)
* [userSponsorshipStatus](README.md#const-usersponsorshipstatus)
* [userVerificationStatus](README.md#const-userverificationstatus)

## Type aliases

###  AppData

Ƭ **AppData**: *object*

*Defined in [appMethods.ts:23](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L23)*

#### Type declaration:

* **assignedSponsorships**? : *undefined | number*

* **callbackUrl**? : *undefined | string*

* **context**? : *undefined | string*

* **id**: *string*

* **idAsHex**? : *undefined | false | true*

* **logo**? : *undefined | string*

* **name**: *string*

* **nodeUrl**? : *undefined | string*

* **soulbound**: *boolean*

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

###  SignedVerification

Ƭ **SignedVerification**: *object*

*Defined in [appMethods.ts:95](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L95)*

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

###  SponsorData

Ƭ **SponsorData**: *object*

*Defined in [appMethods.ts:180](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L180)*

#### Type declaration:

* **hash**: *string*

___

###  SponsorshipData

Ƭ **SponsorshipData**: *object*

*Defined in [appMethods.ts:139](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L139)*

#### Type declaration:

* **app**: *string*

* **appHasAuthorized**: *boolean*

* **spendRequested**: *boolean*

* **timestamp**: *number*

## Functions

### `Const` generateDeeplink

▸ **generateDeeplink**(`app`: string, `appUserId`: string): *string*

*Defined in [appMethods.ts:19](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L19)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application string to create a deeplink for |
`appUserId` | string | the appUserId string corresponding to a specific BrightID  |

**Returns:** *string*

a deeplink of the form `brightid://link-verification/http://node.brightid.org/testContext/testContextId`

___

### `Const` getApp

▸ **getApp**(`app`: string): *Promise‹object›*

*Defined in [appMethods.ts:50](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L50)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the BrightID unique app name to get information about  |

**Returns:** *Promise‹object›*

- Information about the BrightId app

___

### `Const` sponsor

▸ **sponsor**(`key`: string, `app`: string, `appUserId`: string): *Promise‹undefined | object | object›*

*Defined in [appMethods.ts:192](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L192)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the 64 byte private key attached to the {app} used to sponsor a BrightID |
`app` | string | the application  in which to sponsor a given BrightID |
`appUserId` | string | the appUserId linked to the BrightID user being sponsored  |

**Returns:** *Promise‹undefined | object | object›*

A hash of the operation if successfully submitted to the BrightID node or an error

___

### `Const` unusedSponsorships

▸ **unusedSponsorships**(`app`: string): *Promise‹undefined | number›*

*Defined in [appMethods.ts:70](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L70)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application to retrieve unused sponsorships for  |

**Returns:** *Promise‹undefined | number›*

Returns the number of sponsorships available to the specified `app`

___

### `Const` userSponsorshipStatus

▸ **userSponsorshipStatus**(`appUserId`: string): *Promise‹object›*

*Defined in [appMethods.ts:152](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L152)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app  |

**Returns:** *Promise‹object›*

- the sponsorship status for the user

___

### `Const` userVerificationStatus

▸ **userVerificationStatus**(`app`: string, `appUserId`: string, `params?`: undefined | object): *Promise‹object›*

*Defined in [appMethods.ts:114](https://github.com/BrightID/brightIdSDK/blob/2720109/src/appMethods.ts#L114)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application app to get signed verification from |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app |
`params?` | undefined &#124; object | the query parameters to pass to the signed verification endpoint  |

**Returns:** *Promise‹object›*
