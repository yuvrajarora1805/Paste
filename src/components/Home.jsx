import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addPaste, updatePaste } from '../redux/pasteSlice'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast from 'react-hot-toast'

const Home = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  const allPastes = useSelector((state) => state.paste.pastes)
  const pasteID = searchParams.get('pasteID')

  function createPaste() {
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content are required')
      return
    }

    const paste = {
      title: title.trim(),
      content: content.trim(),
      _id: pasteID || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    
    if (pasteID) {
      dispatch(updatePaste(paste))
      toast.success('Paste Updated Successfully')
    } else {
      dispatch(addPaste(paste))
      toast.success('Paste Created Successfully')
    }

    setTitle('')
    setContent('')
    setSearchParams({})
  }

  useEffect(() => {
    if (pasteID) {
      const paste = allPastes.find((p) => p._id === pasteID)
      if (paste) {
        setTitle(paste.title)
        setContent(paste.content)
      }
    }
  }, [pasteID, allPastes])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 transition duration-300"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 transition duration-300"
            value={content}
            placeholder="Enter Your Content Here"
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={createPaste}
        >
          <FontAwesomeIcon icon={pasteID ? 'edit' : 'plus'} className="mr-2" />
          {pasteID ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>
    </motion.div>
  )
}

export default Home;