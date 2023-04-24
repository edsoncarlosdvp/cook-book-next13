import React from "react";

export const Login = (): JSX.Element => {
    const testNumber = 11;
    return (
        <div>
            <h1>Page Login</h1>
            <input name="name" type="text" placeholder="nome" aria-label="Nome" />
            <input name="email" type="email" placeholder="nome" aria-label="Email" />
            <h3>{testNumber}</h3>
        </div>
    )
}