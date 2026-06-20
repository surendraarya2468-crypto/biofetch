<!DOCTYPE html>
<html>

<head>

<title>BioFetch AI Assistant</title>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<style>

body{

font-family:Arial, sans-serif;

background:#eef6ff;

margin:0;

}


.header{

background:#063970;

color:white;

padding:25px;

text-align:center;

}


.container{

width:90%;

max-width:900px;

margin:auto;

margin-top:40px;

background:white;

padding:30px;

border-radius:15px;

box-shadow:0 5px 20px rgba(0,0,0,0.15);

}


textarea{

width:100%;

height:120px;

padding:15px;

font-size:16px;

border-radius:10px;

border:1px solid #ccc;

}


button{

margin-top:15px;

padding:14px 30px;

background:#0077cc;

color:white;

border:none;

border-radius:8px;

font-size:16px;

cursor:pointer;

}


button:hover{

background:#005fa3;

}


#answer{

margin-top:25px;

background:#f7f7f7;

padding:20px;

border-radius:10px;

line-height:1.6;

white-space:pre-wrap;

}


.examples{

margin-top:20px;

background:#e8f4ff;

padding:15px;

border-radius:10px;

}


a{

text-decoration:none;

}


</style>


</head>


<body>


<div class="header">


<h1>🧬 BioFetch AI Assistant</h1>


<p>

AI assistant for Bioinformatics, Biotechnology and Molecular Biology

</p>


</div>



<div class="container">


<h2>Ask your research question</h2>


<textarea id="question"

placeholder="Example:
Explain TP53 protein function
or
How does acid mine drainage remediation work?">

</textarea>


<br>


<button onclick="askAI()">

Ask BioFetch AI

</button>



<div id="answer">

AI response will appear here...

</div>



<div class="examples">


<b>Try:</b>

<br><br>

🧬 What is AlphaFold?

<br>

🧬 Explain CRISPR-Cas9

<br>

🧬 Genes involved in beta carotene production

<br>

🌱 Microbes used in acid mine drainage remediation

<br>

🔬 Function of TP53 protein


</div>



<br>


<a href="index.html">

⬅ Back to BioFetch Home

</a>


</div>




<script>


async function askAI(){


let question = document.getElementById("question").value;



if(question.trim()==""){

alert("Please enter a question");

return;

}



document.getElementById("answer").innerHTML =
"🧬 BioFetch AI is thinking...";



try{


let response = await fetch("/api/chat",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


question:question


})


});



let data = await response.json();



document.getElementById("answer").innerHTML =

data.answer;



}

catch(error){


document.getElementById("answer").innerHTML =

"Error connecting to BioFetch AI";


console.log(error);


}


}



</script>


</body>

</html>
