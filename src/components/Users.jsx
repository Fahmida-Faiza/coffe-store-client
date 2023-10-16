import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    return (
        <div>
            <h2>users: {loadedUsers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {

                            users.map(user => <tr key={user._id}>
                                <th>{}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button>X</button>
                                </td>
                            </tr>)



                      }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;