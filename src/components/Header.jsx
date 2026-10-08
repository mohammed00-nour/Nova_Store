import '../App.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', backgroundColor: 'rgb(246, 245, 241, 0.9)' , boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' , margin : "0" , height : "80px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', cursor: "pointer" }}>NOVA<span style={{ color: '#f59e0b' }}>STORE</span></h1>
            <nav  className="navHeader" style={{ display: 'flex', gap: '1rem' }}>
                <Link className="nav-link" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: "bold", fontSize: "16px" }} to="/">Home</Link>
                <Link className="nav-link" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: "bold", fontSize: "16px" }} to="/products">Products</Link>
                <Link className="nav-link" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: "bold", fontSize: "16px" }} to="/manage">Manage</Link>
            </nav>
            <Link to="/manage">
                <button style={{ backgroundColor: '#111827', color: '#fff', padding: '16px 24px', borderRadius: '1.25rem', border: 'none', cursor: 'pointer', fontWeight: 'bolder', fontSize: '16px' }}>+ Add Product</button>
            </Link>
        </div>
    )
}