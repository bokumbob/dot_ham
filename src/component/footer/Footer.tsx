import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './footer.css';

const Footer = () => {
  const [help, setHelp] = useState<boolean>(false);
  const [path, setPath] = useState<string>('');

  return (
    <div className="footer">
      {help && (
        <>
          <HelpDiv>
            <HelpDivInner>
              <p className="setting-help">
                환경 설정 버튼을 통해 <br /> 개인 정보를 수정할 수 있어요
              </p>
              {path === '/main' && (
                <HelpDivMain>
                  <p>여긴 만남의 장소에요!</p>
                  <p>
                    좌우 버튼을 통해 만남의 장소와 해씨원정대를 오갈 수 있어요
                  </p>
                  <p>
                    시간이 지나 타이머가 0이 된다면 햄스터 잡기 버튼을 통해
                    햄스터를 잡을 수 있어요
                  </p>
                  <p>
                    컬렉션 버튼을 통해 그동안 잡은 햄스터 목록을 확인할 수도
                    있어요
                  </p>
                </HelpDivMain>
              )}
              {path === '/seedGame' && (
                <HelpDivSeed>
                  <p>여긴 해씨원정대에요!</p>
                  <p>
                    좌우 버튼을 통해 만남의 장소와 해씨원정대를 오갈 수 있어요
                  </p>
                  <p>
                    시작하기 버튼 클릭 시 60초 타이머가 흐르고 그 안에 터치
                    버튼을 많이 눌러서 씨앗을 많이 까면 되는 게임이에요
                  </p>
                  <p>
                    기록을 저장해서 다른 사람들과 경쟁할 수도 있으니 최선을
                    다해봅시다!
                  </p>
                </HelpDivSeed>
              )}
              {path === '/setting' && (
                <HelpDivSetting>
                  <p>여긴 환경 설정 페이지에요!</p>
                  <p>
                    문의하기 버튼 클릭 시 제작자의 트위터로 넘어가요. 디엠과
                    멘션으로 문의해주세요!
                  </p>
                </HelpDivSetting>
              )}
              {path === '/collection' && (
                <HelpDivCollection>
                  <p>여긴 컬렉션 페이지에요!</p>
                  <p>
                    내가 잡은 햄스터의 목록들을 볼 수 있고, 햄스터를 클릭하면
                    자세하게 볼 수 있어요!
                  </p>
                </HelpDivCollection>
              )}
            </HelpDivInner>
            <p
              className="close-btn"
              onClick={() => {
                setHelp(false);
              }}
            >
              닫기
            </p>
          </HelpDiv>
        </>
      )}
      <div
        className="question"
        onClick={() => {
          setHelp(true);
          setPath(location.pathname);
        }}
      >
        ?
      </div>
      <Link to="/collection">
        <div className="collection">컬렉션</div>
      </Link>
    </div>
  );
};

const HelpDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
  padding: 0 25px;
  box-sizing: border-box;
  p {
    color: red;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    bottom: 25px;
  }
`;

const HelpDivInner = styled.div`
  width: 100%;
  position: relative;
  p {
    color: #fff;
    position: unset;
    font-size: 16px;
  }
  .setting-help {
    margin-top: 30px;
  }
  p:not(:first-child) {
    margin-top: 70px;
  }
  div {
    margin-top: 30px;
    text-align: center;
  }
`;
const HelpDivMain = styled.div`
  p:last-child {
    margin-top: 330px;
  }
`;

const HelpDivSeed = styled.div`
  p:nth-child(3) {
    margin-top: 215px;
  }
  p:last-child {
    margin-top: 200px;
  }
`;

const HelpDivSetting = styled.div`
  p:last-child {
    margin-top: 450px;
  }
`;

const HelpDivCollection = styled.div`
  p:last-child {
    margin-top: 430px;
  }
`;

export default Footer;
