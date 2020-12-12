import axios from "@utils/axios.util";
import { GetServerSideProps } from "next";

const MainPage = () => {
  return <div>111</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get("https://postman-echo.com/get?test=123");
  // console.log(data);
  return { props: {} };
};

export default MainPage;
