//const environment = process.env.environment
const environment = 'sandbox';

export const configurations = {
    'sandbox': {
        username: 'username1',
        password: 'password1',
    },
    'development': {
        username: 'username2',
        password: 'password2',
    },
    'production': {
        username: 'username3',
        password: 'password3',
    },
}

export const config = configurations[environment]