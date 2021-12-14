
import './App.css';

import Quiz from './Components/Quiz';
import {QuizProvider } from './Contexts/Quiz'

function App() {
  return (

      <QuizProvider>
        <Quiz/>
        
      </QuizProvider>
    
  );
}

export default App;
