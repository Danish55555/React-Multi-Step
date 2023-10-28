import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const userList = [
    { id: 1, name: 'Danish Ali', company: 'Cowlar' },
    { id: 2, name: 'Jonas', company: 'Jonas.io' },
    { id: 3, name: 'Khobaib', company: 'Devsinc' },
  ];
  const handlePreviousClick = () => {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  }
  const handleNextClick = () => {
    if (step < 3) {
      setStep((currStep) => currStep + 1);
    }
  }
  const handleUserChange = (e) => {
    const selectedUserId = parseInt(e.target.value, 10);
    setSelectedUser(userList.find((user) => user.id === selectedUserId));

  };

  return (
    <>
      <button className="close" onClick={() => { setIsOpen((isOp) => !isOp) }}>{isOpen ? <span >&times;</span> : <span style={{ fontSize: '20px' }}>Click to View Multi Step</span>}</button>
      {isOpen && (

        <div className="steps">
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
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''} >3</div>
          </div>
          <p className="message">Step {step} {messages[step - 1]}</p>
          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePreviousClick}

            >Previous</button>
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNextClick}
            >Next</button>
          </div>
        </div>
      )}
    </>
  );
}