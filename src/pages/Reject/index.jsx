import React from "react";
import Layout from "../../Layout";
import FadeLoader from "../../atoms/FadeLoader.jsx";
export default function Test1() {
  return (
    <Layout>
      <div>
        <h1>로그인을 해주세요</h1>
        <FadeLoader />
      </div>
      ;
    </Layout>
  );
}
