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
        Toastr.success(t("contact.update.success"));
      } else {
        createNewContact(prevContacts => [
          ...prevContacts,
          {
            ...values,
            id: prevContacts.length + 1,
            created_at: dayjs().format("YYYY-MM-DD"),
          },
        ]);
        Toastr.success(t("contact.create.success"));
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
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLE_SELECT_OPTIONS}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
