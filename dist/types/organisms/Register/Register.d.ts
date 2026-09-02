import React from 'react';
export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface RegisterProps {
    onRegister: (formData: RegisterFormData) => void;
}
declare function Register({ onRegister }: RegisterProps): React.JSX.Element;
export default Register;
