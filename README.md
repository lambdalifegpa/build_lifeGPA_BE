# build_lifeGPA_BE

Technical Design Document:
https://docs.google.com/document/d/1CNaNC5_B6Zww9U8VaxlhHUduE__uneONnWZMGUZ7yXU/edit


| Method |        Endpoint        |             Action |                              Front-end Request                               |                   Backend Response                   |
| ------ | :--------------------: | -----------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------: |
| POST   |  'api/users/register'  |             Signup | {username: String, password: String, first_name: String, last_name: String } |         {username: String, user_id: Integer}         |
| POST   |   'api/users/login'    |             Log In |                     {username: String, password: String}                     | { token: String, (user)id: Integer, message: String} |
| GET    | 'api/users/:id/habits' | Load User's Habits |                               user_id: Integer                               |         {...user Object, habits: [{Object}]}         |
| POST   |      'api/habits'      |      Add New Habit |                      {habit: String, user_id: Integer}                       |               [id(of habit): Integer]                |
| PUT    |    'api/habits/:id'    |      Update Habits |                      {habits: String, user_id: Integer}                      |                   `1` upon success                   |
| DELETE |    'api/habits/:id'    |       DELETE Habit |                               habitId: Integer                               |               No Response upon success               |
