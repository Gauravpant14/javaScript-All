let body = document.getElementById("app");
let i=1;
var apiData = ''







function fetchAllData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response=> {
    console.log(response); 
    if(!response.ok){
         throw Error("error occoucred")
     }     
     return response.json();
  }).then(data => renderData(data));

}

let card_Items = document.getElementsByClassName('card-items');
console.log(card_Items);
//render fullinfo on clicking button 
function readFullInfo(){
  
  card_Items.forEach((e) => {
  var url = `https://jsonplaceholder.typicode.com/posts/${e.userId}` }
  )
    
  
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then( (data11) => {
   
  apiData+=  `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${data11.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <p><strong>ID : </strong>${data11.userId}</p> 
           ${data11.body}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div> `
    
  })
  document.querySelector('#app').insertAdjacentHTML("afterbegin",apiData);

}



const renderData = (e) => { 
  e.forEach(user => {         
      apiData += `        
      <div class="card-items">
      
        <div class="card h-100" width="25%">
          <div class="card-body">
          <p>${user.id}</p>
            <h5 class="card-title text-left"><strong> TITLE : </strong> ${user.title} </h5>
            
          <strong> USER ID : </strong> ${user.userId}  </br>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="readFullInfo()" >
          Read More
        </button>
        
            
          </div>
        </div>
      </div>
      
    </div>`})
    document.querySelector('#app').insertAdjacentHTML("afterbegin",apiData);
  }

