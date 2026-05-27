export default function GioiThieu() {
    return (
        <div className="container">
            <div
                className="row align-items-center p-5"
                style={{
                    backgroundColor: "#fff2e2",
                }}>
                <div className="col-md-6">
                    <h2 className="mb-3">TRẢI NGHIỆM LỰA CHỌN THỜI TRANG CỦA BẠN</h2>
                    <p>
                        Không gian của MNC có thể được ví như một bản thiết kế "giao diện người dùng" hoàn hảo ngoài đời thực: tối giản, trực quan và cực kỳ ngăn nắp.

                        Ngay khi bước vào, bạn sẽ cảm nhận được sự rực rỡ từ hệ thống ánh sáng trắng tràn ngập, phản chiếu lên sàn nhà bóng loáng tạo cảm giác sạch sẽ tuyệt đối. Điểm đặc trưng nhất chính là những kệ quần áo cao sát trần nhà với những chồng áo thun, áo len được gấp vuông vức, sắp xếp theo dải màu sắc từ nhạt đến đậm một cách cực kỳ nịnh mắt.

                        Sự kết hợp giữa những mảng tường kính lớn, các bảng đèn LED chạy chữ đỏ đặc trưng và những chi tiết nội thất bằng gỗ sáng màu tạo nên một cảm giác vừa hiện đại, công nghiệp, lại vừa gần gũi. Lối đi trong cửa hàng luôn được thiết kế rộng thênh thang, cho phép bạn thoải mái di chuyển mà không hề thấy bí bách, dù lượng hàng hóa trưng bày là khổng lồ. Tổng thể không gian không cố gắng "kể" một câu chuyện xa hoa, mà tập trung hoàn toàn vào tính thực dụng và hiệu năng, khiến việc tìm kiếm món đồ mình cần trở nên nhanh chóng và thỏa mãn một cách lạ kỳ.
                    </p>
                    <ul className="list mt-3">
                        <li className="mb-2">
                            <i className="fa-solid fa-check text-success me-2" />
                            Không gian ấm cúng, phong cách cổ điển
                        </li>
                        <li className="mb-2">
                            <i className="fa-solid fa-check text-success me-2" />
                            Đa dạng các sản phẩm thời trang
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2" />
                            Chất liệu được đánh giá số 1 tại Việt Nam
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="row g-3">
                        <div className="col-6">
                            <img
                                alt=""
                                className="img-fluid rounded h-100"
                                src="image/Ko gian1.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <img
                                alt=""
                                className="img-fluid rounded h-70"
                                src="image/Kogian2.jpg"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}