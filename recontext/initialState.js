import dinner from '../assets/fakeDatas/dinner';
import breakfast from '../assets/fakeDatas/breakfast';
import brunch from '../assets/fakeDatas/brunch';
import lunch from '../assets/fakeDatas/lunch';
import recommend from '../assets/fakeDatas/recommend';

export default {
  loading: false,
  listFood: [
    ...recommend,
    ...dinner,
    ...breakfast,
    ...brunch,
    ...lunch,
  ],
};
