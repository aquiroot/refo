import { useState } from 'react';


export const useForm = <T extends Object>(initialState: T) => {
	const [values, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues(newFormState);
	};

	const handleInputChange = ( value: string, campo: keyof T ) => {
		setValues({
			...values,
			[campo]: value,
		});
	};

	return {
    ...values,
    handleInputChange,
    reset
  };
};