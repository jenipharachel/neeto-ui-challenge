import React, { useState } from "react";

import { Button } from "@bigbinary/neetoui";
import { Container, Header } from "@bigbinary/neetoui/layouts";

import MenuBar from "./MenuBar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchString, setSearchString] = useState("");

  return (
    <div className="flex flex-grow">
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
      </Container>
    </div>
  );
};

export default Contacts;
