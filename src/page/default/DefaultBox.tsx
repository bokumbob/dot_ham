import Canvas from 'component/canvas/Canvas';
import CatchModal from 'component/catchModal/CatchModal';
import FirstTimer from 'component/common/FirstTimer';
import Timer from 'component/common/Timer';
import TitleHeader from 'component/title-header/TitleHeader';
import { imgLink } from 'etc/imgLink';
import { DefaultB } from 'etc/ParamsInterface';
import React, { useState } from 'react';
import { Hamster } from 'state/StateInterface';
import { catchHamster, fitstCatchHam } from './defaultFunction';

const DefaultBox = ({ setHamPop, hamPop, firstState }: DefaultB) => {
  const [active, setActive] = useState<boolean>(false);
  const [catchHam, setCatchHam] = useState<Hamster>();
  return (
    <main className="container">
      {/* <p
        onClick={() =>
          catchHamster().then((res: Hamster | any) => setCatchHam(res))
        }
      >
        sadsadsadsa
      </p> */}
      <section className="hamster-main">
        <TitleHeader text={'만남의 장소'} />
        <div className="center">
          <article className="seed">
            {firstState ? (
              <FirstTimer setActive={setActive} />
            ) : (
              <Timer active={active} setActive={setActive} />
            )}
            <Canvas imgUrl="back" seedImg="catchSeed" basket="basket" />
          </article>
        </div>
        <div
          className={`catch ${active && 'active'}`}
          onClick={() => {
            if (active) {
              setHamPop(true);
              setActive(false);
              if (firstState)
                fitstCatchHam().then((res: Hamster) => setCatchHam(res));
              else
                catchHamster().then((res: Hamster | any) => setCatchHam(res));
            }
          }}
        >
          <img src={`${imgLink}hamsterIcon.png`} alt="햄스터 잡기 아이콘" />
          <p>햄스터 잡기</p>
        </div>
      </section>
      {hamPop && catchHam && (
        <CatchModal hamster={catchHam!} setHamPop={setHamPop} />
      )}
    </main>
  );
};

export default DefaultBox;
