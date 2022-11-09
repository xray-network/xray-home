import { useDispatch } from "react-redux"

const Runner = ({ children }) => {
  const dispatch = useDispatch()

  setInterval(() => {
    dispatch({ type: "settings/FETCH_NETWORK_STATE" })
  }, 1 * 60 * 1000)

  setInterval(() => {
    dispatch({ type: "settings/FETCH_PRICES" })
  }, 5 * 60 * 1000)

  return children
}

export default Runner
