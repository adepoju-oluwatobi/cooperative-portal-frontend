import React from 'react'
import Header from './Header'
import { user } from "../components/data";

function EditUser() {
  return (
    <div>
      <Header />
      <form action="">
        {user.map((data) => (
          <div key={data.id}>
            <input type="text" value={data.id} />
            <input type="text" value={data.name} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default EditUser