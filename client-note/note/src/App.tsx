// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import { CSSReset } from '@chakra-ui/react';
import Header from './components/Header';
import NoteList from './components/Notes/NoteList';
import AddNoteForm from './components/Notes/AddNoteForm';

function App() {
  return (
    <Router>
      <>
        <CSSReset />
        <Header />
        <Routes>
          <Route path="/notes/newNote" element={<AddNoteForm />} />
          <Route path="/notes" element={<NoteList />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
