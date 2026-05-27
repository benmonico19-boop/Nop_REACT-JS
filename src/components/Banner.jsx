export default function Banner() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 frame-danhmuc">
                    <h3>DANH MỤC</h3>
                    <ul>
                        <li>
                            Áo
                            <ul>
                                <li>Áo thun</li>
                                <li>Áo sơ mi</li>
                                <li>Áo polo</li>
                            </ul>
                        </li>
                        <li>
                            Quần
                            <ul>
                                <li>Quần tây</li>
                                <li>Quần Jean</li>
                                <li>Quần short thun</li>
                            </ul>
                        </li>
                        <li>
                            Phụ kiện
                            <ul>
                                <li>Mắt kính</li>
                                <li>Nón </li>
                                <li>Trang sức</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 frame-danhmuc">
                    <div className="carousel slide" data-bs-ride="carousel" id="demo">
                        <div className="carousel-indicators">
                            <button
                                className="active"
                                data-bs-slide-to="0"
                                data-bs-target="#demo"
                                type="button"
                            />
                            <button data-bs-slide-to="1" data-bs-target="#demo" type="button" />
                            <button data-bs-slide-to="2" data-bs-target="#demo" type="button" />
                        </div>
                        <div className="carousel-inner banner">
                            <div className="carousel-item active">
                                <img alt="Chicago" src="./image/Tintuc4.jpg " />

                            </div>
                            <div className="carousel-item">
                                <img alt="Los Angeles" src="./image/banner-m.jpg" />

                            </div>
                            <div className="carousel-item">
                                <img alt="New York" src="./image/banner-c.jpg" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            data-bs-slide="prev"
                            data-bs-target="#demo"
                            type="button">
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button
                            className="carousel-control-next"
                            data-bs-slide="next"
                            data-bs-target="#demo"
                            type="button">
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}