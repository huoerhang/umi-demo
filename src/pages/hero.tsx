import React, { FC, Dispatch } from 'react';
import { Row, Col, Radio, Card } from 'antd';
import { connect, HeroModelState, ConnectProps } from 'umi';
import styles from './hero.less';

const heroTypes = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

interface PageProps extends ConnectProps {
  hero: HeroModelState;
  dispatch: Dispatch<any>;
}

const Hero: FC<PageProps> = props => {
  const { heros, filterKey = 0 } = props.hero;

  const onChange = (e: any) => {
    props.dispatch({
      type: 'hero/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };

  return (
    <div>
      <Card className={styles.radioPanel}>
        <Radio.Group value={filterKey} onChange={onChange}>
          {heroTypes.map((item, key) => (
            <Radio value={key} key={`hero-rodio-${item.key}`}>
              {item.value}
            </Radio>
          ))}
        </Radio.Group>
      </Card>
      <Row>
        {heros
          .filter(item => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map((item, key) => (
            <Col key={item.ename} span={3} className={styles.heroitem}>
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
              />
              <p>{item.cname}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
};

function mapStataeToProps(hero: HeroModelState): HeroModelState {
  return hero;
}

export default connect(mapStataeToProps)(Hero);
