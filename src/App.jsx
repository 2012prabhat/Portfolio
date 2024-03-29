import "../src/css/main.css"
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import AOS from "aos";

export function showErrorCard(errMessage,status){
  if(document.querySelector('.errCard')) return;
   let errCard = document.createElement('div');
   errCard.setAttribute('class',`errCard ${status}`);
   errCard.innerText = errMessage;
   document.querySelector('body').appendChild(errCard);
   setTimeout(()=>{
    document.querySelector('.errCard').remove()
   },2000)
}
function App() {

  AOS.init({
    offset: 110,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  })
  return (
    <div class="wrapper">
      <Homepage/>
      <Skill/>
      <Experience/>
      <Projects/>
      <ContactUs/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
