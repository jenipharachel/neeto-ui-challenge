import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, note, updateNote }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("title.edit", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form isEdit note={note} updateNote={updateNote} onClose={onClose} />
    </Pane>
  );
};

export default Edit;
