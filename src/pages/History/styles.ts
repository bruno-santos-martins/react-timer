import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

`;

export const HistoryList = styled.div`

  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(p) => p.theme['gray-100']};
      font-size: 0%.875;
      
      &:first-child{
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }

      line-height: 1.6;
    }

    td {

      border-top: 2px solid ${(props) => props.theme['gray-800']};

      text-align: left;
      background-color: ${(p) => p.theme['gray-700']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first {
        width: 50%;
      }

      &:first-child{
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-bottom-right-radius: 8px;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green:  'green-500',
  red:    'red-500',
}
interface StatusProps {
  StatusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap:0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 99999px;
    background-color:  ${(p) => p.theme[STATUS_COLORS[p.StatusColor]]};

  }
`;