import { css } from '@emotion/react';

export const marginBottom = css`
  margin-bottom: 15px;
`;

export const buttonSubmit = css`
  border-radius: 5px;
  border: 0;
  padding: 10px;
  color: white;
  background-color: rgb(26, 86, 219);
  &:hover {
    color: black;
  }
`;

export const gridStyle = css`
  ${marginBottom}
  display: grid;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
