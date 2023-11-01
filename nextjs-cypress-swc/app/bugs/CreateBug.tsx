'use client'

import createBugAction from './createBugAction';

const CreateBug = () => {
  return (
    <form action={createBugAction}>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Bug!
      </button>
    </form>
  )
}

export default CreateBug