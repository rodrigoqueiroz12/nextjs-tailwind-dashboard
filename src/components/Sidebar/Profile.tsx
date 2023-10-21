import { LogOut } from 'lucide-react'
import Button from '../Button'

export default function Profile() {
  return (
    <div className="flex items-start gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/rodrigoqueiroz12.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Rodrigo Queiroz
        </span>
        <span
          className="truncate text-sm text-zinc-500 dark:text-zinc-400"
          title="rodrigo.queiroz0629@gmail.com"
        >
          rodrigo.queiroz0629@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
