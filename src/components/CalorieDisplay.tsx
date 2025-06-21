
type CalorieDisplayProps = {
    calorie: number,
    text: string,
    bg: string
}

const CalorieDisplay = ({calorie, text, bg}: CalorieDisplayProps) => {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className={`font-black text-6xl ${bg}`}>
            {calorie}
        </span>
        {text}
    </p>
  )
}

export default CalorieDisplay
