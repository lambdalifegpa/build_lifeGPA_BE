# build_lifeGPA_BE

Technical Design Document:
https://docs.google.com/document/d/1CNaNC5_B6Zww9U8VaxlhHUduE__uneONnWZMGUZ7yXU/edit


| Method       | Enpoint           | Action  | Front-end Request | Backend Response
| ------------- |:-------------:| -----:|:-------------:|:-------------:|
| POST    | 'api/users/register'  | Signup | {username: String, password: String, first_name: String, last_name: String } | {token: String, username: String, user_id: Integer}
| POST     | 'api/users/login'     |   Log In | {username: String, password: String}| { token: String, username: String, password: String} | {token: String, username: String, user_id: Integer}
| GET | '/users/id/habits'     |  Load User's Habits | user_id: Integer | habits: [Tab:Object]
| POST |'/habits'  | Add New Habit | {habit: String, user_id: Integer} | updatedHabits: [Habits:Object]
| PUT | 'habits/id' |  Update Habits | {habits: String, user_id: Integer} |updatedHabits: [Tab:Object]
| DELETE | 'habits/id' | DELETE Habit | habitId: Integer | updatedHabit: [Habit:Object]
