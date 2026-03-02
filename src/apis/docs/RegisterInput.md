# RegisterInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**phone** | **string** |  | [default to undefined]
**userType** | [**UserType**](UserType.md) |  | [default to undefined]
**companyName** | **string** | Required if userType is CORPORATE | [optional] [default to undefined]
**taxNumber** | **string** | Required if userType is CORPORATE (10-11 digits) | [optional] [default to undefined]
**taxOffice** | **string** | Required if userType is CORPORATE | [optional] [default to undefined]

## Example

```typescript
import { RegisterInput } from './api';

const instance: RegisterInput = {
    email,
    password,
    firstName,
    lastName,
    phone,
    userType,
    companyName,
    taxNumber,
    taxOffice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
