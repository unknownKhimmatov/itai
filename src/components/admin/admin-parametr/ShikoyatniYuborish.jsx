import React from 'react'

export default function ShikoyatniYuborish({ show, setShikoyatshow, dateDavomat }) {


    const handleCancel = () => {
        setShikoyatshow(false)
    }

    const handleSend = () => {
        setShikoyatshow(false)
    }

    return (
        <div className='shikoyatniyuborishА' style={{ top: show !== true ? "-200%" : "0%" }} >
            <div className="item-shikoyat">
                <h1>
                    Shikoyat yuborilsinmi? {dateDavomat}
                </h1>
                <div className="buttons-shikoyat">
                    <button onClick={handleSend}>Yuborilsin</button>
                    <button onClick={handleCancel}>Bekor qilinsin</button>
                </div>
            </div>
        </div>
    )
}
