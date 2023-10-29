import { useState } from "react";
import Step from "../Components/Step";
import UserPanel from "../Components/UserPanel";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const userList = [
  { id: 1, name: 'Danish Ali', company: 'Cowlar' },
  { id: 2, name: 'Jonas', company: 'Jonas.io' },
  { id: 3, name: 'Khobaib', company: 'Devsinc' },
];
export default function MultiStepView() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

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


  return (
    <>
      <button className="close" onClick={() => { setIsOpen((isOp) => !isOp) }}>{isOpen ? <span >&times;</span> : <span style={{ fontSize: '20px' }}>Click to View Multi Step</span>}</button>
      {isOpen && (

        <div className="steps">
          <UserPanel users={userList} />
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''} >3</div>
          </div>
          <Step step={step} message={messages[step - 1]} />
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