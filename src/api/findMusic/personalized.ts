import { Post } from '../axios'

export const getPersonalized = (): any => {
    return Post('/personalized?limit=11', {})
}
