let locatCity='深圳'//默认城市
try{
    if(localStorage.city){
        locatCity=localStorage.city
    }
}catch(e){}
export default{
    city:locatCity
}