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
        Toastr.success(t("success.update", { entity: "Note" }));
      } else {
        createNewNote(prevNotes => [
          ...prevNotes,
          {
            ...values,
            id: prevNotes.length + 1,
            date: dayjs().format("YYYY-MM-DD"),
          },
        ]);
        Toastr.success(t("success.create", { entity: "Note" }));
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
              label={t("form.label.title")}
              name="title"
              placeholder={t("form.placeholder.title")}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("form.label.description")}
              name="description"
              placeholder={t("form.placeholder.description")}
              rows={1}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("form.label.contact")}
              name="contact"
              options={CONTACT_SELECT_OPTIONS}
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label={t("form.label.tags")}
              name="tags"
              options={TAG_SELECT_OPTIONS}
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
