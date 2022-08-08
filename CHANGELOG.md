## 2.0.0 (2022-08-08)

### Features

- Upgrade endpoints to v6
- New functions:
  - `getApp(app: string)`
  - `unusedSponsorships(app: string)`,
  - `userVerificationStatus(app: string, appUserId: string, params?: { includeHash?: boolean; signed?: "eth" | "nacl"; timestamp?: "seconds" | "milliseconds"; })`
  - `userSponsorshipStatus(appUserId: string)`

## 1.0.1 (2020-12-14)

### Features

- Add complete documentation of exported methods

# 1.0.0 (2020-12-14)

### Features

- Add better return messaging for all methods

## 0.0.2 (2020-12-14)

### Features

- Return better error messaging when a function call fails
