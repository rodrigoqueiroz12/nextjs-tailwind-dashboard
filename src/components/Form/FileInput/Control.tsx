'use client'

import { useFileInput } from '@/hooks/useFileInput'
import { ChangeEvent, ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return null
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      onChange={handleFilesSelected}
      multiple={multiple}
    />
  )
}
