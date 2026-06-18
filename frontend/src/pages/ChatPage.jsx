import toast from "react-hot-toast"

const ChatPage = () => {
  return (
    <button onClick={() => toast.success('Logged in')}>ChatPage</button>
  )
}

export default ChatPage