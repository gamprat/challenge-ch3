import React, { useState } from 'react'
import { ProcessList } from '../assets/component/processList/ProcessList';

export const SamplePage = () => {
  const [newItem, setNewItem] = useState("")
  const [baris, setBaris] = useState("all")
  const [search, setSearch] = useState("")

  const [dataWord, setDataWord] = useState([
    {
      id: 1,
      task: "Nyuci mobil",
      complete: false,
    },
    {
      id: 2,
      task: "Memberi makan kucing",
      complete: true,
    },
    {
      id: 3,
      task: "Olahraga 10 menit",
      complete: false,
    },
    {
      id: 4,
      task: "Sarapan sereal",
      complete: true,
    },
    {
      id: 5,
      task: "Belanja harian",
      complete: false,
    },
    // {
    //   id: 6,
    //   task: "Ngeprint tugas",
    //   complete: false,
    // },
    // {
    //   id: 7,
    //   task: "Bayar tagihan bulanan",
    //   complete: false,
    // },
    // {
    //   id: 8,
    //   task: "Berangkat kuliah",
    //   complete: false,
    // },
    // {
    //   id: 9,
    //   task: "Les bahasa Inggris",
    //   complete: false,
    // },
    // {
    //   id: 10,
    //   task: "Ke rumah Sabrina",
    //   complete: false,
    // },
  ]);

  // const handleAdd = () => {
  //   let newTodoItem = {
  //     item:newItem
  //   }
  //   let updatedItem = [...allTodos]
  //   updatedItem.push(newTodoItem)
  //   return <ProcessList setTodos={updatedItem}></ProcessList>
  // }

  const handleAdd = (newItem) => {
    setDataWord([...dataWord, {id:Date.now(), task:newItem, complete:false}])
  }

  const deleteItem = (id) => {
    const newData = dataWord.filter((isi) => isi.id !== id)
    setDataWord(newData)
  }

  const deleteAllItem = () => {
    setDataWord([])
  }

  const deleteDoneItem = () => {
     const newData = dataWord.filter((value) => !value.complete);
     setDataWord(newData);
  }

  const dataChecked = (id) => {
    const dataCek = dataWord.map((value) => {
      if(value.id === id){
        return {...value, complete:!value.complete}
      }
      return value
    })
    setDataWord(dataCek)
  }

  const dataEdit = (id, isi, edit = false) => {
    const dataCek = dataWord.map((value) => {
      if (value.id === id) {
        return { ...value, task:isi, edit };
      }
      return value;
    });
    setDataWord(dataCek);
  }

  const dataAll = () => {
    let dataSemua = dataWord
    if (baris === "todo") {
      dataSemua = dataSemua.filter((tugas) => !tugas.complete)
    } else if (baris === "done") {
      dataSemua = dataSemua.filter((tugas) => tugas.complete)
    }
    if (search) {
      dataSemua = dataSemua.filter((tugas) => tugas.task.toLowerCase().includes(search.toLowerCase()))
    }
    return dataSemua
  }

  const dataAllSend = dataAll() 

  const processList = () => {
    return dataAllSend.map((value) => {
        return <ProcessList dataWord={value} deleteItem={deleteItem} key={dataWord.id} dataChecked={dataChecked} dataEdit={dataEdit}></ProcessList>
    })
  }

  return (
    <div className=" bg-gray-200 flex flex-col justify-center items-center h-screen space-y-2">
      <div className="p-[30px] bg-[white] justify-center items-center space-y-2 ">
        <div className="font-medium mt-2 text-[20px] text-center">
          TodoSearch
        </div>
        <div className="flex flex-col w-[350px] h-[85px] border-[1.4px] border-gray-300 gap-2">
          <div className="px-3 pt-[0.75rem] flex flex-row items-center">
          <div className='bg-[#24A3B6] px-[2.5px] py-[2.5px] items-center rounded-l-sm text-[white]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Todo"
              className="text-sm rounded-sm w-[300px] pl-2 border-[1.2px] border-gray-300"
          ></input>
          </div>
          <div className="flex flex-row px-3 pb-[0.75rem]">
            <button value={search} onChange={(e) => setSearch(e.target.value)} className="w-[320px] py-[5px] bg-[#24A3B6] rounded-sm text-[10px] text-[white] items-center flex justify-center">
              Search
            </button>
          </div>
        </div>
        <div className="font-medium text-[20px] text-center">TodoList</div>
        <div className="flex flex-row gap-4 pb-3 justify-center">
          <button onClick={() => setBaris("all")} className="w-[106px] py-[5px] bg-[#24A3B6] rounded-sm text-[10px] text-[white] items-center flex justify-center">
            All
          </button>
          <button onClick={() => setBaris("done")} className="w-[106px] py-[5px] bg-[#24A3B6] rounded-sm text-[10px] text-[white] items-center flex justify-center">
            Done
          </button>
          <button onClick={() => setBaris("todo")} className="w-[106px] py-[5px] bg-[#24A3B6] rounded-sm text-[10px] text-[white] items-center flex justify-center">
            To do
          </button>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-[#24A3B6] px-[4px] py-[4px] items-center rounded-l-sm text-[white]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>
          </div>
          <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='Add your activity' className='text-sm rounded-sm w-[215px] py-[2px] pl-2 border-[1.2px] border-gray-300 mr-[9px]'></input>
          <button onClick={() => handleAdd(newItem)} className="w-[103px] py-[5px] bg-[#24A3B6] rounded-sm text-[10px] text-[white] items-center flex justify-center">Submit</button>
        </div>
        {processList()}
        <div className="flex flex-row gap-4 pt-3 pb-2 justify-center">
          <button onClick={() => deleteDoneItem()} className="w-[167px] py-[5px] bg-[#D83648] rounded-sm text-[10px] text-[white] items-center flex justify-center">
            Delete Done Tasks
          </button>
          <button onClick={() => deleteAllItem()} className="w-[167px] py-[5px] bg-[#D83648] rounded-sm text-[10px] text-[white] items-center flex justify-center">
            Delete All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
