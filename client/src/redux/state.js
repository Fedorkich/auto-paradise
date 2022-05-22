import axios from 'axios';
import { rerenderTree } from '../render';

export let state = {
    arrayNews: [],
}

const arrayUrlImageNews = [
    "https://www.bhmpics.com/thumbs/audi_r8_spyder-t2.jpg",
    "https://www.bhmpics.com/thumbs/maserati_granturismo-t2.jpg",
    "https://www.bhmpics.com/thumbs/2007_peugeot_308_rc_z-t2.jpg",
    "https://www.bhmpics.com/thumbs/mitsuoka_orochi_nude_top-t2.jpg",
    "https://www.bhmpics.com/thumbs/dodge_challenger_gt_2017_4k-t2.jpg",
    "https://www.bhmpics.com/thumbs/2004_ford_shelby_cobra-t2.jpg",
    "https://www.bhmpics.com/thumbs/audi_rsq_front-t2.jpg",
    "https://www.bhmpics.com/thumbs/toyota_fun_vii-t2.jpg",
    "https://www.bhmpics.com/thumbs/2013_ford_shelby_gt500-t2.jpg",
    "https://www.bhmpics.com/thumbs/audi_tt_left_side-t2.jpg",
    "https://volviafi-edit.prod.bravi.if.eu/globalassets/volvia/small/tre-parkerade-volvobilar.png",
    "https://toyota.inicial.hu/userfiles/8/a/8a92345261587329f8a729a2df03d8e0_thum_370x230.jpg",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://cargts.ru/images/dyn_pic/small/moyka-dvigatelya-avtomobilya.jpg",
    "https://pfcartver.ru/images/directions/usluga1.jpg",
    "https://www.roamnetins.com/wp-content/uploads/2019/08/gas-station-injuries-370x230.jpg",
    "https://www.solidarnost.org/netcat_files/1447/1492/1492621754_bmw_history_flipbook_116_876x535.jpg",
    "https://www.elegantcarrental.com/wp-content/uploads/2020/09/Honda-Accord-2020-370x230.png",
    "https://static.tildacdn.com/tild3537-3666-4339-a161-333863666565/9.png",
    "https://www.techcnews.com/wp-content/uploads/2019/10/2020-Hyundai-Sonata-Driving-370x230.png",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13"
]


export const newsData = async () => {
    const apiUrl = "https://newsdata.io/api/1/news?apikey=pub_760667506a8d9430b8061617926218cb0169&q=auto&language=en";
    
    try {
        const res = await axios.get(apiUrl);
        const totalResult = Math.ceil(res.data.totalResults/10);
        console.log(res.data.results[1].image_url);
        res.data.results.forEach((el)=>{
            

            if(!el.image_url) {
                console.log("First", el.image_url);
               el.image_url = "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13";
               console.log("Second",el.image_url)
            }
        })
        
        state.arrayNews = res.data.results;
        let i = 0;
        for (let i=1; i< totalResult;i++) {
            const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_760667506a8d9430b8061617926218cb0169&q=auto&language=en&page=${i}`)
            response.data.results.forEach((el)=>{
                if(!el.image_url) {
                   el.image_url = "https://avatars.mds.yandex.net/i?id=044d4298905058f0ac3bc1fa1622e23c-4476061-images-thumbs&n=13";
                }
            })
            state.arrayNews = state.arrayNews.concat(response.data.results);
            
        }
        
        state.arrayNews.forEach((el) => {
            if (el.image_url === null || !el.image_url) {
                el.image_url = arrayUrlImageNews[i];
                i++;
            }
        })
      

    } catch (error) {
        console.log("Error",error)

    }
    rerenderTree(state);
}