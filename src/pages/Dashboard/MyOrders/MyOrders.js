import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";


const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
        
    })
    
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold">My orders</h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Product Name</th>
              <th>Resale Price</th>
              <th>Phone</th>
              <th>Meeting Location</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map((booking, i) => <tr>
                    <th>{i+1}</th>
                    <td>{booking.BuyerName}</td>
                    <td>{booking.productName}</td>
                    <td>{booking.ResalePrice}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.MeetingLocation}</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
