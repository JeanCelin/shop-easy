import Link from "next/link";
import {roboto} from "@/components/fonts/fonts";
import styles from './AdmNavbar.module.css'

export default function AdmNavbar() {
  return (
    <nav className={`${styles.navbar} ${roboto.variable}`}>
      <ul className={styles.navbar__list}>
        <li>
          <Link href="/admin">Home</Link>
        </li>
        <li>
          <Link href="admin/products">Products</Link>
        </li>
        <li>
          <Link href="admin/orders">Orders</Link>
        </li>
        <li>
          <Link href="admin/customers">Customers</Link>
        </li>
      </ul>
    </nav>
  );
}
