import React from 'react'

export default function About() {


  return (
    <div className='container'>
      <div className="py-4">
        <h1>About CRUD</h1>
        <hr />
        <p>CRUD stands for Create, Read, Update, and Delete. In ReactJS everything is aligned in a form of a component and every component has its own way and feature to do so.</p>

        <p>React js is one of the most used JavaScript libraries for frontend development. It’s very important to have the basic functionality of CRUD operations in with react-js. In this article, we don’t use any JSON-server or Axios for performing the CRUD operation. We will use a simple JavaScript object to do so. </p>

        <p>For learning CRUD operation with ReactJS and NodeJS please refer to How to build a basic CRUD app with Node.js and ReactJS?</p>

        <ul>
          <li>Create: Creating a post or adding the table row, adding data into the webpage, or creating content.</li>
          <li>Read: Reading or retrieving data from web-page</li>
          <li>Update: Updating or editing existing content in the webpage</li>
          <li>Deleting: Deleting and removing the entry or content/post from the webpage</li>
        </ul>
      </div>
    </div>
  )
}
