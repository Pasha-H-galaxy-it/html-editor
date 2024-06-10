// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './App.css';
import pretty from 'pretty';

import React, { useState, useEffect, useRef } from 'react';

import Footer from './components/footer/footer';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import countLettersAndWords from './helpers/countLettersAndWords';

import { debounce } from 'lodash';

import Logo from './components/icon/icon';

import TranslateComponent from './components/translate/Translate';

function App() {
  const [editorInstance, setEditorInstance] = useState(null)

  const editorRef = useRef()
  const textareaRef = useRef()
  const counterRef = useRef()
  const letterRef = useRef()

  const handleEditorChange = (event, editor, markup = null) => {
    const data = markup || editor.getData();
    const { letterCount, wordCount } = countLettersAndWords(data);
    counterRef.current.innerHTML = `${wordCount} words`
    letterRef.current.innerHTML = `${letterCount} chars`
    textareaRef.current.value = pretty(data)
  };

  const handleTextareaChange = (event, markup = null) => {
    const data = markup || event.target.value
    const { letterCount, wordCount } = countLettersAndWords(data);
    letterRef.current.innerHTML = `${letterCount} chars`
    counterRef.current.innerHTML = `${wordCount} words`
    console.log(document.documentElement.style.getPropertyValue('--total-height'))
    editorInstance.setData(data)
  };

  useEffect(() => {
    const editor = document.querySelector('.editor_wrapper > .ck')
    const editor__toolbar = editor.querySelector('.ck .ck-toolbar__items')
    const root = document.documentElement
    if(editor) {
      console.log('editor')
      const totalHeight = editor.getClientRects()[0].height - editor__toolbar.getClientRects()[0].height
      root.style.setProperty('--editor-height', totalHeight + 'px')
      root.style.setProperty('--total-height', window.getComputedStyle(editor).height)
    }
  }, [editorInstance])

  useEffect(() => {
    const { letterCount, wordCount } = countLettersAndWords();
    counterRef.current.innerHTML = `${wordCount} words`
    letterRef.current.innerHTML = `${letterCount} chars`
  }, [])

  const handleEditorChangeDebounce = debounce(handleEditorChange, 1000)
  const handleTextareaChangeDebounce = debounce(handleTextareaChange, 1000)


  return (
    <div className='layout'>
      <header className='header'>
        <Logo />
      </header>
      <div className='wrapper'>
        

        <div className='editor_wrapper' style={{ width: '50%', minHeight: '300px' }}>
          <CKEditor
            editor={ClassicEditor}
            data={''}
            onChange={handleEditorChangeDebounce}
            onReady={(editor) => {
              setEditorInstance(editor)
            }}
            ref={editorRef}
          />
          <div className='word-counter' ref={counterRef || '0 words'}>

          </div>

        </div>

        <div className='textarea_wrapper'>
          <textarea
            onChange={handleTextareaChangeDebounce}
            style={{ width: '100%' }}
            ref={textareaRef}
          >
          </textarea>
          <div className='char-counter' ref={letterRef || '0 chars'}></div>
        </div>

      </div>
      <TranslateComponent />
      <Footer/>
    </div>
  );
}



export default App;