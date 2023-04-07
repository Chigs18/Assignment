import React, { useState } from 'react'
import SubMenu from './SubMenu'

const Breakfast = () => {

  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  const show1=()=>{
    setDisplay(!display)
    setDisplay2(false) 
    setDisplay3(false) 
  }
  const show2 = ()=>{
    setDisplay2(!display2)
    setDisplay3(false)
    setDisplay(false) 
  }
  const show3 = ()=>{
    setDisplay3(!display3)
    setDisplay2(false)
    setDisplay(false) 
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">

            <button onClick={show1} className='btn btn-primary'>Gujarti</button>
          </div>
          <div className="col-4">

            <button onClick={show2} className='btn btn-primary'>Punjabi</button>
          </div>
          <div className="col-4">

            <button onClick={show3} className='btn btn-primary'>South Indian</button>
          </div>
        </div>
        <div>
          {display && (
            <>
            
            <SubMenu title="Fafda" price="$30" />
            <SubMenu title="Khaman" price="$50" />
            <SubMenu title="Gathiya" price="$20" />
            </>

          )}
          {display2 && (
            <>
            <SubMenu title="Paratha" price="$30" />
            <SubMenu title="Lassi" price="$50" />
            <SubMenu title="Gathiya" price="$20" />
            </>

          )}
          {display3 && (
            <>
            <SubMenu title="idli" price="$30" />
            <SubMenu title="Dhosa" price="$50" />
            <SubMenu title="Uttapam" price="$20" />
            </>

          )}
        </div>
      </div>
    </>
  )
}

export default Breakfast
