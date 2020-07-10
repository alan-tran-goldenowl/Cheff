import { Dimensions, PixelRatio } from 'react-native';

export authHelper from './authHelper';
export storageHelper from './storageHelper';

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
};

const ratio = Math.min(PixelRatio.get(), 3);

const baseSize = (0.85 * height * 3 * 0.67) / (570 * ratio);

export const responsive = ({ f, h, d }) => {
  if (f) return PixelRatio.getPixelSizeForLayoutSize(f) * baseSize * 0.45;
  if (h) return PixelRatio.getPixelSizeForLayoutSize(h) * baseSize * 0.55;
  if (d) return PixelRatio.getPixelSizeForLayoutSize(d) * baseSize * 0.25;
  return null;
};

export const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const actionNameToTypes = actionName => actionName
  .replace(/([A-Z])/g, '_$1')
  .trim()
  .toUpperCase();


export const uuid = (name) => {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (name + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const validateEditProfile = fields => {
  const {
    displayName,
  } = fields

  const errors = {}

  if (!displayName) errors.displayName = 'Please enter your full name'

  return errors
}