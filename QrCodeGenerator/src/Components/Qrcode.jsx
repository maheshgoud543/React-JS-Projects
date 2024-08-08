import React, { useState } from 'react'
import Qrcode from 'react-qr-code'
const QrcodeGenrator = () => {
    const [qrcode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerate(e) {
        e.preventDefault
        setQrCode(input)
        setInput("")
    }
    return (
        <div>
            <h1>
                Qrcode
            </h1>
            <div>
                <input type='text' name='qr-code' placeholder='Enter your value' value={input} onChange={(e) => setInput(e.target.value)} />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerate}>Generate</button>
            </div>
            <div>
                <Qrcode
                    id="qr-code-value"
                    value={qrcode}
                    size={400}

                />
            </div>
        </div>
    )
}

export default QrcodeGenrator