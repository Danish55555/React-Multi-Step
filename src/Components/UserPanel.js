import { useState } from "react";
export default function UserPanel(props) {

    const [selectedUser, setSelectedUser] = useState(null);

    const userList = props.users;
    const handleUserChange = (e) => {
        const selectedUserId = parseInt(e.target.value, 10);
        setSelectedUser(userList.find((user) => user.id === selectedUserId));

    };
    return (
        <>
            <div style={{ display: "flex", alignItems: 'center', gap: '20px', justifyContent: "center" }}>            <h2>Select a User</h2>
                <select onChange={handleUserChange} style={{ height: '30px', backgroundColor: '#7950f2', color: '#fff', width: '130px' }}>
                    <option value="">Select a user</option>
                    {userList.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select></div>
            <p style={{ textAlign: "center", color: '#7950f2', fontWeight: "bold", fontSize: '20px' }}>{selectedUser ? `Welcome! ${selectedUser.name} from ${selectedUser.company}` : 'No user selected'} </p>
        </>
    )
}