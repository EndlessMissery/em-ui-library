import React from 'react';
export interface LoginProps {
    onLogin: () => void;
}
declare function Login({ onLogin }: LoginProps): React.JSX.Element;
export default Login;
