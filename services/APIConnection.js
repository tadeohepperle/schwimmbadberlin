import fetch from "isomorphic-unfetch";

export const getData = async query => {
  const url = "https://www.schwimmbadberlin.de/api/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return { data };
};
