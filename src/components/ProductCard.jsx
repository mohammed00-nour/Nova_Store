import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../services/productsApi";
import { Link } from "react-router-dom";
import '../App.css'

export default function ProductCard({ product }) {

    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: deleteProduct,

        onSuccess: (_, deletedProductId) => {
            console.log("DELETED ID:", deletedProductId);

            queryClient.setQueryData(["products"], (currentData) => {
                console.log("BEFORE DELETE CACHE:", currentData);

                return {
                    ...currentData,
                    products: currentData.products.filter(
                        (product) => product.id !== deletedProductId
                    ),
                };
            });

            console.log(
                "AFTER DELETE CACHE:",
                queryClient.getQueryData(["products"])
            );
        },

        onError: (error) => {
            console.log("DELETE ERROR:", error);
        },
    });

    return (
        <div className="productCard" style={{ border: '1px solid #ccc', borderRadius: '8px', width: '300px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '400px' }}>
            <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', padding: '0px 0 0' }}>
                <p style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: '#FFF', color: '#111827', padding: '4px 8px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>{product.category}</p>
                <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#fff", padding: '12px', height: 'calc(100% - 200px)' }}>

                <h3 style={{ fontSize: '18px', margin: '12px 0 8px', color: '#111827' }}>{product.title}</h3>
                <p style={{ fontSize: '14px', color: '#555', margin: '0', lineHeight: '1.4', }} >{product.description.split(' ').slice(0, 10).join(' ')}... </p>

                <hr style={{ color: "#DDD", border: 'none', height: '1px', backgroundColor: "#DDD", margin: '30px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>

                    <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '8px', color: '#111827' }}>${product.price}</p>
                    <div >
                        <Link to={'/manage'} state={{ product }}><button style={{ fontSize: "14px", backgroundColor: '#fff', color: '#111827', padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', cursor: 'pointer', fontWeight: 'bold' }} >Edit</button></Link>
                        <button style={{ fontSize: "14px", backgroundColor: '#fff0f0', color: '#ff0000', padding: '8px 12px', borderRadius: '4px', border: '1px solid #fecaca', cursor: 'pointer', fontWeight: 'bold', marginLeft: '8px' }} onClick={() => deleteMutation.mutate(product.id)} disabled={deleteMutation.isPending}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}