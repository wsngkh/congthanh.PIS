"use client";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-1 to-primary-1 text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-extrabold text-primary-6">
              Pend<span className="text-primary-3">leton</span>
            </h3>
          </div>
          <p className="text-primary-3 text-sm leading-relaxed">
            Kiến tạo con đường cho một tương lai tươi sáng.
            Chúng tôi cam kết mang đến dịch vụ di trú uy tín, giúp cá nhân và gia đình chạm tới giấc mơ của mình.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-3">
            Liên kết nhanh
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="/"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="About"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="Services"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="FAQs"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300">
                Trợ giúp
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-3">
            Dịch vụ của PIS
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300"
              >
                Hồ sơ bảo lãnh thân nhân
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300"
              >
                Xin thẻ xanh & quốc tịch Mỹ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300"
              >
                Visa du lịch Mỹ (B1/B2)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary-3 hover:text-primary-7 transition-colors duration-300"
              >
                Xin cấp – đổi Hộ chiếu & Visa Việt Nam
              </a>
            </li>
            
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-3">
            Liên hệ với chúng tôi
          </h3>
          <p className="text-primary-3">
            123 Tech Avenue, Innovation City, 98765
          </p>
          <p className="text-primary-3">
            Email: info@yourbrand.com
          </p>
          <p className="text-primary-3">
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm pt-10 mt-10 border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Pendleton Immigration Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
