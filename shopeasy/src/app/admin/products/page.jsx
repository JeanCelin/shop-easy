import styles from "./page.module.css";
import { roboto } from "@/components/fonts/fonts";
import { GET } from "@/app/api/products/route";

export default async function Products() {
  const response = await GET();
  const products = await response.json();

  return (
    <main className={`${styles.products} ${roboto.variable}`}>
      <h1 className={styles.products__title}>Produtos</h1>

      <div className={styles.products__wrapper}>
        <table className={styles.products__table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Vendas</th>
              <th>Imagem</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr 
                key={product._id} 
                className={index % 2 === 0 ? styles.products__even : styles.products__odd}
              >
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.sells}</td>
                <td>
                  <a href={product.imageUrl} target="_blank" className={styles.product__url}>
                    Ver imagem
                  </a>
                </td>
                <td className={styles.product__description}>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
