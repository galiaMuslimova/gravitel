import { useQuery } from "@apollo/client";
import React, { useCallback } from "react";
import { GET_DASHBOARD } from "../../queries";
import { Dashboard } from "../../components/Dashboard";
import { useNavigate } from "react-router-dom";
import {
  StyledDashboardPage,
  StyledDasboardGroup,
  StyledLogout,
} from "./DashboardPage.style";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_DASHBOARD);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("../login");
  }, [navigate]);

  return loading ? (
    <div>loading</div>
  ) : (
    <StyledDashboardPage>
      <StyledDasboardGroup>
        <Dashboard data={data.dashboard.scenarios} title="Сценарии" />
        <Dashboard data={data.dashboard.lists} title="Списки" />
        <Dashboard data={data.dashboard.dialogs} title="Диалоги" />
      </StyledDasboardGroup>
      <StyledLogout onClick={handleLogout} />
    </StyledDashboardPage>
  );
};
