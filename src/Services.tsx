import Footer from './components/Footer.tsx';
import './main_layout.css';
import HeroSection from './components/HeroForServices.tsx';
import ClickSpark from './components/ui/ClickSpark.tsx';

export default function Services() {
  return (
    <>
      <section className="layout" 
          style={{
          gridTemplateRows: "40vh auto 360px"
        }}>
        <div id="ctn-header">
          <ClickSpark 
          sparkColor='#fff'
          sparkSize={15}
          sparkRadius={20}
          sparkCount={8}
          duration={400}>
            <HeroSection></HeroSection>
          </ClickSpark>
        </div>
        <div className="text-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed space-y-4">
          <div className="text-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 leading-relaxed space-y-8">
            <div className="gapgap"></div>
            {/* 3.1 Hồ sơ bảo lãnh thân nhân */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">1. Hồ sơ bảo lãnh thân nhân</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Vợ chồng:</strong> thủ tục, thời gian, các giấy tờ cần chuẩn bị.</li>
                <li><strong>Cha mẹ:</strong> điều kiện bảo lãnh cha mẹ sang Mỹ.</li>
                <li><strong>Anh chị em:</strong> quy trình và lưu ý về thời gian chờ.</li>
              </ul>
              <p className="mt-2 italic text-gray-600">
                Điểm nhấn: dịch vụ tư vấn chọn diện bảo lãnh phù hợp và chuẩn bị hồ sơ chính xác ngay từ đầu.
              </p>
            </div>

            {/* 3.2 Xin thẻ xanh & quốc tịch Mỹ */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">2. Xin thẻ xanh & quốc tịch Mỹ</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Thẻ xanh 2 năm:</strong> cho vợ/chồng mới cưới, điều kiện chuyển sang thẻ xanh 10 năm.</li>
                <li><strong>Thẻ xanh 10 năm:</strong> quyền lợi, nghĩa vụ, thủ tục gia hạn.</li>
                <li><strong>Quốc tịch Mỹ:</strong> điều kiện thi quốc tịch, các bước chuẩn bị (hồ sơ, phỏng vấn, thi tiếng Anh – kiến thức công dân).</li>
              </ul>
            </div>

            {/* 3.3 Visa du lịch Mỹ */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">3. Visa du lịch Mỹ (B1/B2)</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Quy trình xin visa:</strong> chuẩn bị hồ sơ, phỏng vấn, các yếu tố ảnh hưởng đến tỷ lệ đậu.</li>
                <li><strong>Hỗ trợ:</strong> luyện phỏng vấn, chứng minh tài chính, ràng buộc ở Việt Nam.</li>
              </ul>
            </div>

            {/* 3.4 Xin cấp – đổi Hộ chiếu & Visa Việt Nam */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">4. Xin cấp – đổi Hộ chiếu & Visa Việt Nam</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Gia hạn, đổi hộ chiếu phổ thông.</strong></li>
                <li><strong>Xin visa Việt Nam cho người nước ngoài.</strong></li>
                <li><strong>Hỗ trợ khẩn cấp:</strong> mất hộ chiếu, cần cấp nhanh.</li>
              </ul>
            </div>
          <div className="gapgap"></div>
          </div>

        </div>
        <div id="ctn-footer">
          <Footer></Footer>
        </div>
      </section>
      
    </>
  );
}