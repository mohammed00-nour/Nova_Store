import "../App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct, addProduct } from "../services/productsApi";
import { useNavigate } from "react-router-dom";

export default function Manage() {
    const location = useLocation();
    //  console.log(location.state?.product);

    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        image: "",
        description: ""
    })
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.state?.product) {
            setProduct({
                title: location.state.product.title || "",
                price: location.state.product.price || "",
                category: location.state.product.category || "",
                image: location.state.product.thumbnail || "",
                description: location.state.product.description || ""
            });
        }
    }, [location.state]);

    const queryClient = useQueryClient();
    
    const updateMutation = useMutation({
    mutationFn: ({ productId, updatedData }) =>
        updateProduct(productId, updatedData),
    onSuccess: (_, { productId, updatedData }) => { 
        queryClient.setQueryData(["products"], (currentData) => ({
            ...currentData,
            products: currentData.products.map((product) =>
                product.id === productId ? { ...product, ...updatedData } : product
            ),
        }));
        }
    });

    const addMutation = useMutation({
        mutationFn: (newProduct) => addProduct(newProduct),

        onSuccess: (data) => {
            queryClient.setQueryData(["products"], (currentData) => {
                if (!currentData) {
                    return {
                        products: [data]
                    };
                }

                return {
                    ...currentData,
                    products: [...currentData.products, data]
                };
            });
            navigate("/products");    
        },
        onError: (error) => {
            console.log("ADD ERROR:", error);
        }

    });

    const isEditMode = Boolean(location.state?.product);

    return (
        <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', height: '100vh', textAlign: 'left', backgroundColor: "#FFF", padding: "0 0.5rem", margin: "0 0 30px" }}>
         <h4 style={{ color: "#f59e0b", fontSize: "14px", fontWeight: "bold", margin: "20px 0 10px" }}>Store Management</h4>
         <h2 style={{ fontSize: "46px", fontWeight: "bold", margin: "0 0 10px" , color: "#000"}}>Add New Product</h2>
         <p style={{ fontSize: "16px", lineHeight: "145%", color: "#6b7280" }}>Use the form to add a product to the store.</p>
         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: "1rem", margin: "2rem 2rem", backgroundColor: "#f6f5f1", padding: "20px 10px 10px", borderRadius: "1.75rem", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <form  onSubmit={(e) => { e.preventDefault(); if(isEditMode) { updateMutation.mutate({ productId: location.state.product.id, updatedData: product }); } else { 
                const newProduct = {
                    title: product.title,
                    price: Number(product.price),
                    category: product.category,
                    thumbnail: product.image,
                    description: product.description
                };

                addMutation.mutate(newProduct);
                
                }  }} style={{ display: 'flex', justifyContent: 'center',flexWrap: 'wrap', alignItems: 'center', gap: "2rem", width: "100%",  }}>
               
                <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', gap: "0.5rem", width: "46%" }}>
                    <label htmlFor="productName" style={{ display: "block", color:"#000", fontWeight: "bold" }}>Product Title</label>
                    <input className="inputManga" type="text" id="productName" name="productName" placeholder="Modern Headphones"
                     value={product.title} onChange={(e) => {setProduct({...product, title: e.target.value})}} style={{width:"100%", padding: "16px 6px", outline: "none", border: "1px solid #ccc", fontSize: "18px", borderRadius: "0.5rem"}}/>
                </div>

                <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', gap: "0.5rem", width: "46%" }}>
                    <label htmlFor="productPrice" style={{ display: "block", color:"#000", fontWeight: "bold" }}>Price</label>
                    <input className="inputManga" type="number" id="productPrice" name="productPrice" step="1" placeholder="99.99" value={product.price} onChange={(e) => {setProduct({...product, price: e.target.value})}} style={{width:"100%", padding: "16px 6px", outline: "none", border: "1px solid #ccc", fontSize: "20px", borderRadius: "0.5rem"}}/>
                </div>

                <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', gap: "0.5rem", width: "46%" }}>
                    <label htmlFor="productCategory" style={{ display: "block", color:"#000", fontWeight: "bold" }}>Category</label>
                    <input className="inputManga" type="text" id="productCategory" name="productCategory" placeholder="Electronics" value={product.category} onChange={(e) => {setProduct({...product, category: e.target.value})}} style={{width:"100%", padding: "16px 6px", outline: "none", border: "1px solid #ccc", fontSize: "18px", borderRadius: "0.5rem"}}/>   
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', gap: "0.5rem", width: "46%" }}>
                    <label htmlFor="productImage" style={{ display: "block", color:"#000", fontWeight: "bold" }}>Image URL</label>
                    <input  className="inputManga" type="url" id="productImage" name="productImage" placeholder="https://example.com/image.jpg" value={product.image} onChange={(e) => {setProduct({...product, image: e.target.value})}} style={{width:"100%", padding: "16px 6px", outline: "none", border: "1px solid #ccc", fontSize: "18px", borderRadius: "0.5rem"}}/>
                </div>

                <div style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', alignItems: 'left', gap: "0.5rem", width: "96%" }}>   
                    <label htmlFor="productDescription" style={{ display: "block", color:"#000", fontWeight: "bold" }}>Description</label>
                    <textarea className="inputManga" id="productDescription" name="productDescription" placeholder="Enter product description here..." value={product.description} onChange={(e) => {setProduct({...product, description: e.target.value})}} style={{width:"100%", padding: "16px 6px", outline: "none", border: "1px solid #ccc", fontSize: "18px", borderRadius: "0.5rem"}}    ></textarea>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', gap: "0.5rem", width: "96%" }}>
                    <button type="submit" style={{width:"fit-content", padding: "12px 12px", color: "#fff", backgroundColor: "#111827", outline: "none", border: "1px solid #ccc", fontWeight: "bold", fontSize: "20px", borderRadius: "0.5rem" , textAlign: "center", }} disabled={updateMutation.isPending || addMutation.isPending} >{isEditMode ? "Update Product" : "Add Product"}</button>
                    <button type="button" style={{width:"fit-content", padding: "12px 12px", color: "#111827", backgroundColor: "#FFF", outline: "none", border: "1px solid #ccc", fontWeight: "bold", fontSize: "20px", borderRadius: "0.5rem" , textAlign: "center", display: "none" }}>Cancel</button>
                </div>

            </form>
         </div>
        </div>
    )
}

