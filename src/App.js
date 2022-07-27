import { useState } from 'react';
import './App.css';

function App() {
  const [Message, setMessage] = useState("Message type");
  const [Format, setFormat] = useState("Message Format");
  const [Header, setHeader] = useState("Message Header Format");
  const [Field, setField] = useState("Message Field");
  const [Decline, setDecline] = useState("isDecline");
  const [present, setPresent] = useState("orgShould Present");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  }
  const handleOnChange1 = (e) => {
    setFormat(e.target.value);
  }
  const handleOnChange2 = (e) => {
    setHeader(e.target.value);
  }
  const handleOnChange3 = (e) => {
    setField(e.target.value);
  }
  const handleOnChange4 = (e) => {
    setDecline(e.target.value);
  }
  const handleOnChange5 = (e) => {
    setPresent(e.target.value);
  }
  return (
    <>
    <h1>Form with validation</h1>
    <div className="container">
      <div className="Row">
        <div className='col-lg-4'>
          <form className='form'>
            <div>
              <label className="form-label">ID</label>
              <input type='text' name='id' className="form-control" />
            </div>
            <div>
              <label className="form-label">Name</label>
              <input type='text' name='id' className="form-control" />
            </div>
            <div>
              <label className="form-label">Message</label>
              <textarea type='text' name='id' className="form-control" />
            </div>
            <div className='message-type'>
              <select className='form-select' value={Message} onChange={handleOnChange}>
                <option value="Message type">Message type</option>
                <option value="0100">0100</option>
                <option value="0200">0200</option>
                <option value="0400">0400</option>
                <option value="0500">0500</option>
                <option value="0800">0800</option>
              </select>
            </div>
            {
              Message === "0100" && <>
                <div className='message-type'>
                  <select className='form-select' value={Format} onChange={handleOnChange1}>
                    <option value="Message type">Message Format</option>
                    <option value="0100">Json</option>
                    <option value="0200">ISO</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Header} onChange={handleOnChange2}>
                    <option value="Message type">Message Header Format</option>
                    <option value="0100">0BN</option>
                    <option value="0200">2BN</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Field} onChange={handleOnChange3}>
                    <option value="Message type">Message Field</option>
                    <option value="0100">1</option>
                    <option value="0200">2</option>
                    <option value="0200">3</option>
                    <option value="0200">4</option>
                    <option value="0200">5</option>
                    <option value="0200">6</option>
                    <option value="0200">7</option>
                    <option value="0200">8</option>
                    <option value="0200">9</option>
                    <option value="0200">10</option>
                    <option value="0200">11</option>
                    <option value="0200">12</option>
                    <option value="0200">13</option>
                    <option value="0200">14</option>
                    <option value="0200">15</option>
                    <option value="0200">16</option>
                    <option value="0200">17</option>
                    <option value="0200">18</option>
                    <option value="0200">19</option>
                    <option value="0200">20</option>
                  </select>
                </div>
              </>
            }
            {
              Message === "0200" && <>
                <div className='message-type'>
                  <select className='form-select' value={Format} onChange={handleOnChange1}>
                    <option value="Message type">Message Format</option>
                    <option value="0100">Json</option>
                    <option value="0200">ISO</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Header} onChange={handleOnChange2}>
                    <option value="Message type">Message Header Format</option>
                    <option value="0100">0BN</option>
                    <option value="0200">2BN</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Field} onChange={handleOnChange3}>
                    <option value="Message type">Message Field</option>
                    <option value="0100">1</option>
                    <option value="0200">2</option>
                    <option value="0200">3</option>
                    <option value="0200">4</option>
                    <option value="0200">5</option>
                    <option value="0200">6</option>
                    <option value="0200">7</option>
                    <option value="0200">8</option>
                    <option value="0200">9</option>
                    <option value="0200">10</option>
                    <option value="0200">11</option>
                    <option value="0200">12</option>
                    <option value="0200">13</option>
                    <option value="0200">14</option>
                    <option value="0200">15</option>
                    <option value="0200">16</option>
                    <option value="0200">17</option>
                    <option value="0200">18</option>
                    <option value="0200">19</option>
                    <option value="0200">20</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Decline} onChange={handleOnChange4}>
                    <option value="Message type">isDecline</option>
                    <option value="0100">true</option>
                    <option value="0200">false</option>
                  </select>
                </div>
              </>
            }
            {
              Message === "0400" && <>
                <div className='message-type'>
                  <select className='form-select' value={Format} onChange={handleOnChange1}>
                    <option value="Message type">Message Format</option>
                    <option value="0100">Json</option>
                    <option value="0200">ISO</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Header} onChange={handleOnChange2}>
                    <option value="Message type">Message Header Format</option>
                    <option value="0100">0BN</option>
                    <option value="0200">2BN</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Field} onChange={handleOnChange3}>
                    <option value="Message type">Message Field</option>
                    <option value="0100">1</option>
                    <option value="0200">2</option>
                    <option value="0200">3</option>
                    <option value="0200">4</option>
                    <option value="0200">5</option>
                    <option value="0200">6</option>
                    <option value="0200">7</option>
                    <option value="0200">8</option>
                    <option value="0200">9</option>
                    <option value="0200">10</option>
                    <option value="0200">11</option>
                    <option value="0200">12</option>
                    <option value="0200">13</option>
                    <option value="0200">14</option>
                    <option value="0200">15</option>
                    <option value="0200">16</option>
                    <option value="0200">17</option>
                    <option value="0200">18</option>
                    <option value="0200">19</option>
                    <option value="0200">20</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={present} onChange={handleOnChange5}>
                    <option value="Message type">orgShould Present</option>
                    <option value="0100">true</option>
                    <option value="0200">false</option>
                  </select>
                </div>
              </>
            }
            {
              Message === "0500" && <>
                <div className='message-type'>
                  <select className='form-select' value={Format} onChange={handleOnChange1}>
                    <option value="Message type">Message Format</option>
                    <option value="0100">Json</option>
                    <option value="0200">ISO</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Header} onChange={handleOnChange2}>
                    <option value="Message type">Message Header Format</option>
                    <option value="0100">0BN</option>
                    <option value="0200">2BN</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Field} onChange={handleOnChange3}>
                    <option value="Message type">Message Field</option>
                    <option value="0100">1</option>
                    <option value="0200">2</option>
                    <option value="0200">3</option>
                    <option value="0200">4</option>
                    <option value="0200">5</option>
                    <option value="0200">6</option>
                    <option value="0200">7</option>
                    <option value="0200">8</option>
                    <option value="0200">9</option>
                    <option value="0200">10</option>
                    <option value="0200">11</option>
                    <option value="0200">12</option>
                    <option value="0200">13</option>
                    <option value="0200">14</option>
                    <option value="0200">15</option>
                    <option value="0200">16</option>
                    <option value="0200">17</option>
                    <option value="0200">18</option>
                    <option value="0200">19</option>
                    <option value="0200">20</option>
                  </select>
                </div>
                <div className='message-type'>
                  <label class="form-label">Batch No</label>
                  <input type='number' name='id' className="form-control" />
                </div>
              </>
            }
            {
              Message === "0800" && <>
                <div className='message-type'>
                  <select className='form-select' value={Format} onChange={handleOnChange1}>
                    <option value="Message type">Message Format</option>
                    <option value="0100">Json</option>
                    <option value="0200">ISO</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Header} onChange={handleOnChange2}>
                    <option value="Message type">Message Header Format</option>
                    <option value="0100">0BN</option>
                    <option value="0200">2BN</option>
                  </select>
                </div>
                <div className='message-type'>
                  <select className='form-select' value={Field} onChange={handleOnChange3}>
                    <option value="Message type">Message Field</option>
                    <option value="0100">1</option>
                    <option value="0200">2</option>
                    <option value="0200">3</option>
                    <option value="0200">4</option>
                    <option value="0200">5</option>
                    <option value="0200">6</option>
                    <option value="0200">7</option>
                    <option value="0200">8</option>
                    <option value="0200">9</option>
                    <option value="0200">10</option>
                    <option value="0200">11</option>
                    <option value="0200">12</option>
                    <option value="0200">13</option>
                    <option value="0200">14</option>
                    <option value="0200">15</option>
                    <option value="0200">16</option>
                    <option value="0200">17</option>
                    <option value="0200">18</option>
                    <option value="0200">19</option>
                    <option value="0200">20</option>
                  </select>
                </div>
              </>
            }
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
