import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, contact, updateEditContact }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        contact={contact}
        updateEditContact={updateEditContact}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Edit;
