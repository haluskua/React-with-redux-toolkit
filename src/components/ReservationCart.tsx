import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCartTypes {
  name: string;
  index: number;
}
export default function ReservationCart({ name, index }: ReservationCartTypes) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}