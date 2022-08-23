
let selectArrey=[];
function display(selectplayer){
    // console.log(selectplayer);

    const orderList=document.getElementById('order-list');
    orderList.innerHTML='';

   
    for(let i=0; i <selectplayer.length; i++){
        // console.log(selectArrey[i].selectPlayerName);
        const name= selectArrey[i].selectPlayerName;
        
        const ol=document.createElement('ol');
        ol.innerHTML= `
        <th>${i+1}</th>
        <th>${name}</th>
        `;
      orderList.appendChild(ol);

      
 
    }
    if (selectplayer.length <= 5) {
        return;
        
    } else {
        alert('dont show now player');
        return;
       
    }

}



function selectToadd(element){
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const selectPlayerName=element.parentNode.parentNode.children[0].innerText;
    const selecetobj={
        selectPlayerName:selectPlayerName,
    }

    selectArrey.push(selecetobj);
   
    document.getElementById('total-player').innerText = selectArrey.length;
    display(selectArrey)
}



document.getElementById('calculat-btn').addEventListener('click',function(){
    const totalPlayerElementField=document.getElementById('total-player');
    const totalPlayerElementString=totalPlayerElementField.innerText;
    const prviusTotalPlayerElement=parseFloat(totalPlayerElementString)

    const parPlayerField=document.getElementById('par-player');
    const parPlayerString=parPlayerField.value;
    const prviusParPlayer=parseFloat(parPlayerString);
    parPlayerField.value='';
    const newTootalplayer=prviusTotalPlayerElement*prviusParPlayer;
   

     const parExpansElementField=document.getElementById('par-expans');
     const parExpansElemnetString=parExpansElementField.innerText;
     const prviusParExpanse=parseFloat(parExpansElemnetString)
   

     const currentParTotal=newTootalplayer+prviusParExpanse;
     parExpansElementField.innerText=currentParTotal;

});

document.getElementById('caluculet-total').addEventListener('click', function(){
      const managerMonyField=document.getElementById('manager-mony');
      const managerMonyString=managerMonyField.value;
      const prviusMmanagerMony=parseFloat(managerMonyString);
      managerMonyField.value='';

      const coachMonyField=document.getElementById('coach-mony');
      const coachMonyString=coachMonyField.value;
      const prviusCoachMony=parseFloat(coachMonyString)
      coachMonyField.value='';

      const currentMonyTotal=prviusCoachMony+prviusMmanagerMony;
      coachMonyField.value=currentMonyTotal;

      const totalInbestElementField=document.getElementById('total-inbest');
      const totalInbestElementString=totalInbestElementField.innerText;
      const totalInbestElementTotal=parseFloat(totalInbestElementString)

      const currentMonyTotalElement=totalInbestElementTotal+currentMonyTotal;
      totalInbestElementField.innerText=currentMonyTotalElement;

})