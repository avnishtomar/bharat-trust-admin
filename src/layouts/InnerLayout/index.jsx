import { Outlet, useMatches } from "@tanstack/react-router";

import Breadcrumb from "./Breadcrumb/Breadcrumb";

function InnerLayout() {
  const matches = useMatches();
  const pageName = matches[matches.length - 1]?.handle?.pageName;
  return (
    <>
      <Breadcrumb page={pageName} />
      <Outlet />
    </>
  );
}

export default InnerLayout;
