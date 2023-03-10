import Image from "next/image"
import { useEffect, useState } from "react"
import useTranslation from 'next-translate/useTranslation'

function HeaderBongo({ mood }: { mood: string }) {
    const { t } = useTranslation('common')
    const [shake, setShake] = useState<boolean>(false)
    const [catGif, setCatGif] = useState<string>("/bongo-cat.gif")

    const selectBongoCat = () => {
        switch (mood) {
            case "RUDE": {
                setShake(true)
                setCatGif("/rude-bongo-cat.gif")
                break
            }
            case "LOVED": {
                setShake(false)
                setCatGif("/loved-bongo-cat.gif")
                break
            }
            case "PHILOSOPHICAL": {
                setShake(false)
                setCatGif("/philosophical-bongo-cat.gif")
                break
            }
            default: {
                setShake(false)
                setCatGif("/bongo-cat.gif")
                break
            }
        }
    }

    useEffect(() => {
        selectBongoCat()
    }, [mood])

    return (
        <div className="flex flex-col items-center mb-4 text-white sm:mt-8 mt-16" >
            <div className={shake ? "shake" : ""}>
                <Image width={300} height={300} src={catGif} alt="Bongo Cat" />
            </div>
            <span className="text-xs tracking-4 text-white/80">{t('subTitle')}</span>
            <span className=' font-bold text-3xl'>
                Bongo <span className="font-thin text-3xl">GPT</span>
            </span>
        </div >
    )
}

export default HeaderBongo