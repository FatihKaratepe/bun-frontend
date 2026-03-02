# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**keycloakId** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**userType** | [**UserType**](UserType.md) |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**taxNumber** | **string** |  | [optional] [default to undefined]
**taxOffice** | **string** |  | [optional] [default to undefined]
**addresses** | [**Array&lt;Address&gt;**](Address.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    id,
    keycloakId,
    email,
    firstName,
    lastName,
    phone,
    userType,
    companyName,
    taxNumber,
    taxOffice,
    addresses,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
