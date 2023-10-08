import styled from "styled-components";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";

export const StyledDashboardPage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px;
`;

export const StyledDasboardGroup = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledLogout = styled(LogoutIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
