/* Task
  You have a UserRole list that is used to classify users in your application.
You want to create a RoleDescription object that maps each user role to its description.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Replace the following code with the version using Record
// Solution
const RoleDescription: Record<UserRole, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

export {};