    localStorage.setItem("login", false);
      var formDivs = document.querySelectorAll("div.forms")
        var navButtons = document.querySelectorAll("button.nav-link");
        navButtons.forEach(function(btn){
            btn.addEventListener("click", function(){
                var id = this.getAttribute("id");
                for(var i=0; i<navButtons.length;i++){
                    navButtons[i].classList.remove("active");
                    formDivs[i].classList.add("d-none");
                    if(formDivs[i].classList.contains(id)){
                        formDivs[i].classList.remove("d-none");
                    }
                }
                this.classList.add("active");
            })
      })

      var login_details = {
          user: "Artspace", acc_num: "70162835", sort_code: "203926", card_num: "5299874521403354", mem_num: "204729268258"
      }
  
      var template = "";
      var loginForm1 = document.querySelector("#loginForm1");
      loginForm1.addEventListener("submit", function(e){
        e.preventDefault()
        var last_name1 = document.querySelector("#last_name1").value;
        var mem_number = document.querySelector("#mem_number").value;
        if(last_name1 == login_details.user && mem_number == login_details.mem_num){
            localStorage.setItem("login", true);
            location.href = "home.html";
        }
        else{
            alert("Details Are Incorrect");
        }
      })
      var loginForm2 = document.querySelector("#loginForm2");
      loginForm2.addEventListener("submit", function(e){
          e.preventDefault();
          var last_name2 = document.querySelector("#last_name2").value;
          var card_number = document.querySelector("#card_number").value;
        if(last_name2 == login_details.user && card_number == login_details.card_num){
            localStorage.setItem("login", true);
            location.href = "home.html";
        }
        else{
            alert("Details Are Incorrect");
        }
      })
      var loginForm3 = document.querySelector("#loginForm3");
      loginForm3.addEventListener("submit", function(e){
        e.preventDefault();
        var last_name3 = document.querySelector("#last_name3").value;
        var acc_number = document.querySelector("#account_number").value;
        for(var i = 1;i<4;i++){
            var sortcode = document.querySelector(`#sort_code${i}`).value;
            template+=sortcode;
        }
            if(last_name3 == login_details.user && template == login_details.sort_code && acc_number == login_details.acc_num){
                localStorage.setItem("login", true);
                location.href = "home.html";
            }
            else{
                alert("Details Are Incorrect");
            }
      })