import React, { useState } from 'react'

import "./App.css"

function Dicitonary() {
const[dic,setdic] = useState("")
const[dif,setdif] = useState("")
const[pos,setpos] = useState("")
const[word,setword] = useState("")
const[syso,setsyso] = useState("")
const[anto,setanto] = useState("")
const [example,setexample] = useState("")


  const submit = (e)=>{
    e.preventDefault()
    const data = async()=>{

    try {
        const abdul =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dic}`)
        const anas = await abdul.json()
        setdif(anas[0].meanings[0].definitions[0].definition)
        setpos(anas[0].meanings[0].partOfSpeech)
        setword(anas[0].word)
        setsyso(anas[0].meanings[0].definitions[0].synonyms[0])
        setanto(anas[0].meanings[0].definitions[0].antonyms[0])
        setexample(anas[0].meanings[0].definitions[0].example)

  
      }

      
    catch (error) {
      alert(`you searched for ${dic} and this word is not found`)
    }

  }
  data()



   
   
  }
  const visit = ()=>{
  }

  return (
    <>
      <form action="" typeof='submit' onSubmit={submit} >
      <div className="parent">
        <h1>Dictionary</h1>
        <div className="input">  <input type="text" placeholder='search'onChange={(e)=>{
          setdic(e.target.value)
        }}/>
        <button type='submit'> search </button></div>
      
      </div>
      

      <div className='child'>
        {

          (!dif)?<></>:<>
            
          <h2>you searched for :{word} </h2>

<h4>parts of speech:{pos}</h4>

<h4>definition:{dif}</h4>
{
  (!example)?<></>:<h4>example:{example}</h4>
}


{
  (!syso)?<></>:<h4>synonym: {syso}</h4>


}

{
  (!anto)?<></>:<h4>antonyms:{anto}</h4>
}

<h3> for more info <a href={`https://en.wiktionary.org/wiki/${dic}`}>visit</a></h3>


          </>

        }
        </div>
      
      </form>

    </>

    
  )
}

export default Dicitonary
