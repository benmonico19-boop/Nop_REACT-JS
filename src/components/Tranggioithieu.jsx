import { useState } from "react";
import "../App.css";

export default function Tranggioithieu() {
    const [showDetail, setShowDetail] = useState(false); // trạng thái toggle chi tiết

    return (
        <div>
            {/* Phần about */}
            <section className="about">
                <div className="container">
                    <div className="row">
                        {/* Ảnh */}
                        <div className="col-md-6 about-img">
                            <img src="./image/Logo_MNC-removebg-preview.png" alt="logo" />
                        </div>

                        {/* Nội dung */}
                        <div className="col-md-6 about-text">
                            <h2>GIỚI THIỆU VỀ MONICO "MNC"</h2>
                            <p>
                                MNC là thương hiệu thời trang hàng đầu với hơn 30 năm kinh nghiệm trong lĩnh vực thời trang và phong cách sống hiện đại.
                                Trải qua hành trình phát triển mạnh mẽ, MNC đã xây dựng hệ thống hơn 100.000 cửa hàng trên khắp thế giới,
                                trở thành điểm đến quen thuộc của hàng triệu khách hàng yêu thích sự sang trọng, trẻ trung và đẳng cấp.
                                Với sứ mệnh mang đến những sản phẩm thời trang chất lượng cao cùng xu hướng hiện đại nhất, MNC không ngừng đổi mới trong thiết kế,
                                chất liệu và trải nghiệm mua sắm. Thương hiệu tự hào đạt được nhiều giải thưởng danh giá trong ngành thời trang quốc tế, nổi bật như “Thương Hiệu Thời Trang Của Năm”,
                                “Brand Được Ưa Chuộng Nhất” và “Thương Hiệu Được Sử Dụng Nhiều Nhất” trong nhiều năm liên tiếp.
                                Không chỉ là một thương hiệu thời trang, MNC còn đại diện cho phong cách sống hiện đại, tự tin và đẳng cấp. Với uy tín được khẳng định trên toàn cầu,
                                MNC luôn cam kết mang đến cho khách hàng những sản phẩm tốt nhất cùng dịch vụ chuyên nghiệp, góp phần tạo nên xu hướng thời trang mới cho thế hệ trẻ trên toàn thế giới.
                            </p>

                            {/* Nút xem chi tiết */}
                            <button
                                className="about-btn"
                                onClick={() => setShowDetail(!showDetail)}
                            >
                                Xem chi tiết
                            </button>

                            {/* Nội dung chi tiết toggle */}
                            {showDetail && (
                                <div id="xemchitiet">

                                    <ul>
                                        <li>✔ Chất liệu vải đạt chuẩn yêu cầu</li>
                                        <li>✔ CEO/Founder có 30 năm kinh nghiệm trong nghành thời trang </li>
                                        <li>✔ Đội ngũ nhân viên luôn năng suất làm việc</li>
                                        <li>✔ Luôn luôn lắng nghe ý kiến khách hàng và có nhiều ưu đãi lớn </li>
                                        <li>✔ Liên tục ra mắt những sản phẩm mới và những bộ sưu tập mới</li>
                                        <li>✔ UY TÍN - TRÁCH NHIỆM - THÂN THIỆN</li>

                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}