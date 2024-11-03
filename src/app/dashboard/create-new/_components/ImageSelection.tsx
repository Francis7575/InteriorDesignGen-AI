'use client'
import Image from "next/image"
import { ChangeEvent, useState } from "react"

type ImageSelectionProps = {
  selectedImage: (value: File) => void
}

const ImageSelection = ({selectedImage}: ImageSelectionProps) => {
const [file, setFile] = useState<File | null>(null)

  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      selectedImage(selectedFile); 
    }
  }

  return (
    <div >
      <h3>Select Image of your room</h3>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div className={`flex justify-center border-primary  bg-slate-200 cursor-pointer 
              border rounded-xl border-dotted hover:shadow-lg ${file ? 'p-0 bg-white' : 'p-28'}`}>
                {!file ? (
                  <Image src={'/image-upload.png'} width={70} height={70} alt="" />
                ) : (
                  <Image src={URL.createObjectURL(file)} width={300} height={300} alt="" className="object-fill h-[300px] w-[300px]"/>
                )}
          </div>
        </label>
        <input className="hidden"
          type="file"
          accept="image/*"
          id="upload-image"
          onChange={onFileSelected} />
      </div>
    </div>
  )
}

export default ImageSelection