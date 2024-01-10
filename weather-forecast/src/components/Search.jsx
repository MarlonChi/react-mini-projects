import * as S from "../AppStyles";

const Search = ({ city, setCity, getWeather }) => {
  return (
    <S.SearchContainer>
      <S.SearchCity
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite uma cidade..."
      />
      <S.SearchButton onClick={getWeather}>Buscar</S.SearchButton>
    </S.SearchContainer>
  );
};

export default Search;
