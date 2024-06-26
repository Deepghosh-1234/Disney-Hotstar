import styled from "styled-components";
import { Link } from "react-router-dom";

const Gallery2 = (props)=> {
    return(
        <Container>
            {/* <h4>Avenger's Love</h4> */}
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src = "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/01/Iron-Man-3-ending-makes-no-sense.jpg" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://imgix.bustle.com/uploads/image/2020/6/17/9d67f705-d6cb-4e44-a98d-37c21108cef5-tony-iron-man.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://media.comicbook.com/2016/05/tony-stark-182303.jpg" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/05/spider-man-homecoming-robert-downey-jr.jpg" alt = "" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
 padding: 0 0 26px; 
 `;

 const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

 @media(max-width: 768px){
     grid-template-columns: repeat(2, minmax(0, 1fr));
 }
 `;

 const Wrap = styled.div`
 padding-top: 56.25%;
 border-radius: 10px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 border: 3px solid rgba(249, 249, 249, 0.1);
 img {
   inset: 0px;
   display: block;
   height: 100%;
   object-fit: cover;
   opacity: 1;
   position: absolute;
   transition: opacity 500ms ease-in-out 0s;
   width: 100%;
   z-index: 1;
   top: 0;
 }
 &:hover {
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   transform: scale(1.05);
   border-color: rgba(249, 249, 249, 0.8);
 }
`;

export default Gallery2;
