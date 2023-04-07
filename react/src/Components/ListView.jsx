import React, { useEffect, useState } from 'react';
import './ListView.css'

export default function ListView() {

  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');

    setUser(await response.json());
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>List Veiw</h2>
        <div className="row">
          {

            user.map((ele) => {
              return (
                <div className="col-4">

                  <div className="card" style={{width:300, marginTop:'20px'}}>
                    <img className="card-img-top c_img" src={ele.image} alt="Card image" />
                    <div className="card-body">
                      <h4 className="card-title">{ele.price}</h4>
                      <p className="card-text">{ele.title}</p>
                      <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                  </div>

                </div>
              )
            })

          }

        </div>
      </div>

    </>
  )
}
