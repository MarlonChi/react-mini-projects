import styled from 'styled-components'

export const WeatherContainer = styled.div`
    background: linear-gradient(to bottom, #89cff0, #005c99);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const SearchCity = styled.input`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    outline: none;
    width: 60%;
    margin-right: 10px;

    &:focus {
        outline: 1px solid #007bff
    }
`

export const SearchButton = styled.button`
    padding: 10px 15px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
    background: #0056b3;

    }
`

export const ActualWeatherContainer = styled.div`
    text-align: center;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 5px;
    }
`
export const ForecastContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    h4{
        text-align: center;
        margin-bottom: 10px;
        color: #333;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            margin-bottom: 5px;

            img {
                margin-right: 10px;
            }
        }
    }
`