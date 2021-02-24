export default class LocalStorage {
   getObject(name) {
      let json = localStorage.getItem(name);
      return json == undefined ? {} : JSON.parse(json);
   }

   setObject(name, value) {
      localStorage.setItem(name,JSON.stringify(value));
   }

   getArray(name) {
      let json = localStorage.getItem(name);
      return json == undefined ? [] : JSON.parse(json);
   }

   setArray(name, value) {
      localStorage.setItem(name,JSON.stringify(value));
   } 
   
   getItem(name) {
      localStorage.getItem(name);
   }

   setItem(name,value) {
      localStorage.setItem(name,value);
   }
}