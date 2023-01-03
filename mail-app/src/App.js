import './App.css';
import {TbGridDots} from 'react-icons/tb';
import {AiFillMessage} from 'react-icons/ai';
import {IoIosArrowUp, IoIosArrowDown, IoMdMailOpen} from 'react-icons/io';
import {BsPlusCircle} from 'react-icons/bs';
import {CiMail} from 'react-icons/ci';



import SearchResults from 'react-filter-search';

import { useEffect, useState } from 'react';
import inbox from './json/1_inbox .json';
import spam from './json/1_spam.json';



import { MailItem } from './MailItem';

import { MailBody } from './MailBody';

function App() {

  const[selectedMail,setSelectedMail]=useState();

  const[selectedType,setSelectedType]=useState('inbox');


  const[value,setValue] = useState('');


  const[inboxUpdated,setInboxUpdated] = useState([]);
  const[spamUpdated,setSpamUpdated] = useState([]);
  const[deletedUpdated,setDeletedUpdated] = useState([]);

  useEffect(()=>{

     setInboxUpdated(inbox);
     setSpamUpdated(spam);
  },[])


  const handleDeleteMail = (mail)=>{
    setInboxUpdated(mails => mails.filter((curr) => curr.mId !== mail.mId));
    setSpamUpdated(mails => mails.filter((curr) => curr.mId !== mail.mId));

    setDeletedUpdated(oldArray => [...oldArray, mail]);
    setSelectedMail();
  }


  
  return (
    <div className="h-screen overflow-hidden">
      <header className="bg-black text-white flex items-center relative m-0 p-0">
        <div className='px-3 py-3 bg-blue-500 m-0'>
          <TbGridDots  className='text-2xl h-full py-1'/>
        </div>
        <h1 className='py-3 ml-4 text-lg font-light'>Outlook Mail</h1>

        <div className='absolute right-8 text-lg px-2 h-full border-r-1 border-l-1 flex items-center justify-center'>
          <AiFillMessage />
        </div>
      </header>

      <div className=''>

        <div className='grid grid-cols-12 gap-0'>
          <div className='col-span-2'>
            <div className='px-3 py-2 bg-blue-100'>
              <input className='w-full bg-transparent text-sm border-none input-se' type="search" onChange={(e)=>{setValue(e.target.value)}} placeholder="Search Mail and People" />
            </div>
            <div className='bg-gray-200 h-screen py-6'>
              <h1 className='px-3 flex gap-2 items-center mb-2'><IoIosArrowUp /> Folders</h1>
              <ul>
                <li onClick={()=>{setSelectedType('inbox')}} className={`pl-14 pr-6 flex items-center justify-between py-1  text-sm font-normal menu-item  ${selectedType === 'inbox' && 'active-item'} `}>Inbox</li>
                <li onClick={()=>{setSelectedType('spam')}} className={`pl-14 pr-6 flex items-center justify-between py-1  text-sm font-normal menu-item ${selectedType === 'spam' && 'active-item'} `}>Spam</li>
                <li onClick={()=>{setSelectedType('deleted')}} className={`pl-14 pr-6 flex items-center justify-between py-1  text-sm font-normal menu-item  ${selectedType === 'deleted' && 'active-item'} `}>Deleted Items</li>
                <li onClick={()=>{setSelectedType('custom')}} className={`pl-14 pr-6 flex items-center justify-between py-1  text-sm font-normal menu-item ${selectedType === 'custom' && 'active-item'} `}>Custom Folder</li>
              </ul>
            </div>
          </div>
          <div className='col-span-10'>
            <div className='pl-8 py-2 bg-blue-50 flex gap-8 items-center text-sm font-normal'>
              <h1 className='flex items-center gap-2'><BsPlusCircle className='text-blue-600' /> New <span className='border-l-2'><IoIosArrowDown /></span></h1>
              <h1 className='flex items-center gap-2'><IoMdMailOpen className="text-blue-600" /> Mark all as read</h1>
            </div>
            <div className='grid grid-cols-10 gap-0'>
              <div className='col-span-3 h-screen'>
                <div className='h-full border-r-2 py-6'>
                    <div className='px-8 flex gap-4 mb-2'>
                        <p className='text-blue-500 text-lg border-b-2 border-blue-500'>Focused</p>
                        <p className='text-lg'>Other</p>
                    </div>

                    <div className=''>


                      {
                      
                      selectedType === 'inbox' 
                      
                      ?
                        

                      <SearchResults
                        value={value}
                        data={inboxUpdated}
                        renderResults={results => (
                          <div>
                          {results.map((mail)=>{
                              return(
                              <MailItem mail={mail} setSelectedMail={setSelectedMail} />)
                          })}
                          </div>
                         
                        )}
                      />


                      :

                      selectedType === 'spam'

                      ?
                      
                      <SearchResults
                        value={value}
                        data={spamUpdated}
                        renderResults={results => (
                          <div>
                          {results.map((mail)=>{
                              return(
                              <MailItem mail={mail} setSelectedMail={setSelectedMail} />)
                          })}
                          </div>
                         
                        )}
                      />
                    
                      :


                      selectedType === 'deleted'

                      ?


                      <SearchResults
                        value={value}
                        data={deletedUpdated}
                        renderResults={results => (
                          <div>
                          {results.map((mail)=>{
                              return(
                              <MailItem mail={mail} setSelectedMail={setSelectedMail} />)
                          })}
                          </div>
                         
                        )}
                      />
                    
                      :

                      <div></div>
                    
                    
                    }

                      
                    </div>
                </div>
              </div>
              <div className='col-span-7'>

                    {selectedMail ?
                    
                    <MailBody mail={selectedMail} handleDeleteMail={handleDeleteMail} isDelete={selectedType === 'deleted'} />
                    
                    : 
                    
                    
                    <div className='h-full flex justify-center items-center'>
                        <div className='w-1/2 text-center'>
                          <div className='flex justify-center'>
                              <CiMail className='text-5xl text-blue-500' />
                          </div>
                          <h1 className='text-md mb-2'>Select an item to read</h1>
                          <p className='text-xs font-semibold text-blue-500'>Click here to always select the first item in the list</p>
                        </div>
                    </div>
                    
                    
                    }



              </div>
            </div>

          </div>
        </div>

      </div>




    </div>
  );
}






export default App;
