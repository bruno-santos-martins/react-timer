import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return( 
  <HistoryContainer>
    <h1>Meu histórico</h1>
    <HistoryList>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td><Status StatusColor="yellow">Fazendo</Status></td>
          </tr>
          <tr>
            <td>tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td><Status StatusColor="green">concluído</Status></td>
          </tr>
          <tr>
            <td>tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td><Status StatusColor="red">Interrompido</Status></td>
          </tr>
        </tbody>
        
        
      </table>
    </HistoryList>
  </HistoryContainer>
  )
}