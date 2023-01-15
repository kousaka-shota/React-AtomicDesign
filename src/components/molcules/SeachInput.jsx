import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import styled from "styled-components";

export const SeachInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonwrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonwrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonwrapper = styled.div`
  padding-left: 8px;
`;
