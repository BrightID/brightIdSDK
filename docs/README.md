[brightid_sdk](README.md)

# brightid_sdk

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

*Defined in [appMethods.ts:24](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L24)*

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

*Defined in [appMethods.ts:100](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L100)*

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

*Defined in [appMethods.ts:189](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L189)*

#### Type declaration:

* **hash**: *string*

___

###  SponsorshipData

Ƭ **SponsorshipData**: *object*

*Defined in [appMethods.ts:146](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L146)*

#### Type declaration:

* **app**: *string*

* **appHasAuthorized**: *boolean*

* **spendRequested**: *boolean*

* **timestamp**: *number*

## Functions

### `Const` generateDeeplink

▸ **generateDeeplink**(`app`: string, `appUserId`: string): *string*

*Defined in [appMethods.ts:19](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L19)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application string to create a deeplink for |
`appUserId` | string | the appUserId string corresponding to a specific BrightID  |

**Returns:** *string*

a deeplink of the form `brightid://link-verification/http://node.brightid.org/testContext/testContextId`

___

### `Const` getApp

▸ **getApp**(`app`: string): *Promise‹undefined | object | AxiosError‹any››*

*Defined in [appMethods.ts:51](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L51)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the BrightID unique app name to get information about  |

**Returns:** *Promise‹undefined | object | AxiosError‹any››*

- Information about the BrightId app

___

### `Const` sponsor

▸ **sponsor**(`key`: string | Uint8Array, `app`: string, `appUserId`: string): *Promise‹any›*

*Defined in [appMethods.ts:201](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L201)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string &#124; Uint8Array | the sponsor private key needed for sponsoring a BrightID |
`app` | string | the application  in which to sponsor a given BrightID |
`appUserId` | string | the appUserId linked to the BrightID user being sponsored  |

**Returns:** *Promise‹any›*

A hash of the operation if successfully submitted to the BrightID node or an error

___

### `Const` unusedSponsorships

▸ **unusedSponsorships**(`app`: string): *Promise‹undefined | number | AxiosError‹any››*

*Defined in [appMethods.ts:73](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L73)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application to retrieve unused sponsorships for  |

**Returns:** *Promise‹undefined | number | AxiosError‹any››*

Returns the number of sponsorships available to the specified `app`

___

### `Const` userSponsorshipStatus

▸ **userSponsorshipStatus**(`appUserId`: string): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:159](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L159)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*

- the sponsorship status for the user

___

### `Const` userVerificationStatus

▸ **userVerificationStatus**(`app`: string, `appUserId`: string, `params?`: undefined | object): *Promise‹undefined | AxiosError‹any› | object›*

*Defined in [appMethods.ts:119](https://github.com/BrightID/brightIdSDK/blob/a07c711/src/appMethods.ts#L119)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | string | the application app to get signed verification from |
`appUserId` | string | the appUserId string corresponding to a specific user in a BrightID app |
`params?` | undefined &#124; object | the query parameters to pass to the signed verification endpoint  |

**Returns:** *Promise‹undefined | AxiosError‹any› | object›*
