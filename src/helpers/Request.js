class Request {

    constructor(){
      this.baseUrl = "https://bookie-bashing-back-end.herokuapp.com" // added
    }
  
    get(url) {
      return fetch(this.baseUrl + url)	//modified
      .then((res) => res.json());
    }

    delete(url) {
      return fetch(this.baseUrl + url, {	//modified
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload){
      return fetch(this.baseUrl + url, {	//modified
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
        
      })
    }

    patch(url, payload){
      return fetch(this.baseUrl + url, {	//modified
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

}

export default Request;