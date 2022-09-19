import "./App.css";
import Tr from "./images/Attention-up-foto.png";
import Alex from "./images/Alex.PNG";

function App() {
  return (
    <section>
      <div>
        <div className="tr">
          <img src={Tr} alt="tr" width="100" />
          <h1>Attention</h1>
          <img src={Tr} alt="tr" width="100" />
        </div>
        <div className="qwe">
          <div className="alex-container">
            <img src={Alex} alt="Alex" width="400" />
          </div>
          <div className="alex-to-container">
            <img src={Tr} alt="Alex" width="50" />
          </div>
        </div>
      </div>
      <div className="g-text">
        <h2>Увага Україна! Увага Київ!</h2>
      </div>
      <p className="text">
        Розшукується небезпечна особистість! ПРОФЕСІОНАЛ! Як тільки стане відомо
        його місцезнаходження відразу телефонуйте NATO, NASA, Interpol!
        Самостійно в контакт не вступати! Хворіє на цукровий діабет, настільки
        солодкий, що ви не зможете встояти. Не торкатися! Не розмовляти! Не
        слухати! Не дихати! Не дивитися! Якщо він говорить до Вас та Ви
        розумієте що ще взмозі втекти, то Ви вже не взмозі, просто
        насолоджуйтесь. Вважайте, що ви вже на фарші. Ми Вас пом'янемо.
      </p>
    </section>
  );
}

export default App;
