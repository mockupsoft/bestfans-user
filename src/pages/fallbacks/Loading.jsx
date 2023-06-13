import loadingGif from "../../assets/img/loading.gif";

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center text-[72px] text-blue-600 font-bold'>
      <img src={loadingGif} alt="" />
    </div>
  )
}

export default Loading