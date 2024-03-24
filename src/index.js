import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const productData = [
  {  
    id : 1,
    title:"Model 2x",
    pathImage:"/p1.jpg",
    price :"400$",
  },
  {
    id : 2,
    title:"4K White",
    pathImage:"/p2.jpg", 
    price :"200$"
  },
  {
    id : 3,
    title:"Honey Bee",
    pathImage:"/p3.jpg",
    price :"400$"
  }
  ,{
    id : 4,
    title:"Blue Ray",
    pathImage:"/p4.jpg",
    price :"400$"
  }
  
]

const Greeting = () => {
  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"5px"}}>Yaung Yin Shoe Shop</h1>
    <div className="card-located">
     {
      productData.map((mappedData)=>{
        return <Product key={mappedData.id} mappedData={mappedData}/>
      })
     }
</div>
</>
  );
};

const Product = (props) =>{
  const {title,pathImage,price} = props.mappedData;
  return(
    <>
<div className="container mt-5 text-center card-style">
  <br />
  <img 
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    src={pathImage}
  />  
  <br />
  <h3 style={{marginTop:"20px"}}>{title}</h3>
  <p>Price : {price}</p>
  <br/>
  <button className="cool-button"
 onClick={() =>buyClick(title,price)}
  >Buy</button>
  <br/>
  <p>Size: 
    <select>
    <option>Select</option>
    <option>39</option>
    <option>40</option>
    |<option>41</option>
    </select>
  </p>

  <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
  />

</div>
    </>
  )
}

//product buy click method
const buyClick =(itemName,itemPrice) =>{
  alert("You Bought this Item "+ itemName + " Price is "+ itemPrice);
}

//input tag function
const handleChange = (e) => {
  console.log(e.target.value);
 };

 const handleMouseOver = () =>{
  console.log("In")
 }
 const handleMouseOut = () =>{
  console.log("Out")
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
