import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Passwordbox({ password = "Generate Password" }) {
  return (
    <div className="w-[50%] border-2 mt-8 p-2 min-w-[300px]">
      <div className="flex justify-between">
        <p className="p-1">Password</p>

        

        <CopyToClipboard text={password}>
        <p className='bg-blue-300 rounded-md p-1 hover:bg-blue-400 text-white'>Copy</p>
          

        </CopyToClipboard>

      </div>

      <div className="flex justify-center items-center mt-2 mb-4  ">
        <h3 className="text-2xl font-mono break-all ">{password}</h3>
      </div>
    </div>
  );
}

export default Passwordbox;
