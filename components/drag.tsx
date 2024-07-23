"use client"
import  { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,

} from 'react-beautiful-dnd';
type data ={
  id: number,
  title: string,
  components:{
      id: number,
      name: string
  }[]  
  
}
const cardsData:data[] = [
  {
    id: 0,
    title: "Component Librarys",
    components: [
      {
        id: 100,
        name: "material ui"
      },
      {
        id: 200,
        name: "bootstrap"
      },
    ]
  },
  {
    id: 1,
    title: "Javascript Librarys",
    components: [
      {
        id: 300,
        name: "react"
      },
      {
        id: 400,
        name: "node"
      },
    ]
  },
  {
    id: 2,
    title: "react helping Librarys",
    components: [
      {
        id: 500,
        name: "redux"
      },
      {
        id: 600,
        name: "recoil"
      },
    ]
  }


]
const Drag: React.FC = () => {
  const [data,setData] = useState<data[]|[]>([])
  useEffect(()=>{
    setData(cardsData)
  },[])
 
  return (
    <DragDropContext  onDragEnd={(e:DropResult)=>{
      console.log(e)
    }}>
       <div className='w-full flex justify-between my-10 mx-5 gap-5'>
    {
      data.map((data,index)=>{
        return (
        <Droppable  key={data.id} droppableId={`droppable${data.id}`}>
          {
            (provided)=>(
              <div className='  border-2  border-dashed w-1/3 select-none' 
             
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
              <h2>{data.title}</h2>
              {
                data.components.map((component,index)=>{
                   return (<Draggable key={component.id} draggableId={`draggable${component.id}`} index={index}>
                    {(provided1)=>(
                     <div className=' m-4 p-4 border border-gray-300'
                     {...provided1.dragHandleProps}
                     {...provided1.draggableProps}
                     ref={provided1.innerRef}
                     >
                      {component.name}
                    </div>
                    )}
                   </Draggable>
                   
                   ) 
                })
              }
              {provided.placeholder}
               </div>
            )
          }
         
        
        </Droppable>
      )
      })
    }
   </div>
    </DragDropContext>
  
  );
};
export default Drag