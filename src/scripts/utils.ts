
/**
 * 
 * @param number 
 * 
 *  0~10000=>10000;
 *  10000~1,000,000=>99.99W  保留两位
 *  1,000,000~+∞ ==> 101.1W  保留一位
 */

export const transFormNumber =(number:number)=>{
    let mark = number/10000;
    if(mark<1){
        return number;
    }else if(mark<100){
        return mark.toFixed(2)+'w';
    }else{
        return mark.toFixed(1)+'w';
    }
}