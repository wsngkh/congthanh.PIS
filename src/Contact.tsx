import Footer from './components/Footer.tsx';
import './main_layout.css';
import HeroSection from './components/HeroForContact.tsx';
import ClickSpark from './components/ui/ClickSpark.tsx';


export default function Contact() {
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
          </ClickSpark>
        </div>
        
        <div id="ctn-footer">
          <Footer></Footer>
        </div>
      </section>
      
    </>
  );
}