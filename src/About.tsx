import Footer from './components/Footer.tsx';
import './main_layout.css';
import HeroSection from './components/HeroForAbout.tsx';
import ClickSpark from './components/ui/ClickSpark.tsx';


export default function About() {
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
          <div className="gapgap"></div>
          <p>
            Tại <strong>Pendleton Immigration Services</strong>, sứ mệnh của chúng tôi là giúp bạn vượt qua những rào cản tạm thời để xây dựng một tương lai bền vững tại vùng đất mới. 
            Chúng tôi chuyên về tư vấn định cư toàn diện và tối ưu hóa hồ sơ pháp lý, mang đến cho bạn nền tảng vững chắc để học tập, làm việc và an cư. 
            Với quy trình đánh giá kỹ lưỡng trước và sau mỗi giai đoạn, bạn sẽ thấy rõ tiến trình và kết quả thực tế trên từng bước hành trình.
          </p>

          <p>
            Dịch vụ của chúng tôi được bổ trợ bởi hệ thống hỗ trợ toàn diện, bao gồm: 
            tư vấn pháp lý chuyên sâu, chuẩn bị hồ sơ cá nhân hoá, dịch thuật – công chứng, 
            huấn luyện phỏng vấn, định hướng hội nhập văn hóa – xã hội, cùng các công cụ thiết thực 
            để bạn luôn sẵn sàng cả trong và ngoài văn phòng.
          </p>
          <div className="gapgap"></div>
        </div>
        <div id="ctn-footer">
          <Footer></Footer>
        </div>
      </section>
      
    </>
  );
}