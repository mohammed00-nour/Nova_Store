import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer" style={{backgroundColor : "#111827", display:"flex", alignItems :"center", justifyContent:"space-between", padding:"30px 24px" }}>
            <div>
                <h2 style={{fontSize: '24px', fontWeight: 'bold', cursor: "pointer", color:"#fff", textAlign: "left"}}>NOVA<span style={{color: '#f59e0b'}}>STORE</span></h2>
                <p style={{color:"#6b7280", fontSize: "12px"}}>
                    A simple modern storefront for CRUD training.
                </p>
            </div>

            <div style={{display: "flex", alignItems:"center", justifyContent: "space-between", gap: "40px" }}>
                <nav style={{ display: 'flex', gap: '1rem' }}>
                    <Link style={{ textDecoration: 'none', color: '#d4d8e0', fontWeight: "600", fontSize: "14px" }} to="/">Home</Link>
                    <Link style={{ textDecoration: 'none', color: '#d4d8e0', fontWeight: "600", fontSize: "14px" }} to="/products">Products</Link>
                    <Link style={{ textDecoration: 'none', color: '#d4d8e0', fontWeight: "600", fontSize: "14px" }} to="/manage">Manage</Link>
                </nav>
                <p style={{fontSize: "14px", color: "#efeee9"}}>© 2026 NOVASTORE</p>
            </div>

        </div>
    )
}