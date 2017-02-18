<script>function test(){
  document.getElementById("printScore").innerHTML = "Paragraph changed.";
}
function drawScore(){
    var score = 0;
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
    return score;
}
</script>
