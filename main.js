function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QQhSirecO/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if(error){
     console.error(error)
    }
    else{
        console.log(results)
        randomr=Math.floor(Math.random()*255)+1
        randomg=Math.floor(Math.random()*255)+1
        randomb=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="i can hear:"+results[0].label
        document.getElementById("result_confidence").innerHTML="accuracy:"+(results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color="rgb("+randomr+","+randomg+","+randomb+")"
      document.getElementById("result_confidence").style.color="rgb("+randomr+","+randomg+","+randomb+")"
      img1=document.getElementById("tiger")
      img2=document.getElementById("dog")
      img3=document.getElementById("cow")
      img4=document.getElementById("cat")
      if(results[0].label=="Roar"){
        img1.src="https://i.gifer.com/origin/4e/4e2911caefe456a1068e16d82c247b86_w200.gif"
        img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp3vyl5ZzfdTeO40ex-2vH24WPGzEAJr0XIHeix8&s"
        img3.src="https://www.shutterstock.com/image-vector/illustration-cute-cow-260nw-347317901.jpg"
        img4.src="https://img.freepik.com/premium-vector/cartoon-funny-cat-isolated_29190-4874.jpg?w=2000"
      }
      else if(results[0].label=="Barking"){
        img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-nX6NXYjPNeAiXz5FeZpLm5Td8bOXLomHFbZQp4G&s"
        img2.src="https://media.tenor.com/twIzlIPSrZcAAAAC/dog.gif"
        img3.src="https://www.shutterstock.com/image-vector/illustration-cute-cow-260nw-347317901.jpg"
        img4.src="https://img.freepik.com/premium-vector/cartoon-funny-cat-isolated_29190-4874.jpg?w=2000"
      } else if(results[0].label=="Moo"){
        img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-nX6NXYjPNeAiXz5FeZpLm5Td8bOXLomHFbZQp4G&s"
        img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp3vyl5ZzfdTeO40ex-2vH24WPGzEAJr0XIHeix8&s"
        img3.src="https://i.pinimg.com/originals/32/14/15/3214157614e454626c5c6e7d58c0e68b.gif"
        img4.src="https://img.freepik.com/premium-vector/cartoon-funny-cat-isolated_29190-4874.jpg?w=2000"
      } else{
        img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-nX6NXYjPNeAiXz5FeZpLm5Td8bOXLomHFbZQp4G&s"
        img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp3vyl5ZzfdTeO40ex-2vH24WPGzEAJr0XIHeix8&s"
        img3.src="https://www.shutterstock.com/image-vector/illustration-cute-cow-260nw-347317901.jpg"
        img4.src="https://www.gifcen.com/wp-content/uploads/2022/04/cat-gif-3.gif"
      }
        }
}