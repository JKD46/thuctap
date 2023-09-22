window.addEventListener("load", function(){
    const sliderLeft = document.querySelector(".slider-left");
    const banItem = document.querySelector(".ban-item");
    const banImgs = document.querySelectorAll(".ban-img");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const banImgWidth = banImgs[0].offsetWidth;
    const banLength = banImgs.length;
    let postionX = 0;
    let index = 0;

    nextBtn.addEventListener("click", function(){
        handlenChangeSlide(1);
    });
    prevBtn.addEventListener("click", function(){
        handlenChangeSlide(-1);
    });

    function handlenChangeSlide(direction){
        if(direction == 1){
            if(index >= banLength - 1) {
                index = banLength - 1;
                return;
            }
            postionX = postionX - banImgWidth;
            banItem.style = `transform: translateX(${postionX}px)`;
            index++;
        }
        else if(direction == -1){
            if(index <= 0) {
                index = 0;
                return;
            }
            postionX = postionX + banImgWidth;
            banItem.style = `transform: translateX(${postionX}px)`;
            index--;
        }
    }

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

  function singup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        username : username,
        email : email,
        password :password,
    }
    var js = JSON.stringify(user);
    localStorage.setItem(username, js);
    alert("đăng ký thành công")

}

function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("không được để chống")
    }else if(username == data.username && email == data.email && password == data.password){
        alert("Đăng nhập thành công");
        window.location.href = "index.html";   
    }
   else{
        alert("đăng nhập thất bại");
    }
}

