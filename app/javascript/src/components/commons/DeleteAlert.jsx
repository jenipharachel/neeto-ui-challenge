import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, onDelete, entity, setSelectedId }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      onDelete();
      onClose();
      setSelectedId(null);
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message={`Are you sure you want to delete the ${entity.toLowerCase()}? This action cannot be undone.`}
      title={`Delete ${entity}?`}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
