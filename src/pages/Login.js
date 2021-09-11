import styled from 'styled-components'

const StyledScreen = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    background-color: #5579A4;
`

const StyledContainer = styled.div`
    width: 630px;
    height: 322px;
    background-color: #FFFFFF;
    margin: 80px auto;
    border-radius: 30px;
    padding-top: 70px;
`

const StyledForm = styled.form`
    width: 414px;
    margin: auto;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 79.92px;
    text-align: center;
    border: 4px solid #5579A4;
    border-radius: 10px;
    color: #5579A480;
    font-size: 30px;
    outline: none;
    font-weight: 700;

    &::placeholder {
        color: #5579A480;
    }
`

const StyledInputUsername = styled(StyledInput)`
    margin-bottom: 6.08px;
`

const StyledInputPassword = styled(StyledInput)`
    margin-bottom: 1px;
`

const StyledParagraph = styled.p`
    float: right;
    color: #5579A480;
    margin: 0 0 16px 0;
    cursor: pointer;
`

const StyledButton = styled.button`
    clear: both;
    margin: auto;
    display: block;
    width: 162.93px;
    height: 90px;
    font-size: 30px;
    color: #FFFFFF;
    background-color: #5579A4;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
`

export default function Login() {
    return (
        <div>
            <StyledScreen>
                <StyledContainer>
                    <StyledForm>
                        <StyledInputUsername
                            placeholder="USERNAME"
                        />
                        <StyledInputPassword
                            placeholder="PASSWORD"
                        />
                        <StyledParagraph>
                            Lupa Password
                        </StyledParagraph>
                        <StyledButton>
                            MASUK
                        </StyledButton>
                    </StyledForm>
                </StyledContainer>
            </StyledScreen>
        </div>
    )
}
