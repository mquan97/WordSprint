import { useState } from "react"
// @ts-ignore
import styles from "./WordCountInput.module.css?inline"

export default function WordCountInput() {
  const [wordCount, setWordCount] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (wordCount.trim()) {
      console.log(parseInt(wordCount, 10))
      setWordCount("")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d+$/.test(value)) {
      setWordCount(value)
    }
  }

  return (
    <>
      <style>{styles}</style>
      <form onSubmit={handleSubmit} className="word-count-form">
        <label htmlFor="wordCountInput" className="word-count-label">
          How many words did you write today?
        </label>
        <input
          id="wordCountInput"
          type="text"
          inputMode="numeric"
          value={wordCount}
          onChange={handleInputChange}
          placeholder="0"
          className="word-count-input"
          autoComplete="off"
        />
      </form>
    </>
  )
}
