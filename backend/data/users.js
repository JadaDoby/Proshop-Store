import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10), // 10 is the salt - the higer the number the more secure, the longer it will take
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10), // 10 is the salt - the higer the number the more secure, the longer it will take
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10), // 10 is the salt - the higer the number the more secure, the longer it will take
        isAdmin: false,
    },
]

export default users;