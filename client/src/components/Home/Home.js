import React from 'react';
import MainHeader from '../MainHeader/MainHeader';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <MainHeader/>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
