# UsersApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersGet**](#usersget) | **GET** /users | Get all users|
|[**usersIdGet**](#usersidget) | **GET** /users/{id} | Get user by ID|
|[**usersIdPut**](#usersidput) | **PUT** /users/{id} | Update user by ID|

# **usersGet**
> Array<User> usersGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let page: number; //Page number (optional) (default to 1)
let limit: number; //Number of users per page (optional) (default to 10)
let sort: string; //Sort field (optional) (default to 'createdAt')

const { status, data } = await apiInstance.usersGet(
    page,
    limit,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **limit** | [**number**] | Number of users per page | (optional) defaults to 10|
| **sort** | [**string**] | Sort field | (optional) defaults to 'createdAt'|


### Return type

**Array<User>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdGet**
> User usersIdGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //User ID (default to undefined)

const { status, data } = await apiInstance.usersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | User ID | defaults to undefined|


### Return type

**User**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User found |  -  |
|**400** | Invalid or missing user id |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdPut**
> User usersIdPut(updateUserInput)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserInput
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //User ID (default to undefined)
let updateUserInput: UpdateUserInput; //

const { status, data } = await apiInstance.usersIdPut(
    id,
    updateUserInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserInput** | **UpdateUserInput**|  | |
| **id** | [**number**] | User ID | defaults to undefined|


### Return type

**User**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User updated successfully |  -  |
|**400** | Invalid or missing user id |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

