import React, { useState } from 'react'

export const ProcessList = ({dataWord,deleteItem,dataChecked,dataEdit}) => {
  const [teks, setTeks] = useState(dataWord.task)
  // const [Id, setId] = useState(dataWord.id)
  const [Task, setTask] = useState()
  // const [Complete, setComplete] = useState(dataWord.complete);
  const [OnEdit, setOnEdit] = useState(false)
  const handleEdit = () => {
    dataEdit(dataWord.id, teks)
    setOnEdit(false)
  }

  return (
    <div>
      <div className={`space-x-5 flex gap-[80px] bg-white border-[1.4px] border-gray-300 w-[350px] h-[25px] rounded-sm ${dataWord.complete ? 'line-through decoration-red-700 decoration-[3px]' : ""}`}>
        {/* ketika kondisi On Edit true, maka inputan akan muncul & ketika false akan muncul */}

        {OnEdit ? <input value={teks} onChange={(e) => {setTeks(e.target.value)}} className='border rounded-sm text-[black]'/> : <span className='ml-[5px] text-sm checked:text-[red]'>{dataWord.task}</span>}

        <div className='space-x-4 items-center flex absolute lg:left-[705px] left-[260px] mt-1'>
          {/* <input className='cursor-pointer w-4 h-4 border-2 border-gray-500 rounded-sm bg-white checked:bg-white checked:border-green-700' checked={dataWord.complete} type='checkbox' onChange={(e) => {dataChecked(dataWord.complete)}}/> */}
          <input type='checkbox' checked={dataWord.complete} onChange={() => {dataChecked(dataWord.id)}}></input>

          <button className=' text-[orange]' onClick={() => {setOnEdit(!OnEdit)}}> {OnEdit ?  <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
          }</button>
          <button onClick={() => {deleteItem(dataWord.id)}} className=' text-[red]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
