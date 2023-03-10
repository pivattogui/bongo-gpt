import openai from '../lib/openai'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import TextInput from '../components/TextInput'
import HeaderBongo from '../components/HeaderBongo'
import AnswerPreview from '../components/AnswerPreview'
import { OPTIONS } from '../constants'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { translateMoods } from '../helpers/translate'
import SelectMood from '../components/SelectMood'

export default function Home() {
  const { t } = useTranslation('common')

  const router = useRouter();
  const { locale } = router;

  const [input, setInput] = useState<string>('')
  const [answer, setAnswer] = useState<string | null>(null)
  const [mood, setMood] = useState<string>(OPTIONS[0])
  const [prompt, setPrompt] = useState<string>('')

  //fixme: change this in end point
  const answerQuestion = async () => {
    //check if input is empty
    if (!input) return
    try {
      //set answer to thinking
      setAnswer('Pensando...')
      //call openai api
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt + '\n\n' + input,
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
      //add answer to prompt
      setPrompt(prompt + '\n\n' + input + response.data.choices[0].text)
    } catch (err) {
      setAnswer('Não entendi sua pergunta, tente novamente')
      console.log(err)
    }
  }

  useEffect(() => {
    setPrompt(`${t('basePrompt')} ${translateMoods(t, mood)}, `)
    setAnswer(null)
  }, [mood, locale])

  return (
    <div>
      <SelectMood mood={mood} setMood={setMood} />
      <div className="flex flex-col items-center">
        <div className='lg:w-1/4 w-80 sm:mx-0 mx-4 '>
          <HeaderBongo mood={mood} />
          <TextInput
            placeholder={t('input.placeholder')}
            value={input}
            setValue={setInput}
            onEnter={answerQuestion}
          />
          <Button
            text={t('button.text')}
            action={answerQuestion}
          />
          <AnswerPreview answer={answer} />
        </div>
      </div >
    </div>

  )
}
