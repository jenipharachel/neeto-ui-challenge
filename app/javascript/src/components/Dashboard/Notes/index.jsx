import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";
import EmptyState from "components/commons/EmptyState";
import MenuBar from "components/commons/MenuBar";

import Card from "./Card";
import { MENU_BAR_OPTIONS, TABLE_ROW_DATA } from "./constants";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState(TABLE_ROW_DATA);
  const [showMenu, setShowMenu] = useState(true);

  const { t } = useTranslation();

  const deleteNotes = () => {
    const nonDeletedNotes = notes.filter(note => note.id !== selectedNoteId);
    setNotes(nonDeletedNotes);
    Toastr.success(t("note.delete.success"));
  };

  const handleDeleteNote = noteId => {
    setSelectedNoteId(noteId);
    setShowDeleteAlert(true);
  };

  const handleEditNote = noteId => {
    const selectedEditNote = notes.find(note => note.id === noteId) || {};
    setSelectedNote(selectedEditNote);
    setShowEditNote(true);
  };

  return (
    <div className="max-w-fit flex">
      <MenuBar menuBarOptions={MENU_BAR_OPTIONS} showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(prevState => !prevState)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
        />
        {notes.length ? (
          <>
            {notes.map(note => (
              <Card
                key={note.id}
                note={note}
                onDelete={handleDeleteNote}
                onEdit={handleEditNote}
              />
            ))}
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          createNewNote={setNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        <EditNotePane
          note={selectedNote}
          setShowPane={setShowEditNote}
          showPane={showEditNote}
          updateEditNote={setNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            entity="Note"
            setSelectedId={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
            onDelete={deleteNotes}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
