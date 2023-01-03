import {BiArrowBack, BiArchiveIn, BiFlag} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
import {RiArrowGoForwardLine, RiSpam2Fill} from 'react-icons/ri';


export const MailBody = ({mail, handleDeleteMail, isDelete})=>{

  return(
    <div className='px-6 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <BiArrowBack />

        <div className='flex items-center gap-4'>
          <RiSpam2Fill />

          <BiArchiveIn />

          <BiFlag />


          {!isDelete && 
            <MdDelete onClick={()=>{handleDeleteMail(mail)}} />
          }

        </div>


      </div>

      <div className='px-10'>
        <h1 className='text-xl mb-12'>{mail?.subject}</h1>


        <p className='text-sm text-blue-500 font-semibold mb-4'>{mail?.subcontent}</p>
        <p className='text-sm w-4/5 pb-4 '>{mail?.content}</p>

        <div style={{height : '1px'}} className='w-full  bg-blue-500 my-8'></div>

        <div className='flex gap-6 items-center text-normal text-sm font-semibold'>
          <div className='flex justify-between gap-4 items-center px-6 py-1 border-2 rounded-md '> <RiArrowGoForwardLine className='reply-i text-blue-500' /> Reply</div>
          <div className='flex justify-between gap-4 items-center px-6 py-1 border-2 rounded-md'> <RiArrowGoForwardLine className='text-blue-500' /> Forward</div>

        </div>
      </div>
    </div>
  )
}