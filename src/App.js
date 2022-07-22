import { useState } from 'react';
import './App.css';

function App() {
  const [Message, setMessage] = useState("Message type");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  }
  return (
    <div className="container">
      <div className="Row">
        <div className='col-lg-12'>
          <form className='form'>
            <div>
              <label class="form-label">ID</label>
              <input type='text' name='id' className="form-control" />
            </div>
            <div>
              <label class="form-label">Name</label>
              <input type='text' name='id' className="form-control" />
            </div>
            <div>
              <label class="form-label">Message</label>
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
                <div>
                  <label class="form-label">Message Format</label>
                  <input type='text' name='id' className="form-control" />
                </div>
                <div>
                  <label class="form-label">Message Header</label>
                  <input type='text' name='id' className="form-control" />
                </div>
                <div>
                  <label class="form-label">Message</label>
                  <textarea type='text' name='id' className="form-control" />
                </div>
              </>
            }
            {
              Message === "0200" && <>
              <div>
                <label class="form-label">Message Format</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message Header</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea type='text' name='id' className="form-control" />
              </div>

            </>
            }
            {
              Message === "0400" && <>
              <div>
                <label class="form-label">Message Format</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message Header</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea type='text' name='id' className="form-control" />
              </div>
            </>
            }
            {
              Message === "0500" && <>
              <div>
                <label class="form-label">Message Format</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message Header</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Batch No</label>
                <input type='text' name='id' className="form-control" />
              </div>
            </>
            }
            {
              Message === "0800" && <>
              <div>
                <label class="form-label">Message Format</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message Header</label>
                <input type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea type='text' name='id' className="form-control" />
              </div>
              <div>
                <label class="form-label">Batch No</label>
                <input type='text' name='id' className="form-control" />
              </div>
            </>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
