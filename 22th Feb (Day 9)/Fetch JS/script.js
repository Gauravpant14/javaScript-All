let body = document.getElementById("app");
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response=> {
    console.log(response); 
    if(!response.ok){
         throw Error("error occoucred")
     } 
     
     return response.json();
  }).then(e => {

//       let singleVal = e[0];
//     body.innerHTML = `
//       <div class="singleVal">
//       <div class="title">
//           <h3> ${singleVal.title} </h3>
//       </div>
//       <div class="id">
          
//       </div>
//       <div class="body">
//  <h4> ${singleVal.body} </h4>
//       </div>

//   </div>

        

      const apiData = e.map(user => {
          
          return `

          
          <div class="card-items">
          
            <div class="card h-100" width="25%">
              <div class="card-body">
                <h5 class="card-title text-left"><strong> TITLE : </strong> ${user.title} </h5>
                
              <strong> USER ID : </strong> ${user.userId}  </br>
                <p class="card-text text-left "> <strong> BODY : </strong>${user.body}</a>
                
              </div>
            </div>
          </div>
          
        </div>`
      }).join('');
   
      document.querySelector('#app').insertAdjacentHTML("afterbegin",apiData);
  }).catch(error => {
      console.log(error);
  }) ;
}

