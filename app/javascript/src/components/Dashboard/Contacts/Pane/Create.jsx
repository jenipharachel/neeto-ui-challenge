import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showPane, setShowPane, createNewContact }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("title.add", { entity: "Contact" })}
        </Typography>
      </Pane.Header>
      <Form
        contact={CONTACTS_FORM_INITIAL_FORM_VALUES}
        createNewContact={createNewContact}
        isEdit={false}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
