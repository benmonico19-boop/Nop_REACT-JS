import { useState } from "react";
import "../App.css";

export default function Tintuc() {
    return (
        <div>


            <section className="tintuc container my-1">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12 my-4">
                                <div className="card">
                                    <img alt="" className="card-img-top" src="image/Tintuc1.jpg" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Xu hướng thời trang Unisex ở Việt Nam
                                        </h5>
                                        <p className="card-text">
                                            Trong vài năm gần đây, xu hướng thời trang unisex tại Việt Nam đang phát triển mạnh mẽ,
                                            đặc biệt trong giới trẻ và cộng đồng Gen Z. Không còn bị giới hạn bởi khái niệm “đồ nam” hay “đồ nữ”,
                                            phong cách unisex hướng đến sự tự do, thoải mái và thể hiện cá tính riêng của mỗi người.
                                            Những item như áo oversized, quần baggy, hoodie hay sneaker trung tính ngày càng xuất hiện phổ biến trên đường phố,
                                            mạng xã hội và trong các local brand Việt Nam. Bên cạnh yếu tố thời trang,
                                            unisex còn phản ánh tư duy hiện đại về sự bình đẳng và phá bỏ các định kiến giới trong cách ăn mặc.
                                            Sự ảnh hưởng của văn hóa Hàn Quốc, TikTok và các KOLs trẻ cũng góp phần khiến phong cách này trở thành một xu hướng nổi bật tại Việt Nam hiện nay.
                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="card">
                                    <img alt="" className="card-img-top" src="image/Tintuc2.jpg" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Cách phối đồ tại MNC
                                        </h5>
                                        <p className="card-text">
                                            Tại MNC, chúng tôi mang đến những thiết kế theo tinh thần unisex kết hợp cùng phong cách old money thanh lịch và tối giản.
                                            Các outfit tại cửa hàng được phối theo xu hướng hiện đại nhưng vẫn giữ nét sang trọng, dễ ứng dụng trong nhiều hoàn cảnh khác nhau.
                                            Bạn có thể dễ dàng kết hợp áo sơ mi form rộng cùng quần suông, blazer trung tính hoặc áo len basic để tạo nên vẻ ngoài trẻ trung nhưng vẫn tinh tế.
                                            MNC hướng đến những gam màu đặc trưng của phong cách old money như trắng, be, đen, nâu và xanh navy — giúp tổng thể trang phục luôn hài hòa và thời thượng.
                                            Dù bạn yêu thích phong cách năng động hằng ngày hay muốn xây dựng hình ảnh thanh lịch, tối giản,
                                            đội ngũ của MNC luôn sẵn sàng tư vấn cách phối đồ phù hợp với cá tính và xu hướng mới nhất.
                                            Không chỉ là thời trang, MNC còn mong muốn mang đến cho khách hàng sự tự tin và thoải mái khi thể hiện phong cách riêng mà không bị giới hạn bởi giới tính hay khuôn mẫu truyền thống.


                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="card">
                                    <img alt="" className="card-img-top" src="image/Tintuc3.jpg" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Sự hợp tác đánh dấu bước thành công lớn của MNC
                                        </h5>
                                        <p className="card-text">
                                            MNC tự hào đánh dấu một cột mốc đặc biệt trên hành trình phát triển thương hiệu khi có sự đồng hành của David Beckham trong vai trò đại sứ thương hiệu.
                                            Với hình ảnh lịch lãm, tinh tế và biểu tượng thời trang vượt thời gian, David Beckham chính là đại diện hoàn hảo cho tinh thần mà MNC luôn hướng đến:
                                            tối giản, đẳng cấp và không bị giới hạn bởi bất kỳ khuôn mẫu nào.
                                            Sự kết hợp giữa MNC và David Beckham không chỉ mang ý nghĩa về thời trang mà còn thể hiện phong cách sống hiện đại của thế hệ mới — nơi sự tự tin và cá tính được đặt lên hàng đầu.
                                            Các thiết kế của MNC theo đuổi xu hướng unisex kết hợp cùng tinh thần old money thanh lịch, mang đến vẻ ngoài sang trọng nhưng vẫn trẻ trung và dễ ứng dụng trong cuộc sống hằng ngày.
                                            Tại MNC, mỗi outfit đều được chăm chút từ chất liệu, form dáng đến bảng màu trung tính đặc trưng như trắng, đen, be, nâu và navy. Khách hàng có thể dễ dàng phối áo blazer oversized cùng quần suông,
                                            sơ mi basic hay áo len tối giản để tạo nên phong cách vừa cổ điển vừa hiện đại — đúng tinh thần mà David Beckham luôn thể hiện trong hình ảnh của mình.
                                            Sự đồng hành của David Beckham chính là nguồn cảm hứng để MNC tiếp tục mang đến những giá trị thời trang bền vững, thanh lịch và khác biệt cho giới trẻ Việt Nam.
                                            Trong thời gian tới, MNC sẽ không ngừng cập nhật những bộ sưu tập mới, giúp khách hàng tự tin khẳng định phong cách riêng theo tinh thần unisex và old money đầy cuốn hút.

                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="card">
                                    <img alt="" className="card-img-top" src="image/Tintuc4.jpg" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Buổi tiệc hàng năm của MNC và buổi ra mắt thành viên mới
                                        </h5>
                                        <p className="card-text">
                                            MNC trân trọng giới thiệu “**The Day of MONICO**” — bữa tiệc thường niên mang tính biểu tượng dành riêng cho cộng đồng khách hàng **DIAMOND Member** và **Platinum Member**. Đây không chỉ là một sự kiện thời trang, mà còn là không gian hội tụ của nghệ thuật, âm nhạc và tinh thần sống đẳng cấp mà MNC theo đuổi.
                                            Trong concept sự kiện, “The Day of MONICO” được mở màn bằng chuỗi tiết mục trình diễn từ các nghệ sĩ quốc tế và nghệ sĩ hàng đầu Việt Nam, tạo nên một không khí bùng nổ và giàu cảm xúc. Sự góp mặt dự kiến của các nghệ sĩ như Sơn Tùng M-TP, cùng những tên tuổi nổi bật trong lĩnh vực nghệ thuật như Trấn Thành, Thành Lộc và Hữu Châu, mang đến một không gian giao thoa giữa âm nhạc, sân khấu và thời trang.
                                            Điểm nhấn đặc biệt của chương trình là phần giao lưu độc quyền giữa khách mời và đại sứ thương hiệu MNC — David Beckham, cùng CEO & Founder của MNC. Đây là khoảnh khắc truyền cảm hứng, nơi câu chuyện về phong cách sống, thời trang unisex và tinh thần “old money hiện đại” được chia sẻ một cách gần gũi và sâu sắc.
                                            Trong khuôn khổ sự kiện, MNC cũng dự kiến giới thiệu các bộ sưu tập limited edition, chỉ dành riêng cho những khách mời tham dự “The Day of MONICO”. Mỗi thiết kế không chỉ mang giá trị thời trang mà còn là dấu ấn sưu tầm độc quyền, thể hiện tinh thần cá nhân hóa và đẳng cấp của từng khách hàng.
                                            Đặc biệt, sự kiện còn mở ra một phần trình diễn định hướng tương lai của MNC với các dự án hợp tác giả định cùng những nhà mốt hàng đầu thế giới như Louis Vuitton và Chanel. Đây là bước đi mang tính biểu tượng, thể hiện khát vọng đưa MNC tiến gần hơn đến bản đồ thời trang toàn cầu.
                                            “The Day of MONICO” không chỉ là một buổi tiệc, mà là lời khẳng định về cộng đồng MNC — nơi thời trang, nghệ thuật và phong cách sống hòa quyện, tạo nên một trải nghiệm độc quyền chỉ dành cho những người thực sự thuộc về thế giới MNC.
                                            Cùng với đó là sự xuất hiện của NTK Mr Leon Trong đội ngũ sáng tạo của MNC, Mr Leon đóng vai trò quan trọng trong việc định hình chất lượng và tinh thần của từng sản phẩm. Anh là người phụ trách chính trong khâu lựa chọn chất liệu, nghiên cứu và đề xuất các loại vải phù hợp với định hướng unisex và phong cách old money mà thương hiệu theo đuổi. Với con mắt thẩm mỹ tinh tế và tư duy thiết kế hiện đại, Mr Leon không chỉ đảm bảo tính thẩm mỹ của sản phẩm mà còn chú trọng đến trải nghiệm mặc, độ bền và sự thoải mái cho khách hàng.

                                            Bên cạnh đó, Mr Leon còn tham gia trực tiếp vào quá trình phát triển thiết kế, từ phác thảo ý tưởng ban đầu cho đến việc hoàn thiện từng chi tiết nhỏ trong sản phẩm. Sự kết hợp giữa tư duy sáng tạo và hiểu biết sâu về chất liệu giúp anh mang đến những thiết kế mang dấu ấn riêng của MNC — tối giản, sang trọng nhưng vẫn mang tính ứng dụng cao.

                                            Có thể nói, Mr Leon là một trong những nhân tố cốt lõi góp phần tạo nên bản sắc thời trang của MNC, nơi mỗi sản phẩm không chỉ là trang phục mà còn là sự cân bằng giữa nghệ thuật thiết kế và giá trị sử dụng thực tế.

                                        </p>
                                        <a className="btn btn-primary" href="#">
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h5>Danh mục</h5>
                        <ul className="list-group mb-4">
                            <li className="list-group-item">Bộ sưu tập mới</li>
                            <li className="list-group-item">Phong cách Unisex</li>
                            <li className="list-group-item">Old Money Collection</li>
                            <li className="list-group-item">Sự kiện độc quyền</li>
                        </ul>

                        <h5>Item nổi bật trong tuần</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Áo blazer form oversized</li>
                            <li className="list-group-item">Sơ mi basic premium cotton</li>
                            <li className="list-group-item">Quần suông tailored fit</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}