import React, { useEffect, useState } from 'react'

import api from '../../services/api'

interface User {
  id: number
  first_name: string
  last_name: string
  email: string
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('users').then(resp => {
      setUsers(resp.data.data)
    })
  }, [])

  return (
    <>
      <h1>Users</h1>

      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <b>{user.first_name} {user.last_name}</b>
              <br />
              <span>{user.email}</span>
            </div>

            <br />
          </li>
        ))}
      </ul>
    </>
  )
}
