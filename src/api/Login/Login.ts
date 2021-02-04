import { Post } from '../axios'
export const getQBcodeKey = (): any => {
    return Post('/login/qr/key',{})
}
export const getQBcodeUrl = (key: string): any => {
    return Post(`/login/qr/create?key=${key}&qrimg=base64`,{})
}
export const getQBcodeStatus = (key: string): any => {
    return Post(`/login/qr/check?key=${key}`,{})
}
export const getData = (): any => {
    return Post('/login/status',{})
}