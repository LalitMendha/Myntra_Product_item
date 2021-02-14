import "./styles.css";

function ImageDetails({ imgSrc, description, price, discount, tax }) {
  return (
    <div className="component">
      <img src={imgSrc} alt="Tshirtimage" />
      <hr />
      <div>{description}</div>
      <div>
        {price}
        <span>
          <strong>{discount}</strong>
        </span>
      </div>
      <div>{tax}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ImageDetails
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRztM5oPaetsaW1jI41g_7pOMfFF5XZDEgJKu6kf414f44kMQVzpJt2H3ULviyydtP4CxK12k&usqp=CAc"
        description="Smart Watch"
        price="Price: 890rs "
        discount="40% OFF"
        tax="Inclusive of all taxes"
      />
    </div>
  );
}
