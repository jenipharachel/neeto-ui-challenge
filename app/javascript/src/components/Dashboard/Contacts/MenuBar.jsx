import React, { useState } from "react";

import { Plus, Search, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui";
import { MenuBar as NeetoUIMenuBar } from "@bigbinary/neetoui/layouts";

const MenuBar = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <NeetoUIMenuBar showMenu={showMenu} title="Contacts">
      <NeetoUIMenuBar.Block active count={0} label="All" />
      <NeetoUIMenuBar.Block count={0} label="Archived" />
      <NeetoUIMenuBar.Block count={0} label="Completed" />
      <NeetoUIMenuBar.Block count={0} label="Phase 2" />
      <NeetoUIMenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </NeetoUIMenuBar.SubTitle>
      <NeetoUIMenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <NeetoUIMenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
          {
            icon: Plus,
          },
          {
            icon: Settings,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </NeetoUIMenuBar.SubTitle>
    </NeetoUIMenuBar>
  );
};

export default MenuBar;
