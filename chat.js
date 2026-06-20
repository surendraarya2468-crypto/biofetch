export default async function handler(req,res){

const {question}=req.body;

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="+process.env.GEMINI_API_KEY,
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
text:`

You are BioFetch AI Assistant.

Answer only bioinformatics and biotechnology questions.

Topics:

- Proteins
- Genes
- Genomics
- Proteomics
- UniProt
- AlphaFold
- PDB structures
- Molecular biology
- Microbiology
- Environmental biotechnology
- Biomining
- Acid mine drainage
- Bioenergy
- Microbial remediation

Explain scientifically and clearly.

Question:

${question}

`
}
]
}
]

})

});


const data = await response.json();


res.status(200).json({

answer:data.candidates[0].content.parts[0].text

});


}
