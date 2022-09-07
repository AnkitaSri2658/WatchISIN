import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Header from '../header/Header';

function Layout(props) {
  return (
    <div>
      <Header />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
