import React from 'react'

function Header() {
    return (
        <div>
            <>
                <div className='bg-[#222626] flex justify-between'>
                    <button className='btn' style={{color:'white'}}><i class="fa-solid fa-arrow-left"></i> Back</button>
                    <button className='btn' style={{color:"white", background:"green"}}> Publish </button>
                </div>
            </>
        </div>
    )
}

export default Header