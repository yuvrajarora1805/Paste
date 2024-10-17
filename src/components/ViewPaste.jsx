import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'

const ViewPaste = () => {
  const { id } = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.find((p) => p._id === id)

  if (!paste) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Paste not found</h2>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(paste?.content)
    toast.success('Copied to clipboard')
  }

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/pastes/${id}`
    navigator.clipboard.writeText(shareUrl)
    toast.success('Share link copied to clipboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 py-8 h-screen flex flex-col"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col max-h-[60vh]">
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{paste.title}</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created on{' '}
              {format(new Date(paste.createdAt), 'MMMM dd, yyyy HH:mm')}
            </p>
            <div className="space-x-2">
              <button
                onClick={handleCopy}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <FontAwesomeIcon icon="copy" className="mr-2" />
                Copy
              </button>
              <button
                onClick={handleShare}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <FontAwesomeIcon icon="share-alt" className="mr-2" />
                Share
              </button>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-y-auto flex-grow">
            <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 h-full">{paste.content}</pre>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ViewPaste;