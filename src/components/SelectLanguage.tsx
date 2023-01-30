import { useRouter } from "next/router";

function SelectLanguage() {
    const router = useRouter();
    const { locale } = router;

    return (
        <div className="solid flex gap-2">
            <div className="relative w-10 cursor-pointer" onClick={() => router.push(router.asPath, router.asPath, {locale: 'pt-BR'})}>
            <img src="pt-BR.png" width={35} height={30} />
                {locale == 'pt-BR' ?
                    <div className="absolute top-5 right-1 w-[10px] h-[10px] flex items-center justify-center rounded-full bg-rose-500" />
                    :
                    <></>
                }
            </div>
            <div className="relative w-10 cursor-pointer" onClick={() => router.push(router.asPath, router.asPath, { locale:'en-US' })}>
                <img src="en-US.png" width={35} height={30} />
                {locale == 'en-US' ?
                    <div className="absolute top-5 right-1 w-[10px] h-[10px] flex items-center justify-center rounded-full bg-rose-500" />
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default SelectLanguage