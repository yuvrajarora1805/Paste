import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste } from '../redux/pasteSlice'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'

const Paste = () => {
  const dispatch = useDispatch()
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState('')

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteID) {
    dispatch(removePaste(pasteID))
    toast.success('Paste deleted successfully')
  }
  
  const handleShare = (pasteID) => {
    const shareUrl = `${window.location.origin}/pastes/${pasteID}`
    navigator.clipboard.writeText(shareUrl)
    toast.success('Share link copied to clipboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex justify-center mb-8">
        <input
          className="p-2 rounded-full w-full max-w-xl shadow-md focus:ring-2 focus:ring-blue-300 transition duration-300"
          type="search"
          placeholder="Search pastes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-h-[70vh] overflow-hidden overflow-y-auto p-5 max-w-[100vw]">
        {filterData.map((paste) => (
          <motion.div
            key={paste?._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            layout
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{paste.title}</h2>
              <p className="text-gray-600 mb-4 truncate">{paste.content}</p>
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <Link
                  to={`/?pasteID=${paste?._id}`}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FontAwesomeIcon icon="edit" className="mr-1" /> Edit
                </Link>
                <Link
                  to={`/pastes/${paste?._id}`}
                  className="text-green-500 hover:text-green-700 transition duration-300"
                >
                  <FontAwesomeIcon icon="eye" className="mr-1" /> View
                </Link>
                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FontAwesomeIcon icon="trash-alt" className="mr-1" /> Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success('Copied to clipboard')
                  }}
                  className="text-purple-500 hover:text-purple-700 transition duration-300"
                >
                  <FontAwesomeIcon icon="copy" className="mr-1" /> Copy
                </button>
                <button className="text-yellow-500 hover:text-yellow-700 transition duration-300" onClick={() => handleShare(paste?._id)}>
                  <FontAwesomeIcon icon="share-alt" className="mr-1" /> Share
                </button>
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-2 text-sm text-gray-500">
              Created on{' '}
              {format(new Date(paste.createdAt), 'MMMM dd, yyyy HH:mm')}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Paste;