import Canvas from 'component/canvas/Canvas';
import CatchModal from 'component/catchModal/CatchModal';
import FirstTimer from 'component/common/FirstTimer';
import FooterAnother from 'component/common/FooterAnother';
import Timer from 'component/common/Timer';
import TitleHeader from 'component/title-header/TitleHeader';
import { imgLink } from 'etc/imgLink';
import { DefaultB } from 'etc/ParamsInterface';
import React, { useEffect, useState } from 'react';
import { Hamster } from 'state/StateInterface';
import { catchHamster, fitstCatchHam } from './defaultFunction';

const DefaultBox = ({ setHamPop, hamPop, firstState }: DefaultB) => {
  const [active, setActive] = useState<boolean>(false);
  const [catchHam, setCatchHam] = useState<Hamster>();

  return (
    <main className="container">
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
        <FooterAnother
          text="햄스터 잡기"
          classTitle={`catch ${active && 'active'}`}
          img={`${imgLink}hamsterIcon.png`}
          alt="햄스터 잡기 아이콘"
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
        />
      </section>
      {hamPop && catchHam && (
        <CatchModal hamster={catchHam!} setHamPop={setHamPop} />
      )}
    </main>
  );
};

export default DefaultBox;
