import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Add a New Customer</h1>
        <form>
            <label>
                Title
                <input name="title" type='text' />
            </label>
        </form>
    </div>
  )
}

export default page