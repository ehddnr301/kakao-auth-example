import React from "react";
import styled from "styled-components";

const Login = styled.div``;

const Button = styled.div``;

export default () => {
  return (
    <Login>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_CALLBACK}&response_type=code`}
      >
        <Button>카카오톡</Button>
      </a>
    </Login>
  );
};
