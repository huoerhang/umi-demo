import React, { FC } from 'react';
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = props => {
  console.log(props.hero);
  return (
    <div>
      <h1>Page Hero</h1>
      <h2>This is {props.hero.name}</h2>
    </div>
  );
};

function mapStataeToProps(hero: HeroModelState): HeroModelState {
  return hero;
}

export default connect(mapStataeToProps)(Hero);
