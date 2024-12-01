import React, { useRef, useState } from 'react'
import { RoundFirstQuestion } from '../../STorage/class7/Roundfirst'

const Quiz = () => {
const [index, setIndex] = useState(0)
const [question, setQuestion] = useState(RoundFirstQuestion[1])

const [lock, setLock] = useState(false)
const [score, setScore] = useState(0)
const [result, setResult] = useState(false)

let option1 = useRef(null)
let option2 = useRef(null)
let option3 = useRef(null)
let option4 = useRef(null)

let option_array =[option1,option2,option3,option4];

const Answer = (e,selectedOptio)=>{
    if(lock === false){
if(question.correctAnswer === selectedOptio){
e.target.classList.add("correct");
setLock(true)
setScore(prev=>prev+1)
}
else{
    e.target.classList.add("wrong");
    setLock(true)
    // option_array[question.correctAnswer-1].current.classList.add("correct")
}
}
}

const next = ()=>{
    if(lock == true){

        if(index == RoundFirstQuestion.length -1){
          setResult(true)
          return 0
        }
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(RoundFirstQuestion[index])
        setLock(false)
        option_array.map((option)=>{
          option.current.classList.remove("wrong")
          option.current.classList.remove("correct")
          return null
        })
      }
}

const reset = ()=>{
    setIndex(0)
    setQuestion(RoundFirstQuestion[1])
    setScore(0)
    setLock(false)
    setResult(false)
  }



  return (
<>
<div className='bg-gradient-to-b from-blue-900 to-blue-500 w-full h-screen pt-9'>
<div className='w-[70%] max-w-md  pb-2 bg-gray-100 m-auto rounded'>
    {result?<></>:<>
<h2 className='text-center text-xl'>Question <span>{index+1}</span></h2>
<p className='text-3xl mt-2  ml-5'>{question.question}</p>
<ul className=' p-5'>
    <li ref={option1} onClick={((e)=>{Answer(e,"option1")})} className='bg-gray-300 p-5 mt-2 rounded-sm'>{question.option1}</li>
    <li ref={option2} onClick={((e)=>{Answer(e,"option2")})} className='bg-gray-300 p-5 mt-2 rounded-sm'>{question.option2}</li>
    <li ref={option3} onClick={((e)=>{Answer(e,"option3")})} className='bg-gray-300 p-5 mt-2 rounded-sm'>{question.option3}</li>
    <li ref={option4} onClick={((e)=>{Answer(e,"option4")})} className='bg-gray-300 p-5 mt-2 rounded-sm'>{question.option4}</li>
   
</ul>
<button onClick={next} className='bg-red-400 p-2 ml-20 max-ml-md rounded  text-xl w-[120px]'>Next</button>
<p className='text-center'>{index+1} out of {RoundFirstQuestion.length}</p>
</>}

{result?<>
<h2 className='text-center text-xl p-5'>Your scored 🎉 {score} out of {RoundFirstQuestion.length}✨</h2>
<button onClick={reset} className='bg-red-400 p-2 ml-20 max-ml-md rounded  text-xl w-[120px]'>Reset</button>
</>:<></>}
</div>

</div>


</>
  )
}

export default Quiz