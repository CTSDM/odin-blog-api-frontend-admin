const elementsNavBar = {
    loggedIn: { Dashboard: "/dashboard", Logout: "/logout" },
    loggedOut: { ["Sign up"]: "/signup", Login: "/login" },
};

const env = {
    inputs: {
        login: [
            // html input type, name, placeholder
            ["text", "username", import.meta.env.VITE_USERNAME_PLACEHOLDER],
            ["password", "password", import.meta.env.VITE_PASSWORD_PLACEHOLDER],
        ],
        signup: [
            // html input type, name, placeholder
            ["text", "username", import.meta.env.VITE_USERNAME_PLACEHOLDER],
            ["password", "password", import.meta.env.VITE_PASSWORD_PLACEHOLDER],
            ["password", "rePassword", import.meta.env.VITE_PASSWORD_PLACEHOLDER],
            ["password", "adminCode", import.meta.env.VITE_ADMINCODE_PLACEHOLDER],
        ],
    },
    api_tinycloud: import.meta.env.VITE_APIKEY_TINYCLOUD,
    server_url: import.meta.env.VITE_SERVER_URL,
};

export { env, elementsNavBar };
