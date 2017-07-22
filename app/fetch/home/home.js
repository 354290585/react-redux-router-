import { get } from '../get'

export function geDisCounttData(){
    const result = get('/api/home/discount');
    return result;
}

export function getLikeListData(city,page){
    const result = get('/api/home/like/'+encodeURIComponent(city) + '/' + page);
    return result;
}