import openai from '../lib/openai'
import Button from '../components/Button'
import { useState } from 'react'
import TextInput from '../components/TextInput'
import HeaderBongo from '../components/HeaderBongo'
import AnswerPreview from '../components/AnswerPreview'
import { MoodOption } from '../types'
import { OPTIONS } from '../constants'
import SelectMood from '../components/SelectMood'

export default function Home() {
  const [input, setInput] = useState<string>('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [mood, setMood] = useState<MoodOption>(OPTIONS[0])

  const answerQuestion = async () => {
    //check if input is empty
    if (!input) return
    try {
      setAnswer('Pensando...')
      //add ask to answer
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `responda de maneira ${mood.value}, ${input}`,
        best_of: 1,
        frequency_penalty: 0,
        logprobs: 0,
        max_tokens: 256,
        presence_penalty: 0,
        stream: false,
        temperature: 0.7,
        top_p: 1,
      })

      if (!response.data.choices[0].text) return
      //remove ask from answer
      setAnswer(response.data.choices[0].text?.replace(input, ''))
    } catch (err) {
      setAnswer('Não entendi sua pergunta, tente novamente')
      console.log(err)
    }
  }

  return (
    <div>
      <SelectMood mood={mood} setMood={setMood} />
      <div className="flex flex-col items-center">
        <div className='sm:w-1/4 sm:mx-0 mx-4 '>
          <HeaderBongo />
          <TextInput
            placeholder='Digite sua pergunta'
            value={input}
            setValue={setInput}
            onEnter={answerQuestion}
          />
          <Button
            text='Enviar'
            action={answerQuestion}
          />
          <AnswerPreview answer={answer} />
        </div>
      </div >
    </div>

  )
}
