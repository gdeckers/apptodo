import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;
    display: flex;
    
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img {
        width: 100px;
        height: 40px;
    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        color: #FFF;
        text-decoration: none;
        font-weight: bold;
        margin: 0 10px;

        &:hover{
            color: #EE6B26;
        }
    }
    #notification {
        img {
            width: 25px;
            height: 30px;
        }
        span {
            background: #fff;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }
        &:hover {
            opacity: 0.5;
        }
    }
    .pipe::after{
        content: "|";
        color: #fff;
        margin: 0 10px;
    }
`