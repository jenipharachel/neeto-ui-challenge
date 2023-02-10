import React, { useState } from "react";

import { Plus, Search, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import PropTypes from "prop-types";

const MenuBar = ({ showMenu, menuBarOptions }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <NeetoUIMenuBar showMenu={showMenu} title={menuBarOptions.title}>
      {menuBarOptions.blocks.map((block, id) => (
        <NeetoUIMenuBar.Block
          active={block.active}
          count={block.count}
          key={id}
          label={block.label}
        />
      ))}
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
      {menuBarOptions.segments?.map((segment, id) => (
        <NeetoUIMenuBar.Block
          count={segment.count}
          key={id}
          label={segment.label}
        />
      ))}
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
      {menuBarOptions.tags?.map((tag, id) => (
        <NeetoUIMenuBar.Block count={tag.count} key={id} label={tag.label} />
      ))}
    </NeetoUIMenuBar>
  );
};

MenuBar.propTypes = {
  showMenu: PropTypes.bool,
  menuBarOptions: PropTypes.object,
};

export default MenuBar;
