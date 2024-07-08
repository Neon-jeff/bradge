import { useContext } from "react";
import { AppContext } from "../context/context";

const BASE_URL = "https://api.timbu.cloud/products";

const testurl = "";

export const FetchProducts = async () => {
  await fetch(
    "https://api.timbu.cloud/products?organization_id=f2364626b71340e28062010807e1f910&Appid=CY2W9MP8RZAK8QU&Apikey=4677fe53a03f4165a423232c48e20f5420240704184656093813"
  ).then(async (res) => {
    //   if (!res.ok) {
    //     SetError(true);
    //   }
  });
  // .catch(SetError(true));
};
