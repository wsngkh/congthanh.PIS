'use client';
import Footer from './components/Footer.tsx';
import './main_layout.css';
import HeroSection from './components/HeroForFAQs.tsx';
import ClickSpark from './components/ui/ClickSpark.tsx';
import { FAQ } from './components/FAQ.tsx';
import Notification from './components/ui/toast.tsx';
import { useState } from "react";

const sampleFaqs = [
  {
    index: 1,
    question: "Hộ chiếu cần còn hiệu lực bao lâu để xin visa Mỹ?",
    answer: "Ít nhất 6 tháng sau ngày rời khỏi Mỹ, trừ một số trường hợp đặc biệt. Hộ chiếu cần có tối thiểu 2 trang trống.",
  },
  {
    index: 2,
    question: "Ai đủ điều kiện tham gia Chương trình Miễn thị thực (VWP)?",
    answer: "Công dân nước tham gia VWP, có hộ chiếu điện tử, đi du lịch/công tác dưới 90 ngày và có ESTA hợp lệ.",
  },
  {
    index: 3,
    question: "Lệ phí ESTA là bao nhiêu?",
    answer: "14 USD, thanh toán online. Nếu bị từ chối, chỉ thu 4 USD phí xử lý.",
  },
  {
    index: 4,
    question: "Có thể đến Mỹ sớm hơn ngày nhập học I-20 không?",
    answer: "Không. Chỉ được nhập cảnh tối đa 30 ngày trước ngày nhập học ghi trên I-20.",
  },
  {
    index: 5,
    question: "Sinh viên F/M có thể quay lại Mỹ sau COVID-19 không?",
    answer: "Có, nếu duy trì tiến độ học tập. Cần theo dõi thông báo từ Đại sứ quán và cơ quan Mỹ.",
  },
  {
    index: 6,
    question: "Hồ sơ bị trạng thái REFUSED thì phải làm gì?",
    answer: "Cần kiểm tra email/thông báo từ lãnh sự. Có thể phải bổ sung hồ sơ hoặc đặt lịch phỏng vấn lại.",
  },
  {
    index: 7,
    question: "Visa có hiệu lực 1 năm, có phải rời Mỹ trước khi hết hạn?",
    answer: "Không. Quan trọng là thời gian lưu trú trên dấu nhập cảnh hoặc I-94, không phải ngày hết hạn visa.",
  },
  {
    index: 8,
    question: "Người 16 tuổi có thể phỏng vấn visa một mình không?",
    answer: "Có. Trẻ từ 14 tuổi trở lên có thể phỏng vấn mà không cần cha mẹ đi cùng.",
  },
  {
    index: 9,
    question: "Trẻ em chung hộ chiếu với cha/mẹ có thể nhập cảnh Mỹ không?",
    answer: "Không. Mỗi người, kể cả trẻ em, phải có hộ chiếu và visa riêng.",
  },
  {
    index: 10,
    question: "Visa bị từ chối có được hoàn lại lệ phí không?",
    answer: "Không. Lệ phí xét duyệt visa không hoàn lại trong mọi trường hợp.",
  },
  {
    index: 11,
    question: "Tại sao có người được cấp visa 1 năm nhiều lần, có người chỉ 1 tháng?",
    answer: "Do chính sách đối ứng giữa Mỹ và từng quốc gia, không phải do đương đơn.",
  },
  {
    index: 12,
    question: "Cần nộp hồ sơ xin visa trước chuyến đi bao lâu?",
    answer: "Nên nộp ít nhất 2-3 tháng trước ngày dự kiến đi để có thời gian xử lý.",
  },
  {
    index: 13,
    question: "Ai có thể đi cùng buổi phỏng vấn visa?",
    answer: "Chỉ đương đơn được vào. Trẻ em hoặc người cần hỗ trợ có thể được đi cùng phụ huynh/người hỗ trợ.",
  },
  {
    index: 14,
    question: "Thường trú nhân có thể ở ngoài Mỹ bao lâu?",
    answer: "Không nên quá 6 tháng/lần. Nếu quá 1 năm cần xin giấy phép tái nhập cảnh (Re-entry Permit).",
  },
  {
    index: 15,
    question: "Thẻ xanh mất hoặc hết hạn thì làm sao quay lại Mỹ?",
    answer: "Cần xin visa SB-1 hoặc giấy phép tạm (boarding foil) từ Lãnh sự Mỹ.",
  },
  {
    index: 16,
    question: "Mục 214(b) trong Luật di trú là gì?",
    answer: "Là điều khoản từ chối visa khi đương đơn không chứng minh đủ ràng buộc tại Việt Nam.",
  },
  {
    index: 17,
    question: "Mục 212(a) trong Luật di trú là gì?",
    answer: "Là điều khoản từ chối visa dựa trên các căn cứ không đủ điều kiện nhập cảnh (y tế, tội phạm, gian lận...).",
  },
  {
    index: 18,
    question: "Visa bị từ chối (Refused) có thể xin lại không?",
    answer: "Có. Sau khi xem xét lý do từ chối, đương đơn có thể nộp lại hồ sơ mới.",
  },
  {
    index: 19,
    question: "Điều kiện để xin visa Mỹ là gì?",
    answer: "Có mục đích nhập cảnh rõ ràng, tài chính đủ, chứng minh ràng buộc quay lại Việt Nam, và hồ sơ minh bạch.",
  },
  {
    index: 20,
    question: "Muốn phỏng vấn sớm do có người thân ốm nặng thì làm thế nào?",
    answer: "Có thể nộp đơn xin lịch hẹn khẩn cấp kèm bằng chứng y tế.",
  },
  {
    index: 21,
    question: "Có được nói tiếng Việt trong buổi phỏng vấn visa không?",
    answer: "Có. Sẽ có nhân viên phiên dịch hỗ trợ khi cần.",
  },
  {
    index: 22,
    question: "Visa Mỹ trên hộ chiếu cũ còn hiệu lực thì có cần xin lại không?",
    answer: "Không. Có thể mang cả hộ chiếu cũ (có visa) và hộ chiếu mới khi nhập cảnh.",
  },
  {
    index: 23,
    question: "Hộ chiếu chỉ ghi năm sinh có ảnh hưởng xin visa không?",
    answer: "Có thể ảnh hưởng. Cần thống nhất thông tin cá nhân với các giấy tờ khác.",
  },
  {
    index: 24,
    question: "Có thể nhường lịch hẹn phỏng vấn cho người khác không?",
    answer: "Không. Lịch hẹn gắn với thông tin cá nhân của đương đơn.",
  },
  {
    index: 25,
    question: "Người bảo lãnh thất nghiệp có phải nộp bảo trợ tài chính không?",
    answer: "Có. Nếu thu nhập không đủ có thể cần người đồng bảo trợ (joint sponsor).",
  },
  {
    index: 26,
    question: "Hồ sơ K-1 (hôn phu/hôn thê) kết hôn sau khi mở thì thế nào?",
    answer: "Có thể chuyển đổi sang diện vợ chồng IR-1/CR-1.",
  },
  {
    index: 27,
    question: "Visa sinh viên F-1 rời Mỹ hơn 5 tháng do COVID có được quay lại không?",
    answer: "Cần I-20 mới được cập nhật và chứng minh duy trì tiến độ học tập.",
  },
  {
    index: 28,
    question: "Xin phiếu lý lịch tư pháp số 2 ở đâu?",
    answer: "Tại Sở Tư pháp nơi thường trú hoặc Trung tâm Lý lịch tư pháp quốc gia.",
  },
  {
    index: 29,
    question: "Không thể cung cấp một số giấy tờ theo yêu cầu thì làm gì?",
    answer: "Cần giải trình rõ ràng, cung cấp tài liệu thay thế hoặc xác nhận từ cơ quan có thẩm quyền.",
  },
  {
    index: 30,
    question: "Nếu đương đơn chính qua đời thì hồ sơ của người phụ thuộc thế nào?",
    answer: "Có thể bị hủy, nhưng đôi khi vẫn tiếp tục nếu đủ điều kiện nhân đạo.",
  },
  {
    index: 31,
    question: "Người bảo lãnh qua đời thì hồ sơ bảo lãnh có tiếp tục không?",
    answer: "Có thể tiếp tục nếu có người bảo lãnh thay thế (substitute sponsor) và được chấp thuận.",
  },
  {
    index: 32,
    question: "Không in được giấy xác nhận lịch hẹn thì làm sao?",
    answer: "Có thể đăng nhập lại hệ thống để in. Nếu không được, email xác nhận cũng có thể dùng để vào.",
  },
  {
    index: 33,
    question: "Bảo lãnh diện CR1 và IR1 khác nhau thế nào?",
    answer: "CR1 áp dụng cho vợ/chồng kết hôn dưới 2 năm (thẻ xanh có điều kiện). IR1 áp dụng cho kết hôn trên 2 năm (thẻ xanh 10 năm).",
  },
  {
    index: 34,
    question: "Bị mất thẻ xanh thì cần làm gì?",
    answer: "Phải liên hệ Lãnh sự quán Mỹ để xin giấy phép tạm thời quay lại Mỹ (boarding foil).",
  },
];

export default function FAQs() {
  const [showNotification, setShowNotification] = useState(true);
  return (
    <>
      <section className="layout" 
          style={{
          gridTemplateRows: "60px auto 360px"
        }}>
        <div id="ctn-header">
          <ClickSpark 
          sparkColor='#fff'
          sparkSize={15}
          sparkRadius={20}
          sparkCount={8}
          duration={400}>
            <HeroSection>

            </HeroSection>
            
                
          </ClickSpark>
          {showNotification && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20"><Notification
            type="info"
            title="Lưu ý!"
            message="Những thông tin ở đây đã được đơn giản hóa. Nếu có thắc mắc, xin liên hệ để được giải đáp"
            showIcon={false}
            duration={10000}
            onClose={() => setShowNotification(false)}
          /></div>)}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center"></h3>
          <FAQ title="Trung tâm trợ giúp" faqs={sampleFaqs} colorScheme="blue" titleColor="text-primary-3" searchable />
        </div>
        <div id="ctn-footer">
          <Footer></Footer>
        </div>
      </section>
      
    </>
  );
}