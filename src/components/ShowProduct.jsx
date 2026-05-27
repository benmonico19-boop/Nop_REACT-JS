import products from "../data/product";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";


// 🔹 Sản phẩm khuyến mãi
export default function ShowSPKM() {
    const km = products.filter(sp => sp.loaijsp === "spkm");

    return (
        <div className="container">
            <h2 className="my-3 text-center">Sản phẩm khuyến mãi</h2>
            <div className="row">
                {km.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/image/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link btn btn-primary fm1" to={`/detail/${sp.id}`}>
                                    Chi tiết
                                </Link>
                                <div className="nav-link my-2 "><AddToCart product={sp}>Thêm vào giỏ hàng </AddToCart></div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Sản phẩm bán chạy
export function ShowSPBC() {
    const bc = products.filter(sp => sp.loaijsp === "spbc");

    return (
        <div className="container">
            <h2 className="my-3 text-center">Sản phẩm bán chạy</h2>
            <div className="row">
                {bc.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/image/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link btn btn-primary fm1" to={`/detail/${sp.id}`}>
                                    Chi tiết
                                </Link>
                                <div className="nav-link my-2 "><AddToCart product={sp}>Thêm vào giỏ hàng </AddToCart></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Sản phẩm Hot
export function ShowSPH() {
    const hot = products.filter(sp => sp.loaijsp === "sphot");

    return (
        <div className="container mb-3">
            <h2 className="my-3 text-center">Sản phẩm Hot</h2>
            <div className="row">
                {hot.map(sp => (
                    <div className="col-md-3" key={sp.id}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={`/image/${sp.hinh}`}
                                alt={sp.tensp}
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title">{sp.tensp}</h4>
                                <p className="card-text">{sp.mota}</p>
                                <p className="card-text">{sp.gia}đ</p>
                                <Link className="nav-link btn btn-primary fm1" to={`/detail/${sp.id}`}>
                                    Chi tiết
                                </Link>
                                <div className="nav-link my-2 "><AddToCart product={sp}>Thêm vào giỏ hàng </AddToCart></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}