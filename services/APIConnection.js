import fetch from "isomorphic-unfetch";
import { getJWTfromCookies } from "./authService";
import axios from "axios";

const rootURL = "http://localhost:5000/";

export const getBaederData = async (
  query,
  projection = {},
  skip = 0,
  limit = 0
) => {
  //const url = "https://www.schwimmbadberlin.de/api/";
  const url = rootURL + "api/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, projection, skip, limit })
  };

  const res = await fetch(url, options);
  const data = await res.json();
  //console.log(data);
  return filterSchwimmbadResults(data);
};

export const getBlogData = async (
  query = {},
  projection = {},
  sortAndFilter = false
) => {
  //const url = "https://www.schwimmbadberlin.de/api/";
  const url = rootURL + "api/blog";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, projection })
  };

  const res = await fetch(url, options);
  let data = await res.json();
  data = sortAndFilterBlogResults(data);
  return data;
};

// LOGIN
export const loginUser = async user => {
  const url = rootURL + "api/login/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const verifyJWT = async jwt => {
  const url = rootURL + "api/login/verifyJWT/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: jwt
    },
    body: JSON.stringify({})
  };

  const res = await fetch(url, options);
  const data = await res.json();

  if (data) {
    const { decodedJWT } = data;
    return decodedJWT ? true : false;
  } else return false;

  return true;
};

/////////////////////////////////////////////////////////////////////////
////////// ADMIN DATABASE: //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const postSchwimmbad = async element => {
  const url = rootURL + "api/post/";
  console.log("post schwimmbad with jwt: ", getJWTfromCookies());
  const config = {
    headers: {
      authorization: getJWTfromCookies()
    }
  };
  const res = await axios.post(url, element, config);
  const { data } = res;
  return data;
};

export const deleteSchwimmbad = async element => {
  const url = rootURL + "api/delete/";
  const config = {
    headers: {
      authorization: getJWTfromCookies()
    },
    data: { _id: element._id }
  };
  const res = await axios.delete(url, config);
  const { data } = res;
  return data;
};

export const postBlogpost = async element => {
  const url = rootURL + "api/blog/post/";
  const config = {
    headers: {
      authorization: getJWTfromCookies()
    }
  };
  const res = await axios.post(url, element, config);
  const { data } = res;
  return data;
};

export const deleteBlogpost = async element => {
  const url = rootURL + "api/blog/delete";
  const config = {
    headers: {
      authorization: getJWTfromCookies()
    },
    data: { _id: element._id }
  };
  const res = await axios.delete(url, config);
  const { data } = res;
  return data;
};

export const getSearchResults = async query => {
  const url = rootURL + "api/search/";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  };

  const res = await fetch(url, options);
  const data = await res.json();

  data.baederResults = data.baederResults.filter(el => el.visible);
  data.blogResults = sortAndFilterBlogResults(data.blogResults);

  data.blogResults.filter(el => el.visible);
  return data;
};

function sortAndFilterBlogResults(blogResults) {
  return blogResults
    .filter(record => record.visible)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

function filterSchwimmbadResults(schwimmbadResults) {
  return schwimmbadResults.filter(record => record.visible);
}
