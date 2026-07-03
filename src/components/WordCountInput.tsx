import { useState } from "react"

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
      <style>{`
        .word-count-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 500px;
          margin: 2rem auto;
          padding: 0 1.5rem;
        }

        .word-count-label {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #e8e8f0 0%, #c8cfe0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin: 0;
        }

        .word-count-input {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.01em;
          text-align: center;
          width: 100%;
          max-width: 250px;
          padding: 1rem 1.25rem;
          border: 2px solid rgba(212, 170, 101, 0.4);
          border-radius: 8px;
          background: rgba(13, 27, 42, 0.6);
          color: #e8e8f0;
          transition: all 0.3s ease;
          outline: none;
        }

        .word-count-input::placeholder {
          color: rgba(200, 207, 224, 0.4);
        }

        .word-count-input:focus {
          border-color: #d4aa65;
          box-shadow: 0 0 12px rgba(212, 170, 101, 0.25);
          background: rgba(13, 27, 42, 0.8);
        }

        .word-count-input:hover:not(:focus) {
          border-color: rgba(212, 170, 101, 0.6);
        }
      `}</style>
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
