import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendbtn from "./assets/send.svg"
import userIcon from "./assets/user-icon.png"
import gptLogoimg from "./assets/chatgptLogo.svg"

function App() {
  return (
    <div className="App">
      <div className="sidebar">

        <div className="upperSide">

          <div className="uppersideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midbtn">
            <img src={addbtn} alt="new chat" className="addbtn" />
            New Chat
          </button>

          <div className="uppersideBottom">

            <button className="query">
              <img src={msgicon} alt="Query" />
              What is Programming?
            </button>

            <button className="query">
              <img src={msgicon} alt="Query" />
              How to Use API
            </button>

          </div>
        </div>





        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemsimg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemsimg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listItemsimg" />
            Upgrade to Pro
          </div>
        </div>
      </div>


      <div className="main">
        <div className="chats">
        <div className="chat">
          <img class="chatimg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo, blanditiis quia velit sapiente perspiciatis fugiat repellendus voluptas odit totam, possimus alias omnis. Sequi veniam delectus in suscipit corporis consequuntur!</p>
        </div>
        <div className="chat bot">
          <img class="chatimg" src={gptLogoimg} alt="" /><p className="txt">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, illum reprehenderit! Eligendi nemo vel tempora, voluptate amet ex veniam rem! class="chatimg"ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo, blanditiis quia velit sapiente perspiciatis fugiat repellendus voluptas odit totam, possimus alias omnis. Sequi veniam delectus in suscipit corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus sit ducimus optio aliquid quo, cumque voluptatem laborum sapiente culpa beatae obcaecati! Ea dolor architecto porro eum nemo fugit totam qui corrupti laboriosam aspernatur, dolore molestias fugiat temporibus voluptas blanditiis. Perspiciatis possimus ad voluptatem officiis in aliquid veniam illum et!consequuntur!</p>
        </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" /><button className="send"><img src={sendbtn} alt="send" /></button>
          </div>
          <p>ChatGpt Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, libero?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
