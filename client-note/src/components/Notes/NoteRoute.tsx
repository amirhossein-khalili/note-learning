import { Route, Routes } from 'react-router-dom';
import NoteGrid from './NoteGrid';
import AddNoteForm from './AddNoteForm';

const noteRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/newNote" element={<AddNoteForm />} />
        <Route path="/" element={<NoteGrid />} />
      </Routes>
    </>
  );
};

export default noteRoute;
