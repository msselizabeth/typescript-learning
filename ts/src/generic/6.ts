/* Task
  You have a user registration form.
Sometimes you need to pre-populate the form with user data to update their profile.
However, you don't always need to fill in all the fields. For example, a user might want to update only their email and password,
leaving their first and last names unchanged.

Fix the type in the function argument so that there are no type errors.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}
// Solution
function createOrUpdateUser(initialValues: Partial<User>) {
  // Update logic
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};