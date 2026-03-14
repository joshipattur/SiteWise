import { useState, useEffect } from "react";
import { countries } from "./countries";
import { statesByCountry } from "./statesByCountry";

export function useCountryState() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    if (country && statesByCountry[country]) {
      setStateList(statesByCountry[country]);
      setState("");
    } else {
      setStateList([]);
      setState("");
    }
  }, [country]);

  return {
    country,
    setCountry,
    state,
    setState,
    countries,
    stateList,
  };
}
