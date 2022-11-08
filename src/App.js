import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!


    //vowel functionality recognizes first letter is a vowel and adds -way to the end
      //create a function called vowel
        //takes a string that has a vowel as index[0]
          //will concat -way to the end of the string
      //return a string that has way attached to the end


      if (eachWord[0] === vowelsArray[0]){
        return eachWord.concat("way")
      }


    //qu-functionality sees "qu" in the first syllable amd moves all the consonants to the end and adds "ay"
      //create a function called quFirstSyllable
        //use search built in method to find "qu" in the word
          //use search to slice to remove first part of word
          //create a variable to take into account of the index
          // add to the add of the word with -ay


          // eachWord.indexOf(vowelsArray[1])

          else if(eachWord.search("qu") > -1 && eachWord.search("qu") < (eachWord.length/2)){
              let sliced = eachWord.slice(0, eachWord.search("qu")+2)
              let endSlice = eachWord.slice(eachWord.search("qu")+2, eachWord.length)
              return endSlice.concat(sliced + "ay")
          }

      
    //y-functionality sees "y" as the only vowel and moves all the consonants to the end with ay
      //create a function that's called yVowel
        //if no vowels except "y" appear then slice all the previous consonants to the end with "ay"
        //eachWord.includes("a")===0 repeat for all vowels except "y"

          else if (eachWord.includes("a","e","i","o","u") === false && eachWord.search("y") > 0)
          { let sliced = eachWord.slice(0, eachWord.search("y"))
          let endSlice = eachWord.slice(eachWord.search("y"), eachWord.length)
          return endSlice.concat(sliced + "ay")}
          

    //consonant functionality alot of consonants in the beginning.
        //create a function of consonant
          //find index of first vowel
           //slice from the beginning of the vowel
            //add all of the slice to the end with ay

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })
    
    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App