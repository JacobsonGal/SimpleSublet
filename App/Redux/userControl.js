import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./actions/userDataActions";

export default function Guest() {
  const [isGuest, setGuest] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.airTableData.userData);
  if (userData === "unauthorized") setGuest(true);
  return isGuest;
}
