import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    console.log("@@@real request: ", requestUrl);
    const response = await fetch(requestUrl, mergedOptions);
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
