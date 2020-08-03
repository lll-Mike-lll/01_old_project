const express = require('express');
const app = express();

const a = !Array.isArray([1,2,3]);
const b = Array.isArray([2,3,4]);
app.get('/',(req,res) => {
	console.log(`a: ${a}`);
	console.log(`b: ${b}`)
	res.send(b);
});

const port_1 = 9000
app.listen(port_1,()=>{
console.log(`listen on ${port_1}`);
});