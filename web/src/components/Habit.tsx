interface HabitsProps {
  completed: number
}

export default function Habit(props: HabitsProps) {
  return (
    <h1 className="text-purple-500 text-2xl">Habit {props.completed}</h1>
  )
}