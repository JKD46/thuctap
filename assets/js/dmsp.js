window.addEventListener("load", function(){

  let list = document.querySelectorAll('.section-center .section-item');
  list.forEach(item =>{
  item.addEventListener('click', function(event){
      if(event.target.classList.contains('add-cart')){
          var itemNew = item.cloneNode(true);
          let checklist = false;

          let listCart = document.querySelectorAll('.cart .section-item');
          listCart.forEach(cart => {
              if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                  alert("Sản phẩm đã tồn tại");
                  checklist = true;
              }
          })
          if(checklist == false){
              document.querySelector('.listCart').appendChild(itemNew);
          }
      }
  })
})
});

window.addEventListener("load", function(){

    let list = document.querySelectorAll('.section-center .section-item');
    list.forEach(item =>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add-cart')){
            var itemNew = item.cloneNode(true);
            let checklist = false;
  
            let listCart = document.querySelectorAll('.cart .section-item');
            listCart.forEach(cart => {
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    alert("Sản phẩm đã tồn tại");
                    checklist = true;
                }
            })
            if(checklist == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }
        }
    })
  })
  });
  
  
  function attachEvent () {
      var button = document.querySelector('.button-more')
    
      button.addEventListener('click', function() {
        var target = document.querySelector('.row-show-foo')
    
        target.classList.toggle('row-show-hover')
      })    
    
    }
    
    attachEvent()