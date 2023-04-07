
import React from 'react'

export default function SubMenu({title,price}) {
  return (
    <>
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{title}</h5>
                
                <a href="#" className="btn btn-primary">{price}</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
