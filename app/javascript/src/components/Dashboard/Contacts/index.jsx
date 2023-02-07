import React, { useState } from "react";

import { Button, Toastr } from "@bigbinary/neetoui";
import { Container, Header, Scrollable } from "@bigbinary/neetoui/layouts";
import { useTranslation } from "react-i18next";

import DeleteAlert from "components/commons/DeleteAlert";

import { TABLE_ROW_DATA, MENU_BAR_OPTIONS } from "./constants";
import Table from "./Table";

import MenuBar from "../../commons/MenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [contacts, setContacts] = useState(TABLE_ROW_DATA);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const { t } = useTranslation();

  const deleteContact = () => {
    const nonDeletedNotes = contacts.filter(
      contact => contact.id !== selectedContactId
    );
    setContacts(nonDeletedNotes);
    Toastr.success(t("contact.delete.success"));
  };

  const handleDelete = id => {
    setSelectedContactId(id);
    setShowDeleteAlert(true);
  };

  return (
    <div className="max-w-fit flex">
      <MenuBar menuBarOptions={MENU_BAR_OPTIONS} showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              size="small"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchString,
            onChange: e => setSearchString(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
        />
        <Scrollable className="w-full">
          <Table contacts={contacts} onDeleteContact={handleDelete} />
        </Scrollable>
      </Container>
      {showDeleteAlert && (
        <DeleteAlert
          entity="Contact"
          setSelectedIds={setSelectedContactId}
          onClose={() => setShowDeleteAlert(false)}
          onDelete={deleteContact}
        />
      )}
    </div>
  );
};

export default Contacts;
