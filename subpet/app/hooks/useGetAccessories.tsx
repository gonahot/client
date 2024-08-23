import {useState,useEffect} from 'react';

function useRandomUrl(arr1:Array<string>,arr2:Array<string>){
    const [randomUrl,setRandomUrl] = useState("");
    const [gif,setGif] = useState("");
    useEffect(()=>{
        if (arr1 && arr1.length > 0) {
            const randomIndex = Math.floor(Math.random() * arr1.length);
            setRandomUrl(arr1[randomIndex]);
            setGif(arr2[randomIndex]);
          }
    },[arr1])
    return {randomUrl,gif}
}

const cap = ['/图/cloth服饰/帽子1.jpg','/图/cloth服饰/帽子2.jpg']
const cap2 = ['/图/单穿动图/animation_副本.gif','/图/单穿动图/animation_副本2.gif']


const cloth = ['/图/cloth服饰/衣服1.jpg','/图/cloth服饰/衣服2.jpg','/图/cloth服饰/衣服4.jpg','/图/cloth服饰/衣服5.jpg']
const cloth2 = ['/图/单穿动图/animation_副本3.gif','/图/单穿动图/animation_副本7.gif','/图/单穿动图/animation_副本8.gif','/图/单穿动图/animation_副本9.gif']

const action = ['/图/action服饰/星星.gif',
'/图/action服饰/锯木头.gif',
'/图/action服饰/跳圈.gif',
'/图/action服饰/偷吃汉堡.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
]
const action2 = ['/图/action服饰/星星.gif',
'/图/action服饰/锯木头.gif',
'/图/action服饰/跳圈.gif',
'/图/action服饰/偷吃汉堡.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
'/图/action服饰/亮剑.gif',
]

export function useClothes (){
    return useRandomUrl(cap,cap2)
}

export function useCaps (){
    return useRandomUrl(cloth,cloth2)
}

export function useAction (){
    return useRandomUrl(action,action2)
}