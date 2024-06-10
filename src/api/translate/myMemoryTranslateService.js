const myMemoryTranslateAPI = 'https://api.mymemory.translated.net/get';

export const translateText = async (text, sourceLang, targetLang) => {
  try {
    const response = await fetch(`${myMemoryTranslateAPI}?q=${text}&langpair=${sourceLang}|${targetLang}`, {
      method: 'GET'
    });
    const data = await response.json();
    return data.responseData.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};
