# AuthApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authLoginPost**](#authloginpost) | **POST** /auth/login | Login with email and password|
|[**authPasswordPut**](#authpasswordput) | **PUT** /auth/password | Update user password|
|[**authRegisterPost**](#authregisterpost) | **POST** /auth/register | Register a new user|
|[**authUpdatePut**](#authupdateput) | **PUT** /auth/update | Update user profile|
|[**authVerifyEmailGet**](#authverifyemailget) | **GET** /auth/verify-email | Verify email address via token link|
|[**authVerifyEmailPost**](#authverifyemailpost) | **POST** /auth/verify-email | Verify email address via token payload|

# **authLoginPost**
> TokenResponse authLoginPost(loginInput)

Authenticates against Keycloak and returns JWT tokens.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginInput
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginInput: LoginInput; //

const { status, data } = await apiInstance.authLoginPost(
    loginInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginInput** | **LoginInput**|  | |


### Return type

**TokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**401** | Invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authPasswordPut**
> authPasswordPut(authPasswordPutRequest)

Updates the authenticated user\'s password in Keycloak

### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthPasswordPutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authPasswordPutRequest: AuthPasswordPutRequest; //

const { status, data } = await apiInstance.authPasswordPut(
    authPasswordPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authPasswordPutRequest** | **AuthPasswordPutRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password updated successfully |  -  |
|**400** | Validation error |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRegisterPost**
> User authRegisterPost(registerInput)

Creates a user in Keycloak and saves profile to database. For CORPORATE users, companyName, taxNumber and taxOffice are required.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterInput
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerInput: RegisterInput; //

const { status, data } = await apiInstance.authRegisterPost(
    registerInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerInput** | **RegisterInput**|  | |


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User registered successfully |  -  |
|**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authUpdatePut**
> authUpdatePut()

Updates the authenticated user\'s profile in Postgres and Keycloak

### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthUpdatePutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authUpdatePutRequest: AuthUpdatePutRequest; // (optional)

const { status, data } = await apiInstance.authUpdatePut(
    authUpdatePutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authUpdatePutRequest** | **AuthUpdatePutRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyEmailGet**
> authVerifyEmailGet()

Activates user account in Postgres and Keycloak

### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let token: string; //Activation token sent to the user email (default to undefined)

const { status, data } = await apiInstance.authVerifyEmailGet(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Activation token sent to the user email | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verified successfully |  -  |
|**400** | Invalid or expired token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authVerifyEmailPost**
> authVerifyEmailPost(authVerifyEmailPostRequest)

Activates user account in Postgres and Keycloak

### Example

```typescript
import {
    AuthApi,
    Configuration,
    AuthVerifyEmailPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let authVerifyEmailPostRequest: AuthVerifyEmailPostRequest; //

const { status, data } = await apiInstance.authVerifyEmailPost(
    authVerifyEmailPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authVerifyEmailPostRequest** | **AuthVerifyEmailPostRequest**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verified successfully |  -  |
|**400** | Invalid or expired token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

