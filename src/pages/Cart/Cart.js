import React from "react";
import ItemsTable from "../../components/ItemsTable/ItemsTable";

export default function Cart() {
  return (
    <div>
      <ItemsTable
        headers={["img", "Provider/Seller", "Name", "Price"]}
        rows={[]}
        Tax={0.14}
      />
    </div>
  );
}
