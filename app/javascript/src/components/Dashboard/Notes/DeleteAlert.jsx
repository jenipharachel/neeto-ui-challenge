import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({
  onClose,
  onDeleteNotes,
  selectedNoteIds,
  setSelectedNoteIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      onDeleteNotes();
      onClose();
      setSelectedNoteIds([]);
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to continue? This cannot be undone."
      title={`Delete ${selectedNoteIds.length} ${
        selectedNoteIds.length > 1 ? "notes" : "note"
      }?`}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
