import axios from "axios";

export async function httpGetCall(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
