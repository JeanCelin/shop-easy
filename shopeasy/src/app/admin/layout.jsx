import AdmFooter from "@/components/footers/AdmFooter";
import AdmNavbar from "@/components/navbars/AdmNavbar";
import styles from "./layout.module.css";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.layoutAdm}>
      <header>
        <AdmNavbar />
      </header>
      <main className={styles.layoutAdm__main}>{children}</main>
      <section className={styles.layoutAdm__footer}>
        <AdmFooter />
      </section>
    </div>
  );
};

export default AdminLayout;
