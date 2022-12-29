function AnswerPreview({ answer }: { answer: string | null }) {
    if (!answer) return <></>

    return (
        <div className="p-2 mb-2 bg-neutral-700/20 border border-neutral-700 mt-4 rounded-xl overflow-y-scroll max-h-[175px]">
            <span className='text-white text-sm'>{answer}</span>
        </div>
    )
}

export default AnswerPreview