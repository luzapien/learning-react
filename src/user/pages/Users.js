import React from 'react';

import UserList from '../components/UsersList';

function Users() {
    const USERS = [
        {
            id: 'u1',
             name: 'Max', 
             lastName:'Lee',
             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rainbow_Mountain_Peru.jpg/800px-Rainbow_Mountain_Peru.jpg', 
             places: 3 
        }
            ];

    return <UserList items={USERS} />
};

export default Users;
