import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

const CalorieTracker = ({activities}: CalorieTrackerProps) => {
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    const netCaloties = useMemo(() => caloriesConsumed - caloriesBurned,[activities])
  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">
            Resumen de calorias
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay 
                calorie={caloriesConsumed}
                text='Consumidas'
                bg='text-orange-500'
            />

            <CalorieDisplay 
                calorie={caloriesBurned}
                text='Quemadas'
                bg='text-lime-500'
            />

            <CalorieDisplay 
                calorie={netCaloties}
                text='Diferencia'
                bg='text-gray-500'
            />
        </div>
    </>
  )
}

export default CalorieTracker
