import '../style/cardsaved.css'

function ComponentCard(props){
    return(
        <div className='contentcardsaved'>
            <div className='tit_save'>{props.info.num}{"\r"}{props.info.for}{"\r"}{"\u{1F816}"}{"\r"}{props.info.resul}{"\r"}{props.info.to}</div>
            <div onClick={() => {alert('Eliminar')}} className='btnclose'></div>
        </div>
    );
};
//{props.info.num}{"\r"}{props.info.for}{"\r"}{"\u{1F816}"}{"\r"}{props.info.resul}{"\r"}{props.info.to}
export default ComponentCard

