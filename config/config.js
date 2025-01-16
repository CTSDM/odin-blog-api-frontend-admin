const elementsNavBar = {
    loggedIn: { Dashboard: "/dashboard", Logout: "/logout" },
    loggedOut: { Login: "/login" },
};

const env = {
    inputs: {
        login: [
            ["text", "username", import.meta.env.VITE_USERNAME_PLACEHOLDER],
            ["password", "password", import.meta.env.VITE_PASSWORD_PLACEHOLDER],
        ],
    },
};

console.log(env);

export { env, elementsNavBar };
