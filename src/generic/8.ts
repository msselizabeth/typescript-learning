/*
  You have a Form type that contains information about the form, including an errors field.
You want to create a new Params type that includes all the fields from the Form except errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to disable the 'errors' field from the Form type
// Solution
type Params = Omit<Form, "errors">;

export {};