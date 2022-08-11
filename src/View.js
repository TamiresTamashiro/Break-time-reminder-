const View = {
   render({ minutes, seconds }){
   document.body.innerHTML =`
    <p>Próximo Intervalo em:</p>
    <span>${minutes}:${seconds}</span>
    `;
   }
}


export { View}