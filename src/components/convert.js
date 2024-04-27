import React, { useEffect, useState } from "react";
import "../style/convert.css";
import Cardsaved from './cardsaved'

function ComponentConvert(){
    const [operation,setOperation] = useState({
        for: '',
        to: '',
        num: 0,
        resul: 0
    });
    const [unit,setUnit] = useState(['pulgadas','cm']);
    const [info,setInfo] = useState([]);
    const getId = JSON.parse(localStorage.getItem('id'));
    const options = [
        {label: "Pulgadas(inches)\u{1F816}Centimetros(cm)", value: ["pulgadas", "cm"]},
        {label: "Pies(feet)\u{1F816}Centimetros(cm)", value: ["pies", "cm"]},
        {label: "Yardas(yard)\u{1F816}Metros(m)", value: ["yardas", "m"]},
        {label: "Millas(miles)\u{1F816}Kilometros(Km)", value: ["millas", "km"]},
        {label: "Centimetros(cm)\u{1F816}Pulgadas(inches)", value: ["centimetros", "pulgadas"]},
        {label: "Centimetros(cm)\u{1F816}Pies(feet)", value: ["centimetros", "pies"]},
        {label: "Metros(m)\u{1F816}Yardas(yard)", value: ["metros", "yardas"]},
        {label: "Kilometros(Km)\u{1F816}Millas(miles)", value: ["kilometros", "millas"]}
    ];
    
    function handleSelect(event){
        setUnit(event.target.value.split(','));
    };

    function handlebtn(){
        if(unit[0] == 'pulgadas'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 2.54).toFixed(4)
            });
        }else if(unit[0] == 'pies'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 30.48).toFixed(4)
            });
        }else if(unit[0] == 'yardas'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 0.9144).toFixed(4)
            });
        }else if(unit[0] == 'millas'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 1.60934).toFixed(4)
            });
        }else if(unit[0] == 'centimetros' || operation.to == 'pulgadas'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 0.393701).toFixed(4)
            });
        }else if(unit[0] == 'centimetros' || operation.to == 'pies'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 0.0328084).toFixed(4)
            });
        }else if(unit[0] == 'metros'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 1.09361).toFixed(4)
            });
        }else if(unit[0] == 'kilometros'){
            setOperation({
                ...operation,
                for: unit[0],
                to: unit[1],
                num: operation.num,
                resul: (operation.num * 0.621371).toFixed(4)
            });
        }
    }

    function saveOperation(){
        localStorage.setItem('id',(parseInt(getId))+1)
        localStorage.setItem((parseInt(getId))+1, JSON.stringify(operation))
       // setInfo(JSON.parse(localStorage.getItem(getId)))
    };
    
    
    //Cargar elementos LocalStorage
    function loadInfo(){
        for (let index = 0; index < JSON.parse(localStorage.getItem('id')); index++) {
            info.push(JSON.parse(localStorage.getItem(index+1)));
        }
        return info.map(item => (
                  <Cardsaved info={item} />
                ))
    }


    return (
        <div>
            {getId == undefined && getId == null ? (localStorage.setItem('id',0)) : (console.log('El elemento id ya existe'))}
            <div className="content_convert">
                <header>
                    <h1>convert</h1>
                </header>
            
                <section role="inputs">
                    <div className="contentselect">
                        <select onChange={handleSelect}>
                            {options.map(option => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <i></i>
                    </div>
                    <div onClick={handlebtn} className="btn_convert"></div>
                    <input onChange={e => {
                        setOperation({
                            ...operation,
                            num: e.target.value
                        })
                    }} type="number" className="input_main"></input>
                    <div className="unidad">{unit[0]}</div>
                </section>

                <section role="results">
                    <div onClick={saveOperation} className="btn_fav"></div>
                    <div className="result">{operation.resul}</div>
                    <div className="unid_result">{unit[1]}</div>
                </section>
            </div>
            <h3>saved</h3> 
            <div className='listsaved'>
                {getId != '0' ? (loadInfo()) : (<h3>No hay operaciones guardadas</h3>)}
            </div>
        </div>
    );
};
export default ComponentConvert