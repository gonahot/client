
import { readFileSync } from 'fs'
import path from "path"

export function useGetJson(url: string) {
    const data = readFileSync(path.join(process.cwd(), 'app', `/data/topic.json`), 'utf-8')
    console.log(data)
    return data
}

