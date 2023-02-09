import React from "react";

import dayjs from "dayjs";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  CONTACT_SELECT_OPTIONS,
  TAG_SELECT_OPTIONS,
} from "../constants";

const Form = ({ onClose, note, isEdit, createNewNote, updateNote }) => {
  const { t } = useTranslation();

  const handleSubmit = values => {
    try {
      if (isEdit) {
        updateNote(prevNotes => {
          const filteredNotes = prevNotes.filter(
            prevNote => prevNote.id !== note.id
          );

          return [...filteredNotes, { ...values, id: note.id }];
        });
        Toastr.success(t("success.update", { Entity: "Note" }));
      } else {
        createNewNote(prevNotes => [
          ...prevNotes,
          {
            ...values,
            id: prevNotes.length + 1,
            date: dayjs().format("YYYY-MM-DD"),
          },
        ]);
        Toastr.success(t("success.create", { Entity: "Note" }));
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter note title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={8}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="contact"
              options={CONTACT_SELECT_OPTIONS}
              placeholder="Select Contact"
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAG_SELECT_OPTIONS}
              placeholder="Select Tags"
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
            <Button
              label="Cancel"
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
