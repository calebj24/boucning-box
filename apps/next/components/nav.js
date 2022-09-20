import {
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import NavItems from "./navItems";
import React from "react";
import Router from 'next/router';
import Link from "next/link";

const nav = () => {
  return (
    <div className="nav-before-sign-in">
      <nav className="nav">
        <NavItems title="RizzUp" />
        <div className="icons">
          <a href="/">
            <NavItems title="HOME" Icon={HomeIcon} />
          </a>
          <NavItems title="SEARCH" Icon={SearchIcon} />
          <NavItems title="TRENDING" Icon={LightningBoltIcon} />
          <NavItems title="COLLECTIONS" Icon={CollectionIcon} />
          <a href="/auth/login">
            <NavItems title="ACCOUNT" Icon={UserIcon} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default nav;
