import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-05-26&sortBy=publishedAt&apiKey=5ccde40c055844f687f0db04ef169034`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
