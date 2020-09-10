import React from "react";
import rows from "../../mock/about.json";
import CollapsibleList from "../../components/CollapsibleList/CollapsibleList";

export default function Help() {
  return <CollapsibleList rows={rows} />;
}
