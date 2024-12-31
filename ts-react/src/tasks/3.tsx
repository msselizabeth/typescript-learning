// You are creating a form component in React. You have an input field that you want to track changes to. To do this, you use an onChange event handler. Your job is to correctly type the event that is passed to this function.

import React, { ChangeEvent, useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
