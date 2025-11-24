import { useState, useMemo } from "react";
import { countries } from "../data/countries";
import { states } from "../data/states";

export function useCountryState() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const stateList = useMemo(() => {
    if (!country) return [];
    return states[country] || [];
  }, [country]);

  return {
    country,
    setCountry,
    state,
    setState,
    countries,
    stateList
  };
}
