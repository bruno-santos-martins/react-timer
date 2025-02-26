import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a Tarefa'),
  minutesAmount: zod.number()
  .min(5,'O mínimo do intervalo precisa ser de 5 min')
  .max(60,'o máximo do intervalo precisa ser de 60 minutos'),
})

export function Home() {
  const { register , handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });
  
  function handle(data: any){
    console.log(data);
  }
  
  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            placeholder="digite o nome do projeto" 
            list="task-suggestion" 
            {...register('task')}
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
            {...register('minutesAmount', {valueAsNumber: true})}
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

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}> <Play size={24}/>Começar</StartCountdownButton>
      </form>
    </HomeContainer>
  )
}