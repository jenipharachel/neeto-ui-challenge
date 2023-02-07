import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button, PageLoader, Toastr } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import EmptyState from "components/commons/EmptyState";

import { NOTES_TABLE_ROW_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState(NOTES_TABLE_ROW_DATA);

  const { t } = useTranslation();

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNotes = () => {
    const nonDeletedNotes = notes.filter(
      note => !selectedNoteIds.includes(note.id)
    );
    setNotes(nonDeletedNotes);
    Toastr.success(
      t("note.delete.successWithCount", { count: selectedNoteIds.length })
    );
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        title="Notes"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add new note"
            size="small"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <>
          <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedNoteIds.length}
                icon={Delete}
                label="Delete"
                size="small"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          />
          <Table
            fetchNotes={fetchNotes}
            notes={notes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
          />
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
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          onDeleteNotes={deleteNotes}
        />
      )}
    </Container>
  );
};

export default Notes;
