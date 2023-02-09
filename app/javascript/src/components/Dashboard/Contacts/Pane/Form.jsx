import React from "react";

import dayjs from "dayjs";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLE_SELECT_OPTIONS,
} from "../constants";

const Form = ({
  onClose,
  contact,
  isEdit,
  createNewContact,
  updateContact,
}) => {
  const { t } = useTranslation();

  const handleSubmit = values => {
    try {
      if (isEdit) {
        updateContact(prevContacts => {
          const filteredContacts = prevContacts.filter(
            prevContact => prevContact.id !== contact.id
          );

          return [...filteredContacts, { ...values, id: contact.id }];
        });
        Toastr.success(t("success.update", { entity: "Contact" }));
      } else {
        createNewContact(prevContacts => [
          ...prevContacts,
          {
            ...values,
            id: prevContacts.length + 1,
            created_at: dayjs().format("YYYY-MM-DD"),
          },
        ]);
        Toastr.success(t("success.create", { entity: "Contact" }));
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className=" flex w-full justify-between">
              <Input
                required
                className="mr-6 w-full flex-grow-0"
                label={t("form.label.firstName")}
                name="firstName"
                placeholder={t("form.placeholder.firstName")}
              />
              <Input
                required
                className="w-full flex-grow-0"
                label={t("form.label.lastName")}
                name="lastName"
                placeholder={t("form.placeholder.lastName")}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.label.email")}
              name="email"
              placeholder={t("form.placeholder.email")}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("form.label.role")}
              name="role"
              options={ROLE_SELECT_OPTIONS}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? t("button.update") : t("button.save")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("button.cancel")}
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
