function addUser(){
    player1_name= document.getElementById("user1_name").value ;
    player2_name= document.getElementById("user2_name").value ;

localStorage.setItem("player1_name" , player1_name);
localStorage.setItem("player2_name" , player2_name);
window.location = "game_page.html";

}