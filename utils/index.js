import { Dimensions, PixelRatio, Platform } from 'react-native';

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

