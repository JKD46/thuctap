function attachEvent () {
    var button = document.querySelector('.button-more')
  
    button.addEventListener('click', function() {
      var target = document.querySelector('.row-show-foo')
  
      target.classList.toggle('row-show-hover')
    })
    
      var button = document.querySelector('.more-con-button')
      button.addEventListener('click', function() {
        var target = document.querySelector('.con-con-bot-hover')
    
        target.classList.toggle('con-con-bot-show')
      })
  
  }
  
  attachEvent()