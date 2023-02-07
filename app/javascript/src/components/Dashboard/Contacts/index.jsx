import React, { useState } from "react";

import { Button } from "@bigbinary/neetoui";
import { Container, Header, Scrollable } from "@bigbinary/neetoui/layouts";

import { CONTACTS_TABLE_ROW_DATA } from "./constants";
import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [contacts, setContacts] = useState(CONTACTS_TABLE_ROW_DATA);

  return (
    <div className="max-w-fit flex">
      <MenuBar showMenu={showMenu} />
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
          <Table contacts={contacts} updateContacts={setContacts} />
        </Scrollable>
      </Container>
    </div>
  );
};

export default Contacts;
