import {
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import NavItems from "./navItems";
import React from "react";

const nav = () => {
  return (
    <div>
      <nav className="nav">
      <NavItems title="RizzUp"/>
        <div className="icons">
          <NavItems title="HOME" Icon={HomeIcon} />
          <NavItems title="SEARCH" Icon={SearchIcon} />
          <NavItems title="TRENDING" Icon={LightningBoltIcon} />
          <NavItems title="COLLECTIONS" Icon={CollectionIcon} />
          <NavItems title="ACCOUNT" Icon={UserIcon} />
        </div>
      </nav>
    </div>
  );
};

export default nav;
