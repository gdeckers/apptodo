import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import * as S from './styles';
import api from "../../services/api";
import isConnected from "../../utils/isConnected";

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateverify(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(()=>{
    lateverify();
  },[])

  async function Logout(){
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt='logo' />
        </S.LeftSide>
        <S.RightSide>
          <Link to='/'>INÍCIO</Link>
          <span className='pipe'></span>
          <Link to='/task'>NOVAS TAREFAS</Link>
          <span className='pipe'></span>
          { !isConnected ?
            <Link to='/qrcode'>SINCRONIZAR CELULAR</Link>
            : <button type='button' onClick={Logout}>SAIR</button>
          }
          {
          lateCount && 
          <>
            <span className='pipe'></span>
            <button onClick={clickNotification} id='notification'>
              <img src={bell} alt='Notificacao' />
              <span>{lateCount}</span>
            </button>
          </> 
          }
        </S.RightSide>
      </S.Container>
      
    );
  }
  
  export default Header;