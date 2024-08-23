import Counter from "./components/normalComponent/Counter"
import './App.css'
import CounterRedux from "./components/reduxComponent/CounterRedux"
import Todo from "./components/reduxComponent/Todo"
import UserRedux from "./components/reduxComponent/UserRedux"

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterRedux /> */}
      {/* <Todo /> */}
      <UserRedux />
    </>
  )
}

export default App