import AdmFooter from "@/components/footers/AdmFooter";
import AdmNavbar from "@/components/navbars/AdmNavbar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <header>
        <AdmNavbar />
      </header>
      <main>{children}</main>
      <AdmFooter />
    </div>
  );
};

export default AdminLayout;
