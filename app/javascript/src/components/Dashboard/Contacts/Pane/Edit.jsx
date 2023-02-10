import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

const Edit = ({ showPane, setShowPane, contact, updateContact }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("title.edit", { entity: "Contact" })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit
        contact={contact}
        updateContact={updateContact}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Edit;
