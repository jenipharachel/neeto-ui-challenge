import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { TABLE_COLUMN_DATA } from "./constants";
import EditNotePane from "./Pane/Edit";

const Table = ({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
  updateNote,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  return (
    <>
      <div className="notes-table-height w-full">
        <NeetoUITable
          allowRowClick
          rowSelection
          columnData={TABLE_COLUMN_DATA}
          rowData={notes}
          selectedRowKeys={selectedNoteIds}
          onRowSelect={selectedRowKeys => setSelectedNoteIds(selectedRowKeys)}
          onRowClick={(_, note) => {
            setSelectedNote(note);
            setShowEditNote(true);
          }}
        />
      </div>
      <EditNotePane
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
        updateNote={updateNote}
      />
    </>
  );
};

export default Table;
