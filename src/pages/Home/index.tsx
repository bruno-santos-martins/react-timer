import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useState } from "react";
//import { useForm } from "react-hook-form";

export function Home() {

  const [ task, setTask] = useState('');


  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" 
            placeholder="digite o nome do projeto" 
            list="task-suggestion" 
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggestion">
            <option value="projeto 1"/>
            <option value="projeto 2"/>
            <option value="projeto 3"/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" 
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={0}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={!task}> <Play size={24}/>Começar</StartCountdownButton>
      </form>
    </HomeContainer>
  )
}