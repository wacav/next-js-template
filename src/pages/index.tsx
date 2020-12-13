import { useRootStore } from "@components/common/StoreContext";
import axios from "@utils/axios.util";
import { observer } from "mobx-react";
import { GetServerSideProps } from "next";

const MainPage = () => {
  const root = useRootStore();
  return <div>{root.member?.name}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get("https://postman-echo.com/get?test=123");
  // console.log(data);
  return { props: {} };
};

export default observer(MainPage);
