import { GET } from "@/app/api/products/route";

export default async function Page() {
  const response = await GET();
  const products = await response.json();

  return (
    <section>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </section>
  );
}
