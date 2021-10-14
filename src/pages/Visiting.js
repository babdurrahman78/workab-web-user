import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import dropdown from "../assets/icon/dropdown.png";
import search from "../assets/icon/search.png";
import axios from "axios";

const StyledScreen = styled.div`
  display: flex;
  max-width: 1440px;
  max-height: 100vh;
  margin: auto;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  overflow-y: scroll;
  padding: 10px 40px 0 40px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;

const StyledDesc = styled.p`
  font-size: 40px;
  color: #577ba8;
`;

const StyledUser = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;

  &:hover{
      background-color: #577ba8;
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  padding: 10px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  min-height: 60%;
  border-radius: 30px;
  overflow: hidden;
  border-collapse: collapse;

  & td,
  th {
    text-align: left;
    background-color: red;
  }

  & th {
    background-color: #577ba8;
    color: #ffffff;
    font-size: 20px;
    padding: 20px 20px;
  }

  & td {
    background-color: #c7daf8;
    padding: 10px 20px;
    vertical-align: top;
  }
`;

export default function Visiting() {
  const [loading, setLoading] = useState(true)
  const [visitingList, setVisiting] = useState([])
  useEffect(() => {
      axios.get(`/api/user/visiting/history`).then( res => {
        if ( res.data.meta.code === 200 ) {
          setVisiting( res.data.data.visiting )
        }
        setLoading( false )
      })
    }, [])

    var data = '';

    if (loading) {
      data = <h4>Loading...</h4>
    } else {
      let i = 0;
      data = visitingList.map( (index) => {
        i++
        return (
          <tr>
            <td>{ i }</td>
            <td>{ index.shop_name }</td>
            <td>{ index.created_at }</td>
            <td>{ index.shop_address }</td>
          </tr>
        )
      } )
    }

  const handleSearch = () => {};

  return (
    <>
        <StyledSearchContainer>
          <img src={search} alt="search-button" />
          <StyledInput placeholder="Search here" onChange={handleSearch} />
        </StyledSearchContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lokasi</th>
                <th>Date & Time</th>
                <th>Lokasi</th>
              </tr>
            </thead>
            <tbody>
              { data }
            </tbody>
          </StyledTable>
    </>
  );
}
