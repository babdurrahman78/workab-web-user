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
    width: 420px;
    height: 260px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    border-radius: 30px;
    padding-top: 64px;
`

const StyledForm = styled.form`
    width: 414px;
    margin: auto;
    width: 275px;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    display: block;
    width: 275px;
    height: 53px;
    margin: 0 auto 3px;
    text-align: center;
    border: 4px solid #5579A4;
    border-radius: 10px;
    color: #5579A480;
    font-size: 16px;
    outline: none;
    font-weight: 700;

    &::placeholder {
        color: #5579A480;
    }
`

const StyledParagraph = styled.p`
    float: right;
    font-size: 8px;
    font-weight: 700;
    color: #5579A480;
    margin: 0 0 5px 0;
    cursor: pointer;
`

const StyledButton = styled.button`
    clear: both;
    margin: auto;
    display: block;
    width: 108px;
    height: 59px;
    font-size: 16px;
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
                        <StyledInput
                            placeholder="USERNAME"
                        />
                        <StyledInput
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
