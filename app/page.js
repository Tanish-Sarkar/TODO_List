"use client"
import React, { useState } from 'react'

const page = () => {
  const [Task, setTask] = useState("")
  const [Description, setDescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    // the below line is storing the data 👇
    setmainTask([...mainTask, {Task, Description}])
    setTask("")
    setDescription("")
  }
  
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i)=>{ // t is task which is passed 
      return (
        <li key={i}  className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.Task}</h5>
            <h6 className='text-lg font-medium'>{t.Description}</h6>
          </div>
          <button className='bg-red-400 text-white px-4 py-2 rounded font-bold' onClick={()=>{
            deleteHandler(i)}}>
              Delete
              </button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-neutral-200 p-5 text-5xl font-bold text-center'>Tanish's TODO List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-md' placeholder='Enter Task here' value={Task} onChange={(e)=>{
          setTask(e.target.value)
        }}/>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-md' placeholder='Enter Description here' value={Description} onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded-md m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page
