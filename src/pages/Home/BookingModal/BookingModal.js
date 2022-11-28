import React from "react";

const BookingModal = ({eachProduct, setEachProduct}) => {
    
    const {name, original_price, resale_price} = eachProduct;

    const bookingProduct = event => {
      event.preventDefault();
      const form = event.target;
      const resale_price = form.resale_price.value;
      const YourName = form.YourName.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const location = form.location.value;

      const booking = {
        productName: name,
        ResalePrice: resale_price,
        BuyerName: YourName,
        email,
        phone,
        MeetingLocation: location
      }

      console.log(booking)
      setEachProduct(null);

    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={bookingProduct} className="grid grid-cols-1 gap-2 mt-7">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
            <input type="text" defaultValue={original_price} className="input input-bordered w-full" disabled/>

            <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
            <input name="resale_price" type="text" defaultValue={resale_price} className="input input-bordered w-full"/>

            <input name="YourName" type="text" placeholder="Your Name" className="input input-bordered w-full" />

            <input name="email" type="email" placeholder="Email address" className="input input-bordered w-full" />

            <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full" />

            <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered w-full" /> 
            <br />

            <input type="submit" className="btn btn-warning" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
