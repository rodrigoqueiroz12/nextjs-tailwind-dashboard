'use client'

import { useFileInput } from '@/hooks/useFileInput'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import FileItem from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="progress"
          />
        )
      })}
    </div>
  )
}
