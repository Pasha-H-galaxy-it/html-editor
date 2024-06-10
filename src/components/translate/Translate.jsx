import { useState } from "react";
import { translateText } from "../../api/translate/myMemoryTranslateService";

const TranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");

  const handleTranslate = async () => {
    try {
      const result = await translateText(inputText, sourceLang, targetLang);
      setTranslatedText(result);
    } catch (error) {
      console.error("Translation failed", error);
    }
  };

  return (
    <>
      <div className="select-languages">
        <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="uk">Ukrainian</option>
          {/* Add more languages as needed */}
        </select>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="uk">Ukrainian</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <div className="translate-wrap">
        <div className="input-translate-wrap">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
          />
        </div>
        <textarea
          className="output-translate"
          value={translatedText}
          readOnly
          placeholder="Output text"
        />
      </div>
      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>
    </>
  );
};

export default TranslateComponent;