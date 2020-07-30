import React, { useEffect, useState } from "react";
import qs from "qs";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const KAKAO_AUTH = gql`
  mutation kakaoAuth($code: String!) {
    kakaoAuth(code: $code)
  }
`;

const KCallback = ({ location }) => {
  const [code, setCode] = useState("");
  const [kakaoAuth, { data }] = useMutation(KAKAO_AUTH, {
    variables: { code: code },
  });

  const onClick = (e) => {
    e.preventDefault();
    console.log(data.kakaoAuth);
  };

  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      setCode(code);
    }
    getToken();
    setTimeout(() => kakaoAuth(), 1000);
  }, []);

  return <button onClick={onClick}>login</button>;
};

export default KCallback;
