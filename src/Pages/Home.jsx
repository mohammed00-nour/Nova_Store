import "../App.css";
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    <div className="heroSection" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', gap: "4rem", backgroundColor: "#f6f5f1", padding: "0 0.5rem", margin: "0" }}>
      <div className="hSection1" style={{display : "flex" , justifyContent :"left", flexDirection :"column", alignItems: "left" , width : "40%" , gap : "1rem", textAlign: "left"}}>
        <h4 style={{color: "#f59e0b", fontSize: "14px", fontWeight:"bold", margin: "0" }}>New Collection 2026</h4>
        <h1 style={{ fontSize: "68px", fontWeight: "bold", lineHeight: "105%", margin :"0" }}>Simple products.</h1>
        <h1 style={{ fontSize: "68px", fontWeight: "bold", lineHeight: "105%", margin :"0" }}>Better everyday.</h1>
        <p style={{ fontSize: "18px", lineHeight: "145%", color: "#6b7280" }}>A modern store interface connected to the DummyJSON Products API. Browse products, add new items, edit existing ones, and delete them.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'left', marginTop: "1rem",  }}>
          <Link to="/products">
            <button style={{ backgroundColor: '#111827', color: '#fff', padding: '16px 24px', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: 'bolder', fontSize: '16px' }}>Shop Products</button>
          </Link>
          <Link to="/manage">
            <button style={{ backgroundColor: '#FFF', color: '#111827', padding: '16px 24px', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: 'bolder', fontSize: '16px' }}>Manage Store</button>
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'left', marginTop: "2rem", marginBottom: "0.5rem",  }}>
          <div>
            <p style={{fontSize: "24px", fontWeight:"bold", color:"#000"}}>
             30+ 
            </p>
            Products
          </div>
          <div>
            <p style={{fontSize: "24px", fontWeight:"bold", color:"#000"}}>
             10+
            </p>
            Categories
          </div>
          <div>
            <p style={{fontSize: "24px", fontWeight:"bold", color:"#000"}}>
             24/7
            </p>
            Available
          </div>
        </div>
      </div>

     {/* Hero Image */}
      <div className="hSection2" style={{ width :"50%", marginTop: "2rem" , height : "calc(100% - 2rem)", display : "flex" , justifyContent : "center", alignItems : "center", position : "relative"}}>
        <span style={{ position: "absolute", top: "70%", left: "-20px", width: "120px", height: "80px", backgroundColor: "rgb(255, 255, 255, 0.9)", borderRadius: "0.75rem", zIndex: "1", color:"#000", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}> <p style={{fontSize: "12px", color: "#6b7280"}}>Featured</p><p style={{fontWeight:"bold"}}>Fresh Picks</p></span>
        <img className="hero-image" src="/images/HeroImage.avif" alt="NOVA STORE" style={{ width: '100%', height: '80%' , borderRadius: '1.75rem' }} />
      </div>

    </div>
  )
}