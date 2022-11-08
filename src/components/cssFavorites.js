import styled from "styled-components";

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  section {
    width: 100%;
    overflow: hidden;
    padding: 16px;
  }
  
  .users-container {
    display: flex;
    gap: 12px;
  }
  
  div {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  }
`;
