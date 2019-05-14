## _Temet-cards-app_

Simple wep app to create and read cards with images


Routes example:

---

**POST**: `/api/users/register` - Register a new user    

#### _Parameters_:
|   Field   | Type   | Description           |
|:---------:|--------|-----------------------|
| name*     | String | Name of the user      |
| email*    | String | Email of the user     |
| password*  | String | Password of the user  |
| password2* | String | Password confirmation |
| cpf*       | String | CPF of the user       |

#### _Response Examples:_  
Created (201): 

```js
{
  success: true,
  data: {
    name: "Example Name",
    email: "example@temet.com",
    password: "ioashdauiosdhioh081houi10823y1h2io3y1209301h2",
    cpf: "8128212121"
  }
}
```

Bad Request (400):
```js
{
  success: false,
  errors: {
    name: "Name field is required",
    email: "Email field is required"
  }
}
```

---
