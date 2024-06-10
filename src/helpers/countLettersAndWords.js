export default function countLettersAndWords(htmlString = null) {
  let  wordCount = 0;
  let letterCount = 0;
  if(htmlString) {
    const textContent = htmlString.replace(/<[^>]*>/g, ' ');

    const words = textContent.split(/\s+|,|\.|!|\?/).filter(function(word) {
      return /^[a-zA-Zа-яА-Я]+$/.test(word);
  });
  
    const joinedText = words.join('');
  
    letterCount = joinedText.length;
    wordCount = words.length;
  
  } 

  return { letterCount, wordCount };

  
}
