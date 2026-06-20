export default async function handler(req, res) {


if(req.method !== "POST"){

return res.status(405).json({

error:"Only POST allowed"

});

}



try{


const {question}=req.body;



const response = await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="

+process.env.GEMINI_API_KEY,


{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


contents:[

{

parts:[

{

text:

`

You are BioFetch AI Assistant.

Answer only biotechnology and bioinformatics questions.

Explain:

Proteins,
Genes,
Genomics,
Proteomics,
Microbiology,
Environmental biotechnology,
Biomining,
Acid mine drainage,
Bioenergy.

Question:

${question}

`

}

]

}

]

})


}

);



const data = await response.json();



if(data.error){


return res.status(500).json({

answer:"Gemini Error: "+data.error.message

});


}



res.status(200).json({

answer:data.candidates[0].content.parts[0].text

});


}

catch(error){


res.status(500).json({

answer:"Backend Error: "+error.message

});


}


}
