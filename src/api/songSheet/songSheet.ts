import { Post } from '../axios'

export const getSongSheetDetail = (id:string): any => {
    return Post(`/playlist/detail?id=${id}`, {})
}
