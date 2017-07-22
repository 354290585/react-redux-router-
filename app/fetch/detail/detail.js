import {get} from '../get';

export function getInfo(id) {
    var result = get('/api/detail/info/'+id)
    return result;
}
export function getComment(page,id) {
    var result = get('/api/detail/comment/'+page+'/'+id)
    return result;
}