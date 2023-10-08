import { useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { LOGIN_MUTATION } from "../../queries";
import { useNavigate } from "react-router-dom";
import {
  StyledAuthPage,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./AuthPage.style";

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      username: name,
      password: pass,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      navigate("/");
    },
  });

  const handleLogin = useCallback(() => {
    login().then(() => navigate("../dashboard"));
  }, [login, navigate]);

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  );
  const handleChangePass = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value),
    []
  );

  return (
    <StyledAuthPage>
      <StyledForm>
        <StyledInput placeholder="Логин" onChange={handleChangeName} />
        <StyledInput placeholder="Пароль" onChange={handleChangePass} />
        <StyledButton type="button" onClick={handleLogin}>
          Войти
        </StyledButton>
      </StyledForm>
    </StyledAuthPage>
  );
};
