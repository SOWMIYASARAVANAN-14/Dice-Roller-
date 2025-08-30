function sub(){
    const num = document.getElementById("n1").value;
    const res=document.getElementById("result");
    const im = document.getElementById("image");
    let values=[];
    let images=[];
    for(let i=0;i<num;i++) {
        const a = Math.floor(Math.random()*6)+1;
        values.push(a);
        images.push(`<img src="images/${a}.png">`);
    }
    res.textContent = `Dice: ${values.join(', ')}`;
    im.innerHTML=images.join('');
}