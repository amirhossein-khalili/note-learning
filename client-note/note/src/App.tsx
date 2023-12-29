// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import * as React from 'react';
import { CSSReset, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import NoteGrid from './components/Notes/NoteGrid';
import AddNoteForm from './components/Notes/AddNoteForm';
// import NoteRoute from './components/Notes/NoteRoute';

function App() {
  return (
    <Router>
      <>
        <Grid
          templateAreas={{
            base: `"nav" " main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside"></GridItem>
          </Show>
          <GridItem area="main"></GridItem>
        </Grid>
        <CSSReset />

        <Routes>
          <Route path="/notes/newNote" element={<AddNoteForm />} />
          <Route path="/notes" element={<NoteGrid />} />
          {/* <Route path='/notes' element={<NoteRoute />} /> */}
          <Route path="/" element={<Outlet />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
