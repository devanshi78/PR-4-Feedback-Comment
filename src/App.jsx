import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const App = () => {
  const [star, setStar] = useState(0);
  const [state, setState] = useState(0);
  const [list, setList] = useState([]);
  const [feedback, setFeedback] = useState({});

  const handleOver = (index) => {
    setState(index + 1);
  }
 
  const handleLeave = () => {
    setState(0);
  }

  const handleClick = (index) => {
    setStar(index + 1);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value, star: star });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list, { ...feedback, star }];
    setList(newList);
    setStar(0);
    setFeedback({})
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div>
              <h2 className='mb-2 title'>Feedback</h2>
              {
                [...Array(5)].map((_, index) => {
                  return (
                    <FaStar id='stardesign' key={index} color={star > index || state > index ? 'gold' : 'gray'} onMouseOver={() => handleOver(index)} onMouseLeave={handleLeave} onClick={() => handleClick(index)} />
                  )
                })
              }
            </div>
            <div>
              <textarea className='form-control' rows={"5"} name="message" id="message" value={feedback.message || ""} onChange={handleChange}></textarea>
            </div>
            <button type='submit' className='btn'>Submit</button>
          </form>
        </div>
      </div>
      <div className='row justify-content-center'>
        {
          list.map((list, index) => {
            return (
              <div className='col-4'>
                <div className='feedback-card' key={index}>
                  <div className='mb-2'>
                    <h4 className='title'>Ratings : </h4>
                    {[...Array(5)].map((_, index) => {
                      return (
                        <FaStar id='stardesign' key={index} color={index < list.star ? 'gold' : 'gray'} />
                      )
                    })}
                  </div>
                  <h4 className='title'>Comment : </h4>
                  <p>{list.message}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
