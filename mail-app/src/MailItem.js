


export const MailItem = ({mail, setSelectedMail})=>{

  return(
    <div onClick={()=>{setSelectedMail(mail)}} className={`pl-8 pr-2 py-2 mb-1 border-l-2 ${mail.unread && 'border-blue-500'} w-full`}>
        <p className='text-md w-3/5 text-ellipsis  whitespace-nowrap overflow-hidden mb-1'>{mail.subject}</p>
        <div className='text-xs font-semibold text-blue-500 w-full flex justify-between items-center mb-1'>
          <p className='w-4/5 text-ellipsis  whitespace-nowrap overflow-hidden'>{mail.subcontent}</p>
          <p>12:26</p>
        </div>
        <p className='text-xs font-normal text-ellipsis w-4/5 whitespace-nowrap overflow-hidden'>{mail.content}</p>
    </div>  
  )
}