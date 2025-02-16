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
    api_tinycloud: import.meta.env.VITE_APIKEY_TINYCLOUD,
    server_url: import.meta.env.VITE_SERVER_URL,
};

export { env, elementsNavBar };
