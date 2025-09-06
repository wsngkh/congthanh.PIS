import Footer from './components/Footer.tsx';
import './main_layout.css';
import HeroSection from './components/Hero.tsx';
import background from "./assets/background.svg";
import ClickSpark from './components/ui/ClickSpark.tsx';
import AboutPic from "./assets/about.jpg";
import FounderPic from './assets/founder.png';
import { FAQ } from './components/FAQ.tsx';

const sampleFaqs = [
  {
    index: 1,
    question: "Điều kiện xin visa Mỹ là gì? Tại sao tôi không đủ điều kiện?",
    answer:
      "Điều kiện xin visa Mỹ phụ thuộc vào loại visa bạn nộp. Thông thường, bạn phải chứng minh có ràng buộc chặt chẽ tại Việt Nam (gia đình, công việc, tài chính), mục đích chuyến đi rõ ràng và đủ khả năng tài chính. Nếu không đủ minh chứng, hồ sơ có thể bị từ chối theo điều khoản 214(b).",
  },
  {
    index: 2,
    question: "Visa có hiệu lực trong vòng 1 năm, vậy tôi phải rời khỏi Mỹ trước ngày hết hiệu lực visa?",
    answer:
      "Không. Ngày hết hạn visa chỉ là thời điểm cuối cùng bạn có thể dùng visa để nhập cảnh vào Mỹ. Thời gian bạn được phép ở lại Mỹ phụ thuộc vào giấy I-94 do Hải quan và Biên phòng Mỹ cấp khi nhập cảnh.",
  },
  {
    index: 3,
    question: "Tôi cần làm hồ sơ xin visa trước chuyến đi của mình bao lâu?",
    answer:
      "Bạn nên nộp hồ sơ xin visa ít nhất từ 2–3 tháng trước ngày dự kiến khởi hành. Vào mùa cao điểm, thời gian đặt lịch hẹn có thể kéo dài nên cần chuẩn bị sớm hơn.",
  },
  {
    index: 4,
    question: "Tôi có được nói tiếng Việt khi phỏng vấn không?",
    answer:
      "Có. Tại Lãnh sự quán/Đại sứ quán Mỹ luôn có nhân viên hỗ trợ tiếng Việt. Tuy nhiên, nếu bạn tự tin giao tiếp bằng tiếng Anh, buổi phỏng vấn có thể diễn ra nhanh chóng hơn.",
  },
  {
    index: 5,
    question: "Đơn xin visa của tôi bị từ chối (Refused), tôi phải làm gì?",
    answer:
      "Khi bị từ chối, bạn không thể khiếu nại hoặc đòi lại lệ phí đã nộp. Tuy nhiên, bạn có thể nộp lại hồ sơ mới bất cứ lúc nào. Hãy đảm bảo bổ sung thêm bằng chứng tài chính, ràng buộc gia đình và công việc để tăng khả năng được chấp thuận.",
  },
];


export default function Home() {
  return (
    <>
      <section className="layout">
        <div id="ctn-header">
          <ClickSpark 
          sparkColor='#fff'
          sparkSize={15}
          sparkRadius={20}
          sparkCount={8}
          duration={400}>
            <HeroSection></HeroSection>
            <img src={background} className="absolute bottom-0 right-0 h-auto pointer-events-none z-0"/>
          </ClickSpark>
        </div>
        <div id="ctn-main">
          <div className="gapgap"></div>
          <div className="ctn-about px-[40px]">
            <div
              className="ctn-about-content box space-y-3 sm:space-y-5 leading-relaxed sm:leading-loose px-3 sm:px-0"
            >
              <h2 className="text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-center leading-snug px-2 sm:px-0 mt-2 sm:mt-4 mb-2 sm:mb-6">
                ✨ Pendleton Immigration Services (PIS) ✨ <br />
                Đồng hành cùng bạn trên hành trình đến Mỹ
              </h2>

              <p className="text-sm sm:text-base md:text-base lg:text-base">
                Tại <strong>PIS</strong>, chúng tôi không chỉ đơn thuần là một công ty dịch vụ di trú,
                mà còn là <em>một gia đình</em> – nơi mỗi khách hàng được lắng nghe, thấu hiểu và hỗ trợ tận tâm.
                Với đội ngũ chuyên viên chuyên nghiệp, giàu kinh nghiệm, luôn sẵn sàng túc trực
                <strong> 24/7</strong>, PIS cam kết mang đến cho bạn sự an tâm tuyệt đối.
              </p>

              <p className="text-sm sm:text-base md:text-base lg:text-base">
                Đặc biệt, <strong>PIS</strong> có văn phòng đại diện tại <strong>Mỹ</strong> và
                <strong> Việt Nam</strong>, đảm bảo quá trình xử lý hồ sơ luôn nhanh chóng,
                minh bạch và hiệu quả.
              </p>

              <p className="font-medium text-center mt-2 sm:mt-4 text-sm sm:text-base md:text-base lg:text-base">
                👉 Hãy để <strong>PIS</strong> đồng hành cùng bạn, biến giấc mơ Mỹ thành hiện thực.
                Liên hệ ngay hôm nay để bắt đầu hành trình của bạn!
              </p>
            </div>

            <div className="ctn-about-content box grid place-items-center ">
              <img
                src={AboutPic}
                alt="About Pendleton"
                className="rounded-xl shadow-lg  mt-2 sm:mt-4"
              />
            </div>
          </div>

          <div className="gapgap"></div>
          <div className="ctn-about bg-primary-1 px-[40px]">

            <div className="gapgap"></div>
            <div className="ctn-about-content box grid place-items-center">
              <img
                src={AboutPic}
                alt="About Pendleton"
                className="rounded-xl shadow-lg mt-2 sm:mt-4"
              />
            </div>

            <div className="text-primary-3 ctn-about-content box space-y-3 sm:space-y-5 leading-relaxed sm:leading-loose px-3 sm:px-0 ">
              <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-6">
                💼 Dịch vụ của PIS bao gồm:
              </h3>

              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed sm:leading-loose">
                <li>
                  Tư vấn, mở và theo dõi <strong>hồ sơ bảo lãnh thân nhân</strong>: kết hôn, đính hôn, cha mẹ, anh chị em, con cái.
                </li>
                <li>
                  Hỗ trợ <strong>xin cấp thẻ xanh 2 năm, đổi thẻ xanh 10 năm, và hồ sơ thi quốc tịch Mỹ</strong>.
                </li>
                <li>
                  Dịch vụ <strong>xin visa du lịch Mỹ</strong> nhanh chóng, đáng tin cậy.
                </li>
                <li>
                  Hỗ trợ <strong>xin passport, visa và miễn thị thực 5 năm Việt Nam</strong>.
                </li>
              </ul>
            </div>

            <div className="gapgap"></div>
          </div>
          
          
          <div id='ctn-contact'>
            <div className="gapgap"></div>
            <div className="grow1 text-base sm:text-lg font-semibold">Gặp gỡ </div>
            <div className="grow1">
              <img src={FounderPic} className='w-90 h-auto'></img>
            </div>
            <div className="grow1 text-base sm:text-lg font-semibold">MS. THUY BUI</div>
            <div className="grow1">Owner & Immigration Service Director</div>
            <div className="gapgap"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center"></h3>
              <FAQ faqs={sampleFaqs} colorScheme="blue" titleColor='text-black' />
            </div>
            <a href="FAQs" className="text-gray-500 underline">
              Xem thêm
            </a>
          </div>
          <div id="ctn-main-content">
            <div className="gapgap"></div>
            <div className="box box-bg">
              <div className="box-service">
              </div>
            </div>
            <div className="box box-bg">2</div>
            <div className="box box-bg">3</div>
            <div className="box box-bg">4</div>
            <div className="box box-bg">5</div>
            <div className="box box-bg">6</div>
          </div>
        </div>
        <div id="ctn-footer">
          <Footer></Footer>
        </div>
      </section>
      
    </>
  );
}