import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsApi";
import '../App.css'

{/* ====import Compnents==== */}
import ProductCard from "../components/ProductCard";


export default function Products() {
  const { data, isLoading, error } = useQuery({
      queryKey: ["products"],
      queryFn: getProducts,
      staleTime: 1000 * 60 * 5,
      refetchOnMount: false,
  });
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '2rem', width: '100%', maxWidth: '1200px', boxSizing: 'border-box', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left', alignItems: 'left', backgroundColor: "#f6f5f1", margin: "0 auto" }}>
      <h4 style={{color: "#f59e0b", fontSize: "14px", fontWeight:"bold", margin: "0" }}>Shop Collection</h4>
      <h2 style={{ fontSize: "46px", fontWeight: "bold", margin: "0 0 10px" , color: "#000"}}>Explore Products</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: "0.5rem", width: "100%" }}>
        <p style={{ fontSize: "16px", lineHeight: "145%", color: "#6b7280" }}>UProducts loaded from the DummyJSON API.</p>
        <p className="numberProducts" style={{ fontSize: "16px", color: "#a65d00", fontWeight: "bold", background: "#fef3c7", padding: "0.25rem 0.5rem", borderRadius: "10px" }}><span style={{ fontWeight: "bold" , fontSize: "16px"}}>{data.products.length}</span> Products</p>
      </div>
      <div className="allProducts" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px"}}>
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
  