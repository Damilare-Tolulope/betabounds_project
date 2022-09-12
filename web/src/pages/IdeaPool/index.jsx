import React from 'react'

const IdeaPool = () => {
  return (
    <div className='ideapool'>
        <h2>Post an Idea</h2>

        <form>
          <div>
            <label>What Industry?</label>
            <input type="text" placeholder='Music' />
          </div>
          <div>
            <label>What our valid proposition?</label>
            <input type="text" placeholder='' />
          </div>
          <div>
            <label>What our value proposition?</label>
            <input type="text" placeholder='' />
          </div>
          <div>
            <label>Distriction of idea</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Attach a buniess plan</label>
            <input type="file" placeholder='Business plan' />
          </div>

          <input id="submit_idea" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default IdeaPool