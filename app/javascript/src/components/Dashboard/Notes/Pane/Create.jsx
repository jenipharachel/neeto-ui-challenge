import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showPane, setShowPane, createNewNote }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("title.add", { entity: "Note" })}
        </Typography>
      </Pane.Header>
      <Form
        createNewNote={createNewNote}
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
